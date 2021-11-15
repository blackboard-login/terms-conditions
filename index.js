
function submitForm() {
    // console.log("checkbox is checked " + document.getElementById("ppcheck").checked);
    // console.log("student id is filled " + (document.getElementById("studentID").value != ""));
    // console.log("student id value " + document.getElementById("studentID").value);

    if ((document.getElementById("ppcheck").checked) && (document.getElementById("studentID").value != "")) {

        alert("Submitted");
    }
    
    else{
        alert("Please fill in all the requirements");
    }
}