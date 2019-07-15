var century, year, month, dayOfBirth, dayOfWeek, day;

function userInput(){
  century = parseInt(document.getElementById("century").value);
  year = parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  dayOfBirth = parseInt(document.getElementById("birthday").value);
}

function getTheDay(){
    userInput();
    dayOfWeek = (((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfBirth) % 7;
    dayOfWeek -=1;
    console.log(dayOfWeek);
    return (Math.floor(dayOfWeek));
}

 function checkDayOfWeek(){
     day = getTheDay();
      checkTheGender();
      console.log("The function runs");
}
function validate(){
  if(dayOfBirth<1|| dayOfBirth>31||dayOfBirth===""){
    alert("Invalid day of birth!");
  } else if (month<1||month>12||month===""){
    alert("Invalid month!");
  } else if(year<0||year>99||year===""){
    alert("Invalid year!");
  } else{
    return false;
  }
}

let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
function checkTheGender(){
  var sex = document.getElementsByName("choice");
  if(sex[0].checked == true){
      var gender = "male";
  }else if(sex[1].checked == true){
      var gender = "female";
  }else {
    console.log("pass");
  }
    switch(gender){
        case gender = "male":
              switch(day){
                case 0:
                  document.getElementById("result").innerHTML = "Your birthday is on a sunday." + "  " + "Your akan name is " + maleNames[0];
                break;
                case 1:
                  document.getElementById("result").innerHTML = "Your birthday is on a monday." + " " + "Your akan name is " + maleNames[1];
                break;
                case 2:
                  document.getElementById("result").innerHTML = "Your birthday is on a tuesday." + " " + "Your akan name is " + maleNames[2];
                break;
                case 3:
                  document.getElementById("result").innerHTML = "Your birthday is on a wednesday." + " " + "Your akan name is "+ maleNames[3];
                break;
                case 4:
                  document.getElementById("result").innerHTML = "Your birthday is on a thursday." + " " + "Your akan name is " + maleNames[4];
                break;
                case 5:
                  document.getElementById("result").innerHTML = "Your birthday is on a friday." + " " + "Your akan name is " + maleNames[5];
                break;
                case 6:
                  document.getElementById("result").innerHTML = "Your birthday is on a saturday." + " " + "Your akan name is " + maleNames[6];
                break;
                default:

              }
        break;
        case gender = "female":
                switch(day){
                  case 0:
                    document.getElementById("result").innerHTML = "Your birthday is on a sunday." + "  " + "Your akan name is  akosua";
                  break;
                  case 1:
                    document.getElementById("result").innerHTML = "Your birthday is on a monday." + " " + "Your akan name is adwoa ";
                  break;
                  case 2:
                    document.getElementById("result").innerHTML = "Your birthday is on a tuesday." + " " + "Your akan name is abenaa";
                  break;
                  case 3:
                    document.getElementById("result").innerHTML = "Your birthday is on a wednesday." + " " + "Your akan name is akua";
                  break;
                  case 4:
                    document.getElementById("result").innerHTML = "Your birthday is on a thursday." + " " + "Your akan name is yaa";
                  break;
                  case 5:
                    document.getElementById("result").innerHTML = "Your birthday is on a friday." + " " + "Your akan name is afua";
                  break;
                  case 6:
                    document.getElementById("result").innerHTML = "Your birthday is on a saturday." + " " + "Your akan name is ama";
                  break;

              }
        break
        default:
        console.log("pass");
    }
}
