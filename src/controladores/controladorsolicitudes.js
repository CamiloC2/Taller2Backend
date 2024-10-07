import { solicitudesAdopcion } from "../modelos/solicitudesmodelo.js";  

// Crear una solicitud de adopción
const crearSolicitud = (req, res) => {
    if (!req.body.nombre_solicitante || !req.body.contacto_solicitante || !req.body.mascota_id) {
        res.status(400).send({
            mensaje: "Todos los campos son obligatorios."
        });
        return;
    }

    const dataset = {
        nombre_solicitante: req.body.nombre_solicitante,
        contacto_solicitante: req.body.contacto_solicitante,
        mascota_id: req.body.mascota_id
    };

    solicitudesAdopcion.create(dataset).then((resultado) => {
        res.status(200).json({
            mensaje: "Solicitud de Adopción Creada con Éxito"
        });
    }).catch((err) => {
        res.status(500).json({
            mensaje: `Solicitud de Adopción No creada ::: ${err}`
        });
    });
};

// Buscar todas las solicitudes
const buscarSolicitudes = (req, res) => {
    solicitudesAdopcion.findAll().then((resultado) => {
        res.status(200).json(resultado);
    }).catch((err) => {
        res.status(500).json({
            mensaje: `No se encontraron solicitudes ::: ${err}`
        });
    });
};

// Buscar solicitud por ID
const buscarSolicitudId = (req, res) => {
    const id = req.params.id;
    if (id == null) {
        res.status(400).json({
            mensaje: "El id no puede estar vacío"
        });
        return;
    } else {
        solicitudesAdopcion.findByPk(id).then((resultado) => {
            res.status(200).json(resultado);
        }).catch((err) => {
            res.status(500).json({
                mensaje: `No se encontró la solicitud ::: ${err}`
            });
        });
    }
};

// Actualizar solicitud por ID
const actualizarSolicitud = (req, res) => {
    const id = req.params.id;
    if (!req.body.nombre_solicitante && !req.body.contacto_solicitante && !req.body.mascota_id) {
        res.status(400).json({
            mensaje: "No se encontraron Datos para Actualizar"
        });
        return;
    } else {
        const nombre_solicitante = req.body.nombre_solicitante;
        const contacto_solicitante = req.body.contacto_solicitante;
        const mascota_id = req.body.mascota_id;

        solicitudesAdopcion.update({ nombre_solicitante, contacto_solicitante, mascota_id }, { where: { id } })
            .then((resultado) => {
                res.status(200).json({
                    tipo: 'success',
                    mensaje: "Solicitud Actualizada"
                });
            })
            .catch((err) => {
                res.status(500).json({
                    tipo: 'error',
                    mensaje: `Error al actualizar la solicitud ::: ${err}`
                });
            });
    }
};

// Eliminar solicitud por ID
const eliminarSolicitud = (req, res) => {
    const id = req.params.id;
    if (id == null) {
        res.status(203).json({
            mensaje: "Debe ingresar un ID!"
        });
        return;
    }

    solicitudesAdopcion.destroy({ where: { id: id } })
        .then((result) => {
            res.status(200).json({
                tipo: 'success',
                mensaje: `Solicitud con id ${id} Eliminada Correctamente`
            });
        })
        .catch((err) => {
            res.status(500).json({
                tipo: 'error',
                mensaje: `Error al eliminar la solicitud ::: ${err}`
            });
        });
};

export { crearSolicitud, buscarSolicitudes, buscarSolicitudId, actualizarSolicitud, eliminarSolicitud };
