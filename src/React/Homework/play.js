console.log('Hello');

/* Variables ---------------------------*/
const myConstant = 'A Value';
const myLet = 'Timbuktu';
const myString = 'I went to the park yesterday';
const myNumber = 2;

console.log('A let Variable', myConstant);

/* Functions ---------------------------*/
const lateForLunch = ({myNum}) => {
    const addMeUp = 3 + myNum;
    console.log('addMeUp', addMeUp);
}

lateForLunch({ myNum:4 });
lateForLunch({ myNum:7 });
lateForLunch({ myNum:16 });

/* Data Types ---------------------------*/
const aString = 'I went to the park.';
const aTemplateString = `${aString} yesterday`;
console.log('Strings', aTemplateString);

const aNum = 123;
console.log('aNum', aNum);

const aObject = {
    name: 'Valentina',
    email: 'valentina@me.com',
    age: 24
};

console.log('aObject', aObject);

const myArray = [
    'this is my string',
    { make: "Honda", Model: "CRV" },
    1234,
]

console.log('myArray', myArray);

