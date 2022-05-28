const area = () => {
    let base = parseInt(prompt('Enter base:'));
    let height = parseInt(prompt('Enter height:'));
    let area = 0.5 * base * height;
    alert(`The area of the triangle is ${area}`);
};

const perimeter = () => {
    let a = parseInt(prompt('Enter side a:'));
    let b = parseInt(prompt('Enter side b:'));
    let c = parseInt(prompt('Enter side c:'));
    let perimeter = a + b + c;
    alert(`The perimeter of the triangle is ${perimeter}`);
};

const rectangle = () => {
    let lenght = parseInt(prompt('Enter lenght:'));
    let width = parseInt(prompt('Enter width:'));
    let area = lenght * width;
    let perimeter = 2*(lenght + width);
    alert(`The area of the rectangle is ${area}`);
    alert(`The perimeter of the rectangle is ${perimeter}`);
}

const circle = () => {
    let radius = parseInt(prompt('Enter radius:'));
    let pi = 3.14;
    let area = pi * radius * radius;
    let circumference = 2 * pi * radius;
    alert(`The area of the circle is ${area}`);
    alert(`The circumference of the circle is ${circumference}`);
}

const weeklyEarning = () => {
    let hours = parseInt(prompt('Enter hours:'))
    let rate = parseInt(prompt('Enter rate per hour:'));
    let weekly = rate * hours;
    alert(`Your weekly earning is ${weekly}`);
}

const firstNameCheck = () => {
    let yourName = prompt('Enter your name:');
    if (yourName.length > 7) {
        alert('Your name is long.');
    } else {
        alert('Your name is short.');
    }
}

const nameCheck = () => {
    let firstName = 'Kayhan';
    let lastName = 'İkin'
    if (firstName.length > lastName.length) {
        console.log(`Your first name, ${firstName} is longer than your family name,${lastName}`);
    } else {
        console.log(`Your family name, ${lastName} is longer than your first name, ${firstName}`)
    }
}

const ageCheck = () => {
    let myAge = 250;
    let yourAge = 25;
    let age = myAge - yourAge;
    console.log(`I am ${age} years older than you`)
}

const driverCheck = () => {
    let birthYear = parseInt(prompt('Enter birth year:'))
    const year = new Date()
    let age = year.getFullYear() - birthYear;
    if (age >= 18) {
        alert(`You are ${age}. You are old enough to drive.`);
    } else {
        alert(`You are ${age}. You will be allowed to drive after ${18-age} years.`)
    }
}

const liveLong = () => {
    let age = parseInt(prompt('Enter number of years you live:'));
    let s = age * 365 * 24 * 60 * 60;
    console.log(`You lived ${s} seconds.`)
}
