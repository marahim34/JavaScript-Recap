function calculateRectangleArea() {
  const width = getInputValueById("rectangle-width");
  const length = getInputValueById("rectangle-length");

  if (isNaN(width) || isNaN(length)) {
    alert("Please input valid numbers");
    return;
  }

  const element = "Rectangle";

  const area = width * length;

  setInnerTextById("rectangle-area", area);
  setAreaCalculation(element, area);
}
