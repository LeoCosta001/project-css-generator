// Define a porta de acesso ao servidor
const port = 3000;
//Importando o Express
const express = require('express');
const app = express();

// Configurações
    // Diretório de Views
    const path = require('path');
    app.set('views', path.join(__dirname, 'views'));

    // Diretório de arquivos estaticos
    app.use(express.static(path.join(__dirname, 'public')));

    // Engine de renderização do HTML
    app.set('view engine', 'hbs');

// Rotas
app.use('/', require('./routes/textApp'))

// Ligar servidor
app.listen(port, err => {
    console.log(`Server is listening on port: ${port}`);
});
