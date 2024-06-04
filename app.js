const express = require("express"); //Inicio al servidor-importar paquete
const mongoose = require("mongoose");//requerir Base Datos
const bodyParser = require('body-parser');
const path = require("path");

//Importacion rutas
const registerRoutes = require("./src/rutas/registro");
const userRoutes = require("./src/rutas/usuarios");

const app = express();
const port = process.env.PORT || 10000;

//middleware para manejar JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//rutas importadas
app.use(express.json());
app.use("/api", registerRoutes);
app.use("/api", userRoutes);


// Ruta raíz
app.get("/", (req, res) => {
    res.send("Bienvenido a Steir");
});

//Conexion mongodb
mongoose.connect("mongodb+srv://marcelina08ts:Alelau1318@cluster0.j7sp4om.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
 .then(() => {
    console.log("Conectado a la base de datos");
 })
 .catch(() => {
    console.log("Coneccion fallida");
 });

//Iniciar servidor
app.listen(port, () => console.log('server listening on port', port));
