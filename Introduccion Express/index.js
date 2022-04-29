const fs = require("fs");
const express = require("express");
const app = express();
const port = 5000;

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

// GET
/* app.get("/formulario", (req, res) => {
  console.log(req.query);
  res.send(`${req.query.nombre} El formulario fue enviado....`);
}); */

app.get("/", (req, res) => {
  res.send("Visitaste la pagina de inicio");
});

app.get("/registro", (req, res) => {
  res.send("Visitaste la pagina de registro");
});

// POST
app.post("/formulario", (req, res) => {
  console.log(req.body);
  const {nombre, apellido} = req.body;

  if (!nombre || !apellido) return res.send("No existen los datos");

  fs.writeFile(`archivos/${nombre}.txt`, apellido, (err) => {
    if (err) return res.send("Falló al enviar el archivo");
    res.download(__dirname + `/archivos/${nombre}.txt`);
  });
});

app.listen(port, () => console.log("Funcionando 👍"));
