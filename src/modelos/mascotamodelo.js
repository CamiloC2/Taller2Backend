import Sequelize from "sequelize";
import { db } from "../database/conexion.js";

const mascotas = db.define("mascotas", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: true
    },
    edad: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    tamaño: {
        type: Sequelize.STRING,  
        allowNull: true
    },
    info: {
        type: Sequelize.TEXT,  
        allowNull: true
    },
    estado_adopcion: {  
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false  // false = no adoptado, true = adoptado
    }
});

export { mascotas };
