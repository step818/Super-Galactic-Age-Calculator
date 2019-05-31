export class DOB {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  mercuryAge() {

  }
  

  earthAge() {
    let thisYear = new Date().getFullYear();
    //let thisMonth = new Date().getMonth();
    console.log(this.year);
    console.log(thisYear);
    return ((thisYear)-(this.year)); 
  }

  venusAge() {

  }



  
}