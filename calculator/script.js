let display = document.getElementById("display");

function clearDisplay() {
  display.innerText = "0";
}

function appendNumber(num) {
  if (display.innerText === "0" || display.innerText === "Error") {
    display.innerText = num;
  } else {
    display.innerText += num;
  }
}

function appendSymbol(symbol) {
  const lastChar = display.innerText.slice(-1);
  if ("+-*/".includes(lastChar)) return; // prevent duplicate symbols
  display.innerText += symbol;
}

function deleteLast() {
  if (display.innerText.length === 1 || display.innerText === "Error") {
    display.innerText = "0";
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Error";
  }
}
