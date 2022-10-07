"use strict"

class Meetup {
  static daysOfWeek = {
    'sunday': 0,
    'monday': 1,
    'tuesday': 2, 
    'wednesday': 3, 
    'thursday': 4, 
    'friday': 5,
    'saturday': 6,
  };
  static ordinals = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
  }

  constructor(year, month) {
    this.date = new Date(year, month - 1, 1);
  }
  day(weekday, schedule) {
    let dayCount;
    let dayOfWeek = Meetup.daysOfWeek[weekday.toLowerCase()];

    if (schedule.toLowerCase() in Meetup.ordinals) {
      dayCount = Meetup.ordinals[schedule.toLowerCase()];
      let currentMonth = this.date.getMonth();
      let currentCount = 0;
      let tempDate = new Date(this.date.getFullYear(), this.date.getMonth());

      while (tempDate.getMonth() === currentMonth) {
        if (tempDate.getDay() === dayOfWeek) {
          currentCount += 1;
        }
        if (currentCount === dayCount) {
          return tempDate;
        }
        tempDate.setDate(tempDate.getDate() + 1);
      }
      return null;
    } else if (schedule.toLowerCase() === 'last') {
      let tempDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);

      while (tempDate.getDay() !== dayOfWeek) {
        tempDate.setDate(tempDate.getDate() - 1);
      }
      return tempDate;
    } else {
      let tempDate = new Date(this.date.getFullYear(), this.date.getMonth(), 13);
      while (tempDate.getDay() !== dayOfWeek) {
        tempDate.setDate(tempDate.getDate() + 1);
      }
      return tempDate;
    }
  }
}

module.exports = Meetup;

