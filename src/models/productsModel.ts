import { Pool } from 'mysql2/promise';
import Product from '../interfaces/Product';
import InsertObj from '../interfaces/InsertObj';
// interface pro product

const enum QUERY {
  GETALL = 'SELECT * FROM Trybesmith.Products',
  CREATE = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
}

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const [products] = await this.connection.execute(QUERY.GETALL);
    return products as Product[];
  }

  public async createProduct(name: string, amount: string): Promise<InsertObj> {
    const [productDone] = await this.connection.execute(QUERY.CREATE, [name, amount]);
    // console.log(productDone.insertId);
    return productDone as InsertObj;
  }
}