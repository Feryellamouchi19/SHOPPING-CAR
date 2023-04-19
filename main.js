const countElements = document.querySelectorAll(".count");
countElements.forEach(function (countElement) {
  const incrementButton = countElement.previousElementSibling;
  const decrementButton = countElement.nextElementSibling;

  incrementButton.addEventListener("click", function () {
    const count = parseInt(countElement.innerText);
    countElement.innerText = count + 1;

    updateTotal();
  });

  decrementButton.addEventListener("click", function () {
    const count = parseInt(countElement.innerText);
    if (count > 1) {
      countElement.innerText = count - 1;
      updateTotal();
    }
  });
});

function updateTotal() {
  const amountElements = document.querySelectorAll(".amount");
  let subtotal = 0;
  amountElements.forEach(function (amountElement) {
    const count = parseInt(
      amountElement.parentElement.previousElementSibling.lastElementChild
        .innerText
    );
    const amount = parseFloat(amountElement.innerText.replace("$", ""));
    subtotal += count * amount;
  });

  const subtotalElement = document.querySelector(".Subtotal ~ .total-amount");
  subtotalElement.innerText = "$" + subtotal.toFixed(2);

  const totalElement = document.querySelector(".total-amount");
  totalElement.innerText = "$" + subtotal.toFixed(2);
}
