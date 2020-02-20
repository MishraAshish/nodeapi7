//ES-6 : Concepts of OOPS
//let, const
//html literal `<b></b>`
//destructuring 
//array
[one, two , three] = ["1","2","3"];
console.log(three);

//for of loop, for in loop (for, foreach) -- do it by yourself

//filter, map, reduce, some - iterartors

const heroes = [
    { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
    { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
    { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
    { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
    { name: 'Batman',         family: 'DC Comics', isEvil: false },
    { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
    { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
    { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
    { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
  ]

let notEvil = heroes.filter(hero => hero.isEvil == false);  
console.log(notEvil);

let uniqueFamilyName = heroes.reduce((prev, curr) => {  
	prev.add(curr.family);  
	return prev;  
}, new Set()); //Map, Set 
console.log([...uniqueFamilyName]); //spread operator

let UpperCaseNames = heroes.map(h => {
    return {
      ...h,
      name: h.name.toUpperCase()
    }
  })
console.log("Upper Case Names -", UpperCaseNames);


let onlyNames = heroes.map(obj => "Sir ," +obj.name)
console.log("OnlyNames -", onlyNames);

printNames(...onlyNames); //spread operator

//Promises 
//Async Await
//callbacks - (keeps your context intact whenever it is passed in any function as a parameter)
//spread operator and rest parameters

function printNames(...restparams) { //rest parameter
    for (const iterator of restparams) { //For Of
        console.log("For Of Name - " +iterator);
    }

    for (const key in restparams) {
        if (restparams.hasOwnProperty(key)) {
            const element = restparams[key];
            console.log("For In Key - " +key);
            console.log("For In Name (Value) - " +element);
        }
    }
}

//Closure - Encapsulation
// function Parent(params) {
//     let privateVal1 = 25;
//     const privateSomeAge = 50;
//     let specificVariable = 100;

//     let childFunc = function Child(param) {
//         return param + (privateVal1 - 25) + (privateSomeAge - 10);
//     }

//     return childFunc;
// }

// let consumerFunction = Parent();
// let consumerOuput = consumerFunction(10);

// console.log("consumerOuput - ",consumerOuput)


//Node - To Run Javascript Code at the backend
//HTTP/S - RESTFul - Express(Node Library, CRUD)
//Unique URI - GET, PUT, POST and Delete - router module or express
//api/user (get, put, post, delet)
//api/product (get, put, post, delet)

//Mongoose :// ORM - Map DataModel to mongodb

//Node -
//Gives us js runtime using Google Chromes V8
//40/60% - Js/C++ : js execution and IO

//Express - Webserver
//Allows us to create Microservices, WebServices, RestFulApi's on http
//CRUD Operations - Get, Put, Post, Delete (All,Patch) - (Http Verbs)

//MongoDB - 
//No-Sql : Document Oriented Database
//Flat File Structure
//Saves in bson - binary json format
//structuring - mongoose : client for mongo, allows to create data model
//Solving the problems with Network Nodes, RealTime Systems and BigData

//Javasript Libraries - 