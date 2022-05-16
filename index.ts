
console.log("Hello Typescript");

var my_name:string="vaibhav";
var myAge:number=43;
var isMarried:boolean=true;


var sum = (x:number,y:number):number =>{
return x+y;
};
var output=sum(1,4);
type Human={
    hasLegs:boolean;
    veg:boolean;
}

type User={
    username:string;
    age:number;
    isMarried:boolean;
    salary:number;
    animal:Human;
}
var masai:User={
    username:"MasaiSchool",
    age:12,
    isMarried:true,
    salary:4323,
    animal:{
        veg:true,
        hasLegs:true
    },
}
console.log(masai);

type Animal={
    noOfLegs:number;
    hasWings:boolean;
};
type Dog={
    food:string;
};
var myDog :Dog | Animal={
    food:"pedi  gree",
};