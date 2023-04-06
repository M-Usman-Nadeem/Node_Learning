// const { write } = require('node:fs')
const fs = require("node:fs");
// async function read(){
//     try{

//         await fs.promises.writeFile('./file.txt','Hello ')
//         let data=   fs.createReadStream('./file.txt',{encoding: 'utf-8',start:0, end: 2,highWaterMark:1  })
//         let writeData=fs.createWriteStream('./file2.txt')
//         // data.pipe(writeData);
//         // data.pipe(res)
//         data.on('data',(data)=>{
// // res.write(data)
//             console.log(data)
//             // writeData.write(data)
//         })
//         data.on('end',()=>{
// console.log('data is finished')
//         })
//         data.on('error',(err)=>{
// console.log('data is not found due to '+ err)
//         })
//     }
//     catch(err){
//         console.log('Error',err)
//     }
// }
// read()
// const readingData = fs.createReadStream("./file/new.txt");
// // fs.mkdir('./newData',()=>{
// //     console.log('directory has been created')
// // })

// const writingData = fs.createWriteStream("./file2.txt", { flags: "a" });
// readingData.pipe(writingData);
// readingData.on('data',(piece)=>{

//     // writingData.write(piece)
// })
// readingData.on('error',(err)=>{

//     // writingData.write(err)
//     console.log(err)
// })

// const readStream = fs.createReadStream('./file/class1/app.js');
// const writeStream = fs.createWriteStream('./newData/app.js');

// readStream.pipe(writeStream);

// const readingData = fs.createReadStream("./file/class1");


// const writingData = fs.createWriteStream("./newData");
// readingData.pipe(writingData);


// const readStream = fs.createReadStream(sourceFilePath);
// const writeStream = fs.createWriteStream(destinationFilePath);

// readStream.pipe(writeStream);

// writeStream.on('finish', () => {
//   console.log('File transfer complete.');
// });

// writeStream.on('error', (err) => {
//   console.error('Error transferring file:', err);
// });
// ========= transferring file
// fs.readdir('./file/class1',(err,files)=>{
//     console.log(files)
//     files.forEach(file => {
//         const read=fs.createReadStream('./file/class1/'+file)
//         const write=fs.createWriteStream('./newData/'+file)
//         read.pipe(write)
//         // read.on('data',(data)=>{

//         //     fs.writeFile('./newData/'+file,data,()=>[
//         //         console.log('okk')
//         //     ])
//         // })
//     });
// })
function transfer(name){
    // const onlyFiles=files.filter((file)=>file!=name)
    console.log(name)
    fs.readdir('./file/'+name,(err,files)=>{

        files.forEach(file => {
            
        const read=fs.createReadStream('./file/'+name+'/'+file)
        const write=fs.createWriteStream('./newData/'+name+'/'+file)
        read.pipe(write)
        // read.on('data',(data)=>{

        //     fs.writeFile('./newData/'+file,data,()=>{

            
        //         console.log('okk')
        // })
        // })
})
    });

}
function transferDir(name){

    fs.readdir('./file',(err,files)=>{
        
        
        const dir=files.find(file=>file==name)
        if(!dir){
            console.log(err)
        } 
        else{
            if(fs.existsSync('./newData/'+name)){
              
transfer(name)
            }
            else {
            fs.mkdir('./newData/'+name,()=>{
                console.log('okkkkk dir')
                transfer(name)
            })
            }
        }

    })
}
transferDir('class1')


 
