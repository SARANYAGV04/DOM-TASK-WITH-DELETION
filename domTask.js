const staffDetails=[
    {
        name: "Sabari",
        age: 20,
    }, 
    {
        name: "Renu",
        age: 20,
    },
    {
        name: "Dilip",
        age: 21,
    },
    {
        name: "Saranya",
        age: 20,
    },
    {
        name: "Prema",
        age: 20,
    },
    {
        name: "Diya",
        age: 20,
    },
    {
        name: "Yaal",
        age: 20,
    },
];

console.log(staffDetails);

// const staffs = staffDetails;

let student = document.querySelector("#whole");

let box = document.createElement('div');
box.className="color1";
student.appendChild(box);
console.log(student);

staffDetails.map((details)=>{
    let box2 = document.createElement('div');
    box2.className="color2";
    box.appendChild(box2);

    let printName = document.createElement("h3");
    printName.innerHTML= `Name: ${details.name}`;
    box2.appendChild(printName);
    
    let printAge = document.createElement("h3");
    printAge.innerHTML=`Age: ${details.age}`;
    box2.appendChild(printAge)
    let butn = document.createElement("button");
    butn.className="btn";
    butn.innerHTML="delete";
    
    box2.appendChild(butn);
    butn.addEventListener("click",function(){
        box.removeChild(box2);
    });
});

