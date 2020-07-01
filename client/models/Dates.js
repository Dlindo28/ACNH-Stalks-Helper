/**
 * @file Builds models for date interval objects
 * @author Daniel Lindo
 */

/** @const {string[]} - array of possible day intervals */
export const days = [
  "Sunday",
  "MondayAM",
  "MondayPM",
  "TuesdayAM",
  "TuesdayPM",
  "WednesdayAM",
  "WednesdayPM",
  "ThursdayAM",
  "ThursdayPM",
  "FridayAM",
  "FridayPM",
  "SaturdayAM",
  "SaturdayPM",
];

/**
 * Get weekday given date string
 * @param {string} date
 * @returns {string} - weekday
 */
export const getDay = (date) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[date.getDay()];
};

/**
 * Get meridian given date string
 * @param {string} date
 * @returns {string} - "AM" or "PM" based on time
 */
export const getMeridian = (date) => {
  if (getDay(date) == "Sunday") {
    return "";
  }
  return date.getHours() < 12 ? "AM" : "PM";
};

/**
 * Get hour given date string
 * @param {string} date
 * @returns {string} - date's hour in 12 hour format
 */
export const getHours = (date) => {
  let hour = date.getHours() % 12;
  return hour != 0 ? hour.toString() : "12";
};

/**
 * Get minute given date string
 * @param {string} date
 * @returns {string} - date's minute formatted to 12 hour format
 */
export const getMinutes = (date) => {
  let minutes = date.getMinutes();
  return minutes < 10 ? "0" + minutes.toString() : minutes.toString();
};
