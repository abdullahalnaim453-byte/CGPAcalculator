// Time to start  javascript part

function calculateGrade (grade,unit){
if (grade==='A+') {
    return 4 * unit;
} else if (grade ==='A') {
    return 3.75 * unit;
} else if (grade === 'A-') {
    return 3.50 * unit;
} else if (grade ==='B+') {
    return 3.25 * unit;
} else if (grade ==='B') {
    return 3.00 * unit;
}else if (grade ==='B-') {
    return 2.75 * unit;
} else if (grade ==='C+') {
    return 2.50 *unit;
} else if (grade==='C-'){
    return 2.25 *unit;
} else if (grade==='D') {
    return 2.00 * unit;
} else if (grade==='F') {
    return 0 * unit;
}

}

let count =0;
document.querySelector('#add-course').addEventListener('click', addNewCourse);
function addNewCourse() {
let newForm = document.createElement('form');
newForm.classList.add('addNew',`get-${count}`);
const courseName=`
<form class="addNew,get-${count}">
<input type="text" placeholder="Enter the course code" class="courses get-${count}" required>
<input type="number" placeholder="Enter the Course unit" class="course-unit get-${count}" required>
<select class="grade get-${count}" required>
<option value="select" class="grade">Select</option>
<option value="A+" class="grade">A+</option>
<option value="A" class="grade">A</option>
<option value="A-" class="grade">A-</option>
<option value="B+" class="grade">B+</option>
<option value="B-" class="grade">B-</option>
<option value="C+" class="grade">C+</option>
<option value="C-" class="grade">C-</option>
<option value="D" class="grade">D</option>
<option value="F" class="grade">F</option>
</select>
</form>
`

newForm.innerHTML = courseName
document.querySelector('.course-div').appendChild(newForm);
count++
}
document.querySelector('#remove-course').addEventListener('click', removeForms);



function removeForms() {
let mainForm = document.querySelector('.addNew');
mainForm.remove();
}

const reports=[];
document.querySelector('#get-grade').addEventListener('click', gpaCalculator);
function gpaCalculator() {
const RESULTBAR = document.querySelector('#result');
const GRADESELECT = document.querySelectorAll('select.grade');
const UNIT = document.querySelectorAll('input.course-unit');

const cousreReports = [];

const listOfUnits = [];
const listOfGrades = []
let totalUnits = 0;

GRADESELECT.forEach((e) =>{
let GRADES =e.options;
const selectedIndex= e.selectedIndex;
const selectedGrade = GRADES[selectedIndex];
const gradeValue = selectedGrade.text.toUpperCase();
listOfGrades.push(gradeValue);

});

UNIT.forEach((e) =>{
const unitValue = parseInt(e.value);
totalUnits += unitValue;
listOfUnits.push(unitValue);

})
let totalEarnedUnits = 0;
for (let i=0; i<listOfUnits.length; i++){
totalEarnedUnits += calculateGrade(listOfGrades[i],listOfUnits[i]);
}
const gpa = totalEarnedUnits / totalUnits

if (gpa >= 0) {
RESULTBAR.textContent = 'Your GPA is:- ' + gpa.toFixed(2);
} else {
RESULTBAR.textContent='Please Enter All The Information Given Above'

}


}
//with all this established the program come to an end
// time for testing