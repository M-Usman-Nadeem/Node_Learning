// 
// const fs = require('node:fs/promises');

// // ===========to run the below code we have to require the module in this way==> require('node:fs');
// // fs.readFile('./file.txt','utf-8',(err,content)=>{ // it will the binary data  we can alse specify(in second Argument) which type of data i want to see 
// //     console.log(err||content)
// // })

// // (async function(path) {
// //     try {
// //       await fs.unlink(path);
// //       console.log(`successfully deleted ${path}`);
// //     } catch (error) {
// //       console.error('there was an error:', error.message);
// //     }
// //   })('./file.txt');

// async function readingFile(){

//    let data= await fs.readFile('./file.txt','utf-8')
//     console.log(data)
     
// }
// async function writingFile(){
// // to append data in file we write {flag:'a'} in third argument 
//     // await fs.writeFile('./file.txt','  hello',{flag:'a'}) //writing a content in a file if exist if not then it'll make file and write content in it
//     // await fs.unlink('./file')//deleting a file
//     await fs.writeFile('./file.txt','Hello Node!!!!!!!!!!!')
//     await fs.mkdir('./newfile')//creating a directory 
//     await fs.rmdir('./newfile')//deletig a directory 
// readingFile()    
// await fs.unlink('./file.txt')
// }
// writingFile()

// console.log('Running first bcz we are reading file asynchronously')
const fs=require('node:fs')
const path=require('node:path')
const EventEmitter=require('node:events')
const event=new EventEmitter()
// fs.readFile('./file.txt',(err,data)=>{
//     console.log(err || data)
// }) 
// app.get('/',(req,res)=>{
//     console.log(req)
// })
// const data=fs.readFileSync('./file.txt')
// console.log(data)
// async function read(){
//    const data= await fs.readFile('./file.txt','utf16le')
//    console.log(data)
// }

// fs.readFile('./file.txt','utf-8').then((data)=>{
//     console.log(data)
// })
// read()
// console.log('data')
// fs.writeFile('./file.txt','helloooooooooooooooooooooo',{flag:"a"},(err)=>{
//     console.log('data is written')
//    setTimeout(()=>{
//     fs.unlink('./file.txt',(err)=>{
//         console.log(err||'sucessfull')
//     }) 
//    },5000)
// })
event.on('/FolderCreated',()=>{
    console.log('Ok here')
})
fs.mkdir('fileBanGyha',()=>{
    console. log('complete')
 
   event.emit('/FolderCreated')
})

event.on('readFile',()=>{
    // console.log(path.join(__dirname,'fileBanGyha','new.txt'))
    fs.readFile(path.join(__dirname,'fileBanGyha','new.txt'),'utf-8',(err,data)=>{
        console.log(data||err)
    })
    // fs.readFile()
})
let data='file!!!!!!'
fs.writeFile(path.join(__dirname,'fileBanGyha','new.txt'),data,(err)=>{
    // console.log('jk')
    event.emit('readFile')
    // event.
})
// fs.writeFile()


// setTimeout(()=>{ 
//     fs.rmdir('./fileBanGyha',()=>{
//         console.log('delete')
//     })
// },6000)
// console.log() 