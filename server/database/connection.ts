import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

// let url = process.env.DB_DEVELOPMENT;
const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/firsttaskdb', {
    logging: false,
    dialect: 'postgres',
    dialectOptions: {
        ssl: false,
    },
})
const checkconnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
// checkconnection();
export default sequelize;