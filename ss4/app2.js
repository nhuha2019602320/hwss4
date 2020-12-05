class Person {
    
    constructor(name, age, phoneNumber, vector) {
        let a,b;
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.vector = [a,b];
    }
}

class Distance {

    listPerson = [];
    addPerson(person){
        this.listPerson.push(person);
    }
    caculate(a1,b1 , a2, b2){
        this.a1 = a1;
        this.a2 = a2;
        this.b1 = b1;
        this.b2 = b2;

        return Result =  Math.sqrt(Math.pow((a2 - a1), 2) + Math.pow((b2 - b1), 2));
    }

    check(name){
        this.name = name;
        for(let i = 0; i < this.listPerson.length; i++){
            if(Math.abs(this.Result[i].name - this.Result[i+1]) < 2)
                return 1;
            else
                return 2;
        }
        if(this.check == 1)
            console.log("F0");
        if(this.check == 2)
            console.log("F1");
    }
}

let person1 = new Person("A" , 19, 045677, [1,2]);
let person2 = new Person("B" ,20, 1014577, [2,3]);
let person3 = new Person("C", 21, 023147, [5,7]);
let distance = new Distance();
    distance.addPerson(person1);
    distance.addPerson(person2);
    distance.addPerson(person3);
    console.log(distance);
    