// HELPER FUNCTION
const $ =(id) => window.document.getElementById(id);

// CHECK IF CUSTOMER NAME IS VALID
function nameIsValid1() {
    let pattern = /^[a-z A-Z]{2,30}$/;

    if (pattern.test($("custName").value) && $("custName").value !== " ") {
        return ($("custName").style.border = "2px solid green");
    } else {
        return ($("custName").style.border = "2px solid red");
    }
};

// CHECK IF DELIVERY ADDRESS IS VALID
function addressTypeIsValid1() {
    if ($("addType").selectedIndex !== 0) {
        return ($("addType").style.border = "2px solid green");
    } else {
        return ($("addType").style.border = "2px solid red");
    }
};

// CHECK IF DELIVERY ADDRESS IS VALID
function streetAddressIsValid1() {
    let pattern = /^[a-zA-Z0-9\s,'-]*$/;

    if (pattern.test($("streetAddress").value) && $("streetAddress").value !== "") {
        return ($("streetAddress").style.border = "2px solid green");
    } else {
        return ($("streetAddress").style.border = "2px solid red");
    }
};

// CHECK IF APT, ROOM, DORM NUMBER IS VALID
function aptIsValid1() {
    let pattern = /^[a-zA-Z0-9\s,'-]*$/;
    
    if (pattern.test($("subAddressType").value) && $("subAddressType").value !== "") {
        return ($("subAddressType").style.border = "2px solid green");
    } else {
        return ($("subAddressType").style.border = "1px solid #bbb");
    }
};

// CHECK IF CITY NAME IS VALID
function cityIsValid1() {
    let pattern = /^[a-z A-Z]{2,50}$/;
  
    if (pattern.test($("city").value) && $("city").value !== " ") {
        return ($("city").style.border = "2px solid green");
    } else {
        return ($("city").style.border = "2px solid red");
    }
};

// CHECK IF STATE INITIALS ARE VALID
function stateIsValid1() {
    let pattern = /^(AK|AL|AR|AZ|CA|CO|CT|DC|DE|FL|GA|HI|IA|ID|IL|IN|KS|KY|LA|MA|MD|ME|MI|MN|MO|MS|MT|NB|NC|ND|NH|NJ|NM|NV|NY|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VA|VT|WA|WI|WV|WY)$/i;
  
    if (pattern.test($("state").value) && $("state").value !== "") {
        return ($("state").style.border = "2px solid green");
    } else {
        return ($("state").style.border = "2px solid red");
    }
  };

// CHECK IF ZIP CODE IS VALID
function zipCodeISValid1() {
    let pattern = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

    if (pattern.test($("zipCode").value) && $("zipCode").value !== "") {
        return ($("zipCode").style.border = "2px solid green");
    } else {
        return ($("zipCode").style.border = "2px solid red");
    }
};

// CHECK IF PHONE NUMBER IS VALID
function phoneIsValid1() {
    let pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (pattern.test($("phone").value) && $("phone").value !== "") {
        return ($("phone").style.border = "2px solid green");
    } else {
        return ($("phone").style.border = "2px solid red");
    }
};

// CHECK IF EMAIL IS VALID
function emailIsValid1() {
    let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

    if (pattern.test($("email").value) && $("email").value !== "") {
        return ($("email").style.border = "2px solid green");
    } else {
        return ($("email").style.border = "2px solid red");
    }
};

// CHECK IF OTHER WAS SELECTED FOR ADDRESS TYPE. IF AFFIRMATIVE, ENABLE INPUT FIELD
function otherSelected(addressType) {
    "use strict";
    if (addressType === "Other") {
        $("otherSelected").style.display = "block";
    } else {
        $("otherSelected").style.display = "none";
    }
};

// COPY DELIVERY INFO TO BILLING INFO WHEN CUSTOMER SELECT CORRESPONDING CHECKBOX
function deliveryEqualsBillingInfo() {
    $("custName2").value = $("custName").value;
    $("custName2").style.border = "2px solid green";
    $("custName2").readOnly = true;
    $("custName2error").innerHTML = "";
    $("streetAddress2").value = $("streetAddress").value;
    $("streetAddress2").style.border = "2px solid green";
    $("streetAddress2").readOnly = true;
    $("street2error").innerHTML = "";
    $("subAddressType2").value = $("subAddressType").value;
    $("subAddressType2").style.border = "2px solid green";
    $("subAddressType2").readOnly = true;
    $("apartment1error").innerHTML = "";
    $("city2").value = $("city").value;
    $("city2").style.border = "2px solid green";
    $("city2").readOnly = true;
    $("city2error").innerHTML = "";
    $("state2").value = $("state").value;
    $("state2").style.border = "2px solid green";
    $("state2").readOnly = true;
    $("state2error").innerHTML = "";
    $("zipCode2").value = $("zipCode").value;
    $("zipCode2").style.border = "2px solid green";
    $("zipCode2").readOnly = true;
    $("zip2error").innerHTML = "";
}

function totalValue() {
    let total = 0, crustCost, cheeseCost, sauceCost;
        crustCost = parseFloat($("sizeAndCost").value);
        cheeseCost = parseFloat($("cheeseOptions").value);
        sauceCost = parseFloat($("sauceOptions").value);
  
    if ($("handTossed").checked || $("thinCrust").checked || $("newYorkStyle").checked || $("glutenFree").checked) {
      total = total + cheeseCost;
      total = total + sauceCost;
      total = total + crustCost;
  
        if ($("peppers").checked) {
            total = total + 0.99;
        }
        if ($("olives").checked) {
            total = total + 0.99;
        }
        if ($("jalapenos").checked) {
            total = total + 0.99;
        }
        if ($("mushrooms").checked) {
            total = total + 0.99;
        }
        if ($("pineapple").checked) {
            total = total + 0.99;
        }
        if ($("onion").checked) {
            total = total + 0.99;
        }
        if ($("pepperoni").checked) {
            total = total + 0.99;
        }
        if ($("sausage").checked) {
            total = total + 0.99;
        }
        if ($("ham").checked) {
            total = total + 0.99;
        }
        if ($("bacon").checked) {
            total = total + 0.99;
        }
        if ($("salami").checked) {
            total = total + 0.99;
        }
    } else {
        $("peppers").checked = false;
        $("olives").checked = false;
        $("jalapenos").checked = false;
        $("mushrooms").checked = false;
        $("pineapple").checked = false;
        $("onion").checked = false;
        $("pepperoni").checked = false;
        $("sausage").checked = false;
        $("ham").checked = false;
        $("bacon").checked = false;
        $("salami").checked = false;
        $("cheeseOptions").selectedIndex = 0;
        $("sauceOptions").selectedIndex = 0;
        window.alert("please select pizza crust first");
    }
  
    $("totalPrice").value = total.toPrecision(4);
}

// CHECK IF CUSTOMER INFORMATION ENTERED IN BILLING SECTION IS CORRECT
// THIS APPROACH IS NOT CORRECT. IT WAY TOO INEFFICIENT!
// CHECK IF CUSTOMER NAME IS VALID
function nameIsValid2() {
    let pattern = /^[a-z A-Z]{2,30}$/;

    if (pattern.test($("custName2").value) && $("custName2").value !== " ") {
        return ($("custName2").style.border = "2px solid green");
    } else {
        return ($("custName2").style.border = "2px solid red");
    }
};

// CHECK IF DELIVERY ADDRESS IS VALID
function addressTypeIsValid2() {
    if ($("addType2").selectedIndex !== 0) {
        return ($("addType2").style.border = "2px solid green");
    } else {
        return ($("addType2").style.border = "2px solid red");
    }
};

// CHECK IF DELIVERY ADDRESS IS VALID
function streetAddressIsValid2() {
    let pattern = /^[a-zA-Z0-9\s,'-]*$/;

    if (pattern.test($("streetAddress2").value) && $("streetAddress2").value !== "") {
        return ($("streetAddress2").style.border = "2px solid green");
    } else {
        return ($("streetAddress2").style.border = "2px solid red");
    }
};

// CHECK IF APT NUMBER IS VALID
function aptIsValid2() {
    let pattern = /^[a-zA-Z0-9\s,'-]*$/;
    
    if (pattern.test($("subAddressType2").value) && $("subAddressType2").value !== "") {
        return ($("subAddressType2").style.border = "2px solid green");
    } else {
        return ($("subAddressType2").style.border = "1px solid #bbb");
    }
};

// CHECK IF CITY NAME IS VALID
function cityIsValid2() {
    let pattern = /^[a-z A-Z]{2,50}$/;
  
    if (pattern.test($("city2").value) && $("city2").value !== " ") {
        return ($("city2").style.border = "2px solid green");
    } else {
        return ($("city2").style.border = "2px solid red");
    }
};

// CHECK IF STATE INITIALS ARE VALID
function stateIsValid2() {
    let pattern = /^(AK|AL|AR|AZ|CA|CO|CT|DC|DE|FL|GA|HI|IA|ID|IL|IN|KS|KY|LA|MA|MD|ME|MI|MN|MO|MS|MT|NB|NC|ND|NH|NJ|NM|NV|NY|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VA|VT|WA|WI|WV|WY)$/i;
  
    if (pattern.test($("state2").value) && $("state2").value !== "") {
        return ($("state2").style.border = "2px solid green");
    } else {
        return ($("state2").style.border = "2px solid red");
    }
  };

// CHECK IF ZIP CODE IS VALID
function zipCodeISValid2() {
    let pattern = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

    if (pattern.test($("zipCode2").value) && $("zipCode2").value !== "") {
        return ($("zipCode2").style.border = "2px solid green");
    } else {
        return ($("zipCode2").style.border = "2px solid red");
    }
};

// CHECK IF PHONE NUMBER IS VALID
function phoneIsValid2() {
    let pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (pattern.test($("phone2").value) && $("phone2").value !== "") {
        return ($("phone2").style.border = "2px solid green");
    } else {
        return ($("phone2").style.border = "2px solid red");
    }
};

// CHECK IF EMAIL IS VALID
function emailIsValid2 () {
    let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

    if (pattern.test($("email2").value) && $("email2").value !== "") {
        return ($("email2").style.border = "2px solid green");
    } else {
        return ($("email2").style.border = "2px solid red");
    }
};

// VALIDATE CREDIT CARD INFORMATION
function cardHolderName() {
    let pattern = /^[a-z A-Z]{2,30}$/;
  
    if (pattern.test($("cardHolderName").value) && $("cardHolderName").value !== "") {
        return ($("cardHolderName").style.border = "2px solid green");
    } else {
        return ($("cardHolderName").style.border = "2px solid red");
    }
};

function cvcIsValid() {
    let patttern = /^[0-9]{3}$/;
  
    if (patttern.test($("cvcCode").value) && $("cvcCode").value !== "") {
        return  ($("cvcCode").style.border = "2px solid green");
    } else {
        return ($("cvcCode").style.border = "2px solid red");
    }
};

var exMonth = function monthIsValid() {
    if ($("month").selectedIndex === 0) {
      window.alert("Please select the month and year");
      return false;
    }
};

var exYear = function yearIsValid() {
    if ($("year").selectedIndex === 0) {
      window.alert("Please select the year");
      return false;
    }  
};
  
function crediCardIsValid(creditcard) {
    if (/[^0-9-\s]+/.test(creditcard)) 
        return false;
    let nCheck = 0;
    let nDigit = 0;
    let bEven = false;
    let n;
    
    value = value.replace(/\D/g, "");
  
    for (n = value.length - 1; n >= 0; n--) {
      let cDigit = value.charAt(n);
      nDigit = parseInt(cDigit, 10);
      if (bEven) {
        if ((nDigit *= 2) > 9) {
          nDigit -= 9;
        }
      }  
      nCheck += nDigit;
      bEven = !bEven;
    }

    return (nCheck % 10) === 0;
}
function ReadOnlyForm(formId, isReadOnly) {
    let f = document.forms[formId];
    let i, fLen;
    for (i = 0, fLen = f.length; i < fLen; i += 1) {
      f.elements[i].readOnly = isReadOnly;
      f.elements[i].disabled = isReadOnly;
    }
  }

function checkBox() {
    $("custName2").value = $("custName").value;
    $("custName2").style.border = "2px solid green";
    $("custName2").readOnly = true;
    $("name2error").innerHTML = "";
    $("streetAddress2").value = $("streetAddress").value;
    $("streetAddress2").style.border = "2px solid green";
    $("streetAddress2").readOnly = true;
    $("street2error").innerHTML = "";
    $("subAddressType2").value = $("subAddressType").value;
    $("subAddressType2").style.border = "2px solid green";
    $("subAddressType2").readOnly = true;
    $("subAddressType2").innerHTML = "";
    $("city2").value = $("city").value;
    $("city2").style.border = "2px solid green";
    $("city2").readOnly = true;
    $("city2error").innerHTML = "";
    $("state2").value = $("state").value;
    $("state2").style.border = "2px solid green";
    $("state2").readOnly = true;
    $("state2error").innerHTML = "";
    $("zipCode2").value = $("zipCode").value;
    $("zipCode2").style.border = "2px solid green";
    $("zipCode2").readOnly = true;
    $("zip2error").innerHTML = "";
  }
  
  function checkBoxUncheck() {
    $("custName2").value = "";
    $("custName2").style.border = "1px solid #bbb";
    $("custName2").readOnly = false;
    $("streetAddress2").value = "";
    $("streetAddress2").style.border = "1px solid #bbb";
    $("streetAddress2").readOnly = false;
    $("subAddressType2").value = "";
    $("subAddressType2").style.border = "1px solid #bbb";
    $("subAddressType2").readOnly = false;
    $("city2").value = "";
    $("city2").style.border = "1px solid #bbb";
    $("city2").readOnly = false;
    $("state2").value = "";
    $("state2").style.border = "1px solid #bbb";
    $("state2").readOnly = false;
    $("zipCode2").value = "";
    $("zipCode2").style.border = "1px solid #bbb";
    $("zipCode2").readOnly = false;
  }

window.addEventListener("load", function() {
    $("custName").addEventListener("input", function() {
        nameIsValid1();
        if ($("custName").style.border === "2px solid red") {
            $("nameerror").style.color = "red";
        } else {
            $("nameerror").style.color = "green";
        }
    });
  
    $("addType").addEventListener("input", function() {
        addressTypeIsValid1();
        if ($("addType").style.border === "2px solid red") {
            $("addresserror").style.color = "red";
        } else {
            $("addresserror").style.color = "green";
        }
    });

    $("streetAddress").addEventListener("input", function() {
        streetAddressIsValid1();
        if ($("streetAddress").style.border === "2px solid red") {
            $("streeterror").style.color = "red";
        } else {
            $("streeterror").style.color = "green";
        }
    });

    $("subAddressType").addEventListener("input", function() {
        aptIsValid1();
        if ($("subAddressType").style.border === "2px solid green") {
            $("apartmenterror").style.color = "green";
        } else {
            $("apartmenterror").innerHTML = "Optional";
        }
    });

    $("city").addEventListener("input", function() {
        cityIsValid1();
        if ($("city").style.border === "2px solid red") {
            $("cityerror").style.color = "red";
        } else {
            $("cityerror").style.color = "green";
        }
    });

    $("state").addEventListener("input", function() {
        stateIsValid1();
        if ($("state").style.border === "2px solid red") {
            $("stateerror").style.color = "red";
        } else {
            $("stateerror").style.color = "green";
        }
    });

    $("zipCode").addEventListener("input", function() {
        zipCodeISValid1();
        if ($("zipCode").style.border === "2px solid red") {
            $("ziperror").style.color = "red";
        } else {
            $("ziperror").style.color = "green";
        }
    });

    $("phone").addEventListener("input", function() {
        phoneIsValid1();
        if ($("phone").style.border === "2px solid red") {
        $("phoneerror").style.color = "red";
        } else {
        $("phoneerror").style.color = "green";
      }
    });

    $("email").addEventListener("input", function() {
        emailIsValid1();
        if ($("email").style.border === "2px solid red") {
            $("emailerror").style.color = "red";
        } else {
            $("emailerror").style.color = "green";
        }
    });

    $("custName2").addEventListener("input", function() {
        nameIsValid2();
        if ($("custName2").style.border === "2px solid red") {
          $("name2error").style.color = "red";
        } else {
          $("name2error").style.color = "green";
        }
      });
    
    $("streetAddress2").addEventListener("input", function() {
        streetAddressIsValid2();
        if ($("streetAddress2").style.border === "2px solid red") {
            $("street2error").style.color = "red";
        } else {
            $("street2error").style.color = "green";
        }
    });
    
    $("subAddressType2").addEventListener("input", function() {
        aptIsValid2();
        if ($("subAddressType2").style.border === "2px solid green") {
            $("subAddressType2").style.color = "green";
        } else {
            $("subAddressType2").innerHTML = "Optional";
        }
    });
    
    $("city2").addEventListener("input", function() {
        cityIsValid2();
        if ($("city2").style.border === "2px solid red") {
            $("city2error").style.color = "red";
        } else {
            $("city2error").style.color = "green";
        }
    });
    
    $("state2").addEventListener("input", function() {
        stateIsValid2();
        if ($("state2").style.border === "2px solid red") {
            $("state2error").style.color = "red";
        } else {
            $("state2error").style.color = "green";
        }
    });
    
    $("zipCode2").addEventListener("input", function() {
        zipCodeISValid2();
        if ($("zipCode2").style.border === "2px solid red") {
            $("zip2error").style.color = "red";
        } else {
            $("zip2error").style.color = "green";
        }
    });


    $("bcheckBox").addEventListener("click", function() {
        if ($("bcheckBox").checked) {
            checkBox();
        } else {
            checkBoxUncheck();
        }
    });

    // PIZZA PRICING, BY SIZE AND TYPE
    let crust = {
        handTossed: [{
            size: "Small",
            price: "$9.99"
        },
        {
            size: "Medium",
            price: "$12.99"
        },
        {
            size: "Large",
            price: "$14.99"
        }
        ],
        thinCrust: [{
            size: "Medium",
            price: "$11.99"
        },
        {
            size: "Large",
            price: "$13.99"
        }
        ],
        newYorkStyle: [{
            size: "Large",
            price: "$16.99"
        },
        {
            size: "Extra Large",
            price: "$19.99"
        }
        ],
        glutenFree: [{
        size: "Small",
        price: "$10.99"
        }]
    };

    let optdoughlist = document.getElementsByName("doughOptions");
    let optdoughItems = [].slice.call(optdoughlist);

    optdoughItems.forEach(function(item) {
        item.addEventListener('change', function() {
            let selectedDough, i, el;
            selectedDough = crust[item.id];
            $("sizeAndCost").innerHTML = null;
            for (i = 0; i < selectedDough.length; i += 1) {
                el = document.createElement("option");
                el.textContent = selectedDough[i].size + " (" + selectedDough[i].price + ")";
                el.value = selectedDough[i].price.substr(1);
                $("sizeAndCost").appendChild(el);
            }
            totalValue();
        });
    });


    $("sizeAndCost").addEventListener("change", totalValue);
    $("cheeseOptions").addEventListener("change", totalValue);
    $("sauceOptions").addEventListener("change", totalValue);
    $("toppings").addEventListener("change", totalValue);

    $("submitOrder").addEventListener("click", function(e) {
        e.preventDefault();
        if (($("custName").value !== "") && ($("addType").value !== "") && ($("streetAddress").value !== "") && ($("city").value !== "") && ($("state").value !== "") && ($("zipCode").value !== "") && ($("phone").value !== "") && ($("email").value !== "")) {

        if (($("custName").style.border !== "2px solid red") && ($("addType").style.border !== "2px solid red") && ($("streetAddress").style.border !== "2px solid red") && ($("city").style.border !== "2px solid red") && ($("state").style.border !== "2px solid red") && ($("zipCode").style.border !== "2px solid red") && ($("phone").style.border !== "2px solid red") && ($("email").style.border !== "2px solid red")) {

            if ($("handTossed").checked || $("thinCrust").checked || $("newYorkStyle").checked || $("glutenFree").checked) {

            if (($("totalPrice").value === "0") || ($("totalPrice").value === "0.000")) {
                e.preventDefault();
                window.alert("Please select pizza size");
            } else {
                e.preventDefault();
                if (window.confirm("Total Cost: $" + $("totalPrice").value + "\n Is this correct?")) {
                e.preventDefault();
                window.alert("Enter billing information");
                $("billingInformation").style.display = "block";
                ReadOnlyForm("deliveryLocation", true);
                ReadOnlyForm("bulidingPizza", true);

                } else {
                e.preventDefault();
                }
            }
            } else {
            e.preventDefault();
            window.alert("Need to fill pizza order");
            }
        } else {
            e.preventDefault();
            window.alert("Need to fill customer information");
        }
        } else {
        e.preventDefault();
        window.alert("Need to fill customer information");
        }
    });

    // VERIFY CREDIT CARD INFORMATION
    $("cardHolderName").addEventListener("input", function() {
        cardHolderName();
        if ($("cardHolderName").style.border === "2px solid red") {
        $("cardHolderNameError").style.color = "red";
        } else {
        $("cardHolderNameError").style.color = "green";
        }
    });

    $("cvcCode").addEventListener("input", function() {
        cvcIsValid();
        if ($("cvcCode").style.border === "2px solid red") {
            $("cvcCodeError").style.color = "red";
        } else {
            $("cvcCodeError").style.color = "green";
        }
    });

    $("month").addEventListener("change", exMonth);

    $("year").addEventListener("change", function() {
        exYear();
        let d = new Date();
        let currentYear = d.getFullYear();
        let month = new Date().getMonth() + 1;
        let year = parseInt($("year").options[$("year").selectedIndex].value, 10);

        if (($("month").selectedIndex < month && currentYear === year) || (year < currentYear)) {
            window.alert("please enter valid date");
            $("month").selectedIndex = 0;
            $("year").selectedIndex = 0;
        }
    });

    $("cardNumber").addEventListener("blur", function() {
        let visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
        let masterRegEx = /^(?:5[1-5][0-9]{14})$/;
        let americanRegEx = /^(?:3[47][0-9]{13})$/;

        if (visaRegEx.test($("cardNumber").value)) {

            if (!crediCardIsValid($("cardNumber").value)) {
                $("cardNumber").style.border = "2px solid red";
            } else {
                $("cardNumberError").style.color = "green";
                $("cardNumber").style.border = "2px solid green";
            return true;
            }
        } else if (masterRegEx.test($("cardNumber").value)) {
            if (!crediCardIsValid($("cardNumber").value)) {
                $("cardNumber").style.border = "2px solid red";
            } else {
                $("cardNumberError").style.color = "green";
                $("cardNumber").style.border = "2px solid green";
                return true;
            }
        } else if (americanRegEx.test($("cardNumber").value)) {
            if (!crediCardIsValid($("cardNumber").value)) {
                $("cardNumber").style.border = "2px solid red";
            } else {
                $("cardNumberError").style.color = "green";
                $("cardNumber").style.border = "2px solid green";
            return true;
            }

        } else {
            $("cardNumberError").style.color = "red";
            $("cardNumber").style.border = "2px solid red";
        }
    });

    $("processPayment").addEventListener("click", function(eve) {
        if (($("custName2").value !== "") && ($("streetAddress2").value !== "") && ($("city2").value !== "") && ($("state2").value !== "") && ($("zipCode2").value !== "")) {
    
          if (($("custName2").style.border !== "2px solid red") && ($("streetAddress2").style.border !== "2px solid red") && ($("city2").style.border !== "2px solid red") && ($("state2").style.border !== "2px solid red") && ($("zipCode2").style.border !== "2px solid red")) {
    
            if ($("cardHolderName").style.border !== "2px solid red" && $("cvcCode").style.border !== "2px solid red" && $("cardNumber").style.border !== "2px solid red" && $("month").selectedIndex !== 0 &&
              $("year").selectedIndex !== 0) {
    
              if (window.confirm("Click OK to confirm your order")) {
    
                window.alert("You ordered has been placed. It will be delivered within 30 minutes. Enjoy!");
    
              } else {
                eve.preventDefault();
              }
    
            } else {
              eve.preventDefault();
              window.alert("Payment Information incomplete");
            }
          } else {
            eve.preventDefault();
            window.alert("Billing information incomplete");
          }
        }
    
      });

});