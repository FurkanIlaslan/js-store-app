
const postDOM = document.querySelector(".row");
const searchInput = document.querySelector("#search-input");

function postUI(products) {
  let result = "";
  products.forEach(product => {
    result +=
      `
<div class="col-3 mt-3">
  <div class="card">
    <img src="${product.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${product.title.slice()}</h5>
        <p class="card-text">Fiyat: ${product.price} ₺</p>
        <a id="sepeteEkle" href="#" class="btn btn-primary">Sepete Ekle</a>
    </div>
  </div>
</div>
         `
    postDOM.innerHTML = result;
  });
}

// !İnputtan Girilen Değere Göre Listeleme İşlemi İçin;
searchInput.addEventListener("keyup", (e) => {
    // console.log(searchInput.value);
    const searchValue = searchInput.value.toLowerCase();
    const productNames = document.querySelectorAll(".card-title");
    // console.log(productName);
    productNames.forEach((productTitle) => {
      if (productTitle.innerHTML.toLocaleLowerCase().includes(searchValue)) {
        productTitle.parentElement.parentElement.style.display = "block";
      } else {
        productTitle.parentElement.parentElement.style.display = "none";
      }
    });
  })

 

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => postUI(data));









