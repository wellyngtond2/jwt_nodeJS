import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';

const Models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    Models.map(m => m.init(this.connection));
  }
}

export default new Database();
