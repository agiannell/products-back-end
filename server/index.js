require('dotenv').config();
const express = require('express'),
    massive = require('massive'),
    productsCtrl = require('./controllers/products_controller'),
    {SERVER_PORT, CONNECTION_STRING} = process.env,
    app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}) .then(db => {
    app.set('db', db);
    console.log('db connected');
    app.listen(SERVER_PORT, () => console.log(`Server is listening on port ${SERVER_PORT}`))
}) .catch(err => console.log(err));

//endpoints
app.get('/api/products', productsCtrl.getAll);
app.get('/api/products/:id', productsCtrl.getOne);
app.put('/api/products/:id', productsCtrl.update);
app.post('/api/products', productsCtrl.create);
app.delete('/api/products/:id', productsCtrl.delete);
