// CODE here for your Lambda Classes

class Person{
    constructor(attrs){
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person{
    constructor(attrs){
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLangauge = attrs.favLangauge;
        this.catchPhrase = attrs.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    adjustGrade(student){
        let randomAdjustment = (Math.random() - 0.5) * 20;
        student.grade += randomAdjustment;
        student.grade = Math.round(student.grade);
        if (student.grade < 0){
            student.grade = 0;
        } else if (student.grade > 100){
            student.grade = 100;
        }

        console.log(`${this.name} adjusts ${student.name}'s grade to ${student.grade}`);
    }
}

class Student extends Person{
    constructor(attrs){
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
        this.grade = attrs.grade;
    }
    listsSubjects(){
        this.favSubjects.forEach(subject => {
            console.log(subject);
        });
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate(){
        if (this.grade > 70){
            console.log(`${this.name} graduates from Lambda School!`);
            return true;
        } else {
            return false;
        }
    }
}

class ProjectManager extends Instructor{
    constructor(attrs){
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}


const josh = new Instructor({
    name: 'Josh',
    age: 33,
    location: 'Utah',    
    specialty: 'Full-Stack',
    favLangauge: 'JavaScript',
    catchPhrase: 'Get big!'
});

const britt = new Instructor({
    name: 'Britt',
    age: 29,
    location: 'Canada',    
    specialty: 'Full-Stack',
    favLangauge: 'Python',
    catchPhrase: 'Alright then!'
});

const phil = new Student({
    name: 'Phil',
    age: 28,
    location: 'Los Angeles',    
    specialty: 'VR',
    favLangauge: 'C#',
    catchPhrase: 'Yo',
    previousBackground: 'Physics',
    className: 'Web25',
    favSubjects: ['React', 'Computer Science', 'CSS'],
    grade: 48
});

const bob = new Student({
    name: 'Bob',
    age: 23,
    location: 'New York',    
    specialty: 'Front-end',
    favLangauge: 'Java',
    catchPhrase: 'Heya',
    previousBackground: 'Journalist',
    className: 'Web24',
    favSubjects: ['Data Science', 'Math', 'Linear Algebra'],
    grade: 51
});

const joe = new Student({
    name: 'Joe',
    age: 54,
    location: 'Texas',    
    specialty: 'Back-end',
    favLangauge: 'Python',
    catchPhrase: 'Hell yeah',
    previousBackground: 'Construction',
    className: 'Web25',
    favSubjects: ['HTML', 'Preprocessing', 'JavaScript'],
    grade: 57
});

const sean = new ProjectManager({
    name: 'Sean',
    age: 37,
    location: 'San Francisco',    
    specialty: 'Full-Stack',
    favLangauge: 'Java',
    catchPhrase: 'Hello hello',
    gradClassName: 'Web25',
    favInstructor: britt
});

const mark = new ProjectManager({
    name: 'Mark',
    age: 37,
    location: 'Salt Lake City',    
    specialty: 'Front-end',
    favLangauge: 'JavaScript',
    catchPhrase: 'Whats up',
    gradClassName: 'Web24',
    favInstructor: josh
});


console.log('\n --- Lambda Classes --- ')

josh.demo('LESS');
britt.grade(phil, 'JavaScript IV');

phil.listsSubjects();
bob.PRAssignment('HTML');
joe.sprintChallenge('Preprocessing');

sean.standUp('Web25_Staff');
mark.debugsCode(joe, 'JavaScript');

console.log('\n --- Lambda Classes Stretch Problem --- ')

while(joe.graduate() === false){
    britt.adjustGrade(joe);
}