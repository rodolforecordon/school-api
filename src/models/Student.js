import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) {
    super.init({
      first_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'First name must be 3-255 long.',
          },
        },
      },
      last_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Last name must be 3-255 long.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email already registered.',
        },
        validate: {
          isEmail: {
            msg: 'Invalid email.',
          },
        },
      },
      age: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Age must be an integer.',
          },
        },
      },
      weight: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Weight must be a number.',
          },
        },
      },
      height: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Weight must be a number.',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Picture, { foreignKey: 'student_id' });
  }
}
