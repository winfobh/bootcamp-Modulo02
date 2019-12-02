import Sequelize, { Model } from 'sequelize';
<<<<<<< HEAD
import bcrypt from 'bcryptjs';
=======
import bcryptjs from 'bcryptjs';
>>>>>>> f85fba0502a8c61dc5f2c2809476be933a84b885

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

<<<<<<< HEAD
    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
=======
    this.addHook('beforeSave', async (user) =>{
      if(user.password){
        user.password_hash = await bcryptjs.hash(user.password, 8);
>>>>>>> f85fba0502a8c61dc5f2c2809476be933a84b885
      }
    });

    return this;
  }

<<<<<<< HEAD
  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
=======
  checkPassword(password){
    return bcryptjs.compare(password, this.password_hash);
>>>>>>> f85fba0502a8c61dc5f2c2809476be933a84b885
  }
}
export default User;
