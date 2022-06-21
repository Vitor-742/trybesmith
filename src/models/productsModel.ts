import { Pool } from 'mysql2/promise';
import Product from '../interfaces/Product';
// interface pro product

const enum QUERY {
  GETALL = 'SELECT * FROM Trybesmith.Products',
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
}