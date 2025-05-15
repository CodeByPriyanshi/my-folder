let person={
    firstname:"Priyanshi",
    lastname:"Yadav",
    class:"BCA",
    village:"Tilapta"
}
function print(){
    let Name=document.getElementById("name").value;
    let Lastname=document.getElementById("lastname").value;
    let Class=document.getElementById("class").value;
    
    let OutName=document.getElementById("output-Name");
    OutName.innerHTML="You Enter FirstName:"+Name;
    let outLname=document.getElementById("output-Lname");
    outLname.innerHTML="You Enter Last Name:"+Lastname;
     let outclass=document.getElementById("output-class");
    outclass.innerHTML="You Enter Class:"+Class;
    document.getElementById("output-div").style.display="flex"
}
 