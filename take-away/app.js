const cartList = document.querySelector(".cart-list");
const displayTotal = document.querySelector(".display");
const pricingDisplay = document.querySelector(".pricing");
const chargesDisplay = document.querySelector(".charges");
const totalDisplay = document.querySelector(".total");

var total = 0;
var servicetax = 0;
var gst = 0;
var grandtotal = 0;
var totalPayment = 0;

function idAddOne() {
    const cartItem = document.createElement('div')
    cartItem.setAttribute("id","item-1")
    cartItem.classList.add("cart-item");    
    cartItem.innerHTML = `<img src="./assets/pan-grilled-steak.jpg" alt="Pan Grilled Steak"/>
    <div class="item-name">
        <p>Pan Grilled Steak</p>
    </div>
    <div class="item-price">
        <p>+ $76.50</p>
    </div>        
       <button onclick="removeOne()">-</button>`;
    cartList.appendChild(cartItem);    
    addItemPrice(1,76.50);
}

function idAddTwo() {
    let cartItem = document.createElement('div')
    cartItem.setAttribute("id","item-2")
    cartItem.classList.add("cart-item");    
    cartItem.innerHTML = `<img src="./assets/mushroom-soup.jpg" alt="Mushroom Soup" />
    <div class="item-name">
       <p>Mushroom Soup</p>
    </div>
    <div class="item-price">
       <p>+ $10.50</p>
    </div>        
    <button onclick="removeTwo()">-</button>`;
    cartList.appendChild(cartItem);  
    addItemPrice(2,10.50);
}

function idAddThree() {
    let cartItem = document.createElement('div')
    cartItem.setAttribute("id","item-3")
    cartItem.classList.add("cart-item");    
    cartItem.innerHTML = `<img src="./assets/steak-set.jpg" alt="Steak Set" />
    <div class="item-name">
       <p>Steak Set</p>
    </div>
    <div class="item-price">
       <p>+ $100.50</p>
    </div>        
    <button onclick="removeThree()">-</button>`;
    cartList.appendChild(cartItem);  
    addItemPrice(3,100.50);
}

function idAddFour() {
    let cartItem = document.createElement('div')
    cartItem.setAttribute("id","item-4")
    cartItem.classList.add("cart-item");    
    cartItem.innerHTML = ` <img src="./assets/salmon.jpg" alt="Salmon" />
    <div class="item-name">
       <p>Salmon</p>
    </div>
    <div class="item-price">
       <p>+ $30.50</p>
    </div>        
    <button onclick="removeFour()">-</button>`;
    cartList.appendChild(cartItem);  
    addItemPrice(4,30.50);
}

function idAddFive() {
    let cartItem = document.createElement('div')
    cartItem.setAttribute("id","item-5")
    cartItem.classList.add("cart-item");    
    cartItem.innerHTML = `  <img src="./assets/chicken-pie.jpg" alt="Chicken Pie" />
    <div class="item-name">
       <p>Chicken Pie</p>
    </div>
    <div class="item-price">
       <p>+ $25.50</p>
    </div>        
    <button onclick="removeFive()">-</button>`;
    cartList.appendChild(cartItem);  
    addItemPrice(5,25.50);
}

function idAddSix() {
    let cartItem = document.createElement('div')
    cartItem.setAttribute("id","item-6")
    cartItem.classList.add("cart-item");    
    cartItem.innerHTML = `<img src="./assets/crepe-icecream.jpg" alt="Crepe Icecream" />
    <div class="item-name">
       <p>Crepe Icecream</p>
    </div>
    <div class="item-price">
       <p>+ $20.50</p>
    </div>        
    <button onclick="removeSix()">-</button>`;
    cartList.appendChild(cartItem);  
    addItemPrice(6,20.50);
}

function idAddSeven() {
    let cartItem = document.createElement('div')
    cartItem.setAttribute("id","item-7")
    cartItem.classList.add("cart-item");    
    cartItem.innerHTML = `<img src="./assets/steak-cutlets.jpg" alt="Steak Cutlets" />
    <div class="item-name">
       <p>Steak Cutlets</p>
    </div>
    <div class="item-price">
       <p>+ $57.50</p>
    </div>        
    <button onclick="removeSeven()">-</button>`;
    cartList.appendChild(cartItem);  
    addItemPrice(7,57.50);
}

function removeOne() {    
    const cartList = document.querySelector(".cart-list");
    const cartItem = document.querySelector("#item-1");    
    cartList.removeChild(cartItem);    
    addItemPrice(1,-76.50);    
}

function removeTwo() {    
    const cartList = document.querySelector(".cart-list");
    const cartItem = document.querySelector("#item-2");    
    cartList.removeChild(cartItem);   
    addItemPrice(2,-10.50);     
}

function removeThree() {    
    const cartList = document.querySelector(".cart-list");
    const cartItem = document.querySelector("#item-3");    
    cartList.removeChild(cartItem);   
    addItemPrice(3,-100.50);    
}

function removeFour() {    
    const cartList = document.querySelector(".cart-list");
    const cartItem = document.querySelector("#item-4");    
    cartList.removeChild(cartItem);   
    addItemPrice(4,-30.50);    
}

function removeFive() {    
    const cartList = document.querySelector(".cart-list");
    const cartItem = document.querySelector("#item-5");    
    cartList.removeChild(cartItem);   
    addItemPrice(5,-25.50);    
}

function removeSix() {    
    const cartList = document.querySelector(".cart-list");
    const cartItem = document.querySelector("#item-6");    
    cartList.removeChild(cartItem);   
    addItemPrice(6,-20.50);    
}

function removeSeven() {    
    const cartList = document.querySelector(".cart-list");
    const cartItem = document.querySelector("#item-7");    
    cartList.removeChild(cartItem);   
    addItemPrice(7,-57.50);    
}

function addItemPrice(id,price) {
    console.log(id);
    total += price;
    servicetax = Number((total*0.1).toFixed(2));  
    gst = Number((total*0.06).toFixed(2));
    grandtotal = Number((total + servicetax + gst).toFixed(2));
    let costDisplay = document.createElement('div')    
    costDisplay.classList.add("cost") 
    displayTotal.innerHTML = "";   
    costDisplay.innerHTML = ` <div class="pricing charges" id="price-1">
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
    <button onclick="checkOut()">Checkout</button>`
    displayTotal.appendChild(costDisplay);
    
}

function checkOut() {
    totalPayment = grandtotal;
    console.log(totalPayment);
    localStorage.setItem('grand-total', totalPayment);  
    window.location.href="checkout.html";
}