const cartList = document.querySelector(".cart-list");
const displayTotal = document.querySelector(".display");
const pricingDisplay = document.querySelector(".pricing");
const chargesDisplay = document.querySelector(".charges");
const totalDisplay = document.querySelector(".total");

let total = 0;
let servicetax = 0;
let gst = 0;
let grandtotal = 0;
let totalPayment = 0;

function addItem(id, name, price) {
    const cartItem = document.createElement("div");
    cartItem.setAttribute("id", "item-" + id);
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
        <img src="./assets/${name.toLowerCase().replace(" ", "-")}.jpg" alt="${name}" />
        <div class="item-name">
            <p>${name}</p>
        </div>
        <div class="item-price">
            <p>+ $${price.toFixed(2)}</p>
        </div>
        <button onclick="removeItem(${id})">-</button>`;
    cartList.appendChild(cartItem);
    addItemPrice(price);
}

function removeItem(id, price) {
    const cartItem = document.querySelector("#item-" + id);
    cartList.removeChild(cartItem);
    addItemPrice(-price);
}

function addItemPrice(price) {
    total += price;
    servicetax = Number((total * 0.1).toFixed(2));
    gst = Number((total * 0.06).toFixed(2));
    grandtotal = Number((total + servicetax + gst).toFixed(2));

    const costDisplay = document.createElement("div");
    costDisplay.classList.add("cost");
    costDisplay.innerHTML = `
        <div class="pricing charges" id="price-1">
            <div class="cost-title">Service tax</div>
            <div class="cost-value">$${servicetax}</div>
        </div>
        <div class="pricing charges" id="price-2">
            <div class="cost-title">GST</div>
            <div class="cost-value">$${gst}</div>
        </div>
        <div class="pricing total" id="price-total">
            <div class="cost-title">Total</div>
            <div class="cost-value">$${grandtotal}</div>
        </div>
        <button onclick="checkOut()">Checkout</button>`;
    displayTotal.innerHTML = "";
    displayTotal.appendChild(costDisplay);
}

function checkOut() {
    totalPayment = grandtotal;
    console.log(totalPayment);
    localStorage.setItem("grand-total", totalPayment);
    window.location.href = "checkout.html";
}

// Usage
addItem(1, "Pan Grilled Steak", 76.50);
addItem(2, "Mushroom Soup", 10.50);
addItem(3, "Steak Set", 100.50);
addItem(4, "Salmon", 30.50);
addItem(5, "Chicken Pie", 25.50);
addItem(6, "Crepe Icecream", 20.50);
addItem(7, "Steak Cutlets", 57.50);
