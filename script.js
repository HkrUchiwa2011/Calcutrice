let screen = document.getElementById("screen");

function appendValue(value) {
  screen.textContent += value;
}

function clearScreen() {
  screen.textContent = "";
}

function calculate() {
  try {
    screen.textContent = eval(screen.textContent);
  } catch {
    screen.textContent = "Erreur";
  }
}
