import Sequelize from "sequelize";
import { db } from "../database/conexion.js";
import { mascotas } from "./mascotamodelo.js";

const solicitudesAdopcion = db.define("SolicitudesAdopcion", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombre_solicitante: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contacto_solicitante: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mascota_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: mascotas,  
            key: 'id'
        }
    }
});

export { solicitudesAdopcion };