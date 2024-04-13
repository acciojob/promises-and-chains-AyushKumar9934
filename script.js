//your JS code here. If required.
let age=document.getElementById("age");
let name1=document.getElementById("name");
const promise1=()=>{ return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    if(parseInt(age.value)>=18){
        resolve(`welcome, ${name1.value}. You can vote.`)
    }
    else reject(`Oh sorry ${name1.value}. You aren't old enough.`)
    },4000)
});
}

 function solve(event){
    event.preventDefault();
    
    promise1().then((data1)=>{
        console.log("this is done")
    console.log(promise1());
        alert(data1)
    }).catch((err)=>{
        alert(err);
    })
 }
document.getElementById("btn").addEventListener("click",solve);