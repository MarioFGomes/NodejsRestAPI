import { Model, DataTypes } from 'sequelize';

export default class User extends Model {
  static init(sequelize) {
    super.init(

      {
        nome: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: '',
          validate: {
            len: {
              args: [4, 255],
              msg: 'nome must by 6 and 50 characters',
            },
          },
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: '',
          unique: {
            msg: 'Este email já está sendo usado',
          },
          validate: {
            isEmail: {
              msg: 'Email is not valid',
            },
          },

        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: {
              args: [6, 200],
              msg: 'Password must by 6 and 50 characters',
            },
          },
        },

      },
      {
        sequelize,
        modelName: 'User',
      },
    );
    return this;
  }
}
