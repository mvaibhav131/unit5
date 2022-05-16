
type Users ={
id :number;
name:string;
age:number;
salary:number;
}



var sort=(arr:[Users])=>{
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
    }
     console.log(arr)
}

var user:Users={
    id:1,
    age:44,
    name:"sudhir",
    salary:40000,
};
var user:Users={
    id:2,
    age:34,
    name:"salman",
    salary:17000,
};