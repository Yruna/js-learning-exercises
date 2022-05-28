// exercise 1

let firstName = "Tuna";
let lastName = "İkin";
let country = "Turkey";
let city = "Istanbul";
let isMarried = false;
let year = 2022;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof isMarried);
console.log(typeof year);

console.log('10' == 10);
console.log(parseInt('9.8')==10);

console.log(3 == 3);
console.log(5 > 3);
console.log(6 <= 6);
console.log(2 == 1);
console.log(5 > 6);
console.log(1 < 1);

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log('python'.length == 'jargon'.length);

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!('dragon'.includes('on') && 'python'.includes('on')));

// Date objectten tarih bilgilerini almak için
const nowYear = new Date();
console.log(nowYear.getFullYear());
const nowMonth = new Date();
console.log(nowMonth.getMonth());
const nowDate = new Date();
console.log(nowDate.getDate());
const nowDay = new Date();
console.log(nowDay.getDay());
const nowHours = new Date();
console.log(nowHours.getHours());
const nowMinutes = new Date();
console.log(nowMinutes.getMinutes());
const nowTime = new Date();
console.log(nowTime.getTime());

