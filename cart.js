document.getElementById('quantity').addEventListener('input', function() {
    const unitPrice = 30000;
    const quantity = parseInt(document.getElementById('quantity').value);
    const totalPrice = unitPrice * quantity;
    document.getElementById('total-price').textContent = totalPrice;
});

document.getElementById('place-order').addEventListener('click', function() {
    const quantity = document.getElementById('quantity').value;
    const totalPrice = document.getElementById('total-price').textContent;
    alert(`You have placed an order for ${quantity} items. Total amount: ${totalPrice}/-`);
    // Here you would normally initialize the order processing (e.g., send data to server)
});
