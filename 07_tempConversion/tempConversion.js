const ftoc = function(farenheit) {
  if (typeof farenheit != 'number')
    return 'ERROR'
  let celcius = (farenheit - 32) *5 /9;
  let roundedCelcius = Math.round(celcius*10)/10;
  return roundedCelcius;
};

const ctof = function(celcius) {
  if (typeof celcius != 'number')
    return 'ERROR'
  let farenheit = (celcius*9/5)+32;
  let roundedFarenheit = Math.round(farenheit*10)/10;
  return roundedFarenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
