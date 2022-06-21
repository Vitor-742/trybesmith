import ProductsModel from '../models/productsModel';
import connection from '../models/connection';

const getAll = async () => {
  const productModel = new ProductsModel(connection);
  const allProducts = await productModel.getAll();
  return allProducts;
};

export default getAll;

// criar productModel e fazer connection