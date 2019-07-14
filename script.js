var century, year, month, dayOfMonth, dayOfWeek, day;


function getUserInput(){
  century = parseInt(document.getElementById("century").value);
  year = parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  dayOfMonth = parseInt(document.getElementById("day-of-month").value);
}
//Calculation function
function calculateDay(){
  getUserInput();
  dayOfWeek = (((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10)) +dayOfMonth % 7;
  dayOfWeek -=1;
  console.log(dayOfWeek);
   //Testing output
   return(Math.floor(dayOfWeek));
}
function checkDayOfWeek(){
  day = calculateDay();
  chechGender();
  console.log("The function is running");
}
//defining the arays
let dayOfWeek = ["sunday","monday","tuesday","wednesday","thursday","friday", "saturday"];
let dayOfWeek = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi", "Kwame"];

//use slected radio button
function checkGender(){
  var xgender = document.getElementsByName("rads");
  if(xgender[0].checked == true) {
    var gender = "male";
  }else if (xgender[1].checked == true) {
    var gender = "female";
  }else {
    console.log("pass");
  }
  switch(gender){
    case gender = "male":
        switch(day){
          case 0:
            document.getElemetById("result").innerHTML = "The day is sunday." + " " + "Your akan name is" + maleNames[0];
          break;
          case 1:
            document.getElemetById("result").innerHTML = "The day is Monday." + " " + "Your akan name is" + maleNames[1];
          break;
          case 2:
            document.getElemetById("result").innerHTML = "The day is Tuesday." + " " + "Your akan name is" + maleNames[2];
          break;
          case 3:
            document.getElemetById("result").innerHTML = "The day is Wednesday." + " " + "Your akan name is" + maleNames[3];
          break;
          case 4:
            document.getElemetById("result").innerHTML = "The day is Thursday." + " " + "Your akan name is" + maleNames[4];
          break;
          case 5:
       document.getElemetById("result").innerHTML = "The day is Friday." + " " + "Your akan name is" + maleNames[5];
          break;
          case 6:
       document.getElemetById("result").innerHTML = "The day is Saturday." + " " + "Your akan name is" + maleNames[6];
          break;
   }
  }
