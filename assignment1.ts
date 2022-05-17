
type Users ={
id :number;
name:string;
age:number;
salary:number;
}


var data:Users[]=[
    {
    "id": 1,
    "name": "Ludwig O'Hoolahan",
    "age": 95,
    "salary": 5619
  },
   {
    "id": 2,
    "name": "Dyan Irce",
    "age": 13,
    "salary": 5932
  }, 
  {
    "id": 3,
    "name": "Thibaut Killiner",
    "age": 16,
    "salary": 4068
  }, 
  {
    "id": 4,
    "name": "Gretta Benedettini",
    "age": 60,
    "salary": 7633
  },
   {
    "id": 5,
    "name": "Natasha Ceschi",
    "age": 83,
    "salary": 9098
  }, 
  {
    "id": 6,
    "name": "Judy MacCroary",
    "age": 78,
    "salary": 14869
  },
   {
    "id": 7,
    "name": "Curr McGaffey",
    "age": 94,
    "salary": 38188
  }, 
  {
    "id": 8,
    "name": "Pennie Corwin",
    "age": 21,
    "salary": 73623
  }, 
  {
    "id": 9,
    "name": "Toddy Balhatchet",
    "age": 76,
    "salary": 3789
  }, 
  {
    "id": 10,
    "name": "Ethelyn Daen",
    "age": 91,
    "salary": 1677
  }]

  function Sort(arr:Users[],by:keyof Users){
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
    }
     console.log(arr)
}

Sort(data,"age")