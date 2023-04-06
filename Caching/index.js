/////===Module Caching 

// const {increment,decrement,getCount}=counting1;
// increment()
// increment()
// console.log(getCount());
// let counting2=require('./caching')

// console.log(counting2.getCount())

// let {increment,decrement,getCount}=require('./caching')

// console.log(getCount())
let counting1=require('./caching');

let counting2=require('./caching');

counting1.increment()
console.log(counting1.getCount())
console.log(counting2.getCount())






// Understanding caching with classes

// let Teachername=require('./caching')

// Teachername.setName('New Ali')
// Teachername.getName()
// let Another=require('./caching')
// Another.getName()

// ==================== to get the new Instance every time

//  let Teachername=require('./caching')
//     let name1=new Teachername('ali')
// name1.getName()
// name1.setName('New Ali')
// name1.getName()

// let Another=require('./caching')
// let name2=new Another('Tariq')
// name2.getName()
// name2.setName('ali')
// name2.getName()