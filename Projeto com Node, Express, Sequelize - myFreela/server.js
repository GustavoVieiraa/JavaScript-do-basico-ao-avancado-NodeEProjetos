const express = require('express');
const server = express();
const path = require('path');
const { engine } = require('express-handlebars');
const db = require('./db/connection');
const bodyParser = require('body-parser');
const Job = require('./models/Job');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const PORT = 3000;


// config
server.listen(PORT, function() {
    console.log(`|Express| Rodando na porta ${PORT}`);
});

// body parser
server.use(bodyParser.urlencoded({ extended: false }));

// handle bars
// Configuração do diretório de visualizações
server.set('views', path.join(__dirname, 'views'));

// Configuração do motor de visualização
server.engine('handlebars', engine({ defaultLayout: 'main' }));
server.set('view engine', 'handlebars');

// static folder
server.use(express.static(path.join(__dirname, 'public')));

// db connection
db
.authenticate()
.then(() => {
    console.log("|DataBase| Conectado com sucesso!");
})
.catch(err => {
    console.log(`|DataBase| Erro ao conectar ao banco. ${err}`);
});

// routes
server.get('/', (req, res) => {

    let search = req.query.job;
    let query = '%'+search+'%';

    if(!search) {
        Job.findAll({order: [
            ['createdAt', 'DESC']
        ]})
        .then(jobs => {
            res.render('index', {
                jobs
            });
        })
        .catch(err => {
            console.log(err);
        });
    } else {
        Job.findAll({
            where: {title: {[Op.like]: query}},
            order: [
            ['createdAt', 'DESC']
        ]})
        .then(jobs => {
            res.render('index', {
                jobs, search
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

    
});

// JOBS Routes
server.use('/jobs', require('./routes/jobs'));