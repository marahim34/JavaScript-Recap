function evenSizedString(str) {
  console.log(str);
  const size = str.length;

  if (size === 3) {
    console.log("even size");
    return false;
  } else {
    console.log("Odd Size");
    return true;
  }
  console.log(str, size);
}

evenSizedString("Dhaka");

function doubleOrTriple(number, doDuble) {
  if (doDuble) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}

console.log(doubleOrTriple(6, false));
