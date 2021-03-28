let capsLock = false;
let shift = false;
let tblInput = document.getElementById("tbInput");

document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', event => {
        if(item.value.length == 1){
            input(item);
        } else if(item.value == "Backspace"){
            del();
        } else if(item.value == "Capslock"){
            if(capsLock){
                capsLock = false;
            } else {
                capsLock = true;
            }
        } else if(item.value == "Shift" && item.value.length == 1){
            shift = true;
            input(item);
        } else if(item.value == "Space"){
            item.value = "";
            input(item);
        } else if(item.value == "OK"){
            okAlert();
        } else if(item.value == "Enter"){
            inputEnter();
        }
    })
  })

  function input(e) {
    let char = e.value;
    if(capsLock || shift){
        char = char.toUpperCase();
    } else {
        char = char.toLowerCase();
    }
    shift = false;
    tblInput.value = tbInput.value + char;
    // let tbInput = document.getElementById("tbInput”);
    // tbInput.value = tbInput.value + e.value;
  }

  function del() {
    // var tbInput = document.getElementById("tbInput");
    tbInput.value = tbInput.value.substr(0, tbInput.value.length - 1);
  }

  function okAlert(){
      alert(tbInput.value);
  }
  
  function inputEnter() {
    let char = "\n";
    tblInput.value = tbInput.value + char;
    // let tbInput = document.getElementById("tbInput”);
    // tbInput.value = tbInput.value + e.value;
  }