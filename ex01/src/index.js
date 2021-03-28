

document.querySelectorAll('.some-class').forEach(item => {
    item.addEventListener('click', event => {
      //Write your code hear
    })
  })

  function input(e) {
    let tblInput = document.getElementById("tbInput");
    tblInput.value = tbInput.value + e.value;
    // let tbInput = document.getElementById("tbInput”);
    // tbInput.value = tbInput.value + e.value;
  }

  function del() {
    var tbInput = document.getElementById("tbInput");
    tbInput.value = tbInput.value.substr(0, tbInput.value.length - 1);
  }
