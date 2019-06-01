export class DOB {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  mercuryAge() {
    var thisYear = parseFloat(new Date().getFullYear());
    var thisMonth = parseFloat(new Date().getMonth());
    var presentMonth = ((thisMonth / 12) + thisYear);
    var yourMonth = ((this.month / 12) + parseInt(this.year));
    
    var mercYear = (88 / 365);
    var earthAge = (presentMonth - yourMonth).toFixed(2);
    var mercAge = (earthAge / mercYear).toFixed(3);
    return mercAge;
  }
  

  earthAge() {
    var thisYear = parseFloat(new Date().getFullYear());
    var thisMonth = parseFloat(new Date().getMonth());
    var presentMonth = ((thisMonth / 12) + thisYear);
    var yourMonth = ((this.month / 12) + parseInt(this.year));
    
    return (presentMonth - yourMonth).toFixed(2);
  }

  venusAge() {

  }



  
}