const express = require('express')
const app = express()
const WSServer = require('express-ws')(app)
const cors = require('cors')

const aWss = WSServer.getWss();
app.use(cors())
app.use(express.json())


const PORT = 5000;

app.ws('/', (ws, req) => {


    ws.on('message', (msg) => {
        msg = JSON.parse(msg)
        switch (msg.method) {
            case "connection":
                connectionHandler(ws, msg);
                break;
            case "changeCell":
                broadcastConnection(ws, msg);
                break;
            case "restartGame":
                broadcastConnection(ws,msg);
        }

    })
})

app.listen(PORT, () => console.log(`Sever has started on PORT ${PORT}`))

const connectionHandler = (ws, msg) => {
    ws.id = msg.id
    broadcastConnection(ws, msg)
}

const broadcastConnection = (ws, msg) => {
    aWss.clients.forEach(client => {
        if (client.id === msg.id) {
            client.send(JSON.stringify(msg))
        }
    })
}
