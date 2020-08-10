const person  = {name:'jack', age:17 , job:'fb' , gfName: 'lol' , address:'kochukhet', phone: '111', friends:['yo','tom','yarn','ok']}

const gfName = person.gfName;
const phone  = person.phone;

console.log(gfName,phone);
console.log(gfName,phone);
console.log(gfName,phone);
console.log(gfName,phone);
console.log(gfName,phone);




const friends = ['a','b','c','d','e','f','g','h'];
const [a,b,...c] = friends;
console.log(a,b,c);

const complexObject = {
    name: 'av',
    info: {
        address:'a',
        leader:'b'
    }
}
const {leader} = complexObject.info;
console.log(leader);