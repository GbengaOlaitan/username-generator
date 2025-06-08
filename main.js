"use strict";
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const userName = document.getElementById("user-name");
const generateButton = document.getElementById("generateUserName");
const emptyForm = document.querySelector(".js-empty-form");
const btnCopy = document.querySelector(".js-btn-copy");
let userNameGenerated;
let isUserNameAccepted = false;
console.log(isUserNameAccepted);

//Make Buttton Generate Username When clicked;

function generateRandomFirstNameNumber(firstName) {
  const firstNameArr = [];
  for (let i = 0; i < 3; i++) {
    const firstNameLength = Math.floor(Math.random() * firstName.length);
    firstNameArr.push(firstName.charAt(firstNameLength));
  }

  return firstNameArr;
}

//function generating lastName array
function generateRandomLastNameNumber(lastName) {
  const lastNameArr = [];
  for (let i = 0; i < 3; i++) {
    const lastNameLength = Math.floor(Math.random() * lastName.length);
    lastNameArr.push(lastName.charAt(lastNameLength));
  }

  return lastNameArr;
}

generateButton.addEventListener("click", () => {
  if (firstName.value !== "" && lastName.value !== "") {
    const firstNameElement = firstName.value.toLowerCase().trim();
    const lastNameElement = lastName.value.toLowerCase().trim();
    const generatedfirstName = generateRandomFirstNameNumber(firstNameElement);
    const generatedLastName = generateRandomLastNameNumber(lastNameElement);
    const userNameArr = [...generatedfirstName, ...generatedLastName];
    userNameGenerated = `@${userNameArr.join("")}`;
    userName.value = userNameGenerated;

    if (userName.value !== "@") {
      const userNameBtn = document.querySelector(".js-username-btn");
      userNameBtn.classList.remove("hidden");
      generateButton.setAttribute("disabled", "disabled");

      //Accept Button
      const acceptBtn = document.getElementById("accept-btn");

      acceptBtn.addEventListener("click", () => {
        userNameBtn.innerHTML = `          <div class="success-message js-success-message">
            <img src="./icons/success-green-check-mark-icon.svg" alt="success-icon" width="30px">
            <p>Username Accepted</p>
          </div>`;
        setTimeout(() => {
          const successMessage = document.querySelector(".js-success-message");
          successMessage.classList.add("hidden");
        }, 1000);

        isUserNameAccepted = true;
 //Copy
        if (isUserNameAccepted) {
        btnCopy.addEventListener("click", () => {
          userName.select();
          document.execCommand("copy");
          alert(`username ${userNameGenerated} copied`);
        });
      }
      });

  

      //Decline Button
      const declineBtn = document.getElementById("decline-btn");

      declineBtn.addEventListener("click", () => {
        userNameBtn.classList.add("hidden");
        userName.value = "";
        generateButton.removeAttribute("disabled");
      });
    }
  }
  if (firstName.value == "" && lastName.value == "") {
    emptyForm.classList.remove("hidden");
    setTimeout(() => {
      emptyForm.classList.add("hidden");
    }, 2000);
  }
});
