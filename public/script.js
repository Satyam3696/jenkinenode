const form=document.getElementById("loginForm");

form.addEventListener("submit",async(e)=>{

e.preventDefault();

const formData=new FormData(form);

const data={

username:formData.get("username"),

password:formData.get("password")

};

const response=await fetch("/login",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(data)

});

const result=await response.json();

const message=document.getElementById("message");

message.innerHTML=result.message;

if(result.success){

message.style.color="green";

}else{

message.style.color="red";

}

});