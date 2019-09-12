/*typing effect*/

const typed = new Typed("#type", {
  strings: [
    "ON THE BUS",
    "WITH COFFEE",
    "THE SUBWAY",
    "AT THE BEACH",
    "IN VACATION"
  ],
  typeSpeed: 200,
  backSpeed: 200,
  backDelay: 0,
  loop: true
});

/*top carousel*/

const pics = ["bus", "coffee", "subway", "beach", "vacation"];
const headerBg = document.querySelector(".main-header");
let i = 1;

const mainHeader = arr => {
  setInterval(() => {
    headerBg.style.background = `url("./img/${arr[i]}.png") no-repeat center`;
    headerBg.style.background = `background-position: center;`;
    headerBg.style.background = `background-size: cover;`;
    i++;

    if (i >= pics.length) {
      i = 0;
    }
  }, 6000);
};

mainHeader(pics);

/*checkbox validation*/
const checkbox = document.querySelector(".checkbox-f");
const btn = document.querySelector(".btn");

checkbox.addEventListener("change", () => {
  if (checkbox.checked === true) {
    btn.removeAttribute("disabled");
  } else if (checkbox.checked === false) {
    btn.setAttribute("disabled", true);
  }
});

/*form validation*/

const form = document.querySelector(".form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const firstName = document.querySelector(".first-name").value;
  const lastName = document.querySelector(".last-name").value;
  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;
  const tel = document.querySelector(".tel").value;
  const error = document.querySelector(".error");

  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!firstName || !lastName || !email || !password || !tel) {
    error.style.display = "block";

    setTimeout(() => {
      error.style.display = "none";
    }, 3000);
  } else {
    if (email.match(mailformat)) {
      userData = {
        firstName,
        lastName,
        email,
        password,
        tel
      };

      jsonUserData = JSON.stringify(userData);
      form.reset();

      const submitFormSs = document.querySelector(".submit-form-ss");
      submitFormSs.style.display = "block";

      setTimeout(() => {
        submitFormSs.style.display = "none";
      }, 3000);

      /*
      fetch("send-data-to-server", {
        method: "POST",
        body: jsonUserData
      });
      */
    }
  }
});
