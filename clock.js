"use strict"

const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;

const Clock = {
  hour: 0,
  minute: 0,
  at(hour, minute = 0) {
    this.hour = hour % HOURS_IN_DAY;
    this.minute = minute % MINUTES_IN_HOUR;
    return {...this};
  },
  add(minutes) {
    let addedHours = Math.floor(minutes / 60) % 24;
    let addedMinutes = minutes % 60;
    let extraHour = Math.floor((this.minute + addedMinutes) / 60);
      
    this.hour = (this.hour + addedHours + extraHour) % 24;
    this.minute = (this.minute + addedMinutes) % 60;   
    return this;
  },
  subtract(minutes) {
    let subtractedHours = Math.floor(minutes / 60) % 24; // 0
    let subtractedMinutes = minutes % 60; // 50
    let extraHour = this.minute - subtractedMinutes < 0 ? 1 : 0; // extraHour = 1
    let extraDay = this.hour - subtractedHours - extraHour < 0 ? 1 : 0;
      
    this.hour = this.hour - subtractedHours - extraHour + extraDay * 24; // 0 - 0 - 1
    this.minute = this.minute - subtractedMinutes + extraHour * 60;   
    return this;
  },
  isEqual(clockObj) {
    return this.toString() === clockObj.toString();
  },
  toString() {
    const displayHour = this.hour < 10 ? '0' + String(this.hour) : String(this.hour);
    const displayMinute = this.minute < 10 ? '0' + String(this.minute) : String(this.minute);
    return `${displayHour}:${displayMinute}`;
  }
};

module.exports = Clock;