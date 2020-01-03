const arr=['1','2','3','4']

const fMax = (arr) => arr.reduce((max, cur)=>max > +cur?max:cur,-Infinity)
console.log(fMax);

// const findMaxOdd = (arr) => arr.map(el => +el).filter(num => num % 2).reduce((max, num)=> Math.max(max, num),0)

// console.log(res(findMaxOdd));

Array.prototype.findMaxOdd = function() {
    console.log(this);
    
    return this.map(el => +el).filter(num => num % 2).reduce((max, num)=> Math.max(max, num),0)
}
console.log("Ky-ky: ", arr.findMaxOdd());

console.log('Array', Array.prototype);

    

const greeter = {
    greet: function(name) {
        console.log(name);
    },

    greetAll: function(names) {
        // names.forEach( function(name) {greeter.greet(name)})
        names.forEach(name => this.greet(name))
    }
}

greeter.greetAll(['1','2','3'])

const man = {
    fullName: {
        fn: undefined,
        lm: 'Ivanov',
    },
    
   
    age: 33
}

const {fullName: {fn: first ='Peter', lm: second}} = man;
console.log(first, second);

const obj = {a:1, b:2, arr:[1,2,3]}
const arr1 = Object.entries(obj)
console.log(arr1);
const ff = Object.create(man)
console.log(ff);
// const ff1 = Object.assign({},obj)
const ff1 = {...obj}
console.log(ff1);
obj.arr.push(4);
console.log(obj);
ff1.a = 2
console.log(ff1);

const animal = {
    say() {
        console.log(`${this.name} says ${this.voice}`);   
    }
}

// const dog = {
//     name: 'dog',
//     voice: 'gav',
// }

// // Object.setPrototypeOf(dog, animal);
// dog.__proto__ = animal

// dog = Object.create(animal)
// dog.name = 'dog'
// dog.voice = 'gav'

// const cat = {
//     name: 'cat',
//     voice: 'myau',
// }
// Object.setPrototypeOf(cat, animal);
// function Animal(name, voice) {
//     say: function() {

//     }
// }


// function createAnimal(name, voice) {
//     const res = Object.create(animal) 
//     res.name = name
//     res.voice = voice
//     return res
// }


// function Animal(name, voice) {
//     this.name = name
//     this.voice = voice
// }

// Animal.prototype.say = function() {console.log(`${this.name} says ${this.voice}`)}

// dog =  new Animal('dog', 'gav')
// cat = new Animal('cat','myau')

class Animal {
    constructor(name, voice) {
        this.name = name
        this.voice = voice
    }
    say() {
        console.log(`${this.name} says ${this.voice}`)
    }
}

const dog =  new Animal('dog', 'gav')
const cat = new Animal('cat','myau')

dog.say();
cat.say();

Array.prototype.findNeg = function() {return this.filter(cur => cur<0)}
console.log([-1,0,2,3,-5].findNeg())
 








