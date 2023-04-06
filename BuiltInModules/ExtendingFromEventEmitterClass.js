const EventEmitter=require('node:events')
class Learning extends EventEmitter{
    constructor(skill){
        super()
        this.learning=skill
    }
    getLearning(){

        this.emit('learning',this.learning)
    }
    ChangeLearning(newSkill){
        this.learning=newSkill
    }
}
module.exports=Learning