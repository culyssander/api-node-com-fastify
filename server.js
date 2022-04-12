const fastify = require('fastify')({ logger: true })

fastify.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
      info: {
        title: 'Api fastify',
        description: 'Testing the Fastify swagger API',
        version: '0.0.1'
      }
    }}
)

fastify.register(require('./rotas/usuario.rota'))

fastify.get('/', (req, replay) => {
    replay.send({ mensagem: 'Bemvindo ao fastify'})
})


const start = async () => {
    try {
        await fastify.listen(3000)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()