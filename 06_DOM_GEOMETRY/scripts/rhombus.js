function calculateRhombusArea() {
  const d1 = getInputValueById("rhombus-d1");
  const d2 = getInputValueById("rhombus-d2");

  if (isNaN(d1) || isNaN(d2)) {
    alert("Please input valid numbers");
    return;
  }
  const element = "Rhombus";
  const area = 0.5 * d1 * d2;

  setInnerTextById("rhombus-area", area);
  setAreaCalculation(element, area);
}
