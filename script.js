const products = [
    {
      name: "iPhone 14",
      type: "მობილური",
      price: 2500,
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch?wid=512&hei=512&fmt=jpeg&qlt=90&.v=1661027789513",
    },
    {
      name: "MacBook Air M2",
      type: "ლეპტოპი",
      price: 4000,
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1654122880566",
    },
    {
      name: "Samsung Galaxy S23",
      type: "მობილური",
      price: 2200,
      image:
        "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Ff0c0a276-bc30-48c7-b2ee-66cdb78b1ac4_Thumb.jpeg&w=640&q=100",
    },
    {
      name: "Sony WH-1000XM4 ყურსასმენები",
      type: "აქსესუარი",
      price: 800,
      image:
        "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
    },
    {
      name: "Asus Vivobook 15",
      type: "ლეპტოპი",
      price: 2900,
      image:
        "https://sonic.ge/dyn/lr-WpCBM7gR0pRch3Z-osfimDsg3S90wpawbrLLK5Cs/rs:fit:720:0/plain/images/products/original/09af5e5b-4f03-4fa8-b12d-a812172cdbe7.jpg",
    },
];

const productList = document.getElementById("productList");
const typeFilter = document.getElementById("typeFilter");
const sortBy = document.getElementById("sortBy");

function displayProducts(data) {
    productList.innerHTML = "";
    data.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>ტიპი: ${product.type}</p>
        <p>ფასი: ${product.price} ₾</p>
      `;
      productList.appendChild(card);
    });
};

function filterAndSort() {
    let filtered = [...products];

    if (typeFilter.value !== "ყველა") {
      filtered = filtered.filter(p => p.type === typeFilter.value);
    }

    if (sortBy.value === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy.value === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy.value === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    displayProducts(filtered);
}

typeFilter.addEventListener("change", filterAndSort);
sortBy.addEventListener("change", filterAndSort);

displayProducts(products);