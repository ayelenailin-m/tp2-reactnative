import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors()); // permite que el frontend acceda al backend

// lista de nombres válidos 
const usuariosValidos = ["ailin", "tati", "eze", "merci", "lean", "joaquin", "lauti", "lucas"];


// ruta que devuelve un saludo personalizado
app.get("/saludo/:nombre", (req, res) => {
    const nombre = req.params.nombre;
    if (usuariosValidos.includes(nombre)) {
        res.send(`Hola ${nombre}!`);
    } else {
        res.status(404).send("Usuario no encontrado");
    }
});

// ruta que valida si un nombre es válido
app.get("/validar/:nombre", (req, res) => {
    const nombre = req.params.nombre.toLowerCase(); // normalizamos el nombre
    const esValido = usuariosValidos.includes(nombre);
    res.json({ valido: esValido }); // devuelve un json con el resultado
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});