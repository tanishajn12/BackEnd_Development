// console.log(process.argv);
// let arr=process.argv.slice(2);


// for(let item of arr){
//     console.log(`hello ${item}`);
// }

// let num = process.argv[2];
// for(let i=1; i<=num; i++) {
//     if(i%3==0 && i%5==0) {
//         console.log(`${i} fizz`)
//     }

//     else if(i%5==0) {
//         console.log(`${i} buzz`)
//     }

//     else if(i%3==0) {
//         console.log(`${i} fizzbuzz`)
//     }

//     else{
//         console.log(`${i}`);
//     }
// }


//way 2
// let num = process.argv[2];

// for(let i=1; i<=num; i++) {
//     let str="";

//     if(i%3==0) {
//         str+="fizz";
//     }

//     if(i%5==0) {
//         str+="buzz";
//     }

//     if(str==""){
//         str+=i;
//     }

//     console.log(str);
// }


// way 3
// let cnt_3=1;
// let cnt_5=1;
// for(let i=1; i<=num; i++) {
//     let str ="";

//     if(cnt_3 == 3) {
//         str+="fizz";
//         cnt_3=0;
//     }

//     if(cnt_5 == 5) {
//         str+="buzz";
//         cnt_5=0;
//     }

//     if(str=""){
//         str+=i;
//     }

//     cnt_3++;
//     cnt_5++;
//     console.log(str);
   
// }









// ------------------------------

let arr=process.argv.slice(2);
let num = arr.pop();

for(let i=1; i<=num; i++) {
    console.log(i);
}







