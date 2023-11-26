
let cart = [];
let media = "";
let totalPrice = 0;

const namePattern = /^[A-Za-z\s-]+$/;
const addressPattern = /^[A-Za-z\s]+(\d{1,4})?$/;
const emailPattern = /^[A-Za-z0-9_.-]+@[A-Za-z]+\.[A-Za-z]+$/;

function addCheckboxChangeListener(checkbox) {
  checkbox.addEventListener('change', function () {
    const group = checkbox.closest('.choose-songs');
    if (!group) return;
    const artist = group.querySelector('.singer').innerHTML;

    const priceStr = document.querySelector(`.js-${checkbox.id}-price`).innerHTML;
    let price = priceStr.split(' ')[0]
    let label = checkbox.nextElementSibling;
    let labelText = label.textContent.trim();

    if (priceStr.split(' ')[1] === 'SEK') {
      if (checkbox.checked) {
        cart.push({
          name: artist,
          song: labelText,
          price: price
        });

        changeContent();

      } else {
        cart = cart.filter(function (item) {
          return item.song !== labelText;
        });
        changeContent();
      }

    } else {
      showAlerts(labelText);
      checkbox.checked = false;
    }

  });
}

const checkboxGroups = document.querySelectorAll('.choose-songs');
checkboxGroups.forEach(group => {
  const checkboxes = group.querySelectorAll('.form-check-input');
  checkboxes.forEach(checkbox => {
    addCheckboxChangeListener(checkbox);
  });
});



const submitOrder = document.querySelector('.js-submit-order');
submitOrder.addEventListener('click', () => {

  if (validateForm() && !isCartEmpty()) {
    const formattedPrice = totalPrice.toFixed(0);
    const selectedSongs = cart.map(item => `${item.name}: ${item.song}`).join('\n');
    const alertMessage = `Tack för din beställning!\n\nDina valda låtar:\n${selectedSongs}\n\nDen totala priset för din beställning är: ${formattedPrice} SEK`;
    alert(alertMessage);
  }
});

function changeContent() {
  let pris = 0;
  let choosenSongs = '';
  cart.forEach(item => {
    pris += Number(item.price);
    choosenSongs += `
    <p class="selected-songs"> ${item.name}: ${item.song}</p>
    `;
  })
  document.querySelector('.js-selected-songs').innerHTML = choosenSongs;
  totalPrice = pris;
  updatePrice();
}
function updatePrice() {
  const finalPrice = totalPrice - (totalPrice * getMediaDiscount());
  const sum = 'Pris: ' + finalPrice.toFixed(0) + ' SEK';
  document.querySelector('.js-price').innerHTML = sum;
}

const radioInputs = document.querySelectorAll('input[name="media-option"]');
radioInputs.forEach((radioInput) => {
  radioInput.addEventListener("change", function () {
    let label = radioInput.nextElementSibling;
    media = label.textContent.trim();
    updatePrice();
  });
});

function getMediaDiscount() {
  if (media === "YouTube") {
    return 0.1;
  } else if (media === "Apple Music") {
    return 0.25;
  }
  else {
    return 0;
  }
}

function showAlerts(songTitle) {
  alert("The song " + songTitle + " is not availabel right now ")
}

function validateForm() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const address = document.getElementById("address").value.trim();
  const email = document.getElementById("email").value.trim();

  const validation = new Validation();

  if (!validation.isValidName(firstName)) {
    alert("Invalid first name format.");
    return;
  }

  if (!validation.isValidName(lastName)) {
    alert("Invalid last name format.");
    return;
  }

  if (!validation.isValidAddress(address)) {
    alert("Invalid address format.");
    return;
  }

  if (!validation.isValidEmail(email)) {
    alert("Invalid email format.");
    return;
  }

  return true;
}

function isCartEmpty() {
  if (cart.length === 0) {
    alert("The cart is empety, Please select songs you wont to buy!");
    return true;
  }
  return false;
}

