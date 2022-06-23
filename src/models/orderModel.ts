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

  public async getAll(): Promise<Order[]> {
    const [allOrders] = await this.connection.execute(QUERY.GETALL);
    return allOrders as Order[];
  }
}