let capsLock = false;
let shift = false;
// TextArea Input Element
let txtInput = document.getElementById("txtInput");
// Selecting all buttons and added event listener
document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", (event) => {
    if (item.value.length == 1) {
      input(item);
    } else if (item.value == "Backspace") {
      del();
    } else if (item.value == "Capslock") {
      if (capsLock) {
        capsLock = false;
      } else {
        capsLock = true;
      }
    } else if (item.value == "Shift" && item.value.length == 1) {
      shift = true;
      input(item);
    } else if (item.value == "Space") {
      item.value = "";
      input(item);
    } else if (item.value == "OK") {
      okAlert();
    } else if (item.value == "Enter") {
      inputEnter();
    }
  });
});
// Adding entered value to the Text Area
function input(e) {
  let char = e.value;
  if (capsLock || shift) {
    char = char.toUpperCase();
  } else {
    char = char.toLowerCase();
  }
  shift = false;
  txtInput.value = txtInput.value + char;
}
// Deleting last character in the Text Area string
function del() {
  txtInput.value = txtInput.value.substr(0, txtInput.value.length - 1);
}
// Caling alert function when OK clicked
function okAlert() {
  alert(txtInput.value);
}
// Moving input to the next line once Enter clicked
function inputEnter() {
  let char = "\n";
  txtInput.value = txtInput.value + char;
}
