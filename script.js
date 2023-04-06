let checker= require('./modules/checker');

console.log('code chaling');
console.log(checker(1));
console.log(checker(10));
console.log(checker(143242342345));
console.log(checker(1453452345234523452345))
console.log(checker(19999999904137423748912374892374))


/////===Module Caching 
// let Teachername=require('./ModuleCaching')

// Teachername.setName('New Ali')
// Teachername.getName()
// let Another=require('./ModuleCaching')
// Another.getName()


let getter =require('./export &&(Module.exports)')
console.log(getter)