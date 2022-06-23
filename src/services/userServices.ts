import connection from '../models/connection';
import UsersModel from '../models/usersModel';
import User from '../interfaces/User';

export const createUser = async (newUser: User) => {
  const { username, classe, level, password } = newUser;
  const userModel = new UsersModel(connection);
  await userModel.createUser(username, classe, level, password);
};

export const abc = 'abc';