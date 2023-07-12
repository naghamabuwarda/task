import sequelize from "../database/connection";
import { DataTypes } from 'sequelize';

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, Infinity] // Minimum length of 3 characters
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, Infinity] // Minimum length of 3 characters
        }
    },
    imgUrl: {
        type: DataTypes.STRING,
        // validate: {
        //     type: DataTypes.STRING,
        //     validate: {
        //         isImageFile: {
        //             msg: 'Invalid file extension. Only PNG, JPEG, and JPG files are allowed.',
        //             isURL: true,
        //             is: /\.(png|jpe?g)$/i,
        //         }
        //     }
        // }
    }
})

export default User;