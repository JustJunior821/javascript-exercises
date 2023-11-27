const convertToCelsius = function(f_heit) {
  let celsius = (f_heit - 32) * (5/9) * 10;
  let convert = Math.round(celsius)/10;
  return convert;
};

const convertToFahrenheit = function(celsius) {
  let f_heit = (celsius * (9/5) + 32) * 10;
  let convert = Math.round(f_heit)/10;
  return convert;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
