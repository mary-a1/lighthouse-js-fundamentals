const whichSchool  = function (age) {
  // Your code in here ...
  if (age < 13){
    return("Elemantry School");
  } 
  else if (age <= 13 && age <= 18){
    return("Secondary School");
  }
  else
  return ("Lighthouse Labs");

}