///////////////////////////////////

//1.  CONSTRUCTORS

//////////////////////////////////

function Trainer(first, last, stream) {
  this.firstName = first;
  this.lastName = last;
  this.stream = stream;
}

function Course(title, stream, type, startDate, endDate) {
  this.title = title;
  this.stream = stream;
  this.type = type;
  this.startDate = startDate;
  this.endDate = endDate;
}

function Student(firstName, lastName, dateOfBirth, tuitionFees) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dateOfBirth = dateOfBirth;
  this.tuitionFees = tuitionFees;
}

function Assignment(title, description, subDate, oralMark, totalMark){
this.title = title;
this.description = description;
this.subDate = subDate;
this.oralMark = oralMark;
this.totalMark = totalMark;

}

function TrainerPerCourse(Trainer,Course) {
  this.Trainer = Trainer;
  this.Course = Course;
}

function StudentPerCourse(Student,Course){
  this.Student = Student;
  this.Course = Course;
}

function AssignmentPerCourse(Assignment, Course){
this.Assignment = Assignment;
this.Course = Course;

}

function AssignmentPerStudentPerCourse(AssignmentPerCourse, StudentPerCourse){
  this.AssignmentPerCourse = AssignmentPerCourse;
  this.StudentPerCourse = StudentPerCourse;
  
  }

///////////////////////////////////

//2. SYNTHETIC DATA AND LIST CREATION

//////////////////////////////////

//TRAINER LIST
var Trainer1 = new Trainer("Lampros", "Karagiannis", "Java");
var Trainer2 = new Trainer("Giannis", "Papadopoulos","C#");
var Trainer3 = new Trainer ("Kostas", "Chatzis", "Javascript");
var Trainer4 = new Trainer("Dimitris", "Ioannou", "Python");

if (localStorage.getItem("TrainerList")===null) {

var TrainerList = new Array();
TrainerList.push(Trainer1);
TrainerList.push(Trainer2);
TrainerList.push(Trainer3);
TrainerList.push(Trainer4);

localStorage.setItem("TrainerList",JSON.stringify(TrainerList));
}

//COURSE LIST
var Course1 = new Course ("CB12", "Java", "Full-time", "2020-10-10", "2021-01-30");
var Course2 = new Course ("CB12", "Java", "Part-time", "2020-10-10", "2021-04-30");
var Course3 = new Course ("CB12", "C#", "Full-time", "2020-10-10", "2021-01-30");
var Course4 = new Course ("CB12", "C#", "Part-time", "2020-10-10", "2021-04-30");
var Course5 = new Course ("CB12", "Javascript", "Full-time", "2020-10-10", "2021-01-30");
var Course6 = new Course ("CB12", "Javascript", "Part-time", "2020-10-10", "2021-04-30");
var Course7 = new Course ("CB12", "Python", "Full-time", "2020-10-10", "2021-01-30");
var Course8 = new Course ("CB12", "Python", "Part-time", "2020-10-10", "2021-04-30");

if (localStorage.getItem("CourseList")===null) {

var CourseList = new Array();
CourseList.push(Course1);
CourseList.push(Course2);
CourseList.push(Course3);
CourseList.push(Course4);
CourseList.push(Course5);
CourseList.push(Course6);
CourseList.push(Course7);
CourseList.push(Course8);
localStorage.setItem("CourseList",JSON.stringify(CourseList));
}

//STUDENT LIST
var Student1 = new Student ("Giorgos", "Ioannou", "1986-08-22", 2500);
var Student2 = new Student ("Paschalis", "Polyzoidis", "1990-10-15", 2500);
var Student3 = new Student ("Konstantina", "Manisanou", "1995-12-22", 2500);
var Student4 = new Student ("Manolis", "Telloglou", "1988-03-01", 2500);
var Student5 = new Student ("Eirini", "Papadopoulou", "1990-02-10", 2500);
var Student6 = new Student ("Nikos ", "Siopis", "1992-05-03", 2500);
var Student7 = new Student ("Afroditi", "Zei", "1994-08-18", 2500);
var Student8 = new Student ("Nefeli", "Konsta", "1992-11-20", 2500);


if (localStorage.getItem("StudentList")===null) {

var StudentList = new Array();
StudentList.push(Student1);
StudentList.push(Student2);
StudentList.push(Student3);
StudentList.push(Student4);
StudentList.push(Student5);
StudentList.push(Student6);
StudentList.push(Student7);
StudentList.push(Student8);

localStorage.setItem("StudentList",JSON.stringify(StudentList));
  }

//ASSIGNMENT LIST
var Assignment1 = new Assignment("SchoolStructure", "Design a private School Structure and print lists of Trainers, Courses and Students", "2020-11-30", 20, 100);
var Assignment2 = new Assignment("BankSystem", "Design a Bank System that keeps records of Customers, Accounts and Transactions", "2020-12-31", 20, 100);
var Assignment3 = new Assignment("FunctionalOven", "Create a program that is able to command the function an electronic oven", "2021-02-15", 20, 100);
var Assignment4 = new Assignment("Network app", "Design a network app to work on data supplied by a network of computers.", "2020-04-15", 20, 100);
var Assignment5 = new Assignment("SupplySystem", "Design a supply system for the Greek Army.", "2020-04-15", 20, 100);

if (localStorage.getItem("AssignmentList")===null) {

var AssignmentList = new Array();
AssignmentList.push(Assignment1);
AssignmentList.push(Assignment2);
AssignmentList.push(Assignment3);
AssignmentList.push(Assignment4);
AssignmentList.push(Assignment5);
  
  localStorage.setItem("AssignmentList",JSON.stringify(AssignmentList));
  }


//ASSIGNMENT PER COURSE LIST
var AssignmentPerCourse1 = new AssignmentPerCourse (Assignment1, Course1);
var AssignmentPerCourse2 = new AssignmentPerCourse (Assignment1,Course2);
var AssignmentPerCourse3 = new AssignmentPerCourse (Assignment1,Course3);
var AssignmentPerCourse4 = new AssignmentPerCourse (Assignment1,Course4);
var AssignmentPerCourse5 = new AssignmentPerCourse (Assignment1,Course5);
var AssignmentPerCourse6 = new AssignmentPerCourse (Assignment1,Course6);
var AssignmentPerCourse7 = new AssignmentPerCourse (Assignment1,Course7);
var AssignmentPerCourse8 = new AssignmentPerCourse (Assignment1,Course8);
var AssignmentPerCourse9 = new AssignmentPerCourse (Assignment2,Course3);
var AssignmentPerCourse10 = new AssignmentPerCourse (Assignment3,Course6);
var AssignmentPerCourse11 = new AssignmentPerCourse (Assignment4,Course8);
var AssignmentPerCourse12 = new AssignmentPerCourse (Assignment2,Course4);
var AssignmentPerCourse13 = new AssignmentPerCourse (Assignment4,Course7);
var AssignmentPerCourse14 = new AssignmentPerCourse (Assignment3,Course5);



var AssignmentPerCourseList = new Array();
AssignmentPerCourseList.push(AssignmentPerCourse1);
AssignmentPerCourseList.push(AssignmentPerCourse2);
AssignmentPerCourseList.push(AssignmentPerCourse3);
AssignmentPerCourseList.push(AssignmentPerCourse4);
AssignmentPerCourseList.push(AssignmentPerCourse5);
AssignmentPerCourseList.push(AssignmentPerCourse6);
AssignmentPerCourseList.push(AssignmentPerCourse7);
AssignmentPerCourseList.push(AssignmentPerCourse8);
AssignmentPerCourseList.push(AssignmentPerCourse9);
AssignmentPerCourseList.push(AssignmentPerCourse10);
AssignmentPerCourseList.push(AssignmentPerCourse11);
AssignmentPerCourseList.push(AssignmentPerCourse12);
AssignmentPerCourseList.push(AssignmentPerCourse13);
AssignmentPerCourseList.push(AssignmentPerCourse14);

  
if (localStorage.getItem("AssignmentPerCourseList")===null) {

  localStorage.setItem("AssignmentPerCourseList",JSON.stringify(AssignmentPerCourseList));

  }

//TRAINER PER COURSE LIST
var TrainerPerCourse1 = new TrainerPerCourse(Trainer1, Course1);
var TrainerPerCourse2 = new TrainerPerCourse(Trainer2, Course4);
var TrainerPerCourse3 = new TrainerPerCourse (Trainer3, Course6);
var TrainerPerCourse4 = new TrainerPerCourse(Trainer4, Course7);

if (localStorage.getItem("TrainerPerCourseList")===null) {


var TrainerPerCourseList = new Array();
TrainerPerCourseList.push(TrainerPerCourse1);
TrainerPerCourseList.push(TrainerPerCourse2);
TrainerPerCourseList.push(TrainerPerCourse3);
TrainerPerCourseList.push(TrainerPerCourse4);

localStorage.setItem("TrainerPerCourseList",JSON.stringify(TrainerPerCourseList));
}

//STUDENT PER COURSE LIST
var SPC1 = new StudentPerCourse(Student1, Course1);
var SPC2 = new StudentPerCourse(Student2, Course2);
var SPC3 = new StudentPerCourse(Student3, Course3);
var SPC4 = new StudentPerCourse(Student4, Course4);
var SPC5 = new StudentPerCourse(Student5, Course5);
var SPC6 = new StudentPerCourse(Student6, Course6);
var SPC7 = new StudentPerCourse(Student7, Course7);
var SPC8 = new StudentPerCourse(Student8, Course8);
var SPC9 = new StudentPerCourse(Student1, Course2);
var SPC10 = new StudentPerCourse(Student3, Course4);

if (localStorage.getItem("StudentPerCourseList")===null) {

var StudentPerCourseList = new Array();
StudentPerCourseList.push(SPC1);
StudentPerCourseList.push(SPC2);
StudentPerCourseList.push(SPC3);
StudentPerCourseList.push(SPC4);
StudentPerCourseList.push(SPC5);
StudentPerCourseList.push(SPC6);
StudentPerCourseList.push(SPC7);
StudentPerCourseList.push(SPC8);
StudentPerCourseList.push(SPC9);
StudentPerCourseList.push(SPC10);

localStorage.setItem("StudentPerCourseList",JSON.stringify(StudentPerCourseList));
  }


//ASSIGNMENT PER STUDENT PER COURSE LIST
var APSPC1 = new AssignmentPerStudentPerCourse(AssignmentPerCourse1, SPC1);
var APSPC2 = new AssignmentPerStudentPerCourse(AssignmentPerCourse1, SPC2);
var APSPC3 = new AssignmentPerStudentPerCourse(AssignmentPerCourse1, SPC3);
var APSPC4 = new AssignmentPerStudentPerCourse(AssignmentPerCourse1, SPC4);
var APSPC5 = new AssignmentPerStudentPerCourse(AssignmentPerCourse1, SPC5);
var APSPC6 = new AssignmentPerStudentPerCourse(AssignmentPerCourse1, SPC6);
var APSPC7 = new AssignmentPerStudentPerCourse(AssignmentPerCourse1, SPC7);
var APSPC8 = new AssignmentPerStudentPerCourse(AssignmentPerCourse1, SPC8);
var APSPC9 = new AssignmentPerStudentPerCourse(AssignmentPerCourse2, SPC2);
var APSPC10 = new AssignmentPerStudentPerCourse(AssignmentPerCourse10, SPC6);
var APSPC11 = new AssignmentPerStudentPerCourse(AssignmentPerCourse9, SPC10);
var APSPC12 = new AssignmentPerStudentPerCourse(AssignmentPerCourse11, SPC8);


if (localStorage.getItem("AssignmentPerStudentPerCourseList")===null) {

  var AssignmentPerStudentPerCourseList = new Array();
  AssignmentPerStudentPerCourseList.push(APSPC1);
  AssignmentPerStudentPerCourseList.push(APSPC2);
  AssignmentPerStudentPerCourseList.push(APSPC3);
  AssignmentPerStudentPerCourseList.push(APSPC4);
  AssignmentPerStudentPerCourseList.push(APSPC5);
  AssignmentPerStudentPerCourseList.push(APSPC6);
  AssignmentPerStudentPerCourseList.push(APSPC7);
  AssignmentPerStudentPerCourseList.push(APSPC8);
  AssignmentPerStudentPerCourseList.push(APSPC9);
  AssignmentPerStudentPerCourseList.push(APSPC10);
  AssignmentPerStudentPerCourseList.push(APSPC11);
  AssignmentPerStudentPerCourseList.push(APSPC12);
  
  localStorage.setItem("AssignmentPerStudentPerCourseList",JSON.stringify(AssignmentPerStudentPerCourseList));
    }


/////////////////////////////////////

//3.  CREATE OBJECTS FROM USER INPUT DATA

/////////////////////////////////////

//TRAINER OBJECTS FROM USER INPUT
function createTrainerFromUserInput(){
  var TrainerListLocalStorage = JSON.parse(localStorage.getItem("TrainerList"));
  
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var courseStream = document.querySelector('input[name="coursestream"]:checked').value;

  if (validateStr(firstName) && validateStr(lastName) == true){
  var userTrainer = new Trainer (firstName,lastName,courseStream);
  TrainerListLocalStorage.push(userTrainer);
  localStorage.setItem("TrainerList",JSON.stringify(TrainerListLocalStorage));
} else {

  alert("First and Last name cannot contain numbers or special characters (@!#\$%\^\&*\)\(+=._-");

}
 
} 

//COURSE OBJECTS FROM USER INPUT
  function createCourseFromUserInput(){
    var CourseListLocalStorage = JSON.parse(localStorage.getItem("CourseList"));
    
    var title = document.getElementById("title").value;
    var courseStream = document.querySelector('input[name="coursestream"]:checked').value;
    var courseType = document.querySelector('input[name="coursetype"]:checked').value;
    var startDate = document.getElementById("startdate").value;
    var endDate = document.getElementById("enddate").value;
    
    if (checkIfStartDateIsAfterEndDate(startDate, endDate) == false){

    var userCourse = new Course (title,courseStream,courseType,startDate,endDate);
    CourseListLocalStorage.push(userCourse);
    localStorage.setItem("CourseList",JSON.stringify(CourseListLocalStorage));

    } else {
    
      alert("Start date cannot be after end date!");
    }

    
  } 


//STUDENT OBJECTS FROM USER INPUT
function createStudentFromUserInput(){
  var StudentListLocalStorage = JSON.parse(localStorage.getItem("StudentList"));
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var dob = document.getElementById("dateofbirth").value;
  var tuitionFees = document.getElementById("tuitionfees").value;  

  if (validateStr(firstName) && validateStr(lastName) == true){

  var userStudent = new Student (firstName,lastName,dob,tuitionFees);
  StudentListLocalStorage.push(userStudent);
  localStorage.setItem("StudentList",JSON.stringify(StudentListLocalStorage));
  
  } else {

  alert("First and Last name cannot contain numbers or special characters (@!#\$%\^\&*\)\(+=._-!");
  
  }

}

//ASSIGNMENT OBJECTS FROM USER INPUT
function createAssignmentFromUserInput(){
  var AssignmentListLocalStorage = JSON.parse(localStorage.getItem("AssignmentList"));
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  var subDate = document.getElementById("subdate").value;
  var oralMark = document.getElementById("oralmark").value;  

  if (checkForNumbersAndSymbols(title) == true && checkForNumbersAndSymbols(description) == true){
  var userAssignment = new Assignment (title,description,subDate,oralMark,100);
  AssignmentListLocalStorage.push(userAssignment);
  localStorage.setItem("AssignmentList",JSON.stringify(AssignmentListLocalStorage));
  } else {

    alert("Title and description cannot contain only numbers and/or special characters (@!#\$%\^\&*\)\(+=._-!")
  }

}



/////////////////////////////////////////////////

//4.  TABLE CREATORS

/////////////////////////////////////////////////

//TRAINERS TABLE CREATOR
function createTrainerTable(){
  var TrainerListLocalStorage = JSON.parse(localStorage.getItem("TrainerList"));
  var table = document.getElementById("trainerlist");

  if (table != null){
    for (i=1; i<table.rows.length; i++){
      document.getElementById("trainerlist").deleteRow(i);

    }

  }

  for (i=0; i<TrainerListLocalStorage.length; i++){
    var row = table.insertRow(-1);
    var cell1= row.insertCell(0);
    var cell2= row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = i+1;
    cell2.innerHTML = TrainerListLocalStorage[i].firstName;
    cell3.innerHTML = TrainerListLocalStorage[i].lastName;
    cell4.innerHTML = TrainerListLocalStorage[i].stream;

  }
    
}

//COURSES TABLE CREATOR
function createCourseTable(){
  var CourseListLocalStorage = JSON.parse(localStorage.getItem("CourseList"));
  var table = document.getElementById("courselist");

  if (table != null){
    for (i=1; i<table.rows.length; i++){
      document.getElementById("courselist").deleteRow(i);

    }

  }

  for (i=0; i<CourseListLocalStorage.length; i++){
    var row = table.insertRow(-1);
    var cell1= row.insertCell(0);
    var cell2= row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = i+1;
    cell2.innerHTML = CourseListLocalStorage[i].title;
    cell3.innerHTML = CourseListLocalStorage[i].stream;
    cell4.innerHTML = CourseListLocalStorage[i].type;
    cell5.innerHTML = CourseListLocalStorage[i].startDate;
    cell6.innerHTML = CourseListLocalStorage[i].endDate;

  }
    
}

//STUDENTS TABLE CREATOR
function createStudentTable(){
  var StudentListLocalStorage = JSON.parse(localStorage.getItem("StudentList"));
  var table = document.getElementById("studentlist");

  if (table != null){
    for (i=1; i<table.rows.length; i++){
      document.getElementById("studentlist").deleteRow(i);

    }

  }

  for (i=0; i<StudentListLocalStorage.length; i++){
    var row = table.insertRow(-1);
    var cell1= row.insertCell(0);
    var cell2= row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);


    cell1.innerHTML = i+1;
    cell2.innerHTML = StudentListLocalStorage[i].firstName;
    cell3.innerHTML = StudentListLocalStorage[i].lastName;
    cell4.innerHTML = StudentListLocalStorage[i].dateOfBirth;
    cell5.innerHTML = StudentListLocalStorage[i].tuitionFees;

  }
    
}

//TRAINERS PER COURSE TABLE CREATOR
function createTrainerPerCourseTable(){
  var TPCourseListLocalStorage = JSON.parse(localStorage.getItem("TrainerPerCourseList"));


  var table = document.getElementById("trainerpercourselist");

  if (table != null){
    for (i=1; i<table.rows.length; i++){
      document.getElementById("trainerpercourselist").deleteRow(i);

    }

  }

  for (i=0; i<TPCourseListLocalStorage.length; i++){
    var row = table.insertRow(-1);
    var cell1= row.insertCell(0);
    var cell2= row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    cell1.innerHTML = i+1;
    cell2.innerHTML = TPCourseListLocalStorage[i].Trainer.firstName;
    cell3.innerHTML = TPCourseListLocalStorage[i].Trainer.lastName;
    cell4.innerHTML = TPCourseListLocalStorage[i].Course.title;
    cell5.innerHTML = TPCourseListLocalStorage[i].Course.stream;
    cell6.innerHTML = TPCourseListLocalStorage[i].Course.type;
    cell7.innerHTML = TPCourseListLocalStorage[i].Course.startDate;
    cell8.innerHTML = TPCourseListLocalStorage[i].Course.endDate;

  }
    
}

//STUDENT PER COURSE TABLE CREATOR
function createStudentPerCourseTable(){
  var SPCList = JSON.parse(localStorage.getItem("StudentPerCourseList"));


  var table = document.getElementById("studentpercourselist");

  if (table != null){
    for (i=1; i<table.rows.length; i++){
      document.getElementById("studentpercourselist").deleteRow(i);

    }

  }

  for (i=0; i<SPCList.length; i++){
    var row = table.insertRow(-1);
    var cell1= row.insertCell(0);
    var cell2= row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);

    cell1.innerHTML = i+1;
    cell2.innerHTML = SPCList[i].Student.firstName;
    cell3.innerHTML = SPCList[i].Student.lastName;
    cell4.innerHTML = SPCList[i].Student.dateOfBirth;
    cell5.innerHTML = SPCList[i].Student.tuitionFees;
    cell6.innerHTML = SPCList[i].Course.title;
    cell7.innerHTML = SPCList[i].Course.stream;
    cell8.innerHTML = SPCList[i].Course.type;
    cell9.innerHTML = SPCList[i].Course.startDate;
    cell10.innerHTML = SPCList[i].Course.endDate;

  }
    
}

//ASSIGNMENTS TABLE CREATOR
function createAssignmentTable(){
  var AssignmentList = JSON.parse(localStorage.getItem("AssignmentList"));


  var table = document.getElementById("assignmentlist");

  if (table != null){
    for (i=1; i<table.rows.length; i++){
      document.getElementById("assignmentlist").deleteRow(i);

    }

  }

  for (i=0; i<AssignmentList.length; i++){
    var row = table.insertRow(-1);
    var cell1= row.insertCell(0);
    var cell2= row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = i+1;
    cell2.innerHTML = AssignmentList[i].title;
    cell3.innerHTML = AssignmentList[i].description;
    cell4.innerHTML = AssignmentList[i].subDate;
    cell5.innerHTML = AssignmentList[i].oralMark;
    cell6.innerHTML = AssignmentList[i].totalMark;


  }
    
}

//ASSIGNMENT PER COURSE TABLE CREATOR
function createAssignmentPerCourseTable(){
  var APCList = JSON.parse(localStorage.getItem("AssignmentPerCourseList"));


  var table = document.getElementById("assignmentpercourselist");

  if (table != null){
    for (i=1; i<table.rows.length; i++){
      document.getElementById("assignmentpercourselist").deleteRow(i);

    }

  }

  for (i=0; i<APCList.length; i++){
    var row = table.insertRow(-1);
    var cell1= row.insertCell(0);
    var cell2= row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    var cell11 = row.insertCell(10);

    cell1.innerHTML = i+1;
    cell2.innerHTML = APCList[i].Assignment.title;
    cell3.innerHTML = APCList[i].Assignment.description;
    cell4.innerHTML = APCList[i].Assignment.subDate;
    cell5.innerHTML = APCList[i].Assignment.oralMark;
    cell6.innerHTML = APCList[i].Assignment.totalMark;
    cell7.innerHTML = APCList[i].Course.title;
    cell8.innerHTML = APCList[i].Course.stream;
    cell9.innerHTML = APCList[i].Course.type;
    cell10.innerHTML = APCList[i].Course.startDate;
    cell11.innerHTML = APCList[i].Course.endDate;

  }
}

//ASSIGNMENT PER STUDENT PER COURSE TABLE CREATOR
function createAssignmentPerStudentPerCourseTable(){
  var APSPCList = JSON.parse(localStorage.getItem("AssignmentPerStudentPerCourseList"));


  var table = document.getElementById("apspclist");

  if (table != null){
    
    for (i=1; i<table.rows.length; i++){
      document.getElementById("apspclist").deleteRow(i);

    }

  }

  for (i=0; i<APSPCList.length; i++){
    var row = table.insertRow(-1);
    var cell1= row.insertCell(0);
    var cell2= row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    var cell11 = row.insertCell(10);
    var cell12 = row.insertCell(11);
    var cell13 = row.insertCell(11);

    cell1.innerHTML = i+1;
    cell2.innerHTML = getNestedObject (APSPCList[i], ['AssignmentPerCourse','Assignment','title']);
    cell3.innerHTML = getNestedObject (APSPCList[i], ['AssignmentPerCourse','Assignment','subDate']);
    cell4.innerHTML = getNestedObject (APSPCList[i], ['AssignmentPerCourse','Assignment','oralMark']);
    cell5.innerHTML = getNestedObject (APSPCList[i], ['AssignmentPerCourse','Assignment','totalMark']);
    cell6.innerHTML = getNestedObject (APSPCList[i], ['StudentPerCourse', 'Student','firstName']);
    cell7.innerHTML = getNestedObject (APSPCList[i], ['StudentPerCourse','Student','lastName']);
    cell8.innerHTML = getNestedObject (APSPCList[i], ['StudentPerCourse','Student','dateOfBirth']);
    cell9.innerHTML = getNestedObject (APSPCList[i], ['StudentPerCourse','Course','title']);
    cell10.innerHTML = getNestedObject (APSPCList[i], ['StudentPerCourse','Course','stream']);
    cell11.innerHTML = getNestedObject (APSPCList[i], ['StudentPerCourse','Course','type']);
    cell12.innerHTML = getNestedObject (APSPCList[i], ['StudentPerCourse','Course','startDate']);
    cell13.innerHTML = getNestedObject (APSPCList[i], ['StudentPerCourse','Course','endDate']);

  }
}

//REDUCED ASSIGNMENT PER STUDENT PER COURSE TABLE CREATOR
function createReducedAssignmentPerStudentPerCourseTable(){
  var APSPCList = JSON.parse(localStorage.getItem("AssignmentPerStudentPerCourseList"));


  var table = document.getElementById("reducedapspclist");

  if (table != null){
    
    for (i=1; i<table.rows.length; i++){
      document.getElementById("reducedapspclist").deleteRow(i);

    }

  }

  for (i=0; i<APSPCList.length; i++){
    var row = table.insertRow(-1);
    var cell1= row.insertCell(0);
    var cell2= row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);

    cell1.innerHTML = i+1;
    cell2.innerHTML = getNestedObject (APSPCList[i], ['AssignmentPerCourse','Assignment','title']);
    cell3.innerHTML = getNestedObject (APSPCList[i], ['AssignmentPerCourse','Assignment','subDate']);
    cell4.innerHTML = getNestedObject (APSPCList[i], ['StudentPerCourse','Student','firstName']);
    cell5.innerHTML = getNestedObject (APSPCList[i], ['StudentPerCourse','Student','lastName']);
    cell6.innerHTML = getNestedObject (APSPCList[i], ['StudentPerCourse','Student','dateOfBirth']);
    cell7.innerHTML = getNestedObject (APSPCList[i], ['StudentPerCourse','Course','title']);
    cell8.innerHTML = getNestedObject (APSPCList[i], ['StudentPerCourse','Course','stream']);
    cell9.innerHTML = getNestedObject (APSPCList[i], ['StudentPerCourse','Course','type']);

  }
}

//REDUCED ASSIGNMENT PER COURSE TABLE CREATOR
function createReducedAssignmentPerCourseTable(){
  var APCList = JSON.parse(localStorage.getItem("AssignmentPerCourseList"));


  var table = document.getElementById("reducedassignmentpercourselist");

  if (table != null){
    for (i=1; i<table.rows.length; i++){
      document.getElementById("reducedassignmentpercourselist").deleteRow(i);

    }

  }

  for (i=0; i<APCList.length; i++){
    var row = table.insertRow(-1);
    var cell1= row.insertCell(0);
    var cell2= row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = i+1;
    cell2.innerHTML = APCList[i].Assignment.title;
    cell3.innerHTML = APCList[i].Assignment.subDate;
    cell4.innerHTML = APCList[i].Course.title;
    cell5.innerHTML = APCList[i].Course.stream;
    cell6.innerHTML = APCList[i].Course.type;

  }
}


/////////////////////////////////////////

//5.  HANDLE FORM FUNCTIONS

////////////////////////////////////////

//TRAINER HANDLE FORM
function handleAddTrainerForm(){

    createTrainerFromUserInput();
    createTrainerTable();

}

function handleUpdateTrainerForm(){

  updateTrainerForm();
  createTrainerTable();

}
function handleAssignTrainerToCourseForm(){

  assignTrainerToCourseForm();
  createTrainerPerCourseTable();

}
//COURSE HANDLE FORM
function handleAddCourseForm(){

  createCourseFromUserInput();
  createCourseTable();

}
function handleUpdateCourseForm(){

  updateCourseForm();
  createCourseTable();

}

//STUDENT HANDLE FORM
function handleAddStudentForm(){

createStudentFromUserInput()
createStudentTable();
}

function handleUpdateStudentForm(){

  updateStudentForm();
  createStudentTable();

}

//STUDENT PER COURSE HANDLE FORM
function handleAssignStudentToCourseForm(){

  assignStudentToCourseForm();
  createStudentPerCourseTable();

}

//ASSIGNMENT HANDLE FORM
function handleAddAssignmentForm(){

  createAssignmentFromUserInput()
  createAssignmentTable();
  }

function handleUpdateAssignmentForm(){

  updateAssignmentForm();
  createAssignmentTable();
  
  }

//ASSIGNMENTS PER COURSE HANDLE FORM

function handleAssignAssignmentToCourseForm(){

  assignAssignmentToCourseForm();
  createAssignmentPerCourseTable();

}

//ASSIGNMENTS PER STUDENT PER COURSE HANDLE FORM
function handleAPSPCForm(){

assignAssignmentToStudentPerCourseForm();
createReducedAssignmentPerStudentPerCourseTable();

}



/////////////////////////////////////////

//6.  UPDATE - ASSIGN - DELETE FORM

/////////////////////////////////////////

//COURSES
//UPDATE COURSE
function updateCourseForm(){
  var CourseListLocalStorage = JSON.parse(localStorage.getItem("CourseList"));
  var coursenumber = document.getElementById("choosecourse").value - 1;

  CourseListLocalStorage[coursenumber].title = document.getElementById("title").value;
  CourseListLocalStorage[coursenumber].stream = document.querySelector('input[name="coursestream"]:checked').value;
  CourseListLocalStorage[coursenumber].type = document.querySelector('input[name="coursetype"]:checked').value;
  CourseListLocalStorage[coursenumber].startDate= document.getElementById("startdate").value;
  CourseListLocalStorage[coursenumber].endDate = document.getElementById("enddate").value;

  localStorage.setItem("CourseList",JSON.stringify(CourseListLocalStorage));
}

function updateCourseFormMaxNumber(){
  var CourseListLocalStorage = JSON.parse(localStorage.getItem("CourseList"));
  document.getElementById("choosecourse").max = CourseListLocalStorage.length;

}

//DELETE COURSE
  function deleteCourseOptions(){
  var CourseListLocalStorage = JSON.parse(localStorage.getItem("CourseList"));
  var deleteForm = document.getElementById("deletecourse");
  
  for (i=0; i<CourseListLocalStorage.length; i++){
  var option = document.createElement("option");
  option.appendChild(document.createTextNode(i+1));
  option.value = i+1;
  deleteForm.appendChild(option);
  }

 }

 function deleteCourse(){
  var CourseListLocalStorage = JSON.parse(localStorage.getItem("CourseList"));
  var deleteForm = document.getElementById("deletecourse");


  var coursenumber = deleteForm.options[deleteForm.selectedIndex].text;
  delete CourseListLocalStorage[coursenumber-1];

  var FilteredCourseList = removeNull(CourseListLocalStorage);
  localStorage.setItem("CourseList",JSON.stringify(FilteredCourseList));

  }

//TRAINERS
//UPDATE TRAINER

function updateTrainerForm(){
    var TrainerListLocalStorage = JSON.parse(localStorage.getItem("TrainerList"));
    var trainernumber = document.getElementById("choosetrainer").value - 1;

    if (validateStr(document.getElementById("firstname").value) && validateStr(document.getElementById("lastname").value) == true){

    TrainerListLocalStorage[trainernumber].firstName = document.getElementById("firstname").value;
    TrainerListLocalStorage[trainernumber].lastName = document.getElementById("lastname").value;
    TrainerListLocalStorage[trainernumber].stream = document.querySelector('input[name="coursestream"]:checked').value;

    localStorage.setItem("TrainerList",JSON.stringify(TrainerListLocalStorage));
    } else {

      alert("First and Last name cannot contain numbers or special characters (@!#\$%\^\&*\)\(+=._-");

    }
  }

function updateTrainerFormMaxNumber(){
    var TrainerListLocalStorage = JSON.parse(localStorage.getItem("TrainerList"));
    document.getElementById("choosetrainer").max = TrainerListLocalStorage.length;

  }

 //DELETE TRAINER
   function deleteTrainerOptions(){
    var TrainerListLocalStorage = JSON.parse(localStorage.getItem("TrainerList"));
    var deleteForm = document.getElementById("deletetrainer");
    
    for (i=0; i<TrainerListLocalStorage.length; i++){
    var option = document.createElement("option");
    option.appendChild(document.createTextNode(i+1));
    option.value = i+1;
    deleteForm.appendChild(option);
    }

   }

   function deleteTrainer(){
    var TrainerListLocalStorage = JSON.parse(localStorage.getItem("TrainerList"));
    var deleteForm = document.getElementById("deletetrainer");


    var trainernumber = deleteForm.value;
    delete TrainerListLocalStorage[trainernumber-1];

    var FilteredTrainerList = removeNull(TrainerListLocalStorage);
    localStorage.setItem("TrainerList",JSON.stringify(FilteredTrainerList));

    }

//TRAINER PER COURSE
//UPDATE TRAINER PER COURSE
  function assignTrainerToCourseForm(){
    var TrainerPerCourseListLocalStorage = JSON.parse(localStorage.getItem("TrainerPerCourseList"));
    var TrainerListLocalStorage = JSON.parse(localStorage.getItem("TrainerList"));
    var CourseListLocalStorage = JSON.parse(localStorage.getItem("CourseList"));

    var trainernumber = document.getElementById("choosetrainer").value - 1;
    var coursenumber = document.getElementById("choosecourse").value - 1;

    if( TrainerListLocalStorage[trainernumber].stream === CourseListLocalStorage[coursenumber].stream) {

      newTrainerPerCourse = new TrainerPerCourse(TrainerListLocalStorage[trainernumber], CourseListLocalStorage[coursenumber]);

      if(checkForDoubleTrainer(TrainerPerCourseListLocalStorage, newTrainerPerCourse) == false){

        TrainerPerCourseListLocalStorage.push(newTrainerPerCourse);
        localStorage.setItem("TrainerPerCourseList",JSON.stringify(TrainerPerCourseListLocalStorage));

      } else {

        alert("This trainer is already asssigned to this course!");
      }
      
   } else {

      alert("This Trainer cannot teach selected Course Stream!");

    }
  }

//DELETE TRAINER PER COURSE
    function deleteTrainerPerCourseOptions(){
      var TrainerPerCourseListLocalStorage = JSON.parse(localStorage.getItem("TrainerPerCourseList"));
      var deleteForm = document.getElementById("deletetrainerpercourse");
      
      for (i=0; i<TrainerPerCourseListLocalStorage.length; i++){
      var option = document.createElement("option");
      option.appendChild(document.createTextNode(i+1));
      option.value = i+1;
      deleteForm.appendChild(option);
      }
    
     }
     function deleteTrainerPerCourse(){
      var TrainerPerCourseListLocalStorage = JSON.parse(localStorage.getItem("TrainerPerCourseList"));
      var deleteForm = document.getElementById("deletetrainerpercourse");
    
    
      var trainerpercoursenumber = deleteForm.value;
      delete TrainerPerCourseListLocalStorage[trainerpercoursenumber-1];
    
      var FilteredTrainerPerCourseList = removeNull(TrainerPerCourseListLocalStorage);
      localStorage.setItem("TrainerPerCourseList",JSON.stringify(FilteredTrainerPerCourseList));
    
      }

//STUDENTS
//UPDATE STUDENT
function updateStudentForm(){
  var StudentListLocalStorage = JSON.parse(localStorage.getItem("StudentList"));
  var studentnumber = document.getElementById("choosestudent").value - 1;

  if (validateStr(document.getElementById("firstname").value) && validateStr(document.getElementById("lastname").value) == true){
  StudentListLocalStorage[studentnumber].firstName = document.getElementById("firstname").value;
  StudentListLocalStorage[studentnumber].lastName = document.getElementById("lastname").value;
  StudentListLocalStorage[studentnumber].dateOfBirth = document.getElementById('dateofbirth').value;
  StudentListLocalStorage[studentnumber].tuitionFees = document.getElementById('tuitionfees').value;

  localStorage.setItem("StudentList",JSON.stringify(StudentListLocalStorage));
  } else { 

alert("First and Last name cannot contain numbers or special characters (@!#\$%\^\&*\)\(+=._-");

  }
}

function updateStudentFormMaxNumber(){
  var StudentListLocalStorage = JSON.parse(localStorage.getItem("StudentList"));
  document.getElementById("choosestudent").max = StudentListLocalStorage.length;
}

//DELETE STUDENT
function deleteStudent(){
  var StudentListLocalStorage = JSON.parse(localStorage.getItem("StudentList"));
  var deleteStudentForm = document.querySelector('#deletestudent');


  var studentnumber = deleteStudentForm.value;
  delete StudentListLocalStorage[studentnumber-1];

  var FilteredStudentList = removeNull(StudentListLocalStorage);
  localStorage.setItem("StudentList",JSON.stringify(FilteredStudentList));

  }

function deleteStudentOptions(){
  var StudentListLocalStorage = JSON.parse(localStorage.getItem("StudentList"));
  document.getElementById("deletestudent").max = StudentListLocalStorage.length;
  }

//ASSIGN STUDENT PER COURSE
function assignStudentToCourseForm(){
  var SPCList = JSON.parse(localStorage.getItem("StudentPerCourseList"));
  var StudentListLocalStorage = JSON.parse(localStorage.getItem("StudentList"));
  var CourseListLocalStorage = JSON.parse(localStorage.getItem("CourseList"));

  var studentnumber = document.getElementById("choosestudent").value - 1;
  var coursenumber = document.getElementById("choosecourse").value - 1;

  newStudentPerCourse = new StudentPerCourse(StudentListLocalStorage[studentnumber], CourseListLocalStorage[coursenumber]);

    if(checkForDoubleStudentPerCourse(SPCList, newStudentPerCourse) == false){

      SPCList.push(newStudentPerCourse);
      localStorage.setItem("StudentPerCourseList",JSON.stringify(SPCList));

    } else {

      alert("This student is already asssigned to this course!");
    }
    
 } 

//DELETE STUDENT PER COURSE
function deleteStudentPerCourse(){
  var SPCList = JSON.parse(localStorage.getItem("StudentPerCourseList"));
  var deleteForm = document.getElementById("deletestudentpercourse");
  var spcnumber = deleteForm.value;

  delete SPCList[spcnumber-1];

  var FilteredSPCList = removeNull(SPCList);
  localStorage.setItem("StudentPerCourseList",JSON.stringify(FilteredSPCList));

  }

function deleteStudentPerCourseMaxNumber(){
  var SPCList = JSON.parse(localStorage.getItem("StudentPerCourseList"));
  document.getElementById("deletestudentpercourse").max = SPCList.length;
    }

//UPDATE ASSIGNMENT
function updateAssignmentForm(){
  var AssignmentListLocalStorage = JSON.parse(localStorage.getItem("AssignmentList"));
  var assignmentnumber = document.getElementById("chooseassignment").value - 1;

  AssignmentListLocalStorage[assignmentnumber].title = document.getElementById("assignmenttitle").value;
  AssignmentListLocalStorage[assignmentnumber].description = document.getElementById("description").value;
  AssignmentListLocalStorage[assignmentnumber].subDate = document.getElementById('subdate').value;
  AssignmentListLocalStorage[assignmentnumber].oralMark = document.getElementById('oralmark').value;

  if (checkForNumbersAndSymbols(AssignmentListLocalStorage[assignmentnumber].title ) == true && checkForNumbersAndSymbols(AssignmentListLocalStorage[assignmentnumber].description) == true){
    
    localStorage.setItem("AssignmentList",JSON.stringify(AssignmentListLocalStorage));

    } else {
  
      alert("Title and description cannot contain only numbers and/or special characters (@!#\$%\^\&*\)\(+=._-!")
    }
  

}

function updateAssignmentFormMaxNumber(){
  var AssignmentListLocalStorage = JSON.parse(localStorage.getItem("AssignmentList"));
  document.getElementById("chooseassignment").max = AssignmentListLocalStorage.length;
}

//DELETE ASSIGNMENT
function deleteAssignment(){
  var AssignmentList = JSON.parse(localStorage.getItem("AssignmentList"));
  var deleteForm = document.getElementById("chooseassignment");
  var assignmentnumber = deleteForm.value;

  delete AssignmentList[assignmentnumber-1];

  var FilteredAssignmentList = removeNull(AssignmentList);
  localStorage.setItem("AssignmentList",JSON.stringify(FilteredAssignmentList));

  }

//ASSIGN ASSIGNMENT PER COURSE
function assignAssignmentToCourseForm(){
  var APCList = JSON.parse(localStorage.getItem("AssignmentPerCourseList"));
  var AssignmentListLocalStorage = JSON.parse(localStorage.getItem("AssignmentList"));
  var CourseListLocalStorage = JSON.parse(localStorage.getItem("CourseList"));

  var assignmentnumber = document.getElementById("chooseassignment").value - 1;
  var coursenumber = document.getElementById("choosecourse").value - 1;

  newAssignmentPerCourse = new AssignmentPerCourse(AssignmentListLocalStorage[assignmentnumber], CourseListLocalStorage[coursenumber]);

    if(checkForDoubleAssignmentPerCourse(APCList, newAssignmentPerCourse) == false){

      APCList.push(newAssignmentPerCourse);
      localStorage.setItem("AssignmentPerCourseList",JSON.stringify(APCList));

    } else {

      alert("This assignment is already assigned to this course!");
    }
    
 } 

 //DELETE ASSIGNMENT PER COURSE
 function deleteAssignmentPerCourse(){
  var APCList = JSON.parse(localStorage.getItem("AssignmentPerCourseList"));
  var deleteForm = document.getElementById("deleteapc");
  var apcnumber = deleteForm.value;

  delete APCList[apcnumber-1];

  var FilteredAPCList = removeNull(APCList);
  localStorage.setItem("AssignmentPerCourseList",JSON.stringify(FilteredAPCList));

  }

function deleteAssignmentPerCourseMaxNumber(){
  var SPCList = JSON.parse(localStorage.getItem("AssignmentPerCourseList"));
  document.getElementById("deleteapc").max = SPCList.length;
    }

//ASSIGN ASSIGNMENT PER STUDENT PER COURSE
function assignAssignmentToStudentPerCourseForm(){
  var APSPCList = JSON.parse(localStorage.getItem("AssignmentPerStudentPerCourseList"));
  var AssignmentPerCourseList = JSON.parse(localStorage.getItem("AssignmentPerCourseList"));
  var StudentPerCourseList = JSON.parse(localStorage.getItem("StudentPerCourseList"));

  var assignmentnumber = document.getElementById("deleteapc").value - 1;
  var studentnumber = document.getElementById("deletestudentpercourse").value - 1;

  newAPSPC = new AssignmentPerStudentPerCourse(AssignmentPerCourseList[assignmentnumber], StudentPerCourseList[studentnumber]);

  
if(checkForDoubleAPSPC(APSPCList, newAPSPC) == true){

  alert("This assignment is already assigned to this Student per Course!");

} else{

  if(checkForWrongAssigStream(newAPSPC) == true){
    
      APSPCList.push(newAPSPC);
      localStorage.setItem("AssignmentPerStudentPerCourseList",JSON.stringify(APSPCList));

    } else {

       alert("This assignment does not belong to the course the selected student attends!");
    } 

  }
     
  }

//DELETE ASSIGNMENT PER STUDENT PER COURSE
function deleteAssignmentPerStudentPerCourse(){
  var APSPCList = JSON.parse(localStorage.getItem("AssignmentPerStudentPerCourseList"));
  var deleteForm = document.getElementById("deleteapspc");
  var apspcnumber = deleteForm.value;

  delete APSPCList[apspcnumber-1];

  var FilteredAPSPCList = removeNull(APSPCList);
  localStorage.setItem("AssignmentPerStudentPerCourseList",JSON.stringify(FilteredAPSPCList));

  }

function deleteAssignmentPerStudentPerCourseMaxNumber(){
  var APSPCList = JSON.parse(localStorage.getItem("AssignmentPerStudentPerCourseList"));
  document.getElementById("deleteapspc").max = APSPCList.length;
    }


/////////////////////////////////////////
    
//7.  VALIDATION FUNCTIONS

/////////////////////////////////////////

//returns true if string contains only letters.
function validateStr(stringToValidate){

    if (/^[a-zA-Z]+$/.test(stringToValidate)) {
      return true;
    }else {
     return false;
   }
    };

//returns true if string contains letters only or letters plus numbers or special characters, 
//but false if it contains only numbers and/or special characters.
function checkForNumbersAndSymbols(stringToValidate){
var pattern = /[a-zA-Z]+([(@!#\$%\^\&*\)\(+=._-]{1,})?/
if ( stringToValidate && stringToValidate.length > 2 && pattern.test(stringToValidate)) {
  return true;
      } 
      else {
        return false;
      }
    };


function checkForDoubleTrainer(tpcarray, tpc){
  
    if(tpcarray.some(e => (e.Course.stream === tpc.Course.stream 
    && e.Course.type === tpc.Course.type))) {

      return true;
      
    } else {

      return false;
    }

  }

  function checkForDoubleStudentPerCourse(spcarray, spc){
  
    if(spcarray.some(e => (e.Student.firstName === spc.Student.firstName 
      && e.Student.lastName === spc.Student.lastName
      && e.Course.stream === spc.Course.stream 
      && e.Course.type === spc.Course.type))) {

      return true;
      
    } else {

      return false;
    }
  }

  function checkForDoubleAssignmentPerCourse(apcarray, apc){
  
    if(apcarray.some(e => (e.Assignment.title === apc.Assignment.title 
                      && e.Course.stream === apc.Course.stream 
                      && e.Course.type === apc.Course.type))) {

      return true;
      
    } else {

      return false;
    }
  }

  function checkForDoubleAPSPC(apspcarray, apspc){
    
    for (i=0; i<apspcarray.length; i++){
    if( getNestedObject (apspcarray[i], ['AssignmentPerCourse','Assignment','title']) === getNestedObject (apspc, ['AssignmentPerCourse','Assignment','title'])
                            && getNestedObject (apspcarray[i], ['StudentPerCourse','Student','firstName']) === getNestedObject (apspc, ['StudentPerCourse','Student','firstName'])
                            && getNestedObject (apspcarray[i], ['StudentPerCourse','Student','lastName']) === getNestedObject (apspc, ['StudentPerCourse','Student','lastName'])
                            && getNestedObject (apspcarray[i], ['StudentPerCourse','Course','stream']) === getNestedObject (apspc, ['StudentPerCourse','Course','stream'])
                            && getNestedObject (apspcarray[i], ['StudentPerCourse','Course','type']) === getNestedObject (apspc, ['StudentPerCourse','Course','type'])
                            && getNestedObject (apspcarray[i], ['AssignmentPerCourse','Course','stream']) === getNestedObject (apspc, ['AssignmentPerCourse','Course','stream'])
                            && getNestedObject (apspcarray[i], ['AssignmentPerCourse','Course','type']) === getNestedObject (apspc, ['AssignmentPerCourse','Course','type'])
                            ) {
      

      return true;
      
    } 

    }
    return false;
}

function checkForWrongAssigStream(apspc){
  if(getNestedObject (apspc, ['AssignmentPerCourse','Course','stream']) === getNestedObject (apspc, ['StudentPerCourse','Course','stream'])
      && getNestedObject (apspc, ['AssignmentPerCourse','Course','type']) === getNestedObject (apspc, ['StudentPerCourse','Course','type']))
        {
  
        return true;

    } else {
      
        
        return false;
      }
    }

  
function checkIfStartDateIsAfterEndDate(date1, date2) {
  return new Date(date1) > new Date(date2); // true if date1 is later
}

function getTodayDate(){
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;

document.getElementById("dateofbirth").setAttribute("max", today);
}

function isNumeric(x) {
  return parseFloat(x).toString() === x.toString();
}

/////////////////////////////////////////
    
//8.  OTHER UTILITIES

/////////////////////////////////////////

function removeNull(array) {
      return array.filter(x => x !== null);
      }

const getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}