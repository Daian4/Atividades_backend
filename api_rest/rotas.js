const express = require('express');
const instrutores = require('./controladores/instrutores');
const aulas = require('./controladores/aulas');

const rotas = express();

//http://localhost:3000/instrutores (listar instrutor)
rotas.get('/instrutores', instrutores.listarInstrutores);
http://localhost:3000/instrutores/3 (obter instrutor)
rotas.get('/instrutores/:id', instrutores.obterInstrutor);
//http://localhost:3000/instrutores (cadastar instrutor no body json)
rotas.post('/instrutores', instrutores.cadastrarInstrutor);
//http://localhost:3000/instrutores/1 (atualizar instrutor body json)
rotas.put('/instrutores/:id', instrutores.atualizarInstrutor);
//http://localhost:3000/instrutores/1/status (altera uma parte)
rotas.patch('/instrutores/:id/status', instrutores.atualizarStatusInstrutor);
//http://localhost:3000/instrutores/1
rotas.delete('/instrutores/:id', instrutores.excluirInstrutor);

//http://localhost:3000/instrutores/1/aulas
rotas.post('/instrutores/:idInstrutor/aulas', aulas.cadatrarAula);
//http://localhost:3000/aulas
rotas.get('/aulas', aulas.listaraulas)
//http://localhost:3000/aulas/1
rotas.get('/aulas/:id', aulas.obterAulas)
rotas.get('/instrutores/:idInstrutor/aulas', aulas.obterAulasInstrutor);

module.exports = rotas;