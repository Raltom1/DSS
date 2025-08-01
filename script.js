 

  
  //index 2 

//  products database

const products = {
  "001": {
    name: "Bag",
    price: 799,
    description: "",
    image: "https://tse1.mm.bing.net/th/id/OIP._r4WV_aYgfRllSRmw9UeTAHaDt?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  "002": {
    name: "Shoes",
    price: 504,
    description: "",
    image: "https://ae01.alicdn.com/kf/HTB1SsYMXZvrK1Rjy0Feq6ATmVXax/Comfortable-Office-Men-Dress-Shoes-Spring-Autumn-Casual-Men-Shoes-Fashion-Flats-Shoes-Mens-Footwear-Plus.jpg"
  },
  "003": {
    name: "T-shirt",
    price: 340,
    description: "",
    image: "https://tse2.mm.bing.net/th/id/OIP.5cN_zvKz3OajU_cv0ZJJAQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
  }
  
};

// State variables
let cart = [];
let total = 0;

// Show product details when input changes
function showProductDetails() {
  const code = document.getElementById("productCode").value;
  const product = products[code];
  if (product) {
    document.getElementById("productImage").src = product.image;
    document.getElementById("productName").textContent = product.name;
    document.getElementById("productPrice").textContent = `₱${product.price.toFixed(2)}`;
    document.getElementById("productDescription").textContent = product.description;
  } else {
    document.getElementById("productImage").src = "";
    document.getElementById("productName").textContent = "";
    document.getElementById("productPrice").textContent = "";
    document.getElementById("productDescription").textContent = "";
  }
}

// Add product to cart
document.getElementById("addBtn").addEventListener("click", function () {
  const code = document.getElementById("productCode").value;
  const product = products[code];
  if (product) {
    cart.push(product);
    total += product.price;
    updateReceipt();
  } else {
    alert("Invalid product code!");
  }
});

// Remove last item
document.getElementById("removeBtn").addEventListener("click", function () {
  if (cart.length > 0) {
    const removed = cart.pop();
    total -= removed.price;
    updateReceipt();
  } else {
    alert("Cart is already empty!");
  }
});

// Checkout
document.getElementById("checkoutBtn").addEventListener("click", function () {
  const cashInput = parseFloat(document.getElementById("cashInput").value);
  if (isNaN(cashInput) || cashInput < total) {
    alert("Insufficient cash!");
    return;
  }

  const change = cashInput - total;
  document.getElementById("change").textContent = change.toFixed(2);
  alert("Checkout complete! Thank you.");
});

// Clear all
document.getElementById("clearBtn").addEventListener("click", function () {
  cart = [];
  total = 0;
  document.getElementById("cashInput").value = "";
  document.getElementById("change").textContent = "0.00";
  document.getElementById("totalPrice").textContent = "0.00";
  document.getElementById("receiptList").innerHTML = "";
});

// Update receipt display
function updateReceipt() {
  const list = document.getElementById("receiptList");
  list.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${item.name} - ₱${item.price.toFixed(2)}`;
    list.appendChild(li);
  });

  document.getElementById("totalPrice").textContent = total.toFixed(2);
}

document.getElementById("productImage").src = "products";
