import { Model, DataTypes } from 'sequelize';
import appConfig from '../config/appConfig';

export default class Foto extends Model {
  static init(sequelize) {
    super.init(

      {
        originalname: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'field cannot be empty',
            },
          },
        },
        filename: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'field cannot be empty',
            },
          },
        },

        url: {
          type: DataTypes.VIRTUAL,
          get() {
            return `${appConfig.url}/images/${this.getDataValue('filename')}`;
          },
        },

      },
      {
        sequelize,
        modelName: 'Foto',
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
