const express = require('express');
const HelloService = require('./hello.service');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send(HelloService.HelloService.sayHello(req.query.name)));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));