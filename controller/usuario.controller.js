const usuarios = require('../usuario')

const todosUsuarios = (req, replay) => {
    replay.send(usuarios)
}

const buscarUsuarioPeloId = (req, replay) => {
    const { id } = req.params
    
    const usuario = usuarios.find(usuario => usuario.id === id)
    
    if(!usuario) return replay.code(404).send({ mensagem: 'Usuario nao encontrado' })
    
    replay.send(usuario)
}


const salvarUsuario = (req, replay) => {
    const { nome, email } = req.body

    const usuarioTemp = {
        id: new Date().getTime().toString(),
        nome,
        email
    }

    usuarios.push(usuarioTemp)

    replay.code(201).send(usuarioTemp)
}


module.exports = {
    todosUsuarios,
    buscarUsuarioPeloId,
    salvarUsuario
}