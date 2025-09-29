// dynamic product filter with dropdown using javascript dom manipulatiom

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("category");
  const products = document.querySelectorAll(".product");

  dropdown.addEventListener("change", function () {
    const selectedCategory = this.value;

    products.forEach(product => {
      if (selectedCategory === "all" || product.dataset.category === selectedCategory) {
        product.style.display = "block"; // show
      } else {
        product.style.display = "none";  // hide
      }
    });
  });
});
