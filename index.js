const date = new Date();

// // console.log(10+20-405)

// // // var text ='Lorem ipsum dolor dolor sit amet consectetur adipisicing elit. Animi corrupti fugit perferendis eveniet eum deserunt.'
// // let text ='L5orem ipsum dolor dolor sit amet consectetur adipisicing elit. Animi corrupti fugit perferendis eveniet eum deserunt.'
// // let firstName = `John`
// // let lastName = `Due`
// // firstName = `Nurbek`

// // console.log(firstName,lastName)
// // // console.log(lastName);

// // let isMarried = true

// // console.log(isMarried);

// // isMarried = false
// // console.log(isMarried);

// // let n = 10.42
// // console.log(n);
// // n=30
// // console.log(n+55);

// // let firstMame
// // console.log(firstMame)
// // let a=10
// // let b=20
// // console.log(`${a} bilan ${b} ning qoshilgan qiymati: ${a+b}`)

// // let a = 20
// // let b = 40

// // a=a+b
// // b=a-b
// // a=a-b

// // console.log(a);
// // console.log(b);

// // const n=125

// // a=(n%100-n%10)/10
// // b=(n-n%100)/100
// // c=n%10

// // console.log(a+b+c);

// // let a=10, b='20'
// // console.log(a-parseInt(b));

// // 1. Uch tomoni 5, 6, 7 bo'lgan uchburchakning maydonini topish uchun JavaScript dasturini yozing.

// let x = 5
// let y = 6
// let z = 7
// let P = (x+y+z)/2
// let S = Math.sqrt(P * (P-x) * (P-y) * (P-z) )

// console.log(`Uchburchak yuzi = ${S}`)

// // // 2.Yer maydoni to'g'ri burchakli to'rtburchak shaklida bo'lib, tomonlari 20 m va 40 m dan iborat. Umumiy yer yuzasini hisoblang.  Yuza hisoblash formulasi : S = a * b;

// let a = 20
// let b = 40

// console.log(`Uchburchak Yuzi S = ${a} * ${b} = ${a*b}`);

// // // 3. Nolga teng bo'lmagan ikkita ixtiyoriy sonlarni yig'indisi, ko'paytmasi va har bir sonning kvadratlari aniqlansin

// let c = 10
// let d = 20

// console.log(`Yigindi = ${c} + ${d} = ${c+d}`)
// console.log(`Ko'paytma = ${c} * ${d} = ${c*d}`)
// console.log(`c ning kvadrati ${c**2}`)
// console.log(`d ning kvadrati ${d**2}`)

// // 4.Ikkita ixtiyoriy nolga teng bo'lmagan sonlarning o'rta arifmetigi topilsin.

// let e = 20
// let f = 30

// console.log(`O'rta arifmetigi (${e} + ${f})/2 = ${(e+f)/2}`)

// // 1. 3 ta son berilgan, bu sonlarning pifagor sonlari yoki pifagor sonlari emasligini toping. a ^ 2 + b ^ 2 = c ^ 2

// let a = 3, b = 4, c = 5

// if ((a*a)+(b*b)==(c*c)) {
//    console.log(`pifagor son`)
//   } else {
//     console.log('pifagor emas')
// }

// // 2. 6 xonali son berilgan shu soning 1 dan farqli raqamlar yigindisini topish

// let a = "894413688941"
// let g = a.match(/1/gi)
// let m = (g.length)

// let son = 894413688941
// let bir = parseInt((son / 1000000) % 10)
// let ikki = parseInt((son / 100000) % 10)
// let uch = parseInt((son / 10000) % 10)
// let tort = parseInt((son / 1000) % 10)
// let besh = parseInt((son / 100) % 10)
// let olti = parseInt((son / 10) % 10)
// let yetti = parseInt(son % 10)
// console.log((bir + ikki + uch + tort + besh + olti + yetti)-parseInt(m))

// // // 3. berilgan matnda nechta "cat" so'zi qatnashganini topish. matn uzunligi 10 ta belgi bo'ladi.

// let a = "catcatCAT"
// let g = a.match(/cat/gi)
// console.log(g.length);

// // // 4. 7 xonali son berilgan bu yerda 1 ning o'rniga 3 ni qo'yib. shu sonning raqamlarini o'rta arifmetigini toping

// let a = "4161431"
// let g = a.match(/1/gi)
// let m = (g.length)

// let son = 4161431
// let bir = parseInt((son / 1000000) % 10)
// let ikki = parseInt((son / 100000) % 10)
// let uch = parseInt((son / 10000) % 10)
// let tort = parseInt((son / 1000) % 10)
// let besh = parseInt((son / 100) % 10)
// let olti = parseInt((son / 10) % 10)
// let yetti = parseInt(son % 10)
// let n = ((bir + ikki + uch + tort + besh + olti + yetti)-parseInt(m))+parseInt(m)*3
// console.log(n/7);

// const a = 45
// if(a%15==0){
//   console.log(`FizzBuzz`)
// }else if(a%5==0){
//   console.log(`Buzz`)
// }else if(a%3==0){
//   console.log(`Fizz`)
// }else{
//   console.log(`none`)
// }

// const b = 45
// const onBeshga = b%15==0
// console.log(onBeshga && 'FizzBuzz' || '')
// const beshga = b%5 ==0
// console.log(beshga && 'Buzz' || '')
// const uchga = b%3 ==0
// console.log(uchga && 'Fizz' || '')

// sleepIn

//   let weekday = false
//   let vacation = false
// console.log(weekday == vacation || !weekday && vacation ? 'true' : 'false');

//         // monkeyTrouble

// const firstMonkey = true
// const secondMonkey = true

// console.log((firstMonkey==secondMonkey) ? true : false)

//         // sumDouble
//     const a = 3, b = 4

//     console.log(a!=b ? a+b : (a+b)*2)

//        // diff21

// const n = -1
// console.log(n<=21 ? 21-n : (n-21)*2 );

//         // parrotTrouble

// let parrotTalking = true
// const hour = 8

// if(!parrotTalking && (7>hour || hour>20)){
//     console.log('false');
// }else{
//     console.log('true');
// }

// JS 4-dars

// const n=0
// const b=n || 20
// console.log(b);

// console.log();
// console.log(NaN===NaN);

// const str = '10'
// const str1 = '888551'
// const result = str*str1
// console.log(isNaN(result) ? result : "kopaytra olmayman");

// if(s==Number){
// console.log(str*str1);
// }else{
//         console.log('kopaytra olmayman');
// }

// Math

//  console.log(Number.MAX_SAFE_INTEGER);
// const a = Math.pow(2,5)
// const b = 12.1
// console.log(Math.pow(2,555));
// console.log(Math.floor(b));
// console.log(Math.ceil(b));
// console.log(Math.trunc(b));
// console.log(Math.round(b));
// console.log(Math.floor(Math.random()*10));

// Fasllar
// const n=5
// switch (n) {
//         case 12:
//         case 1:
//         case 2:
//         console.log('Qish')
//         break
//         case 3:
//         case 4:
//         case 5:
//         console.log('Bahor')
//         break
//         case 6:
//         case 7:
//         case 8:
//         console.log('Yoz')
//         break
//         case 9:
//         case 10:
//         case 11:
//         console.log('Kuz')
//         break
//         default:
//         console.log('Error');

// }

// const b=10
// switch (b){
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         console.log('Yomon');
//         break

//         case 5:
//         case 6:
//         case 7:
//         console.log('Yaxshi');
//         break

//         case 8:
//         case 9:
//         console.log('Perfect');
//         break

//         default:
//         console.log('Koproq oqi');

// }

// const c=5
// switch (c) {
//         case 1:
//         console.log('Yanvar');
//         break

//         case 2:
//         console.log('Fevral');
//         break

//         case 3:
//         console.log('Mart');
//         break

//         case 4:
//         console.log('Aprel');
//         break

//         case 5:
//         console.log('May');
//         break

//         case 6:
//         console.log('Iyun');
//         break

//         case 7:
//         console.log('Iyul');
//         break

//         case 8:
//         console.log('Avgust');
//         break

//         case 9:
//         console.log('Sentabr');
//         break

//         case 10:
//         console.log('Oktabr');
//         break

//         case 11:
//         console.log('Noyabr');
//         break

//         case 12:
//         console.log('Dekabr');
//         break

//         default:
//         console.log('Error');
// }

// let a = 'hiheflo'

// // console.log(str.substring(2, str.length - 2));
// fgfgfg = a.substring(0,2)
// if(fgfgfg = 'hi'){
//         return true
// }else{
//         return false
// }

// let str = `hello world`
// let str2 = `hello`

// let str3 = str2.length
// for(let i=0; i<str3; i++){

// }

// if()

// const str = '6457446 84454747744'
// let newStr =''

// for (let i = 0; i < str.length; i++) {
//         if (str[i-1]!= '4' && str[i+1] != '4' ){
//                 continue
// }
//         newStr+=str[i]
// }
// console.log(newStr);

// let firstMame = `jonh`
// let lastName = `due`
// firstMame = `ann`

// console.log(firstMame);

// console.log(a);
// var a = 10

// const phoneNumber = [ '', '919031909', '991330125', '333150727', '997570788', '910718903', '907470713', '991321510', '992900021', '889698884']

// const numbers = [[ '', `none`], [ '919031909', `Asqar`], [ '991330125', `Azimsher`], [ '333150727', `Kamroncik`], [ '997570788', `Abduhakim`], [ '910718903', `ravshan`], [ '907470713', `Asadbek`], [ '991321510', `Azizbek`], [ '992900021', `Samandar`], [ '889698884', `Dilshodbek`],]

// // for (let i=0; i<phoneNumber.length; i++){
// //        console.log(phoneNumber[i]);
// // }

// console.log(numbers[3][1]);

// function foo(...numbers){
//     let result = 0
//     for (let i = 0; i < numbers.length; i++) {
//         result +=numbers[i]

//     }

//     return result
// }

// console.log(foo(1,2,3,4,400));

// const arr  = [12,3,122,4,5,4]

// function foo(arr){
//         for (let i = 0; i < arr.length; i++) {
//                if(arr[i]==4){
//                 arr[i] = null
//                }
//               console.log(arr);

//         }
// }

// const arr = [1,2,3,4,5]

// arr.push(5,4,3,2,1)

// arr.unshift(5,4,3,2,1)

// arr.pop()

// arr.shift()

// arr.reverse()

// arr.indexOf(2)

// console.log(arr.indexOf(2.3));

// var equalPairs = function (grid) {
//                 grid = [ [3,1,2,2], [1,4,4,5], [2,4,2,2], [2,4,2,2] ]

// }

// const numbers = [3, 13212, 4, 45, 7, 3, 8,3,3,3,3]

// numbers.splice(1,2)

// console.log(numbers);

// for (let i = 0; i < numbers.length; i++) {
//         if(numbers[i]==3){
//                 numbers.splice(i,2);

//         }
// }

// console.log(numbers);

// const array = numbers.slice(1,3)
// console.log(array);

// const arr = [1,2]
// const arr1 = [3,4]
// const newArr = arr.concat(arr1)
// console.log(newArr);

// const arr = [1,2,3,4]
// const arr2 = [5,6,7,8]

// const arr3 = arr.concat(arr2)

// const person = {
//         name: "Asqar",
//         age: 21,
//         location : `Termiz`,
//         hobbies : ['Futbol', 'Tennis', `Shahmat`],
// }

// const {name,age, location, hobbies}=person

// console.log(name,age, location, hobbies);

// const names = [
//         'Abdullajon',
//         'Kamronjon',
//         'Nurbekjon',
//         'Asqarjon',
//         'Asqarjon',
//         'Kamronjon',
// ]

// const fruits = {
//         olma : 'apple',
//         anor : 'granada',
//         uzum : 'uzum',
//         banan : 'banana',
//         apelsin : 'oreng',
// }

// const maxsulot = {
//         poliz: ['Handalak', 'qovun', 'tarvuz'],
//         mevalar: ['olma', 'olcha', 'banan'],
// }

// const {poliz,mevalar}= maxsulot

// console.log(poliz,mevalar);

// const users = [
//         {
//                 name: 'John',
//                 userName: 'Bill',
//                 phoneNumber: '0000',
//         },
//         {
//                 name: 'Ann',
//                 userName: 'Due',
//                 phoneNumber: '1111',
//         },
//         {
//                 name: 'Annnn',
//                 userName: 'Sue',
//                 phoneNumber: '222',
//         },
// ]

// const value = {Ismi: ${users[0].name}}

// console.log(value);

// for (let i = 0; i < users.length; i++) {
//         console.log(`Ismi: ${users[i].name}`);
//         console.log(`Familiyasi: ${users[i].userName}`);
//         console.log(`Raqami: ${users[i].phoneNumber}`);
// }

// const numbers = [1,2,3,6,5,4,8,8,4,5,3]

// for (let i = 0; i < numbers.length; i++) {
//         console.log(numbers.indexOf(8));
// }

// function answer(arr){
//         const a = {}
//         for(let i = 0; i<arr.length;i++){
//                 let num = arr[i]
//                 a[num] = a[num] ? a[num] + 1:1
//         }
//         return a;
// }
// const name = ['jon', 'bill', 'jon', 'ann', 'a' ]
// const result = answer(name)
// console.log(result);

// const filteredNew = {

// }

// const numbers = [1,2,3,6,5,4,8,8,4,5,3]

// for (let i = 0; i < numbers.length; i++) {

// }

// def ketma_ket_yigindi(numbers):
//     yigindi = 0
//     for i in range(len(numbers) - 1)
//         yigindi += numbers[i] + numbers[i+1]
//     return yigindi

//     for (let i = 0; i < numbers.length; i++) {
//         let result = 0
//         result +=numbers[i]
// }
//         console.log(result);

// function foo(...numbers){
//     let result = 0
//     for (let i = 0; i < numbers.length; i++) {
//         result +=numbers[i]

//     }

//     return result
// }

// console.log(yigindi);

// function foo(...numbers){
//     let result = 0
//     for (let i = 0; i < numbers.length; i++) {
//         result +=numbers[i]

//     }

//     return result
// }

// let arr = [1, 2, 3, 4,5];
// let result = task1(arr);
// function task1(arr) {
//         let result = [];
//         let sum = 0;

//         for (let i = 0; i < arr.length; i++) {
//           sum += arr[i];
//           result.push(sum);
//         }

//         return result;
//       }

//       console.log(result);

// let number = [1, 2, 3, 4];

// function task(number) {
// let result = [];
// let sum = 0;

// for (let i = 0; i < number.length; i++) {
// sum += number[i];
// result.push(sum);
// }

// return result;
// }

// console.log(task(number));

// const meva = ['Handalak', 'qovun', 'tarvuz']
// // let res = meva.unshift('olma')

// meva.unshift('olma1','anor')
// console.log(meva);

// let arr = [2,3,4,5,6], add=5
// for (let i = arr.length-1; i>=0; i--) {
//         arr[i+1]=arr[i]
// }
// arr[0]=add
// console.log(arr);

// var res = ''

// let array = 'salom'

// for (let i = array.length-1; i>=0; i--) {
//         res+=array[i]
// }
// console.log(res);

// function findMatchingElements(n, array1, array2) {
//         let sortedArray1 = array1.slice().sort((a, b) => b - a);
//         let matchingIndex = -1;
//         for (let i = 0; i < n; i++) {
//           if (sortedArray1[i] === array2[i]) {
//             matchingIndex = i;
//             break;
//           }
//         }
//         console.log("Matching Index:", matchingIndex);
//         console.log("Matching Value:", array2[matchingIndex]);
//       }

//       let n = 5;
//       let array1 = [9, 5, 2, 7, 1];
//       let array2 = ["olma", "anor", "behi", "nok", "olcha"];

//       findMatchingElements(n, array1, array2);

// Oxir yoki boshi 6 bo'lgan arrayni aniqlash

// const nums = [5,8,5,36,6]

// function array(nums) {
//   if(nums[0]===6 || nums[nums.length - 1] === 6){
//     return true
//   }else{
//     return false
//   }

// }

// console.log(array(nums));

// Berilgan arrayda 1-chi va oxirgi elementi teng bo'lsa true qaytarsin

// const nums = [4,8,5,36,4]

// function array(nums) {
//   if(nums[0]==nums[nums.length - 1]){
//     return true
//   }else{
//     return false
//   }

// }

// console.log(array(nums));

// Baholash
// const raqamlar = [80,90,60]
// var sum = 0
// function ortaArifmetik(raqamlar) {
//   for (let i = 0; i < raqamlar.length; i++) {
//     sum+=raqamlar[i]

//   }

//   const ortaArifmetik=sum/raqamlar.length
//   return ortaArifmetik
// `
// if(ortaArifmetik>=1 && ortaArifmetik<=59){
//   console.log('F');
// }else if(ortaArifmetik>=60 && ortaArifmetik<=69){
//   console.log('D');
// }else if(ortaArifmetik>=70 && ortaArifmetik<=79){
//   console.log('C');
// }else if(ortaArifmetik>=80 && ortaArifmetik<=89){
//   console.log('B');
// }else if(ortaArifmetik>=90 && ortaArifmetik<=100){
//   console.log('A');
// }`

// console.log(console);

// const person = {
// name: 'John',
//   age: 30,
//   isMarried: true
// }

// const res = []

// for (let ketmon in person){
//   console.log(ketmon);
//   console.log(person[ketmon]);

// }

// const sum = [10,2,5]
// for (const item of sum) {
//   console.log(item);
// }

// a=10

// const person ={
//   name: 'Bill',
//   age: 30,
//   lastName: 'Ann'
// }

// const val = Object.entries(person)
// console.log(val);

// const kitoblar = [
//   {
//     title: "O'tgan kunlar"
//     author: "Otkit Xoshimov"
//     reading: true
//   },
//   {
//     title: "Dunyo"
//     author: "Otgan Xoshimov"
//     reading: false
//   },
//   {
//     title: "Xamsa"
//     author: "Navoiy"
//     reading: true
//   },
// ]

// for (const book of kitoblar) {
//   console.log(
//     `
//     kitob nomi: ${book.title}
//     `
//   );
// }

// function objectcreat(firstname,lastname) {
//   const obj = {}
//   obj.firstname
// }

// const obj = new Object()

// obj.firstname = 'Sherbek'
// obj.lastname = 'Mavlonov'

// console.log(obj);

// const ism ={
//   name: "Yusuf"
// }
// ism.name="sami";

// console.log(ism);

// const nums = [1111]

// function name(nums) {
//     if (nums[i] == nums[i]) {
//       console.log(true);
//     }
// }

// let number = 222222;
// let isSame = isDigitsSame(number);
// console.log(isSame);

// function isDigitsSame(number) {
//   let digits = number.toString().split("");
//   let firstDigit = digits[0];
//   for (let i = 1; i < digits.length; i++) {
//     if (digits[i] !== firstDigit) {
//       return false;
//     }
//   }
//   return true;
// }

// let str = '';

// const arr = ['olma', 'anor', 'anjir'];

// function longstr(arr) {
//   for (let i = 0; i <5 arr.length; i++) {
//     if(arr[i].length>str.length){
//       str=arr[i]
//     }

//   }
//   return str

// }

// console.log(longstr[arr]);

// function foo(arr) {
//   let a = ''

//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i].length > a.length){
//       a=arr[i]
//     }
//   }

//     return a
// }

// let longSrt = (foo(['olma', 'anora', 'Nurbek']));

// let newStr = ''

// function uzunSoz(longSrt) {
//     for (let i = longSrt.length-1; i>=0; i--) {
//       newStr+=longSrt[i]
//       newStr= newStr+longSrt

// //     }

// //     return newStr
// // }

// // console.log(uzunSoz(longSrt));

// // let str = ''

// // let arr = ['absdabs']

// // function nums(arr) {

// //   for (let i = 0; i < arr.length; i++) {
// //     if(str.indexOf(arr[i]) === -1){
// //         str+=arr[i]
// //     }
// //   }

// //   return str

// // }

// // console.log( nums(arr) );

// function foo(str) {
//       let res = ""
//       for (var i = 0; i < str.length; i++){
//         if (res.indexOf(str[i]) === -1){
//           res += str[i]
//         }
//       }
//       return res
//     }
//     console.log(foo("abcdabc"))

("use strict");
// let number;
// console.log('number' *8);

// console.log(number);

// const person = {
//   age: 30,
//   isMarried: true,
//   haier: 'black'
// }

// console.log(person.haier);

// let person = ['19', 'red', 20]

// console.log(person[2,1]);

// const place = []
// // place[0] =  prompt('are you male', '')
// place[2] =  prompt('are you male', '')
// place[3] =  prompt('are you male', '')
// place[4] =  prompt('are you male', '')
// console.log(typeof place);

// let str = '1asd3ge34gd';

// function foo(str){
//     return str.replace(/\d/g,'$')
// }
//   console.log(foo(str))

// const arr = [1,2,3,4,5,6]
// // console.log(arr.length)
// // let result = false
// function foo (array) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr.length % 2 === 0){
//             return true
//         }
//     }
//     return false
// }
// console.log(foo(arr))

// let nums = 1000
// if(typeof(nums) == 'number'){
//     console.log(true)
// }else{
//     console.log(false)
// }

// const arr = [1,2,3,4,5,6]
// console.log(arr.length)
// let result = false
// function foo (array) {q
//     for (let i = 0; i < arr.length; i++) {
//         if(arr.length % 2 === 0){
//             return true
//         }
//     }
//     return false
// }
// console.log(foo(arr))

// const longString = newString.length

// function sozlar(newString) {
//   for (let i = 0; i < newString.length; i++) {
//     if(newString[i] === 'ahmoq'){
//       // newString.length[i].replace('*')
//       newString=newString.replaceAll("ahmoq","*");
//     }
// }
//      return newString

// }

// let str = 'ahmoq sen odam bolmaysan ahmoq'

// const newString = str.split(' ')
// console.log(newString);
// for (const a of newString) {

//   if(a === 'ahmoq'){
//     str.replace('ahmoq','*****')
//   }

//   console.log(str);
// }

// let str = ' salom @hello dunyo'

// const newString = str.split('')

//   for (let i = 0; i < str.length; i++) {
//       if(newString[i] === '@'){
//         console.log(Error);
//       }else{
// //         console.log(str);
// //       }
// //   }

// let str = 'salom sum????ma? dunyo? d'
// var str1 = '';

// function newStrFind(str) {

//   for (let i = 0; i < str.length; i++) {

//     if(str[i] === '?'){
//       str1 = str.replace(/\?/g, "");
//   }

//   return str1
// }
// }

// console.log(newStrFind(str));

// let str = 'salom sum????ma? dunyo? d'
// let newStr = ''

// function newStrFind(str) {
//   newStr = str.replace(/\?/g, "");
//   return newStr;
// }
// console.log(newStrFind(str));

// let str = 'salom dunyo'

// function upperLatter(str) {
//   let words = str.split(" ");

//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }
//   return words

// }

// console.log(upperLatter(str));

// let str = 'awfjnerrnjrqw'

// let str1 = []

// function sozlar(str) {
//     for (let i = 0; i < str.length; i+=n) {
//         res+=res.push(str.substr(i,n))
//     }
//     q
// }

// function foo(str) {
//   try {
//     return str.substr(0, 5);
//   } catch (err) {
//     console.log(err);
//     return;
//   }
// }

// ----------------------------------------------

// function foo(firsName, lastName) {
//   return { firsName, lastName };
// }

// const { firsName, lastName } = foo("john", "due");

// console.log(lastName, firsName);

// console.log(parseInt(Math.random()*100000));
// // console.log(parseInt(Math.random()*10000));

// const numberofSeries = +prompt("nechta serial", "");
// const seriesDB = {
//   count: numberofSeries,
//   series: {},
//   actors: {},
//   genred: [],
//   privet: false,
// };

// const a = prompt("nechi baho"),
//   b = prompt("oxirgi qaysi"),
//   c = prompt("nechi baho"),
//   d = prompt("oxirgi qaysi");

// Qaytda chaqirish

// function sayHello() {
//   console.log("Hello world");
// }

// function sayBye() {
//   console.log("Bye world");
// }

// function foo(ketmoq, salomBersinmi) {
//   if (salomBersinmi) {
//     ketmoq();
//   }
// }

// foo(sayHello,true)

// --------------------------------------------------------

// SORTLASH OPERATORLARI

// const arr = [3,4,5,1,9,22]

// const sortedArr = arr.sort(callBack)
// console.log(sortedArr);
// function callBack(a,b) {
//   return b-a
// }

// -----------------------------------------------------------

// CallBack function

// const contacts = [
//   {
//     name: "Ravshan kursdosh",
//     phoneNumber: "910718903",
//     avatar: ["https://qanadir image manzili", "https://ikkinchi usuli"],
//     lastActive: "10:23",
//     userName: "@ kotta_bola",
//     bio: "San o'qigan kitobni man yozganman sakrama, auf",
//     isHidePhoneNumber: false,
//     isBlocked: false,
//   },
//   {
//     name: "Abduhakim bratishka",
//     phoneNumber: "997570788",
//     avatar: ["https://qanadir image manzili", "https://ikkinchi usuli"],
//     lastActive: "Yaqinda online edi",
//     userName: "@ vorzakon",
//     bio: "2008 larni sindirish bandasiga emas",
//     isHidePhoneNumber: true,
//     isBlocked: true,
//   },
//   {
//     name: "O`ktam googler",
//     phoneNumber: "930425848",
//     avatar: ["https://qanadir image manzili", "https://ikkinchi usuli"],
//     lastActive: "10:56",
//     userName: "@ oktam_vines",
//     bio: "Dasturlashni o`rgansang hayotni tushunib yeta olasan",
//     isHidePhoneNumber: false,
//     isBlocked: true,
//   },
// ];

// const bloklanmaganlar = contacts.filter((contacts) => !contacts.isBlocked)

// console.log(bloklanmaganlar);

// const sorted = [...contacts].sort((birinchi, ikkinchi) =>
//   birinchi.name.localeCompare(ikkinchi.name)
// );

// console.log(sorted);

// const students = [
//   {
//     name: "John",
//     isDone: true,
//     price: 20,
//   },
//   {
//     name: "Due",
//     isDone: false,
//     price: 40,
//   },
// ];

// const bugunOtadimi = students.every((item) => item.isDone);
// const bugunOtadimi2 = students.some((item) => item.isDone);

// const newStudentList = students.map((students, indeks, massiv) => {
//   return { ...students, price: students.price };
// });

// // const talaba  = students.find((item) => item.name === "Ravshan");
// const studentIndex = students.findIndex(ravshan);
// function ravshan(item) {
//   return item.name === "Ravshan";
// }
// console.log(studentIndex);

// const arr = [1, 2, (3)[(4, 5, [(7, 8, 9, (10)[11,52[52]])])]];

// const newarr = arr.flat(Infinity)
// console.log(newarr);

// const obj ={
//   ismi:'john'
// }
// Object.freeze.obj

// =========================================
// callBack function

// function sayHello(param) {
//   console.log('Hello world' + param)
// }
// function sayBye() {
//   console.log('Bye world')
// }

// function foo(ketmon, salomBersinmi) {
//   if (salomBersinmi) {
//     ketmon(' Dunyo')
//   }
// }

// foo(sayHello, true)

// const arr = [
//   'Hello world',
//   'Salom dunyo',
//   'assalom alaykum',
//   'Blue',
//   'abb',
//   'A',
// ]

// const newArr = [...arr].sort((a, b) => a.localeCompare(b))

// function saralash(a, b) {
//   return a - b
// }

// console.log('Original: ', arr)
// console.log('Sorted: ', newArr)

// FILTER
// const arr = ['Sherbek', 'Asilbek', 'Kamron', 'Abduxakim', 'bekzod']

// const filteredArr = arr.filter(function (value, index, arr) {
//   return value.includes('bek')
// })

// console.log(filteredArr)
// const contacts = [
//   {
//     name: 'Ravshan kursdosh',
//     phoneNumber: '910718903',
//     avatar: ['https://qanadir image manzili', 'https://ikkinchi usuli'],
//     lastActive: '10:23',
//     userName: '@ kotta_bola',
//     bio: "San o'qigan kitobni man yozganman sakrama, auf",
//     isHidePhoneNumber: false,
//     isBlocked: false,
//   },
//   {
//     name: 'Abduhakim bratishka',
//     phoneNumber: '997570788',
//     avatar: ['https://qanadir image manzili', 'https://ikkinchi usuli'],
//     lastActive: '09:44',
//     userName: '@ vorzakon',
//     bio: '2008 larni sindirish bandasiga emas',
//     isHidePhoneNumber: true,
//     isBlocked: true,
//   },
//   {
//     name: 'O`ktam googler',
//     phoneNumber: '930425848',
//     avatar: ['https://qanadir image manzili', 'https://ikkinchi usuli'],
//     lastActive: 31232312,
//     userName: '@ oktam_vines',
//     bio: 'Dasturlashni o`rgansang hayotni tushunib yeta olasan',
//     isHidePhoneNumber: false,
//     isBlocked: true,
//   },
// ]

// const noBlockedUser = contacts.filter((contact) => !contact.isBlocked)

// console.log(noBlockedUser)

// const sorted = [...contacts].sort((birinchi, ikkinchi) => {
//   // return birinchi.lastActive.localeCompare(ikkinchi.lastActive)
//   return Number(birinchi.lastActive[0]) - Number(ikkinchi.lastActive[0])
// })

// console.log(sorted)

//   ========

// const students = [
//   {
//     name: 'Ravshan',
//     isTaskFinish: true,
//     price: 20,
//   },
//   {
//     name: 'Asqar',
//     isTaskFinish: true,
//     price: 40,
//   },
// ]

// const bugunDarsOtamizmi = students.every((item) => item.isTaskFinish)
// const bugunDarsOtamizmi2 = students.some((item) => item.isTaskFinish)

// console.log(bugunDarsOtamizmi)

// const newStudentList = students.map((student, indeks, massiv) => {
//   return { ...student, price: student.price + 20 }
// })

// students.forEach((item, index, arr) => {
//   if (item.name.length > 5) {
//     console.log(item)
//   }
// })

// const students = [
//   {
//     name: 'Ravshan',
//     age: 16,
//   },
//   {
//     name: 'Asqar',
//     age: 50,
//   },

//   {
//     name: 'Ravshan',
//     age: 18,
//   },
// ]

// const student = students.find((item) => item.name === 'Ravshan')
// const studentIndex = students.findIndex(ravshan)

// function ravshan(item) {
//   return item.name === 'Ravshan'
// }

// const arr = [1, 2, 3, 4, 5, [1, 2, [45, 45, [9012, 12]]]]

// const newArr = arr.flat(Infinity)
// console.log(newArr)

// const months = ['Mar', 'Jan', 'Feb', 'Dec']
// const sortedMonths = months.toSorted()
// console.log('Orginal: ', months)
// console.log('Sorted: ', sortedMonths)

// const array1 = ['a', 'b', 'c']

// // console.log(typeof array1.join('='))

// const array2 = { ...array1 }

// array2[0] = 'c'

// console.log(array1)

// const array1 = ['a', 'b', 'c', 'd', 'e']
// const newArr = array1.copyWithin(2, 0, 3)
// console.log(newArr)

// const array1 = ['a', 'b', 'c']
// const array2 = ['d', 'e', 'f']
// const array3 = array1.concat(array2)

// array2[2] = 'g'

// console.log(array2)

// const obj = {
//   ismi: 'John',
//   yoshi: 40,
//   tugilganJoyi: 'Termiz',
// }

// Object.freeze(obj)
// obj.tugilganJoyi = 'Tashkent'

// const students = [
//   {
//     id: 1,
//     firstName: "Anvar",
//     lastName: "Qayumov",
//     course: "Javascript",
//     balance: 100,
//     isBanned: true,
//     tasks: [
//       {
//         date: "12",
//         isFinished: false,
//       },
//       {
//         date: "13",
//         isFinished: true,
//       },
//       {
//         date: "14",
//         isFinished: true,
//       },
//     ],
//     lessons: [],
//     isOurStudent: true,
//   },

//   {
//     id: 2,
//     firstName: "John",
//     lastName: "Due",
//     course: "C++",
//     balance: 0,
//     isOurStudent: true,
//     isBanned: true,
//   },
// ];

// function addStudent() {}
// function banStudent() {}
// function updateStudentStatus(studentId, newStatus) {}

// 1. 10 kunda 3 tadan kop dars qoldirgan bolsa chopish kerak.

// 2. addStudent(ismi, familyasi,course, balance)

// function myFunc(params) {
//     const newStr={
//         firstName: 'Ann',
//         lastName: 'Bill',
//         balance: 50,
//     },
//     params(newStr);
// }

// myFunc()

// 3. Admin uchun studentlarni balance tugaganlarini tepada chiqazib quyish

// 4. Ismlari bo'yicha qidirish

// 5. faqatgina chetlatilgan studentlarni chiqazib bersin

// 6. admin bitta functionni chaqirsin shunga userning id sini berib yuborsa va statusini (ya'ni o'qishdan chetlatilgan yoki yo'qligini statusi) students arraydan update qilib quysin

// 7. userlarning ismi, familyasi, balansinigina chiqazib beradigan function tuzing

// // 8. userning balancini yangilash imkoniyati bo'lsin

// const myFinc = (callback) => {
//   let number = 50;
//   callback(number);
// };

// myFinc(function (params) {
//   console.log(params);
// });

// const newFunc = (callfunck) => {
//   let number = 30;
//   callfunck(number);
// };

// newFunc(function (value) {
//   console.log(value);
// });

// function names(params) {
//   console.log("Hello " + params);
// }

// function funck(callback) {
//   var params = "please name";
//   callback(params);
// }

// funck(names);

// const str = "aerg*wega";

// function findIndexStar(str) {
//   let newstr = str.indexOf("*");
//   for (let i = 0; i < str.length; i++) {
//     if (newstr - 1 == newstr + 1) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(newstr);

// let name = "john";

// const person = {
//   name: "anvarbek",
//   age: 20,
//   lastActivites: {
//     date: 12,
//     task: "uyga vazifa",
//   },
// };

// console.log(`yangiNom; ${yangiNom}
// age: ${age}
// date: ${date}
// task: ${task}

// `);

// const {
//   name: yangiNom,
//   age,
//   lastActivites: { date, task },
// } = person;

// const json = JSON.stringify(person)

// const obj =JSON.parse(json)

// console.log(json);

// console.log(
//   date.getHours() -
//     12 +
//     ":" +
//     (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
//     " " +
//     "PM"
// );
// console.log(
//   date.getHours() -
//     12 +
//     ":" +
//     (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
//     ":" +
//     date.getSeconds() +
//     " " +
//     "PM"
// );

// console.log(
//   (date.getMonth() + 1 < 10
//     ? "0" + (date.getMonth() + 1)
//     : date.getMonth() + 1) +
//     "/" +
//     date.getDate() +
//     "/" +
//     date.getFullYear()
// );
// console.log(
//   date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
// );

// const arr = [
//   " ",
//   "Jan",
//   "Feb",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "Oktober",
//   "November",
//   "December",
// ];

// console.log(
//   arr[date.getMonth() + 1] +
//     " " +
//     date.getDate() +
//     "," +
//     " " +
//     date.getFullYear()
// );

// const array = [
//   " ",
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Okt",
//   "Nov",
//   "Dec",
// ];

// console.log(
//   array[date.getMonth() + 1] +
//     " " +
//     date.getDate() +
//     "," +
//     " " +
//     date.getFullYear()
// );

// console.log(
//   arr[date.getMonth() + 1] +
//     " " +
//     date.getDate() +
//     "," +
//     " " +
//     date.getFullYear() +
//     " " +
//     (date.getHours() - 12) +
//     ":" +
//     (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
//     " " +
//     "PM"
// );

// console.log(
//   array[date.getMonth() + 1] +
//     " " +
//     date.getDate() +
//     "," +
//     " " +
//     date.getFullYear() +
//     " " +
//     (date.getHours() - 12) +
//     ":" +
//     (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
//     " " +
//     "PM"
// );

// const weekdays = [
//   "Sunday",
//   "Monday",
//   "Tuesdan",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// const weekdays2 = [
//   "Sun",
//   "Mon",
//   "Tue",
//   "Wed",
//   "Thu",
//   "Fri",
//   "Sat",
// ];

// console.log(
//   weekdays[date.getDay()] +
//     "," +
//     " " +
//     arr[date.getMonth() + 1] +
//     " " +
//     date.getDate() +
//     "," +
//     " " +
//     date.getFullYear() +
//     " " +
//     (date.getHours() - 12) +
//     ":" +
//     (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
//     " " +
//     "PM"
// );

// console.log(
//   weekdays2[date.getDay()] +
//     "," +
//     " " +
//     arr[date.getMonth() + 1] +
//     " " +
//     date.getDate() +
//     "," +
//     " " +
//     date.getFullYear() +
//     " " +
//     (date.getHours() - 12) +
//     ":" +
//     (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
//     " " +
//     "PM"
// );

// let ages = 1960;

// console.log(date.getFullYear() - ages);
// console.log(
//   date.getHours() -
//     12 +
//     ":" +
//     (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
//     " " +
//     "PM"
// );

// ----------------6---------------

// const dates = new Date();

// let myYear = 1960;

// console.log(date.getFullYear() - myYear);

// // -------------1--------------------

// const monthNumber = [
//   "31",
//   "29",
// //   "31",
// //   "30",
// //   "31",
// //   "30",
// //   "31",
// //   "31",
// //   "30",
// //   "31",
// //   "30",
// //   "31",
// // ];

// // console.log(
// //   monthNumber[date.getMonth()]
// // );

// // // -------------------------------------------

// // // ---------------------2-------------------

// // const date1 = '2022-01-01'
// // const date2 = '2023-06-30'

// // function compareDates(date1, date2) {
// //   const firstDate = new Date(date1);
// //   const secondDate = new Date(date2);

// //   if (firstDate < secondDate) {
// //     console.log(date2);
// //   } else if (firstDate > secondDate) {
// //     console.log(date1);
// //   } else {
// //     console.log(`Ular teng`);
// //   }
// // }

// // console.log(compareDates(date1, date2) );

// // // -------------------3----------------

// // function foo(value){
// //   let day=new Date(value).getDay()
// //   if(day==6||day==0){
// //     return 'Weekday'
// //   }else{
// //     return undefined
// //   }
// // }
// // console.log(foo('Nov 15, 2014'));
// // console.log(foo('Nov 16, 2014'));
// // console.log(foo('Nov 17, 2014'));

// // function countLetters(word) {
// //   var letterCount = {};

// //   for (var i = 0; i < word.length; i++) {
// //     var letter = word[i];
// //     if (letterCount[letter]) {
// //       letterCount[letter] += 1;
// //     } else {
// //       letterCount[letter] = 1;
// //     }
// //   }
// //   return letterCount;
// // }

// // var word = prompt("So'zni kiriting:");
// // var letterCounts = countLetters(word);

// // for (var letter in letterCounts) {
// //   console.log(letter + ": " + letterCounts[letter]);
// // }

// // ----------berilga stringda takrorlangan xarflar nechtaligini aniqlash----------

// // const str = "Hello wordrld";
// // const map = new Map();

// // for (let i = 0; i < str.length; i++) {
// //   if (map.has(str[i])) {
// //     const prev = map.get(str[i]);
// //     map.set(str[i], prev + 1);
// //   } else {
// //     map.set(str[i], 1);
// //   }
// // }
// // // console.log(map);

// // const str = "JavaSacriptv sallom";
// // const set = new Set(str)
// // // console.log(new Set(...str.split(" ")));

// // let result = "";
// // set.forEach((item) => (result += item));
// // console.log(result);

// // const arr = [1,2,3,4]

// function aniqlash(arr) {
//     var takrorlanganSonlar = [];
//     var qatorSonlari = {};

//     for (var i = 0; i < arr.length; i++) {
//       var element = arr[i];

//       if (qatorSonlari[element] && !takrorlanganSonlar.includes(element)) {
//         takrorlanganSonlar.push(element);
//       } else {
//         qatorSonlari[element] = true;
//       }
//     }

//     return takrorlanganSonlar;
//   }

//   // Misol uchun arrayni tekshiramiz:
//   var array = [1, 2, 3, 4, 2, 3, 5, 6, 1, 7, 8, 7];
//   var takrorlanganSonlar = aniqlash(array);

//   console.log("Takrorlangan sonlar:", takrorlanganSonlar);

// function ayirish(value) {
//     return value - 2
// }

// function customMap(callBackFunction) {
// //     const res = []
// //     for (let i = 0; i < array.length; i++) {
// //             res.push(callBackFunction(this[i]))
// //     }
// //     return res
// // }

// // console.log(res);

// // function foo(arr) {
// //   let takrorlanganSonlar = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     let nums = arr[i];
// if (takrorlanganSonlar[nums]  ) {
// //     }
// //   }
// // }

// // const obj = {};
// // const arr = [1, 1, 2, 2, 3];

// // // for (let element of arr) {
// // //   obj[element] = obj[element] ? obj[element] + 1 : 1;
// // // }
// // // console.log(obj);

// // const map = new Map();
// // for (let el of arr) {
// //   map.set(el, map.get(el) + 1 || 1);
// // }

// // berilgan sonlarda tekrorlanganlari soni tenfmi

// const arr = [1, 1, 1, 2, 2, 2, 3];
// const map = new Map();
// for (let el of arr) {
//   map.set(el, map.get(el) + 1 || 1);
// }

// const unic = new Set(map.values());
// console.log(unic.size === map.size);

// -----------------

// let text = "Assalomu AleykuAaaaaaaaam";
// function foo(acc, curr) {
//   acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
//   return acc;
// }

// let result = text.split('').reduce(foo, {});
// console.log(result);

// --------

// const users = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//     age: 20,
//   },
//   {
//     firstName: "John",
//     lastName: "Doe",
//     age: 18,
//   },
//   {
//     firstName: "John",
//     lastName: "Doe",
//     age: 40,
//   },
// ];

// function foo(value) {
//    if(users[age]>18 || users[age]<25){
//     return true
//    }
//    return false
// }

// const yoshi = users.filter(foo)
// console.log(yoshi);

// ---------------Higher order function-------------

// function foo() {
//   console.log('Salom dunyo');
// // }

// // function boo(params) {
// //   params()
// // }

// // boo(foo)

// // ---------------Higher order function-------------

// const arr = [1, 2, 3, 4, 5];

// function qoshish(value) {
//   return value + 2;
// }

// 11 const arr = [1, 2, 1, 2, 3, 1, 2];

// function findUniqueElements(arr) {
//   const counts = {};
//   const uniqueElements = [];

//   arr.map((element) => {
//     counts[element] = counts[element] ? counts[element] + 1 : 1;
//   });

//   arr.map((element) => {
//     if (counts[element] === 1) {
//       uniqueElements.push(element);
//     }
//   });

//   return uniqueElements;
// }

// const uniqueArr = findUniqueElements(arr);
// console.log(uniqueArr);

// function foo(callback, array) {
//   const res = [];
//   for (let i = 0; i < array.length; i++) {
//     res.push(callback(arr[i]));
//   }
//   return res;
// }
// const newArr = arr.map(qoshish)
// console.log(newArr);

// console.log(foo(qoshish, arr));

// function kopaytr(arr) {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     res.push(arr[i] * 2);
//   }
//   return res;
// }

// 17-dars

// function sayy() {
//   return function () {
//     return function () {
//       return 'salom'
//     }
//   }
// }
// console.log(sayy()()());

// const foo = function nima (){
//   return nima
// }
// console.log(foo());

// (function(){
//   console.log("hello");
// })()

// ----------faqat 1 marta qatnashgan sonni aniqlash------------
// const arr = [1, 2, 3, 1, 1, 2, 2];

// const newArrv = arr.sort((a, b) => a - b);
// for (let i = 0; i < newArrv.length; i++) {
//   if (newArrv[i - 1] !== newArrv[i] && newArrv[i + 1] !== newArrv[i]) {
//     console.log(newArrv[i]);
//   }
// }

// -----------------------

// // --------berilgan son nechanchi indekisda joylashgan------

// const nums = [1, 3, 5, 8];
// let target = 6;
// // const targetIndex = nums.indexOf(target);

// // -1-
// /*if (targetIndex !== -1) {
//   console.log(targetIndex);
// } else {
//   nums.push(target);
//   let newNams = nums.sort((a, b) => a - b);
//   console.log(newNams.indexOf(target));
// }*/

// // -2-

// /*function foo(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= target) {
//       return i;
//     }
//   }
//   return arr.length;
// }
// console.log(foo(nums, target));*/

// // let obj = {
// //   name: "olma",
// // };

// // function foo(obj) {
// //   return !Boolean(Object.keys(obj).length);
// // }
// // console.log(foo(obj));

// let str = "is2 simple4 This1 a3";
// const res = {};
// const arr = str.split(" ");

// for (let i = 0; i < arr.length; i++) {
//   let str1 = '';
//   let cur = null;
//   for (let j = 0; j < arr[i].length; j++) {
//     if (isNaN(arr[i][j])) {
//       str1 += arr[i][j];
//     } else {
//       cur = arr[i][j];
//     }
//   }
//   res[cur] = str;
// }

// const result = Object.values(res).join(' ');
// console.log(result);

// let ress={}
// let s='dunyo1  aleykum3 salom5'
// const arr=s.split(' ')
// for (let i = 0; i < arr.length; i++) {
//     let str=''
//     let curr=null
//     for (let j = 0; j < arr[i].length; j++) {
//     if (isNaN(arr[i][j])) {
//         str+=arr[i][j]
//     }
//     else{
//         curr=arr[i][j]
//     }
//     }
//     ress[curr]=str
// }
// const result=Object.values(ress).join(' ')
// console.log(result);

// // let str = "is2 simple4 This1 a3";
// // const res = {};
// // const arr = str.split(" ");

// // for (let i = 0; i < arr.length; i++) {
// //   let str1 = '';
// //   let cur = null;
// //   for (let j = 0; j < arr[i].length; j++) {
//     if (isNaN(arr[i][j])) {
//       str1 += arr[i][j];
//     } else {
//       cur = arr[i][j];
//     }
//   }
//   res[cur] = str1; // Сохраняем подстроку str1 вместо исходной строки str
// }

// // const sortedKeys = Object.keys(res).sort(); // Сортируем ключи объекта
// // const result = sortedKeys.map(key => res[key]).join(' '); // Получаем значения в отсортированном порядке
// // console.log(result);

// const result = Object.values(res).join(' ');
// console.log(result);
// function foo(firsName = "jog", lastName) {
//   console.log(firsName + "" + (lastName || "Fam"));
// }
// foo("Doe");

// let n = 1;
// function foo() {
//     if(n!=20)
//     rtet
// }
// foo();

// -----tub va mkammal sonlar---------
/*let nums = 10;
for (let j = 1; j < nums; j++) {
  let str = j;
  let arr = 0;
  for (let i = 1; i <= str; i++) {
    if (str % i == 0) {
      arr += 1;
    }
  }

  if (arr == 2) {
    console.log(j);
  }
}

let nums = 27;
let ozgaruvchi = 0;

for (let i = 1; i < nums; i++) {
  if (nums % i == 0) {
    ozgaruvchi += i;
  }
}
nums == ozgaruvchi ? console.log("mukammal") : console.log("xato");*/

// function foo() {}

// let nums = (function name(a, b) {
//   return a + b;
// })(3, 4);
// console.log(nums);

// let year = 2022;
// let n = function (params) {
//   console.log("yil: " + year);
//   console.log(params + " tushundim");
// };
// n("summa");

// --------recursion------

// let son = 10;
// let sum = 0;
// function foo(str) {
//   if (str == 1) {
//     return 1;
//   }
//   return str + foo(str - 1);
// }

// sum = foo(son);
// console.log(sum);
// -----------------------------------

// const res = arr.flat(Infinity)
// console.log(res);
// console.log(Array.isArray(arr));
// function foo(params) {}

// ----------------Arraylar------------
/*const arr = [1, [2], 3, [4, 5, [6, 7, [8, [9]]]]];

function foo(arr) {
  let res = [];
  arr.forEach((sum) => {
    if (Array.isArray(sum)) {
      res = res.concat(foo(sum));
    } else {
      res.push(sum);
    }
  });
  return res;
}

console.log(foo(arr));*/

// function foo(arr) {
//   let res = [];
//   arr.forEach((val) => {
//     if (Array.isArray(val)) {
//       res = res.concat(foo(val)); // Pass val instead of arr
//     } else {
//       res.push(val);
//     }
//   });
//   return res;
// }

// const arr = ["a", "b", "d", "d", "a", "b", "b", "a"];
// const map = new Map();

// console.log(arr);

// if (a) {

// }

// 'use strict'
// let fName = "O'ktam";

// function sayHello() {
//   let fName = "botir";
//   let text = "Assalom alaykum " + fName;
//   return text;
// }

// const res = sayHello();

// console.log(res);

// ----------------------------------

// var firsName = "John";

// function foo() {
//   let firsName = 'Anna'
//   let text = "Assalomu Aleykum " + window.firsName;
//   return text;
// }

// console.log(foo());

// const arr = [0, 1, 2, 3, 5, 6];

// const summ = [];

// for (let i = 0; i < arr.length; i++) {
//     if([arr[i] ])
// }

// const arr = [0, 1, 2, 5, 6, 7];
// let missingNumber = [];

// for (let i = 0; i <= arr.length; i++) {
//   if (!arr.includes(i)) {
//     missingNumber.push(i);  }
//   break;

// }
// console.log(missingNumber);

// const newArr = new Array(arr.length).fill(-1)

// for (const el of arr){
//   newArr[el]
// }

// const matches = [
//   [1, 3],
//   [2, 3],
//   [3, 6],
//   [5, 6],
//   [5, 7],
//   [4, 5],
//   [4, 8],
//   [4, 9],
//   [10, 4],
//   [10, 9],
// ];

// Output: [
//   [1, 2, 10],
//   [4, 5, 7, 8],
// ];

// // let newArr = [];
// const matches = [
//   [1, 3],
//   [2, 3],
//   [3, 6],
//   [5, 6],
//   [5, 7],
//   [4, 5],
//   [4, 8],
//   [4, 9],
//   [10, 4],
//   [10, 9],
// // ];

// // const counts = {};

// // for (let i = 0; i < matches.length; i++) {
// //   const match = matches[i];
// //   const x = match[0];
// //   const y = match[1];

// //   if (!counts[x]) {
// //     counts[x] = 1;
// //   } else {
// //     counts[x] += 1;
// //   }

// //   if (counts[y]) {
// //     counts[y] -= 1;
// //   }
// // }

// // const lessUsedElements = [];

// // for (const num in counts) {
// //   if (counts[num] < 1) {
// //     lessUsedElements.push(parseInt(num));
// // //   }
// // // }

// // // console.log(lessUsedElements);

// // // const matches = [
// // //   [1, 3],
// // //   [2, 3],
// // //   [1, 6],
// // //   [5, 6],
// // //   [5, 7],
// // //   [4, 1],
// // //   [4, 8],
// // //   [4, 9],
// // //   [10, 4],
// // //   [10, 9],
// // // ];
// // // const matches = [
// // //   [1, 3],
// // //   [2, 3],
// // //   [3, 6],
// // //   [5, 6],
// // //   [5, 7],
// // //   [4, 5],
// // //   [4, 8],
// // //   [4, 9],
// // //   [10, 4],
// // //   [10, 9],
// // // ];

// // // const zeroIndexedMatches = matches.filter(match => match.includes(0));

// // // console.log(zeroIndexedMatches);

// // const matches = [
// //   [1, 3],
// //   [2, 3],
// //   [3, 6],
// //   [5, 6],
// //   [5, 7],
// //   [4, 5],
// //   [4, 8],
// //   [4, 9],
// //   [10, 4],
// //   [10, 9],
// // ];

// // function foo(matches) {
// //   const first = {};
// //   const second = {};

// //   for (const i of matches) {
// //     first[i[0]] = first[i[0]] + 1 || 1;
// //     second[i[1]] = second[i[1]] + 1 || 1;
// //   }

// //   const arr1 = Object.keys(first).filter((item) => second[item] === undefined);
// //   const arr2 = Object.keys(second).filter((item) => second[item] === 1);
// //   return [arr1, arr2];
// // }
// // console.log(foo(matches));

// // const list = document.querySelector(".list");
// // const obj = [
// //   {
// //     id: 1,
// //     name: "product 1",
// //     image: "1.png",
// //     price: 20000,
// //   },

// //   {
// //     id: 1,
// //     name: "product 2",
// //     image: "2.png",
// //     price: 150000,
// //   },

// //   {
// //     id: 1,
// //     name: "product 1",
// //     image: "1.png",
// //     price: 20000,
// //   },
// // ];
// // debugger

// // var fulname = "John";
// // console.log(foo);
// // function foo(name) {
// //   var tex = "assalom " + name;
// //   return tex;
// // }

// // var fullName = "John";
// // console.log(this.fullName);

// // debugger
// // foo()
// // boo()
// // function foo() {
// //   console.log('hello world');
// // }

// // function boo() {
// //   console.log('salom dunyo');
// // }

// // const school = {
// //   books: ["Alisher", "buyuk"],
// //   schoolNumber: 21,
// //   schoolName: "Burxon",
// //   bookAuthorss: ["oybek", "kamron"],
// // };

// // const [first, first1, first2] = [
// //   ...school.books,
// //   school.bookAuthorss,
// //   ...school.schoolName,
// //   school.schoolNumber
// // ];
// // console.log(first, "--", first1, '---', first2);

// // const arr = ["aziza", "dunyo", "xabar", "madam"];

// function isPalindrome(word) {
//   const reversed = word.split("").reverse().join("");
//   return word === reversed;
// }

// function findPalindromes(array) {
//   const palindromes = [];
//   for (let i = 0; i < array.length; i++) {
//     if (isPalindrome(array[i])) {
//       palindromes.push(array[i]);
//     }
//   }
//   return palindromes;
// }

// const palindromesArray = findPalindromes(arr);
// console.log(palindromesArray);

// function foo(str) {
//   let newStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   return newStr === str;
// }

// const arr = ["aziza", "dunyo", "xabar", "madam"];

// for (let item of arr) {
//   if (foo(item)) {
//     console.log(item);
//   }
// }

// // Challenge 1
// function countdown(n) {
//   //Check if n is 0(exclusive)
// 	if(n === 0) return;
//   //Else, print the value of n and invoke recursive call
//   console.log(n);
//   return countdown(n-1);
// }

// // To check if you've completed it, uncomment these console.logs!
// // countdown(5);
// // countdown(10);

// // Challenge 2
// //Create def. parameter, index and assign to 0
// function sum(array, index = 0) {
//   //Base case: if index reaches the last valid index
// 	if(index === array.length - 1) return array[array.length - 1];

//   return array[index] + sum(array, index + 1);
// }

// // uncomment these to check your work
//  // console.log(sum([1,1,1])); // -> returns 3
//  // console.log(sum([1,2,3,4,5,6])); // -> returns 21

// // Challenge 3
// function palindrome(string) {
// 	// Use Regex to sanitize input string for testcases.
//   string = string.replace(/\W/ig, '').toLowerCase();

//   //Base case 1: If we've reached the point where the string's length is less than or equal to 1, return true
//   if(string.length <= 1) return true;

//   //Base case 2: If the beginning and ending characters of the string don't match up, return false
//   if(string[0] !== string[string.length - 1]) return false

//   //Recursive case: call palindrome , but pass in a sliced version of the string w/ first and last chars removed.
//   return palindrome(string.slice(1,-1))
// }

// // console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// // console.log(palindrome("llama mall")); //-> true
// // console.log(palindrome("jmoney")); //-> false

// // Challenge 4

// /* Prime numbers cannot be
// 	- Negative
//   - Divisble by any number but by themselves and 1.
// */

// function isPrime(num, testNum = num - 1) {
//   //Take care of all negative numbers.
//   if(num < 2) return false;
//   //If we've reached the point that testNum is 1, we know that num is prime.
//   if(testNum === 1 || num === 2) return true;
//   //Check if num is divisible by testNum
//   if(num % testNum === 0) return false

//   //Recursive call: invoke isPrime, but decrement testNum by 1
//   return isPrime(num, testNum - 1)
// }

// console.log(isPrime(1)); //-> false
// // console.log(isPrime(2)); //-> true
// // console.log(isPrime(3)); //-> true
// // console.log(isPrime(4)); //-> false

// //Challenge 5
// function pathFinder(obj, arr, index = 0) {
// 	//Iterate through the keys of the passed in object,
//   //checking if each key's value matches with the array's values
//   //If each key corresponds to this value, return the final key's value(in this case, we expect a string)
//   if(typeof obj[arr[index]] === "object"){
//     return pathFinder(obj[arr[index]], arr, index + 1);
//   }
//   else if(typeof obj[arr[index]] === "string"){
//     return obj[arr[index]];
//   }
//   else {
//     return;
//   }
// }

// // const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
// // const arr = ["first", "second", "third"];
// // console.log(pathFinder(obj, arr));   //-> "finish"

// //Challenge 6

// //Create def. paramater to hold the de-nested elements.
// function flattenRecursively(arr, newArr = [], index = 0) {
//   //We're looking to de-nest our array to only one level of nesting - the outer array

//   //Plan: We can check to see if the current element is undefined,
//   //if so, we've reached the end of the array and we can return
//   if(arr[index] === undefined) return newArr;

//   //if the current element is an array, let's call flattenRecursively w/ the sub-array
//   if(Array.isArray(arr[index])) {
//     return flattenRecursively(arr[index], newArr, 0)
//   }
// 	//Else, let's push the non-array el to our newArr and continue
//   //the recursive call.
//   else{
//     newArr.push(arr[index]);
//     return flattenRecursively(arr, newArr, index + 1)
//   }
// }

// //console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
// //console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]

// //Challenge 7
// function findInOrderedSet(arr, target) {
//   if(arr[0] === target) return true;
//   else if(arr[1] > target) return false;
//   return findInOrderedSet(arr.slice(1), target)
// }
// //Bonus - Implement a binary search to prevent a continous search

// const nums = [1, 4, 6, 7, 9, 17, 45];
// // console.log(findInOrderedSet(nums, 4));  //-> true
// // console.log(findInOrderedSet(nums, 2));  //-> false

// //Challenge 8
// function countWaysToReachNthStair(n) {

// // Similiar to the fibonacci seq, we have only two possible routes for this question. For any positive integer, n, we can decrement by either 1 or 2 until we finally reach either 1 or 2. At that point - we can make use of the stack frame to keep track of the routes.

//   if(n === 1) return 1;

//   if(n === 2) return 2;
//   console.log('n is now', n)
//   return countWaysToReachNthStair(n - 1) + countWaysToReachNthStair(n - 2)

//   //For optimization, make use of a cache to store previous calculations.
// }

// // console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
// // console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
// //console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))

// //Challenge 9
// function getPermutations(arr, index = 0) {

// }

// console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
//  console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

// //Challenge 10
// function getRangeBetween(x, y, outputArr = []) {
//   //Note: x and y are exclusive
//   //Base case: Starting from x, if we reach y, let's return our arr
//   if(x === y - 1) return outputArr;
//   outputArr.push(x + 1);
//   return getRangeBetween(x + 1, y, outputArr)
// }

// // console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
// // console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]

// // ----------------------------------this-----------------------------------
// var author = 'nimadir';
// var bookNme = 'yanaNimadir';

// function showInfo(nima, ikki) {
//     console.log(`
//     Kitob nomi: ${this.bookNme}
//     `);
// }

// const showInfoWithArrowFunction = () =>{
//   console.log(`
//     Kitob nomi: ${this.bookNme}
//     `);
// }

// const book1 = {
//   author: "abdulla",
//   bookname: "otgan kunlar",
//   showInfo(){
//     console.log(`kitob nomi: ${author}`);
//   }
// };

// showInfo.call(book1,1,2)

// ----------------------------------Time vaqtdan keyin chiqishi-----------------------------

// function foo() {
//   // console.log(new Date().getSeconds());
//   console.log('salom dunyo');
// }

// setTimeout(foo, 4000)
// setInterval(foo, 2000);

// setTimeout(() => {
//   console.log("salom");
// }, 2000);

// const timeOut = setInterval(() => {
//   console.log(`uzbekistan`);
// })

// setInterval(() => {
//   clearInterval(timeOut)
// }, 1000);

// --------------------------------------------------Timer------------------------------

// const minute = document.getElementById("minute");
// const second = document.getElementById("second");

// let mins = 2;
// let seconds = 59;

// minute.innerHTML = ` ${mins < 10 ? "0" + mins : mins}`;
// second.innerHTML = `${seconds < 10 ? "0" + seconds : seconds}`;

// const interval = setInterval(() => {
//   // minute.innerHTML = mins;
//   // seconds -= 1;
//   // second.innerHTML = seconds;

//   if (second === 0 && mins - 1 >= 0) {
//     mins = mins - 1;
//     seconds = 60;
//   }

//   if (seconds === 0 && mins === 0) {
//     clearInterval(interval);
//     return;
//   }

//   minute.innerHTML = `${mins < 10 ? "0" + mins : mins}`;
//   seconds -= 1;
//   second.innerHTML = `${seconds < 10 ? "0" + seconds : seconds}`;
// }, 10);

/*const minute = document.getElementById("minute");
const second = document.getElementById("second");

let mins = 1;
let seconds = 0;

minute.innerHTML = `${mins < 10 ? "0" + mins : mins}`;
second.innerHTML = `${seconds < 10 ? "0" + seconds : seconds}`;

const interval = setInterval(() => {
  if (seconds === 0 && mins - 1 >= 0) {
    mins = mins - 1;
    seconds = 15;
  }

  if (seconds === 0 && mins === 0) {
    clearInterval(interval);
    return;
  }
  minute.innerHTML = `${mins < 10 ? "0" + mins : mins}`;
  seconds -= 1;
  second.innerHTML = `${seconds < 10 ? "0" + seconds : seconds}`;
}, 1000);

 --------------------------------------------------------------------------*/

// const s = "daabcbaabcbc";
// const part = "abc";
// // const res = s.replaceAll(part, "");
// // const res1 = res.replaceAll(part, "");
// // console.log(res1);

// function foo(str) {
//   if (str.includes(part)) {
//     return foo(str.replaseAll(part, ""));
//   }
// }
// console.log(foo(s));

// const tex = 'a1b1c1d1'

// function foo() {
//   const res = tex.match(/[a-z]/gi).length
//   return 2** res
// }console.log(foo());

/*|
--------------------------------------------------Class OOP------------------------------------
|*/

// const samsung = {
//   title: "samsung",
//   created: '2021',
//   prise: '1000$',
//   memor
// };

// class Phone {
//   constructor(title, createdAt, price, isTypeC, memory) {
//     this.title = title;
//     this.createdAt = createdAt;
//     this.price = price;
//     this.isTypeC = isTypeC;
//     this.memory = memory;
//   }

//   showInfo() {
//     console.log(
//       `Modeli: ${this.title}
//       Narhi: ${this.price}
//       Quvvatlagich: ${this.isTypeC ? "type c" : "type c emas"}
//       Xotirasi: ${this.memory}
//       Yili: ${this.createdAt}
//       `
//     );
//   }
// }

// const redmi = new Phone("Redmi", 2021, 1200, false, 64);
// const samsung = new Phone("Samsung galaxy", 2022, 1300, false, 128);

// redmi.showInfo();
// samsung.showInfo();

// class Alive {
//   eat() {
//     console.log(this.name + " Eating");
//   }
// }

// class Person extends Alive {
//   constructor() {
//     super();
//     this.name = "Vali";
//   }
// }

// class Dog extends Alive {
//   constructor() {
//     super();
//     this.name = "Bobek";
//   }
// }

// const Bobek = new Dog();
// const Vali = new Person();

// Bobek.eat();
// Vali.eat();

/*class Bino {
  constructor(nomi, etaj, nowEtaj) {
    this.nomi = nomi;
    this.etaj = etaj;
    this.nowEtaj = nowEtaj;
  }
  showInfo() {
    console.log(
      `BinoTuri: ${this.nomi}
      QavatSoni: ${this.etaj}
       Hozirda: ${this.nowEtaj}
       liftTurganJoy: ${this.lift()}
      `
    );
  }
  lift() {
    return this.etaj > this.nowEtaj ? this.nowEtaj + 1 : 1;
  }
}

const maktab = new Bino("Maktab", 4, 4);
const kollet = new Bino("Kollet", 6, 3);
const universitet = new Bino("Universitet", 7, 4);

maktab.showInfo();
kollet.showInfo();
universitet.showInfo();*/

// class Person {
//   fName = "";
//   lName = "";

//   constructor(ismi, familiyasi) {
//     this.fName = ismi;
//     this.lName = familiyasi;
//   }

//    set changeName(newName){
//     this.fName = newName;
//   }

//   get getFullName() {
//     return this.fName + " " + this.lName;
//   }
// }

// const person1 = new Person("John", "Doe");
// person1.changeName = "gishmat";
// const userningIsmi = person1.getFullName;
// console.log(userningIsmi);

/*class Kompyuter {
  constructor(nomi, narhi, xotirasi) {
    this.nomi = nomi;
    this.narhi = narhi;
    this.xotirasi = xotirasi;
  }

  showInfo() {
    console.log(
      `Kompyuter nomi: ${this.nomi}
       Narhi: ${this.narhi}
       xotirasi: ${this.xotirasi}
      `
    );
  }
}

const HP = new Kompyuter("HP", 800, 512);
const Lenovo = new Kompyuter("Lenovo", 700, 256);
const Mac = new Kompyuter("Mac", 1100, 1000);

HP.showInfo();
Lenovo.showInfo();
Acer.showInfo();*/

// ----------------------------------23-dars-------------------------

/*const result = [];
function foo(a) {
  result.push(a);
  return foo;
}

// console.log(foo(result++));

const foo = (a) => (b) => b ? foo(a + b) : a;
console.log(foo(1)(3)(5)(7)());*/

/*class student {
  name = "";
  #ball = [];
  #subjects = [];
  #isPass = true;
  course = 1;

  constructor(name, ball, subjects, isPass, course) {
    this.#ball = ball;
    this.#subjects = subjects;
    this.#isPass = isPass;
    this.name = name;
  }

  get getStudentBall (){
    return this.#ball
  }
}

const John = new student (
  'John',[5,55,7],['Tarix', 'Matematika', 'english'],
  3
)
console.log(John.getStudentBall);*/

class Student {
  #contact = [{ name: "john", phoneNumber: "3123123", id: 12684952157 }];
  name = "";
  #phoneNumber = "";

  constructor(name, phoneNumber) {
    this.name = name;
    this.#phoneNumber = phoneNumber;
  }

  set addContact(newContact) {
    if (this.#contact.length < 10) {
      newContact.id = Math.random() * 1000;
      this.contact.push(newContact);
    } else {
      throw console.Error("Contactlar soni oshib ketdi");
    }
  }

  get getAllContact() {
    return this.#contact;
  }

  set edit({ id, phoneNumber, name }) {
    const newContact = this.#contact.filter((item) => item, id !== id);
    const editedContac = this.#contact.find((contact) => contact.id === id);
    editedContac.phoneNumber = phoneNumber;
    editedContac.name = name;
    this.#contact = [...newContact, editedContac];
  }
}

const user1 = new Student("muhammadiy", "99999999");

user1.addContact = {
  name: "john1",
  phoneNumber: "312525",
};

user1.addContact = {
  name: "john2",
  phoneNumber: "3123525",
};

user1.addContact = {
  name: "john2",
  phoneNumber: "3125425",
};

user1.edit = {
  id: 4684453135463,
  phoneNumber: "111",
  name: "due",
};
console.log(user1.getAllContact);
