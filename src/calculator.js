var thisYear = parseFloat(new Date().getFullYear());
var thisMonth = parseFloat(new Date().getMonth());
var thisDay = parseFloat(new Date().getDate());
var presentDay = ((thisDay / 31) + (thisMonth / 12) + thisYear);

const maleEarthExp = 76.4;
const femaEarthExp = 81.2;

export class DOB {
  constructor(year, month, day, sex) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.sex = sex;
  }

  mercuryAge() {
    var yourMonth = ((this.month / 12) + parseInt(this.year));
    
    var mercYear = (88 / 365);
    var earthAge = (presentDay - yourMonth).toFixed(3);
    var yourMercAge = (earthAge / mercYear).toFixed(3);

    return yourMercAge;
  }

  venusAge() {
    var yourMonth = ((this.month / 12) + parseInt(this.year));
    
    var venusYear = (225 / 365);
    var earthAge = (presentDay - yourMonth).toFixed(3);
    var yourVenAge = (earthAge / venusYear).toFixed(3);

    return yourVenAge;
  }
  
  earthAge() {

    var yourMonth = ((this.month / 12) + parseInt(this.year));
    
    return (presentDay - yourMonth).toFixed(3);
  }

  marsAge() {
    var yourMonth = ((this.month / 12) + parseInt(this.year));

    var marsYear = (687 / 365);
    var earthAge = (presentDay - yourMonth).toFixed(3);
    var yourMarAge = (earthAge / marsYear).toFixed(3);

    return yourMarAge;
  }

  jupiterAge() {
    var yourMonth = ((this.month / 12) + parseInt(this.year));

    var jupiYear = (12);
    var earthAge = (presentDay - yourMonth).toFixed(3);
    var yourJupiAge = (earthAge / jupiYear).toFixed(3);

    return yourJupiAge;
  }

  saturnAge() {
    var yourMonth = ((this.month / 12) + parseInt(this.year));

    var satuYear = (29);
    var earthAge = (presentDay - yourMonth).toFixed(3);
    var yourSatuAge = (earthAge / satuYear).toFixed(3);

    return yourSatuAge;
  }

  LifeExp() {
    var yourMonth = ((this.month / 12) + parseInt(this.year));

    if(this.sex == "male") {
      let mExp = (maleEarthExp - (presentDay - yourMonth)).toFixed(3);
      return mExp;
    } else if (this.sex == "female") {
      return (femaEarthExp - (presentDay - yourMonth)).toFixed(3);
    }
  }

  mercExp() {
    if (this.sex == "male") {
      let mExp = (maleEarthExp - parseFloat(this.mercuryAge())).toFixed(3);
      
      if (mExp >= 0) {
        return mExp;
      } else {
        return ("exceeded your life on Mercury by " + (-1*mExp));
      }
    }
  }

  venuExp() {
    if (this.sex == "male") {
      let mExp = (maleEarthExp - parseFloat(this.venusAge())).toFixed(3);
    
      if (mExp >= 0) {
        return mExp;
      } else {
        return ("exceeded your life on Venus by " + (-1*mExp));
      }
    }
  }

  marsExp() {
    if (this.sex == "male") {
      let mExp = (maleEarthExp - parseFloat(this.marsAge())).toFixed(3);
      if (mExp >= 0) {
        return mExp;
      } else {
        return ("exceeded your life on Mars by " + (-1*mExp));
      }
    }
  }

  jupiExp() {
    if (this.sex == "male") {
      let mExp = (maleEarthExp - parseFloat(this.jupiterAge())).toFixed(3);
      console.log(mExp);
      if (mExp >= 0) {
        return mExp;
      } else {
        return ("exceeded your life on Jupiter by " + (-1*mExp));
      }
    }
  }
  satuExp() {
    if (this.sex == "male") {
      let mExp = (maleEarthExp - parseFloat(this.saturnAge())).toFixed(3);
      console.log(mExp);
      if (mExp >= 0) {
        return mExp;
      } else {
        return ("exceeded your life on Saturn by " + (-1*mExp));
      }
    }
  }
}