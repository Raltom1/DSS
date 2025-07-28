 

  // Simple form handling
  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
      alert("Login successful!");
    } else {
      alert("Invalid login.");
    }
  });

  //index 2 casher function
  document.getElementById('productCode').addEventListener('input', function () {
  const code = this.value.trim();
  const productImage = document.getElementById('productImage');

  // Sample logic: change image based on product code
  if (code === '101') {
    productImage.src = 'DDS_LOGO.png';
  } else if (code === '202') {
    productImage.src = 'jeans.jpg';
  } else if (code === '303') {
    productImage.src = 'shoes.jpg';
  } else {
    productImage.src = '';
  }
});

function showProductDetails() {
  const code = document.getElementById('productCode').value.trim();
  const image = document.getElementById('productImage');
  const name = document.getElementById('productName');
  const price = document.getElementById('productPrice');
  const description = document.getElementById('productDescription');

  // Sample database of products
  const products = {
    "1001": {
      image: "bg.png",
      name: "Running Shoes",
      price: "₱1,299",
      description: "Lightweight and comfortable for daily use."
    },
    "1002": {
      image: "products/shirt.jpg",
      name: "Cotton T-Shirt",
      price: "₱499",
      description: "100% cotton shirt, available in all sizes."
    },
    "1003": {
      image: "products/bag.jpg",
      name: "Leather Bag",
      price: "₱2,150",
      description: "Stylish and durable for school or work."
    },
    "2001": {
      image: "products/watch.jpg",
      name: "Wrist Watch",
      price: "₱3,799",
      description: "Water-resistant analog watch with leather strap."
    }
  };

  if (products[code]) {
    image.src = products[code].image;
    name.textContent = products[code].name;
    price.textContent = "Price: " + products[code].price;
    description.textContent = products[code].description;
  } else {
    image.src = "";
    name.textContent = "";
    price.textContent = "";
    description.textContent = "";
  }
}
