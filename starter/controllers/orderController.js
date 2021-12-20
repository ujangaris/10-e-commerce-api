const createOrder = async (req, res) => {
  res.send('create order');
};
const getAllOrders = async (req, res) => {
  res.send('get All orders');
};
const getSingleOrder = async (req, res) => {
  res.send('get Single order');
};
const getCurrentUserOrders = async (req, res) => {
  res.send('get Current Users order');
};
const updateOrder = async (req, res) => {
  res.send('update order');
};

module.exports = {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
};
