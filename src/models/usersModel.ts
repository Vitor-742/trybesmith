import { Pool } from 'mysql2/promise';

const enum QUERY {
  CREATE = 'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
}

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createUser(
    username: string,
    classe: string,
    level: number,
    password: string,
  ): Promise<void> {
    await this.connection.execute(QUERY.CREATE, [username, classe, level, password]);
  }
}