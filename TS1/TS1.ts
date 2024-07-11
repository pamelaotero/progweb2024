function getCircleArea(ray: number): number {
  return Math.PI * Math.pow(ray, 2);
}

function getCircumference(ray: number): number {
  return 2 * Math.PI * ray;
}

function getRay(): number {
  const form = document.forms.namedItem("myForm") as HTMLFormElement;
  const rayInput = form.elements.namedItem("ray") as HTMLInputElement;
  return parseFloat(rayInput.value);
}

function setAreaInInput(area: number): void {
  const form = document.forms.namedItem("myForm") as HTMLFormElement;
  const areaInput = form.elements.namedItem("circleArea") as HTMLInputElement;
  areaInput.value = area.toFixed(2);
}

function setCircumference(circumference: number): void {
  const form = document.forms.namedItem("myForm") as HTMLFormElement;
  const circumferenceInput = form.elements.namedItem(
    "circumference"
  ) as HTMLInputElement;
  circumferenceInput.value = circumference.toFixed(2);
}

function calculateProsByCircle(event: Event): void {
  event.preventDefault();
  const ray = getRay();
  const area = getCircleArea(ray);
  const circumference = getCircumference(ray);

  setAreaInInput(area);
  setCircumference(circumference);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.forms.namedItem("myForm") as HTMLFormElement;
  form.addEventListener("submit", calculateProsByCircle);
});
