import ProductsModel from '../models/productsModel';
import connection from '../models/connection';
import Product from '../interfaces/Product';

export const getAll = async () => {
  const productModel = new ProductsModel(connection);
  const allProducts = await productModel.getAll();
  return allProducts;
};

export const createProduct = async (newProduct: Product) => {
  const { name, amount } = newProduct;
  const productModel = new ProductsModel(connection);
  const productDone = await productModel.createProduct(name, amount);
  return productDone;
};