const express = require("express");
const UserSchema = require("../modelos/usuarios");

const router = express.Router();

//Crear usuario
router.post("/users", (req,res)=> {
    const user = UserSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Obtener todos los usuarios
router.get("/users", (req,res)=> {
    UserSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Encontrar un usuario
router.get("/users/:id", (req,res)=> {
    const { id } = req.params;
    UserSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Actualizar usuario
router.put("/users/:id", (req,res)=> {
    const { id } = req.params;
    const { nombre, apellido, documento, telefono, direccion, email, password} = req.body;
    UserSchema
    .updateOne({ _id: id},{ $set: {nombre, apellido, documento, telefono, direccion, email, password}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Eliminar usuario
router.delete("/users/:id", (req,res)=> {
    const { id } = req.params;
    UserSchema
    .remove({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

module.exports = router;
