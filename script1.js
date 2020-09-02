/*
let day = 5.5;
if (day > 7) {
    let days = day % 7;
    weekday(days);
} else {
    weekday(day);
}

function weekday(day) {
    switch (day) {
        case 1:
            console.log('شنبه');
            break;
        case 2:
            console.log('یک شنبه');
            break;
        case 3:
            console.log('دو شنبه');
            break;
        case 4:
            console.log('سه شنبه');
            break;
        case 5:
            console.log('چهار شنبه');
            break;
        case 6:
            console.log('پنج شنبه');
            break;
        case 0:
            console.log('جمعه');
            break;

        default:
            console.error('لطفاعدد های بزرگ تر از صفر و صحیح وارد کنید ');
            break;
    }

};

let amin = ['ali', 'mahdi', 'reza'];
let a1 = ['ali', 'mahdi', 'reza'];
let amin2 = ['a', 'b', 'c'];
let amin3 = amin.concat(amin2, a1);

if (amin3.includes('allla') === true) {
    console.log(amin3);
} else {
    amin3.push('allla');

}

for(let i=1; i<=5 ; i++){
  console.log(`${i} x ${i} = ${i*i}`);
}

 let xyz ={ a :1 ,b:2, c:3};
/*
 for( let zs of Object.keys(xyz)){
   console.log(zs)
 }*/
/*
console.log(Object.keys(xyz));

for (let i of a1){
  console.log(i);
}

for (let i in a1){
  console.log(i);
}

function zan(arg1="amamaa", arg2="amam"){
  console.log(`hi ${arg1} and ${arg2}`)
}
zan("amin")

const arr=['amin','ali','mahdi'];
arr.forEach((el)=>{ console.log(el)})

const fruts=['benana','appel','orange','moz'];
const aminaligholi = fruts.filter( (p) => {return p.includes('o')})
*/
const saman = { amin: 'ali', name: 'arash' };
const ff = {...saman, f: 'ahmadi' };

const sd = [1, 2, 3, 4, 5];
const fd = {...sd, ...saman };

function newa(...nums) {
    return nums.reduce((total, n) => {
        return total + n;
    })


}
const { amin: name } = saman;

const people = [{ name: 'amin', last: 'aligholi', age: 26 }, { name: 'mahdi', last: 'hamatabadi', age: 11 }, { name: 'samaneh', last: 'ahmadi', age: 29 }];

const [, { name: mahdiname, age: mahdiage }] = people;