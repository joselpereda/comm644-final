// HELPER FUNCTION
const $ =(id) => window.document.getElementById(id);


// CHECK IF CUSTOMER NAME WAS ENTERED
function checkCustomerName (custName) {
    validPattern = /^[a-z A-Z]{2,30}$/;

    if ($("custName").value !== " " && validPattern.test($("custName").value)) {
        console.log("Customer name is correct");
    } else {
        alert("Invalid name was entered");
    }
}

// CHECK IF DELIVERY ADDRESS IS CORRECT
function checkCustomerName (deliveryAddress) {
    validPattern = /^[a-z A-Z]{2,30}$/;

    if ($("custName").value !== " " && validPattern.test($("custName").value)) {
        console.log("Customer name is correct");
    } else {
        alert("Invalid name was entered");

    }
}

