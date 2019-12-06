let ppl = [
    {
    "firstname": "praveen",
    "lastname": "gubbala",
    "age": 36,
    "gender": "male",
    "city": "hyd"
    }, {
    "firstname": "srikanth",
    "lastname": "gubbala",
    "age": 32,
    "gender": "male",
    "city": "bengaluru"
    }, {
    "firstname": "pradeep",
    "lastname": "reddy",
    "age": 21,
    "gender": "male",
    "city": "hyd"
    }, {
    "firstname": "mounika",
    "lastname": "mudiraj",
    "age": 20,
    "gender": "female",
    "city": "nalgonda"
    }, {
    "firstname": "nikhil",
    "lastname": "m",
    "age": 22,
    "gender": "male",
    "city": "guntur"
    }, {
    "firstname": "riya",
    "lastname": "bhadouria",
    "age": 14,
    "gender": "female",
    "city": "indore"
    }
];

let res = ppl.filter(function(a,b){
    console.log(b,a.firstname,a.age);
    if (a.age<25)
    {
        return [a.firstname];
    }
});
let result=[];
res.forEach(function(a){
    result.push(a.firstname);
});
console.log(result);