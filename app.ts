import express from 'express';

const app = express();
const PORT = 3000;

app.get('/hola', (req, res) => {
  res.send('¡Hola Mundo!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
