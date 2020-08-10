class Parent{
    constructor(){
        this.fatherName = 'Schwerznegger'
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name
    }
    getFullName(){
        return this.name + ' ' + this.fatherName
    }
}

const baby1 = new Child('Arnold')
const baby2 = new Child('Tom')
console.log(baby1.getFullName());
console.log(baby2);