window.addEventListener("DOMContentLoaded", function(){
    console.log("hi");
    let name = "";
    let inputForm = document.querySelector("#inputForm");
    let maleGender = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    let femaleGender = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    inputForm.addEventListener("submit", function(){
        console.log("hey");
    
        let dateInput = document.querySelector("#dateInput").value;
        console.log(dateInput);

        let date = new Date(dateInput);
        let day = date.getDay();
        // alert(maleGender[day]);


        let genderInput =  document.querySelector("#gender").value;
        console.log(genderInput);
        
        if (genderInput === "male"){
            name = maleGender[day];
        } else if(genderInput === "female"){
            name = femaleGender[day];
        } else{
            name = "Gender has not been provided!!";
        }
        alert("Name is: " + " " + name);
        alert("Because you were born on the" +  " " + day + " " + "day of the week :)");
    })
})

