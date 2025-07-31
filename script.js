 

  // Login
   document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Iwas reload

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Hardcoded login credentials
    const validUsername = "admin";
    const validPassword = "1234";

    if (username === validUsername && password === validPassword) {
      // Success
      alert("Login successful!");
      window.location.href = "index2.html";
    } else {
      // Failed login
      alert("Invalid username or password. Please try again.");
    }
  });
  //index 2 casher function

//  products database
const products = {
  "001": {
    name: "Softdrink",
    price: 25,
    description: "Refreshing cola drink.",
    image: "https://th.bing.com/th/id/R.051fec4ae457d833ac3b2244cb794bc9?rik=8xaYLQzxWWBLrQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-gW0Z5v73A0Q%2fVSTh1XYzFiI%2fAAAAAAAAHIk%2fxVeCA_Duahw%2fs1600%2fimg_3040.jpg&ehk=X2xkk1IM1M%2fKs%2fLfc4QEgHtTNT1KvM8de5b290bAk24%3d&risl=&pid=ImgRaw&r=0"
  },
  "002": {
    name: "Chips",
    price: 15,
    description: "Crunchy potato chips.",
    image: "https://via.placeholder.com/200x150?text=Chips"
  },
  "003": {
    name: "Candy",
    price: 5,
    description: "Sweet and chewy candy.",
    image: "https://via.placeholder.com/200x150?text=Candy"
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

