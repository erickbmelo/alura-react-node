function getLivros(req, res) {
    try {
        res.send("<h1>Olá, mundo!</h1>")
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros
}