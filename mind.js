let person={
    firstname:"Priyanshi",
    lastname:"Yadav",
    class:"BCA",
    village:"Tilapta"
}
    let OutName=document.getElementById("output-Name");
    let outLname=document.getElementById("output-Lname");
    let outclass=document.getElementById("output-class");

    OutName.innerHTML=person.firstname;
    outLname.innerHTML=person.lastname;
    outclass.innerHTML=person.class;
    console.log(person);
function print(){
    let Name=document.getElementById("name").value;
    let Lastname=document.getElementById("lastname").value;
    let Class=document.getElementById("class").value;
    person.firstname=Name;
    person.lastname=Lastname;
    person.class=Class;
    OutName.innerHTML=Name;
    outLname.innerHTML=Lastname;
    outclass.innerHTML=Class;
    console.log(person)
}
 