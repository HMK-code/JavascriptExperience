module.export = class Meetup {
    constructor(name){
        this.name = name
        this.attendees = []
    }
    printAttendeeNames(){
        this.attendees.forEach(printName)
    }
} 

printName = person => console.log(person.name)