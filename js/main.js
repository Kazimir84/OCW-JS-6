// - Дано список імен.
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

function validName (nn) {
    let n = nn.replaceAll(/[^a-zA-Z][\s-]{0,3}/g, ' ');
    return n;
};
document.write(`N1 =  ${validName(n1)}<br>`);
document.write(`N2 =  ${validName(n2)}<br>`);
document.write(`N3 =  ${validName(n3)}<br>`);

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let arr = [];

function randomArrNum () {
    for (let i = 0; i < 100; i++) {
        let num = Math.round(Math.random()*100);
        arr.push(num);
    };
};
randomArrNum();
console.log('Arr with Random Numbers = ', arr);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
let arrSort = arr.sort(function (a,b){return a - b});
console.log('Arr sorted = ', arrSort);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
function filter (value) {
    return value % 2 === 0;
}
let arrPar = arr.filter(filter);
console.log('Arr with Par Number = ', arrPar);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arrStr = arr.map((value) => `${value.toString()}`);
console.log('All Number is String now: ', arrStr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let nums = [11,21,3];
function sortNums(direction) {
    if (direction === 'ascending') {
        return nums.sort(function (a,b) {return a-b});
    } else if (direction === 'descending') {
        return nums.sort(function (a,b) {return b-a});
    };
};
// sortNums('ascending') // [3,11,21]
console.log('Ascending: ', sortNums('ascending'));
// sortNums('descending') // [21,11,3]
console.log('Descending: ', sortNums('descending'));

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
let sortByMonthDuration = coursesAndDurationArray.sort(function (p1, p2) {
    return p1.monthDuration - p2.monthDuration;
});
console.log('SortedByMonthDuration = ', sortByMonthDuration);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let sortedMoreFiveMonth = coursesAndDurationArray.filter(element => element.monthDuration > 5);
console.log('Kурси з тривалістю більше 5 місяців: ', sortedMoreFiveMonth);

let sortedMoreFiveMonth2 = coursesAndDurationArray.filter(function (coursesAndDurationArray) {
    return coursesAndDurationArray.monthDuration > 5;
});
console.log('Kурси з тривалістю більше 5 місяців: ', sortedMoreFiveMonth2);