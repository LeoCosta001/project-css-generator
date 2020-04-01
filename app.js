// Define a porta de acesso ao servidor
const port = 3001;
//Importando o Express
const express = require('express');
const app = express();
const hbs = require('hbs');

// Configurações
// Diretório de Views
const path = require('path');
app.set('views', path.join(__dirname, 'views'));

// Diretório de arquivos estaticos
app.use(express.static(path.join(__dirname, '/public')));

// Engine de renderização do HTML
app.set('view engine', 'hbs');

// Diretório de "Partials"
hbs.registerPartials(__dirname + '/views/partials');

// Rotas
app.use('/', require('./routes/index'));
app.use('/textapp', require('./routes/textApp'));


// Ligar servidorr
app.listen(port, err => {
    console.log(`Server is listening on port: ${port}`);
});