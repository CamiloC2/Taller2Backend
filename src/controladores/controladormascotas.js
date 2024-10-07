import { mascotas } from "../modelos/mascotamodelo.js";

// Crear una mascota 
const crear = (req, res) => {
    // Validar 
    if (!req.body.nombre) {
        res.status(400).send({
            mensaje: "El nombre no puede estar vacío."
        });
        return;
    }

    const dataset = {
        nombre: req.body.nombre,
        edad: req.body.edad,
        tamaño: req.body.tamaño,
        info: req.body.info
    };

    // Usar Sequelize para crear el recurso en la base de datos
    mascotas.create(dataset).then((resultado) => {
        res.status(200).json({
            mensaje: "Registro de Mascota Creado con Éxito"
        });
    }).catch((err) => {
        res.status(500).json({
            mensaje: `Registro de Mascota No creado ::: ${err}`
        });
    });
};

// Buscar Mascotas
const buscar = (req, res) => {
    mascotas.findAll().then((resultado) => {
        res.status(200).json(resultado);
    }).catch((err) => {
        res.status(500).json({
            mensaje: `No se encontraron registros ::: ${err}`
        });
    });
};

// Buscar por ID
const buscarId = (req, res) => {
    const id = req.params.id;
    if (id == null) {
        res.status(400).json({
            mensaje: "El id no puede estar vacío"
        });
        return;
    } else {
        mascotas.findByPk(id).then((resultado) => {
            res.status(200).json(resultado);
        }).catch((err) => {
            res.status(500).json({
                mensaje: `No se encontraron registros ::: ${err}`
            });
        });
    }
};

// Actualizar Mascota
const actualizar = (req, res) => {
    const id = req.params.id;
    if (!req.body.nombre && !req.body.edad && !req.body.tamaño && !req.body.info) {
        res.status(400).json({
            mensaje: "No se encontraron Datos para Actualizar"
        });
        return;
    } else {
        const nombre = req.body.nombre;
        const edad = req.body.edad;
        const tamaño = req.body.tamaño;
        const info = req.body.info;

        mascotas.update({ nombre, edad, tamaño, info }, { where: { id } }).then((resultado) => {
            res.status(200).json({
                tipo: 'success',
                mensaje: "Registro Actualizado"
            });
        }).catch((err) => {
            res.status(500).json({
                tipo: 'error',
                mensaje: `Error al actualizar Registro ::: ${err}`
            });
        });
    }
};

// Eliminar Mascota
const eliminar = (req, res) => {
    const id = req.params.id;
    if (id == null) {
        res.status(203).json({
            mensaje: "Debe ingresar un ID!"
        });
        return;
    }

    // Implementar función de eliminación
    mascotas.destroy({ where: { id: id } })
        .then((result) => {
            res.status(200).json({
                tipo: 'success',
                mensaje: `Registro con id ${id} Eliminado Correctamente`
            });
        })
        .catch((err) => {
            res.status(500).json({
                tipo: 'error',
                mensaje: `Error al eliminar Registro ::: ${err}`
            });
        });
};

export { crear, buscar, buscarId, actualizar, eliminar };
