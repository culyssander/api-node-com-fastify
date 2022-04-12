const usuarioController = require('../controller/usuario.controller')

const usuarioPropriedade = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        nome: { type: 'string' },
        email: { type: 'string' },
    }
}

const todosUsuarioOpcao = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: usuarioPropriedade
            }
        }
    },
    handler: usuarioController.todosUsuarios
}

const buscarUsuarioPeloIdOpcao = {
    schema: {
        response: {
            200: usuarioPropriedade
        }
    },
    handler: usuarioController.buscarUsuarioPeloId
}

const salvarUsuarioOpcao = {
    schema: {
        body: {
            type: 'object',
            required: ['nome', 'email'],
            properties: {
                nome: { type: 'string' },
                email: { type: 'string' }
            }
        }, 
        response: {
            201: usuarioPropriedade
        }
    },
    handler: usuarioController.salvarUsuario
}

const usuarioRota = (fastify, opcao, feito) => {


    // todos usuarios
    fastify.get('/usuarios', todosUsuarioOpcao)
    
    
    // buscar usuario pelo id
    fastify.get('/usuarios/:id', buscarUsuarioPeloIdOpcao)

    fastify.post('/usuarios', salvarUsuarioOpcao)

    feito()
}

module.exports = usuarioRota