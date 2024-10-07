import express from "express";
import { crearSolicitud, buscarSolicitudes, buscarSolicitudId, actualizarSolicitud, eliminarSolicitud } from "../controladores/controladorsolicitudes.js";

const routerSolicitudes = express.Router();

// Ruta de bienvenida
routerSolicitudes.get('/', (req, res) => {
    res.send('Bienvenido al Sitio de Solicitudes de Adopción de Patitas Felices');
});

// Crear una solicitud de adopción
routerSolicitudes.post('/crear', (req, res) => {
    crearSolicitud(req, res);
});

// Buscar todas las solicitudes de adopción
routerSolicitudes.get('/buscar', (req, res) => {
    buscarSolicitudes(req, res);
});

// Buscar una solicitud de adopción por ID
routerSolicitudes.get('/buscarId/:id', (req, res) => {
    buscarSolicitudId(req, res);
});

// Actualizar una solicitud de adopción por ID
routerSolicitudes.put('/actualizar/:id', (req, res) => {
    actualizarSolicitud(req, res);
});

// Eliminar una solicitud de adopción por ID
routerSolicitudes.delete('/eliminar/:id', (req, res) => {
    eliminarSolicitud(req, res);
});

export { routerSolicitudes };
