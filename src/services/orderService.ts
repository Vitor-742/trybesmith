import connection from '../models/connection';
import OrderModel from '../models/orderModel';
import ProductsModel from '../models/productsModel';
import Order from '../interfaces/Order';

const getAll = async () => {
  const orderModel = new OrderModel(connection);
  const allOrders = await orderModel.getAll();
  const productsModel = new ProductsModel(connection);
  const allProducts = await productsModel.getAll();

  const finalOrders = allOrders.map((order: Order) => {
    const listProductsIds = allProducts.map((product) => {
      if (order.id === product.orderId) {
        return product.id;
      }
      return null;
    });
    const productsIds = listProductsIds.filter((p) => p);
    const { id, userId } = order;
    return { id, userId, productsIds };
  });
  return finalOrders;
};

export default getAll;