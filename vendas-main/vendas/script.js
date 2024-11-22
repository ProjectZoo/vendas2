function addToCart(product) {
    const cartCount = document.querySelector('.cart-count');
    let count = parseInt(cartCount.textContent);
    count += 1;
    cartCount.textContent = count;
    console.log(`Produto ${product.id} adicionado ao carrinho.`);
}

function goToCheckout() {
    window.location.href = 'pagamento.html';
}
let cart = {};

function addToCart(product) {
    const productId = product.id;
    const productName = product.querySelector('h3').innerText;
    const productPrice = parseFloat(product.getAttribute('data-price'));

    if (cart[productId]) {
        cart[productId].quantity += 1;
    } else {
        cart[productId] = { name: productName, price: productPrice, quantity: 1 };
    }

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    const cartCount = document.querySelector('.cart-count');

    cartItems.innerHTML = '';
    let total = 0;
    let itemCount = 0;

    for (const productId in cart) {
        const product = cart[productId];
        const listItem = document.createElement('li');
        listItem.innerText = `${product.name} - R$ ${product.price.toFixed(2)} x ${product.quantity}`;
        cartItems.appendChild(listItem);

        total += product.price * product.quantity;
        itemCount += product.quantity;
    }

    totalPrice.innerText = `Total: R$ ${total.toFixed(2)}`;
    cartCount.innerText = itemCount;
}

function toggleCart() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
}

function checkout() {
    alert('Compra finalizada com sucesso!');
    cart = {};
    updateCart();
    toggleCart();
}
