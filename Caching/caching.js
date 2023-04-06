let count=0
const increment=()=>{
return count++
}
const decrement=()=>{
return count--;

}
const getCount=()=>{
    return count
}

module.exports={
    getCount,
    increment,
    decrement
}



// Understanding caching with classes
class Teacher{
    constructor(name){
this.name=name;

    }
    getName(){
        console.log(this.name)
    }
    setName(newName){
this.name=newName
    }
}
// module.exports=new Teacher('Ali')

// ==================== to get the new Instance every time
// {
   
// module.exports=Teacher // Exporting class itself
            // }