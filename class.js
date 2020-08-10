class student{
    constructor(sId,sName){
        this.id = sId;
        this.name = sName;
        this.schoolName = 'Isc'
    }
}

const student1 = new student(12,'yousha');

const student2 = new student(15,"Mahmood");
console.log(student1,student2);
console.log(student1.name,student2.id);