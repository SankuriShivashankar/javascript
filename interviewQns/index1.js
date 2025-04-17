let students = ["shubh","anajali","shivani","shivangi","Annapurna","Shubham","Krishnanendu","Ravindranathan","Shivesh","Kaif","Emanuel"];
let houses = [];

// Define threshold values as named constants
const GRYFFINDOR_THRESHOLD = 6;
const HUFFLEPUFF_THRESHOLD = 8;
const RAVENCLAW_THRESHOLD = 12;

for (const student of students) {
  if(student.length <= GRYFFINDOR_THRESHOLD){
    houses.push("Gryffindor");
  }
  else if(student.length <= HUFFLEPUFF_THRESHOLD){
    houses.push("Hufflepuff");
  }
  else if(student.length <= RAVENCLAW_THRESHOLD){
    houses.push("Ravenclaw");
  }
  else{
    houses.push("Slytherin");
  }
 
}
console.log(houses)