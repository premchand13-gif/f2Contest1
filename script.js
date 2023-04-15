let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((Element) =>{
        if(Element.profession=="developer"){
            console.log(Element);
        }
        
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((Element) =>{
        if(Element.profession=="developer"){
            console.log(Element);
        }
        
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    // {id:4,name:"susan",age:"20",profession:"intern"}
   let emp= {id:4,name:"susan",age:"20",profession:"intern"};
   arr.push(emp);
   console.log(emp);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
let n=-1;
for(let i=0;i<arr.length;i++){
   
    if(arr[i].profession=="admin"){
        n=i;
        break;
    }
}
if(n!=-1){
    for(let i=n;i<arr.length-1;i++){
        let temp=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
    }
    arr.pop();
    console.log(arr);
}

  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr2 = [
        { id: 10, name: "johne", age: "48", profession: "developerdd" },
        { id: 20, name: "jackee", age: "40", profession: "developerdd" },
        { id: 30, name: "karenee", age: "49", profession: "admindd" },
      ];

      arr=arr.concat(arr2);
      console.log(arr);
  }