const button = document.querySelector("input[type=button].signup");

function submit() {
  const emailElement = document.querySelector("input[type=email].signup");
  const baseURL = "http://click.kyeburchard.com/api/landing/subscribe?";
  const fullURL = baseURL + "email=" + emailElement.value;
  fetch(fullURL, {
    method: "POST",
  })
    .then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        emailElement.value = "";
      } else {
        console.log("oops invlaid email");
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

button.addEventListener("click", submit);
