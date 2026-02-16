function goAdmin() {
window.location="admin.html";
}

function goInstructor() {
window.location="instructor.html";
}

function goStudent() {
window.location="student.html";
}

function addUser() {

let name=document.getElementById("adminUser").value;

let li=document.createElement("li");

li.innerText=name;

document.getElementById("userList").appendChild(li);

}

function addCourse() {

let name=document.getElementById("courseName").value;

let li=document.createElement("li");

li.innerText=name;

document.getElementById("courseList").appendChild(li);

}

function addVideo() {

let name=document.getElementById("videoName").value;

let li=document.createElement("li");

li.innerText=name;

document.getElementById("videoList").appendChild(li);

}

function watch() {
alert("Playing class...");
}

function attemptExam() {

document.getElementById("result").innerText="Exam submitted successfully";

}

function downloadCert() {

alert("Certificate downloaded");

}


