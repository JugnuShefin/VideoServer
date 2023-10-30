//import json server
const jsonserver=require('json-server')

//import cors
const cors=require('cors')

//create json server
const server=jsonserver.create()

//json type data convert to js data - before request resolve
const middleware=jsonserver.defaults()

//apply middleware in server
server.use(middleware)

//apply cors in server
server.use(cors())

//run server
const PORT=5000
server.listen(PORT,()=>{
    console.log(`___Json Server Started At Port : ${PORT}_____`);
})

//create a router
const router=jsonserver.router('db.json')

//apply router to server
server.use(router)


