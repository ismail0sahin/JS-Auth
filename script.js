const myusername = document.getElementById("username");
const mypassword = document.getElementById("password");
const mybutton = document.getElementById("mybutton");
// Add a click event listener to the button
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("mybutton");
  
    function handleClick() {
        const uname = myusername.value;
        const pw = mypassword.value;
        console.log(uname);
        console.log(pw);
        if(uname=='ismail' || pw=='1234'){
            console.log("1111");
            (async () => {
                await delay(5000); // Wait for 5 seconds
                console.log("Waited for 5 seconds!");
            })();
        }
        
    }
  
    if (button) {
      button.addEventListener("click", handleClick);
    } else {
      console.error("Button element not found.");
    }
  });
  


