import Sequelize, { Model } from 'sequelize';

class Company extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        address: Sequelize.STRING,
        email: Sequelize.STRING,
        tell: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}
export default Company;
