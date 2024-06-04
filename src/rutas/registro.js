const express = require("express");
const registro = require("../modelos/registro");
const router = express.Router();

// Ruta para manejar el registro de usuarios
router.post("/registro", (req, res) => {
    console.log("Datos recibidos:", req.body); // Imprimir los datos recibidos

    const { nombre, apellido, documento, telefono, direccion, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).send("Las contraseñas no coinciden");
    }

    // Creo nueva instancia modelo registro
    const nuevoregistro = new registro({
        nombre,
        apellido,
        documento,
        telefono,
        direccion,
        email,
        password
    });

    nuevoregistro.save()
        .then((data) => res.status(201).json(data)) // Enviar una respuesta JSON
        .catch((error) => {
            console.error("Error al registrar el usuario:", error); // Imprimir el error en la consola
            res.status(500).send("Error al registrar el usuario");
        });
});

module.exports = router;
