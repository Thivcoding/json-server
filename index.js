const jsonServer = require('json-server');
const server = jsonServer.create()
const route = jsonServer.router('db.json');
const middleware = jsonServer.defaults() // អនុញ្ញាតិ GET , POST , PUT , PATCH , DELETE
const cors = require('cors')

server.use(cors()) // បន្ថែម cors ដើម្បីត្រូវប្រើ CORS សម្រាប់ប្រើ​អោយ fronted 
server.use(middleware) // អនុញ្ញាតិ GET , POST , PUT , PATCH , DELETE
server.use(route) // route tv kan database

const port = 3000;
const host = 'localhost';

server.listen(port,()=>{
    console.log(`server listening on http://${host}:${port}`);
    
})