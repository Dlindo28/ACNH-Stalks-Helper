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

export const getDay = (date) => {
  const day = {
    Sun: "Sunday",
    Mon: "Monday",
    Tue: "Tuesday",
    Wed: "Wednesday",
    Thu: "Thursday",
    Fri: "Friday",
    Sat: "Saturday",
  };
  return day[date.toDateString().split(" ")[0]];
};

export const getMeridian = (date) => {
  return date.getHours() < 12 ? "AM" : "PM";
};

export const getHours = (date) => {
  let hour = date.getHours() % 12;
  return hour != 0 ? hour.toString() : "12";
};

export const getMinutes = (date) => {
  let minutes = date.getMinutes();
  return minutes < 10 ? "0" + minutes.toString() : minutes.toString();
};
