const CustomError = require('../errors');
const { isTokenValid } = require('../utils');

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token;

  if (!token) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid');
  }
  try {
    const { name, userId, role } = isTokenValid({ token });
    // console.log(payload);
    req.user = { name, userId, role };
  } catch (error) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid');
  }
  next();
};

const authorizePermissions = (req, res, next) => {
  // console.log('admin route');
  if (req.user.role !== 'admin') {
    throw new CustomError.UnauthorizedError(
      'Unauthorized to access this route'
    );
  }
  next();
};

module.exports = {
  authenticateUser,
  authorizePermissions,
};
