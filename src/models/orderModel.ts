import { Pool } from 'mysql2/promise';
import Order from '../interfaces/Order';

const enum QUERY {
  GETALL = 'SELECT * FROM Trybesmith.Orders',
  GETPRODUCTIDS = 'SELECT id FROM Trybesmith.Products WHERE orderId = ?',
}

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<any> {
    const [allOrders] = await this.connection.execute(QUERY.GETALL);
    // const test = allOrders.map((order) =>)
    // const [productIds] = await this.connection.execute(QUERY.GETPRODUCTIDS, [allOrders]);
    return allOrders;
  }
}