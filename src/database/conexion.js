import Sequelize  from "sequelize";

const db = new Sequelize("adoptmascotas","adminmascotas","220034171",{
    dialect: "mysql",
    host: "localhost"
});

export {db}
