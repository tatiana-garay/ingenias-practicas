const req = require('express');
const app = req();
const port = 3050;
app.get('/', (req, res) => {
    res.send('Bienvenidos a la pagina web');
});
app.get('/cursos', (req, res) => {
    res.send('Bienvenidos a la seccion de cursos');
});
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});


