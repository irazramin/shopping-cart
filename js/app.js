const phonePlus = document.getElementById('phone-plus');
const phoneMinus = document.getElementById('phone-minus');
const casePlus = document.getElementById('case-plus');
const caseMinus = document.getElementById('case-minus');
const phoneInput = document.getElementById('phone-input');
const caseInput = document.getElementById('case-input');
const phonePrice = document.getElementById('phone-price');
const casePrice = document.getElementById('case-price');
const subTotal = document.getElementById('sub-total');
const totalPrice = document.getElementById('total-price');
const totalTax = document.getElementById('tax');
const removeProduct = document.querySelectorAll('.remove-product');

calculateTotalAmount()

function updateCartProduct(productInput, productPriceField, price, isAdd) {
  const productInputPrice = productInput.value;
  let productInputPriceConvert = parseFloat(productInputPrice);
  if (isAdd) {
    productInputPriceConvert = productInputPriceConvert + 1;
  } else {
    if (productInputPrice > 0) {
      productInputPriceConvert = productInputPriceConvert - 1;
    }
  }
  productInput.value = productInputPriceConvert;
  productPriceField.innerText = price * productInputPriceConvert;
  calculateTotalAmount();
}

function calculateTotalAmount(){
    const phoneTotalPrice = parseFloat(phonePrice.innerText);
    const caseTotalPrice = parseFloat(casePrice.innerText);
    const sub = phoneTotalPrice + caseTotalPrice;
    const tax = sub / 10;
    const overAllTotal = sub + tax;

    subTotal.innerText = sub;
    totalTax.innerText = tax
    totalPrice.innerText = overAllTotal;
}


phonePlus.addEventListener('click', function () {
  updateCartProduct(phoneInput, phonePrice, 1219, true);
});

phoneMinus.addEventListener('click', function () {
  updateCartProduct(phoneInput, phonePrice, 1219, false);
});

casePlus.addEventListener('click', function () {
  updateCartProduct(caseInput, casePrice, 59, true);
});

caseMinus.addEventListener('click', function () {
  updateCartProduct(caseInput, casePrice, 59, false);
});


for(const product of removeProduct){
    product.addEventListener('click',function(){
       const cartItem =  product.parentElement;
       const removeCartPrice = 
       console.log(removeCartPrice);
       cartItem.parentElement.remove();
    })
}