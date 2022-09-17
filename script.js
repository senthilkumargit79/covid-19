let div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");
// input.style.marginLeft="450px";
// document.body.append(input);
var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.addEventListener("click",foo);

//for active cases
let active=document.createElement("div");
active.setAttribute("id","active");
//<div id="active">total active cases:4312345</div>

// for Death cases
let death=document.createElement("div");
 death.setAttribute("id","death");


 let recovered=document.createElement("div");
 recovered.setAttribute("id","recovered");
// let active=document.createElement("div");
// death.setAttribute("id","death");

div.append(input,button,active);
div.append(death);
div.append(recovered)

document.body.append(div);



async function foo(){
let countryname=document.getElementById("country").value;
console.log(countryname);
let url=`https://api.covid19api.com/dayone/country/${countryname}`;
let res= await fetch(url);
let res1=await res.json();
console.log(res1);
let index=res1.length-1;
console.log(res1[index].Active);
console.log(res1[index].Deaths);
console.log(res1[index].Recovered);

active.innerHTML=`total active cases:${res1[index].Active}`;
death.innerHTML=`total Death case:${res1[index].Deaths}`;
recovered.innerHTML=`total Recoverd:${res1[index].Recovered}`;

}

