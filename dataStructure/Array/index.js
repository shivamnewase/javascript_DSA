// // aray example
// const arr = [1,2,3,"Hello"];
// console.log(arr[0])


// push
// const arr = [1,2,3,"Hello"];
// arr.push('World');

// for (const val of arr) {
//     console.log(val)
// }

// for (const val in arr) {
//     console.log(val)
// }

// unshift

// const arr = [1,2,3,"Hello"];
// arr.unshift('World');

// console.log(arr);


// pop
// const arr = [1,2,3,"Hello"];
// arr.push('World');

// console.log(arr);

// arr.pop('World');
// console.log(arr);
// arr.pop('Hello');
// console.log(arr)

// shift

// const arr = [1,2,3,"Hello"];
// arr.push('World');
// arr.push(4);
// console.log(arr);

// arr.shift(1)
// arr.shift(2)
// arr.shift(3)

// console.log(arr);

// ======================================================

// map
// let arr = [1,2,3,4,5,6];
// let val = arr.map(item =>{
//     console.log(item *2)
// })

// let arr = [{
//     'name': 'Aman',
//     'age': '23',
//     'city': 'Pune'
// },
// {
//     'name': 'Amit',
//     'age': '25',
//     'city': ''
// },
// {
//     'name': 'Raju',
//     'age': '28',
//     'city': 'Delhi'
// },
// ];
// let val = arr.map(person => {
//     console.log(person)
// })


// filter

// let arr = [{
//         'name': 'Aman',
//         'age': '23',
//         'city': 'Pune'
//     },
//     {
//         'name': 'Amit',
//         'age': '25',
//         'city': ''
//     },
//     {
//         'name': 'Raju',
//         'age': '28',
//         'city': 'Delhi'
//     },
//     {
//         'name': 'samir',
//         'age': '28',
//         'city': 'Delhi'
//     },
//     {
//         'name': 'hiten',
//         'age': '28',
//         'city': 'Delhi'
//     }
//     ];

//     let val = arr.filter(person =>
//         person.age == '28'
         
// )
//     console.log(val)


//reduce

//   let number = [1,2,3,4];

//   let sum = number.reduce((prev, next) =>{
//     return prev + next
//   });

//   console.log(sum)

// let fname = 'shiv';
// let laname = 'Sharma';

// console.log(fname.concat(laname));


//slice

// const things = ['ant', 'ball', 'camel', 'horse', 'bat'];

// console.log(things.slice(0,5));


//splice

//   const arr = ['jan','mar','apr','june'];

//   console.log(arr);
//   arr.splice(1,0,'feb');
//   console.log(arr);
//   arr.splice(4,0,'may');
//   console.log(arr);
//   arr.splice(6,0,'july');
//   console.log(arr);
