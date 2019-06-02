var thisYear = parseFloat(new Date().getFullYear());
var thisMonth = parseFloat(new Date().getMonth());
var presentMonth = ((thisMonth / 12) + thisYear);



export class DOB {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  mercuryAge() {
    var yourMonth = ((this.month / 12) + parseInt(this.year));
    
    var mercYear = (88 / 365);
    var earthAge = (presentMonth - yourMonth).toFixed(3);
    var yourMercAge = (earthAge / mercYear).toFixed(3);

    return yourMercAge;
  }

  venusAge() {
    // var thisYear = parseFloat(new Date().getFullYear());
    // var thisMonth = parseFloat(new Date().getMonth());
    // var presentMonth = ((thisMonth / 12) + thisYear);
    var yourMonth = ((this.month / 12) + parseInt(this.year));
    
    var venusYear = (225 / 365);
    var earthAge = (presentMonth - yourMonth).toFixed(3);
    var yourVenAge = (earthAge / venusYear).toFixed(3);

    return yourVenAge;
  }
  
  earthAge() {
    // var thisYear = parseFloat(new Date().getFullYear());
    // var thisMonth = parseFloat(new Date().getMonth());
    // var presentMonth = ((thisMonth / 12) + thisYear);
    var yourMonth = ((this.month / 12) + parseInt(this.year));
    
    return (presentMonth - yourMonth).toFixed(3);
  }

  marsAge() {
    var yourMonth = ((this.month / 12) + parseInt(this.year));

    var marsYear = (687 / 365);
    var earthAge = (presentMonth - yourMonth).toFixed(3);
    var yourMarAge = (earthAge / marsYear).toFixed(3);

    return yourMarAge;
  }

  jupiterAge() {
    var yourMonth = ((this.month / 12) + parseInt(this.year));

    var jupiYear = (12);
    var earthAge = (presentMonth - yourMonth).toFixed(3);
    var yourJupiAge = (earthAge / jupiYear).toFixed(3);

    return yourJupiAge;
  }

  saturnAge() {
    var yourMonth = ((this.month / 12) + parseInt(this.year));

    var satuYear = (29);
    var earthAge = (presentMonth - yourMonth).toFixed(3);
    var yourSatuAge = (earthAge / satuYear).toFixed(3);

    return yourSatuAge;
  }
}