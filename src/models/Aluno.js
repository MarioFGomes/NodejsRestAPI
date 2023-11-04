import { Model, DataTypes } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(

      {
        nome: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        sobrenome: {
          type: DataTypes.STRING,
          allowNull: false,
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
