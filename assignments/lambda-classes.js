// CODE here for your Lambda Classes

class Person{
    constructor(attrs){
        this.name = attrs.name
        this.age = attrs.age
        this.location = attrs.location
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person{
    constructor(instructorAttrs){
        super(instructorAttrs)
        
        this.specialty = instructorAttrs.specialty
        this.favLanguage = instructorAttrs.favLanguage
        this.catchPhrase = instructorAttrs.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person{
    constructor(studentAttrs){
        super(studentAttrs)
        
        this.previousBackground = studentAttrs.previousBackground
        this.className = studentAttrs.className
        this.favSubjects = studentAttrs.favSubjects
    }
    listsSubjects(){
        this.favSubjects.forEach(() => {
           return this.favSubjects 
        })
        
    }
    PRAssignment(subject){
        return `${student.name} has submitted a PR for ${subject}`
    }
    sprinChallenge(subject){
        return `${student.name} has begun sprint challenge ${subject}`
    }
}


ProjectManagers have the following Methods:
standUp a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
debugsCode a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}
