function checkingGrade(e){
  if(e>=90){
    return 'A';
  }else if(e>=80 && e<=89){
    return 'B';
  }else if(e>=70 && e<=79){
    return 'C';
  }else if(e>=60 && e<=69){
    return 'D';
  }else{
    return 'E';
  }
}
console.log(checkingGrade(88));