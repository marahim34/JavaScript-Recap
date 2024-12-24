function calculateTriangleArea() {
  const base = getInputValueById("triangle-base");
  const height = getInputValueById("triangle-height");

  if (isNaN(base) || isNaN(height)) {
    alert("Please input valid numbers");
    return;
  }

  const element = "Triangle";
  const area = 0.5 * base * height;

  setInnerTextById("triangle-area", area);
  setAreaCalculation(element, area);
}
