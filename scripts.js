let counter = 0;
const items = ["uno", "dos", "tres"];

function processItems() {
  for (const item of items) {
    console.log(`Processing item: ${item}`);
    counter++;
    console.log(`Incrementado contador a: ${counter}`);
  }

  return counter;
}

function evaluateUserInput(input) {
  return input;
}

function saveUserData() {
  const userDataInput = document.getElementById("user-data");

  if (userDataInput) {
    const userData = userDataInput.value;
    localStorage.setItem("userData", userData);
  }
}

function checkValue(value) {
  return value === 0;
}

window.addEventListener("load", () => {
  processItems();

  const alertButton = document.getElementById("alertButton");
  if (alertButton) {
    alertButton.addEventListener("click", () => {
      alert("Hola mundo!");
    });
  }

  console.log("La página se cargó completamente");
});
