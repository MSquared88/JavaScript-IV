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
    critic(student){
        let gradeSum = Math.floor(Math.random() * 100)
        student.grade = gradeSum
        return `${this.name} gave ${student.name} a grade of ${gradeSum}`
    }
}

class Student extends Person {
    constructor(studentAttrs){
        super(studentAttrs)
        
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
        this.grade = studentAttrs.grade
    }

    listsSubjects(){   
        this.favSubjects.forEach(function(item){
            console.log(item)
        })
    }
    
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprinChallenge(subject){
        return `${this.name} has begun sprint challenge ${subject}`
    }
    graduate(){
        if(this.grade < 70){
            return `${this.name} cannot graduate :'(`
        }else{return `${this.name} can graduate :)`}
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
       return `${this.name} debugs ${studentObj.name}'s code on ${subject}` 
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
    favSubjects: ['OOP', 'JS', 'LESS'],
    grade: 100
  });

  const bambam = new Student({
    name: 'BamBam',
    location: 'Bedrock',
    age: 3,
    previousBackground: 'Smashing things',
    className: 'Rock22',
    favSubjects: ['Smash', 'Squish', 'Hit'],
    grade: 100
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
    favInstructor:  'all of them'
});
// Instructor logs
console.log(fred.speak())
console.log(fred.demo("JavaSrcipt"))
console.log(fred.grade(bambam, "CSS"))

// Student Logs
matthew.listsSubjects()
console.log(matthew.speak())
console.log(matthew.PRAssignment("JavaScript IV"))
console.log(bambam.sprinChallenge("JavaScript Fundamentals"))
console.log(matthew.grade)

// TL logs
console.log(dino.speak())
console.log(dino.standUp('web22_mack'))
console.log(mack.debugCode(matthew, "closure"))

// stretch logs
console.log(mack.critic(matthew))
console.log(matthew.grade)
console.log(dino.critic(bambam))
console.log(bambam.grade)
console.log(bambam.graduate())

