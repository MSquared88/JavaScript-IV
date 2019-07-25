// CODE here for your Lambda Classes

class Person{
    constructor(attrs){
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person{
    constructor(instructorAttrs){
        super(instructorAttrs);
        
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(studentAttrs){
        super(studentAttrs)
        
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
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

class ProjectManager extends Instructor {
    constructor(projectManegerAttrs){
        super(projectManegerAttrs);

        this.gradClassName = projectManegerAttrs.gradClassName;
        this.favInstructor = projectManegerAttrs.favInstructor;
    }
    standUp(slackChannel){
        return `${this.name} announces to ${slackChannel}, @channel standy times!`
    }
    debugCode(studentObj, subject){
       return `${this.name} debugs${studerObj.name}'s code on ${subject}` 
    }
}


// Instructor Objects
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const barney = new Instructor({
    name: 'Barney',
    location: 'Bedrock',
    age: 40,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Hows it going fred`
  });


  
//   Student Objects
const matthew = new Student({
    name: 'Matthew',
    location: 'Texas',
    age: 31,
    previousBackground: 'Udemy',
    className: 'Web22',
    favSubjects: ['OOP', 'JS', 'LESS']
  });

  const bambam = new Student({
    name: 'BamBam',
    location: 'Bedrock',
    age: 3,
    previousBackground: 'Smashing things',
    className: 'Rock22',
    favSubjects: ['Smash', 'Squish', 'Hit']
  });


//   PM Objects


const mack = new ProjectManager({
    name: 'Mack',
    location: 'Seattle',
    age: '25?',
    gradClassName: 'Web19',
    favInstructor:  'Brit',
});

const dino  = new ProjectManager({
    name: 'Dino',
    location: 'Freds House',
    age: 12,
    gradClassName: 'Rock19',
    favInstructor:  'Brit'
});

console.log(fred.speak())
console.log(fred.demo("JavaSrcipt"))
console.log(fred.grade(bambam, "CSS"))
console.log(dino.speak())
console.log()
console.log()
console.log()
console.log()
console.log()