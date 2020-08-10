// const ages = [12,14,16,13,17];
// const ages2 = [15,16,12];
// const ages3 = [25,36,22,29]
// const allAges = ages.concat(ages2).concat([5]).concat(ages3)
// console.log(allAges);

const ages = [12,14,16,13,17];
const ages2 = [15,16,12];
const ages3 = [25,36,22,29]
const allAges = [...ages,...ages2,5,...ages3]
console.log(allAges);

const business =450;
const mini = 250;
const stud = 150;
const taka = [450,250,150]
//const maximum = Math.max(business,mini,stud);
const maximum = Math.max(...taka)
console.log(maximum);
