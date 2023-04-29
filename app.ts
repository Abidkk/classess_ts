class students {

    name:string;
    age:number;
    course:string;
    city:string;
    status:boolean;


constructor(n:string, a:number, co:string, ci:string, st:boolean ){

this.name = n;
this.age = a;
this.course = co;
this.city = ci;
this.status = st

    }

call(){
    console.log(`Hello I am ${this.name}, I am ${this.age} years old, I am learning ${this.course}, I am from ${this.city} My status is ${this.status}`)
}

} 

let student1 = new students('Abidkk', 24,'Typescript', 'Karachi', true);
let student2 = new students('Sohail', 30,'Javascript', 'Mirpurkhas', true)
let student3 = new students('Zahid', 44,'Node js', 'lahore', false);

student1.call()
student2.call()
student3.call()