function getCircleArea(ray) {
  return Math.PI * Math.pow(ray, 2);
}
function getCircumference(ray) {
  return 2 * Math.PI * ray;
}
function getRay() {
  var rayValue = document.forms["myForm"]["ray"].value;
  return parseFloat(rayValue);
}
function setAreaInInput(area) {
  document.forms["myForm"]["circleArea"].value = area.toFixed(2);
}
function setCircumference(circumference) {
  document.forms["myForm"]["circumference"].value = circumference.toFixed(2);
}
function calculateProsByCircle(event) {
  event.preventDefault(); // Impede o envio do formulário
  var ray = getRay();
  var area = getCircleArea(ray);
  var circumference = getCircumference(ray);
  setAreaInInput(area);
  setCircumference(circumference);
}
document.forms["myForm"].addEventListener("submit", calculateProsByCircle);
