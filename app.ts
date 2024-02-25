import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Hola Mundo1!');
});

app.get('/hola', (req, res) => {
  res.send('¡Hola Mundo2!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
