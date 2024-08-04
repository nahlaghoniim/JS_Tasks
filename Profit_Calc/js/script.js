function calculateProfit() {
    let nameProduct = document.getElementById('name-product').value;
    let buyPrice = document.getElementById('buy-price').value;
    let sellPrice = document.getElementById('sell-price').value;
    let profit = sellPrice - buyPrice;

    if (profit > 0) {
        let newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${nameProduct}</td>
            <td>${buyPrice}</td>
            <td>${sellPrice}</td>
            <td>${profit}</td>
        `;
        document.getElementById('product-table').getElementsByTagName('tbody')[0].appendChild(newRow);
    } else {
        alert("The profit must be greater than 0.");
    }

    // Reset the form
    document.getElementById('profit-form').reset();
    return false; // Prevent form submission
}
