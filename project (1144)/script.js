document.getElementById("jewelry-order-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let itemName = document.getElementById("item-name").value;
    let customerName = document.getElementById("customer-name").value;
    let customerPhone = document.getElementById("customer-phone").value;
    let customerNotes = document.getElementById("customer-notes").value;

    if(customerNotes === "") {
        customerNotes = "None";
    }

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h3>Order Summary</h3>
        <p><strong>Item Name:</strong> ${itemName}</p>
        <p><strong>Customer Name:</strong> ${customerName}</p>
        <p><strong>Phone Number:</strong> ${customerPhone}</p>
        <p><strong>Special Notes:</strong> ${customerNotes}</p>
    `;

    resultDiv.style.display = "block";

    alert("Order Submitted Successfully!");
    
    document.getElementById("jewelry-order-form").reset();
});