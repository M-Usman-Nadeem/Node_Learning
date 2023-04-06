// // console.log(this)
// const eventEmitter=require('node:events')
// const events=new eventEmitter()

// // events.on('working',(name,aimed,place)=>{
// // console.log(`${name}'s dream is to work in ${aimed}`)
// // console.log(place('Home Country'))
// // console.log(place('Silicon Valley'))

// // })
// // events.emit('working','Usman','Silicon Valley',(destination)=>{
// //     let wholeSomeWords='be grinding'
// //     let completeSentence=''
// //     if(destination=='Silicon Valley'){
// //         completeSentence=`Great Aimm and ${wholeSomeWords} for that`
// //     }
// //         else{
// //             completeSentence=`Try to aim big and '${wholeSomeWords} for that`
// //     }
// //     return completeSentence
// // })
// // events.on('greetings',function(){
// //     setImmediate(() => {
// //         console.log('this happens asynchronously');
// //     });
// //     console.log('Hi!!!!!!',this) // {} (in Arrow Function) 
// // })
// // // events.emit('greetings')
// // let count=0
// // events.once('counter',()=>{
// //     count++
// // })

// // events.emit('counter')
// // events.emit('counter')//ignored when we use once method
// // events.emit('counter')
// // //if we use events.once then we get 1 in console and see 3 when we use event.on 
// // console.log(count)
// // events.on('error', (err) => {
// //     console.error('whoops! there was an error');
// //     console.log(err)
// //   });
// //   events.emit('error',new Error('Whoops!!!!!'));


// // =================== 
// const learn=require("./ExtendingFromEventEmitterClass")
// const newLearning=new learn('Node.js')
// newLearning.ChangeLearning('MongoDb')

// newLearning.on('learning',(learn)=>{
//     console.log("event has been triggered",learn)
// })
// // we do have multiple event listener as well
// newLearning.on('learning',(learn)=>{
//     console.log("event has been triggered",learn)
// })
// newLearning.on('learning',(learn)=>{
//     console.log("event has been triggered",learn)
// })

// newLearning.getLearning() 
const EventEmitter=require('node:events');
const event=new EventEmitter();
event.on('/apiHits',(data,ok)=>{// event listen 
    // console.log(data)
    // let data=(status)=>{
    //     console.log(status)
    // }
    setImmediate(()=>{
        console.log(ok)
  data({status:true})
  data('code chaling')
    })
})
event.once('/apiHits',()=>{
    console.log('code chaling2')
})
event.on('/apiHits',()=>{
    console.log('code chaling2')
    
})
// event.on('/apiHits',()=>{// event listen 
//     console.log('code chaling3')
// })
// event.on('/apiHits',()=>{
//     console.log('code chaling3')
// })
// event.on('/apiHits',()=>{// event listen 
//     console.log('code chaling3')
// })
event.emit('/apiHits',(status)=>{
    console.log(status)
},'okk')//event Calling 
// let obj1={
//     fun:()=>{
//         console.log('function')
//     }
// }


