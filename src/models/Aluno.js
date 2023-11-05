import { Model, DataTypes } from 'sequelize';

export default class Aluno extends Model {
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
        sobrenome: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: '',
          validate: {
            len: {
              args: [4, 255],
              msg: 'Sobrenome must by 6 and 50 characters',
            },
          },
        },
        Datanascimento: {
          type: DataTypes.DATE,
          allowNull: false,
        },

      },
      {
        sequelize,
        modelName: 'Aluno',
      },
    );
    return this;
  }
}
