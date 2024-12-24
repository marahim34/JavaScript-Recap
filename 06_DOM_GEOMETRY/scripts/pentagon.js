function calculatePentagonArea() {
  const p = getInputValueById("pentagon-p");
  const b = getInputValueById("pentagon-b");

  if (isNaN(p) || isNaN(b)) {
    alert("Please input valid numbers");
    return;
  }
  const element = "Pentagon";
  const area = 0.5 * p * b;

  setInnerTextById("pentagon-area", area);
  setAreaCalculation(element, area);
}
