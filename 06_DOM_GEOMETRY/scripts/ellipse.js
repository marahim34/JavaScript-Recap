function calculateEllipseArea() {
  const a = getInputValueById("ellipse-a");
  const b = getInputValueById("ellipse-a");

  if (isNaN(a) || isNaN(b)) {
    alert("Please input valid numbers");
    return;
  }
  const element = "Ellipse";
  const area = 3.1416 * a * b;

  setInnerTextById("ellipse-area", area);
  setAreaCalculation(element, area);
}
