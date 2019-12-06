/*let ppl = [
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
let sum = 0;
let res = ppl.reduce((a,b)=>{
    sum+=a.age +b.age;
    return a;
});
console.log(res);*/
/*console.log(Math.floor(sum/(ppl.length)));*/


let bj1=[{
    name:'srikar',
    num:368478
},
{
   name:'sad',
   num:8689
},
{
  name:'happy',
  num:9879
},{

   name:'sa',
   num:8689
}];
var isAvail = bj1.filter(function(a){
    if(a.name=='happy')
    {
        return true;
    }
    else{
        return false;
    }
});
if(isAvail.includes(true))
{
    console.log(true);
}
else{
    console.log(false);
}