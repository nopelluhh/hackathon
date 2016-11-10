module.exports = {
    ping : ping
}

function ping(req, res) {
    res.send('PONG!')
}