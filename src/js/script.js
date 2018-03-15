// check for connection
console.log("script is running!!");


//  puesdo 

//color choice - check appears on the right - default color is black

//When user clicks on the radio button the check mark will move to that color with the radio button

//if the user clicks a color that isn't the previous color with the checkmark

// then the previous color has the checkmark removed and the check mark is applied to a new color

const showCheckOnSelect = () => {
 let listener = document.querySelector("#radio1").addEventListener;

    if (document.getElementById('yesCheck').checked) {
        listener("change", ()=> {
            alert("checked radio 1");
        })
        
    }
    else {
        document.getElementById('ifYes').style.display = 'none';
    } 
  }
 
  showCheckOnSelect();

  (function() {
    "use strict";
  
      ("change", function() {
          alert("checked radio 1");
        
      });
  
      document.querySelector("#radio2").addEventListener("change", function() {
          alert("checked radio 2");
      });
  
  })();

