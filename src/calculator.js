export class DOB {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  mercuryAge() {

  }
  

  earthAge() {
    let thisYear = parseFloat(new Date().getFullYear());
    let thisMonth = parseFloat(new Date().getMonth());
  
    var presentMonth = ((thisMonth / 12) + thisYear);
    var yourMonth = ((this.month / 12) + parseInt(this.year));
    
    return (presentMonth - yourMonth).toFixed(2);
  }

  venusAge() {

  }



  
}