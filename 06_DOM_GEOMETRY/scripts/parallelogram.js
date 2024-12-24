function calculateParallelogramArea() {
  const base = getInputValueById("para-base");
  const height = getInputValueById("para-height");

  if (isNaN(base) || isNaN(height)) {
    alert("Please input valid numbers");
    return;
  }

  const element = "Parallelogram";

  const area = base * height;

  setInnerTextById("parallelogram-area", area);
  setAreaCalculation(element, area);
}
