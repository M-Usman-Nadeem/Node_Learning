// const http=require('node:http')
// const fs=require('node:fs')
// const server=http.createServer((req,res)=>{
//     // console.log(count,'hello')
//     // res.end('Hello World!!!!!!!')
//     // event.emit('api hits');
// // (async()=>{
// // await fs.createRead
// //     })
// let data=fs.createReadStream('./index.html',)
// // let write=fs.createWriteStream(res)
// // The error message indicates that the fs.createWriteStream()
// //  function is expecting a string, Buffer, or URL as the first argument,
// //  but received an instance of ServerResponse. 
// //  This is because the fs.createWriteStream()
// //   function expects a file path to write the data to, but res is a ServerResponse object returned by the HTTP server.
// data.pipe(res)
// data.on('data',(piece)=>{
// console.log(piece)
// })
//     data.on('error',(err)=>{
//         console.log(err)
//     })

// });
// server.listen(2300,()=>{
//     console.log('Ok')
// });
// const https = require('https');

// https.get('https://jsonplaceholder.typicode.com/users', res => {
//   let data = [];
//   const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
//   console.log('Status Code:', res.statusCode);
//   console.log('Date in Response header:', headerDate);

//   res.on('data', chunk => {
//     data.push(chunk);
//   });

//   res.on('end', () => {
//     console.log('Response ended: ');
//     const users = JSON.parse(Buffer.concat(data).toString());

//     for(user of users) {
//       console.log(`Got user with id: ${user.id}, name: ${user.name}`);
//     }
//   });
// }).on('error', err => {
//   console.log('Error: ', err.message);
// });
const http=require('http')
const fs=require('fs')
let server=http.createServer((req,res)=>{
    // res.send()
    // res.end(JSON.stringify([1,2,3,4]))
    if(req.url=='/login'){
        // res.end('okkkkkk')
// fs.readFile('./index.html',(err,data)=>{
//     res.write(data)
// console.log(data)
//     res.end()
// })
const data=fs.createReadStream('./index.html',{highWaterMark:100})
// data.on('data',(data)=>{
//     // console.log(data)
//     res.write(data)
// })
data.pipe(res)
data.on('end',()=>{

    res.end()
})

    } else if(req.url=='/'){
        res.end('landing page')
    }
})
server.listen(2500,()=>{
    console.log('ok')
})

// data.on('end',()=>{
//     console.log('ending')
// })
// fs.readFile('./index.html',(err,data)=>{
//     // res.write(data)
// console.log(data)
//     // res.end()
// })