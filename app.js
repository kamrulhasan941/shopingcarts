function update(pro, pri, add) {
    const caseInput = document.getElementById(pro + "-num");
    let caseNum = caseInput.value;
    if (add == true) {
        caseNum = parseInt(caseNum) + 1;
    } else if (caseNum > 0) {
        caseNum = parseInt(caseNum) - 1;
    }
    caseInput.value = caseNum;
    let casetotal = document.getElementById(pro + '-total');
    casetotal.innerText = caseNum * pri;


    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-num');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1240;
    const caseTotal = getInputValue('case') * 120;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

document.getElementById("casenumber-plus").addEventListener("click", function() {
    // const caseInput = document.getElementById("case-num");
    // const caseNum = caseInput.value;
    // caseInput.value = parseInt(caseNum) + 1;

    update('case', 120, true)

})


document.getElementById("casenumber-minus").addEventListener("click", function() {
    // const caseInput = document.getElementById("case-num");
    // const caseNum = caseInput.value;
    // caseInput.value = parseInt(caseNum) - 1;
    update("case", 120);
})

document.getElementById("phonenum-plus").addEventListener("click", function() {
    // const caseInput = document.getElementById("case-num");
    // const caseNum = caseInput.value;
    // caseInput.value = parseInt(caseNum) + 1;

    update('phone', 1240, true)

})


document.getElementById("phonenum-minus").addEventListener("click", function() {
    // const caseInput = document.getElementById("case-num");
    // const caseNum = caseInput.value;
    // caseInput.value = parseInt(caseNum) - 1;
    update("phone", 1240);
})