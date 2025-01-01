let counter = 1;

function getInputValueById(inputFieldId) {
  const inputFieldValue = parseFloat(
    document.getElementById(inputFieldId).value
  );
  return inputFieldValue;
}

function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}

function refreshSerialNumbers() {
  const calculationArea = document.getElementById("calculation-area");
  const items = calculationArea.querySelectorAll(".flex");

  items.forEach((item, index) => {
    const calculationText = item.querySelector("span");
    const currentText = calculationText.innerHTML;
    calculationText.innerHTML = currentText.replace(/^\d+\./, `${index + 1}.`);
  });
}

function setAreaCalculation(element, result) {
  const setArea = document.getElementById("calculation-area");

  const listItem = document.createElement("div");
  listItem.className = "flex justify-between items-center mt-2";

  const calculationText = document.createElement("span");
  calculationText.innerHTML = `${counter}. ${element}: <strong>${result} cm²</strong>`;
  listItem.appendChild(calculationText);

  const convertButton = document.createElement("button");
  convertButton.innerText = "Convert to m²";
  convertButton.className =
    "ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600";

  convertButton.addEventListener("click", () => {
    const resultInMeters = parseFloat(result) / 10000;
    calculationText.innerHTML = `${counter}. ${element}: <strong>${resultInMeters.toFixed(
      4
    )} m²</strong>`;
    convertButton.remove();
    refreshSerialNumbers(); // Refresh serial numbers after conversion
  });

  listItem.appendChild(convertButton);

  setArea.appendChild(listItem);

  counter++;
  refreshSerialNumbers(); // Refresh serial numbers after adding a new entry
}

function displayResult(result) {
  const resultSpan = document.getElementById("result");
  resultSpan.innerText = `${result} cm²`;
}
