
// const pathModule = require("path");
// // returns a last part of a path
// console.log(pathModule.basename(__dirname) ,__dirname);
// console.log(pathModule.basename(__filename) );
// //we gave the extension of file as well so it will return only name of file
// //returns PathModule.js (on windows)
// // returns E:\Node Learning\BuiltInModules\PathModule.js (on POSIX)

// // To Get the Consistent Results when working with windows file path like==>(E:\Node Learning\BuiltInModules ) on any OS we use path.win32.basename
// // console.log(
// //   "windows",
// //   pathModule.win32.basename("E:\\Node Learning\\BuiltInModules\\PathModule.js")
// // ); 
// //returns PathModule.js (on any OS)
// // To Get the Consistent Results when working with posix file path like==>(E:\Node Learning\BuiltInModules ) on any OS we use path.posix.basename
// // console.log(
// //   "posix",
// //   pathModule.posix.basename("/E/Node Learning/BuiltInModules/PathModule.js")
// // );
//  //returns PathModule.js (on any OS)


// //extname gives a extension name
// // console.log(pathModule.extname(__dirname) );
// // console.log(pathModule.extname(__filename) );

// // dirname returns a directory of a given path
// // console.log('dirname',pathModule.dirname(__dirname) );
// // console.log('dirname',pathModule.dirname(__filename) );

// // gives an object have these keys==> dir,base,ext,name
// // console.log(pathModule.parse(__dirname) );
// // console.log(__filename,'=====',pathModule.parse(__filename) );
// // we give an object and it gives us a path 

// // console.log(pathModule.format({
// //     root: 'E:\\',
// //     dir: 'E:\\Node Learning\\BuiltInModules',
// //     base: 'PathModule.js',
// //     ext: '.js',
// //     name: 'PathModule'
// //   }))


// // console.log(pathModule.join(__dirname,'footer.js')) //returns ==>E:\Node Learning\BuiltInModules\footer.js 
// // console.log(pathModule.join(__dirname,'../footer.js')) //returns ==>E:\Node Learning\footer.js 
// // console.log(pathModule.join(__dirname,'../../footer.js')) //returns ==>E:\footer.js 
// console.log(pathModule.join(__dirname,'header.js'))
// console.log(pathModule.join(__dirname,'../../Notes.txt'));



const path=require('path')
// console.log('E:\Node Learning\BuiltInModules')
console.log(path.join(__dirname,'Http.js'))
console.log(path.basename(__filename))
console.log(path.extname(__filename),__filename)
console.log(path.parse(__filename))
console.log(path.format({
    root: 'E:\\',
    dir: 'E:\\Node Learning\\BuiltInModules',
    base: 'PathModule.js',
    ext: '.js',
    name: 'PathModule'
  }),'format')
