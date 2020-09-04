let todayDate = new Date();
let todayNumber = todayDate.getDay() || 7;
todayDate.setDate(todayDate.getDate() + 4 - todayNumber);
let oneJan = new Date(todayDate.getFullYear(), 0, 1);
let todayWeek = Math.ceil( (((todayDate - oneJan) / 86400000) + 1) / 7 );

let tomorrowNumber;
let tomorrowWeek;
let classTwoToday;
let classTwoTomorrow;
let classThreeToday;
let classThreeTomorrow;

if (todayNumber == 7){
    tomorrowNumber = 1
    tomorrowWeek = todayWeek + 1
} else {
    tomorrowNumber = todayNumber + 1
    tomorrowWeek = todayWeek
}

function isEven(weekNumber){
  if (weekNumber % 2 == 0) {
    return weekNumber = true
  } else {
    return weekNumber = false
  }
}

function schoolOrHome(dayName, dayNumber, weekIsEven, firstClass, secondClass) {
  if (weekIsEven == true){
    if (dayNumber == 1 | dayNumber == 3 | dayNumber == 5) {
        return [
          firstClass = dayName + " ska vi vara på skolan", 
          secondClass = dayName + " ska vi vara på distans"]
    } else if (dayNumber == 2 | dayNumber == 4) {
        return [
          firstClass = dayName + " ska vi vara på distans", 
          secondClass = dayName + " ska vi vara på skolan"]
    } else if (dayNumber == 6 | dayNumber == 7) {
        return [
          firstClass = dayName + " är det helg", 
          secondClass = dayName + " är det helg"]
    }
} else if (weekIsEven == false){
    if (dayNumber == 1 | dayNumber == 3 | dayNumber == 5) {
        return [
          firstClass = dayName + " ska vi vara på distans", 
          secondClass = dayName + " ska vi vara på skolan"]
    } else if (dayNumber == 2 | dayNumber == 4) {
        return [
          firstClass = dayName + " ska vi vara på skolan", 
          secondClass = dayName + " ska vi vara på distans"]
    } else if (dayNumber == 6 | dayNumber == 7) {
        return [
          firstClass = dayName + " är det helg", 
          secondClass = dayName + " är det helg"]
    }
  }
}

document.getElementById("twoClassToday").innerHTML = schoolOrHome("Idag", todayNumber, isEven(todayWeek), classTwoToday, classThreeToday)[0]
document.getElementById("threeClassToday").innerHTML = schoolOrHome("Idag", todayNumber, isEven(todayWeek), classTwoToday, classThreeToday)[1]

document.getElementById("twoClassTomorrow").innerHTML = schoolOrHome("Imorgon", tomorrowNumber, isEven(tomorrowWeek), classTwoTomorrow, classThreeTomorrow)[0]
document.getElementById("threeClassTomorrow").innerHTML = schoolOrHome("Imorgon", tomorrowNumber, isEven(tomorrowWeek), classTwoTomorrow, classThreeTomorrow)[1]

document.getElementById("currentTime").innerHTML = "Tiden nu: " + new Date();