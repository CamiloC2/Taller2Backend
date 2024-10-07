import express from "express";
import { routerMascotas } from "./rutas/mascotasrouter.js";
import { routerSolicitudes } from "./rutas/solicitudesrouter.js";
import {db} from "./database/conexion.js";

//Instancia Express

const app = express();

//Cors
app.use(express.json());


//Verificar Conexion Base de Datos
db.authenticate().then(()=>{
    console.log(`Conexion correcta`);
}).catch(err=>{
    console.log(`Conexion incorrecta`);
})

//Definir Rutas
app.get('/', (req, res) => {
    res.send('HOLA USUARIO DE PATITAS FELICES');
});

app.use("/mascotas",routerMascotas);
app.use("/solicitudes",routerSolicitudes);

//Puerto de Servidor
const PORT=4000;

db.sync({alter: true}).then(()=>{
//Abrir servicio e iniciar el servidor
    app.listen(PORT,()=>{
        console.log(`Servidor Inicializado en el puerto ${PORT}`);
    })
}).catch(err=>{
    console.log(`Error al sincronizar base de datos`);
});