// update external price fields value onclick button
function addValue(value, price) {
    const initialCost = document.getElementById(value + '-cost');
    initialCost.innerText = price;
    totalSum();
}
// update custom price field to 0 onclick button
function initialValue(value) {
    const cost = document.getElementById(value + '-cost');
    cost.innerText = 0;
    totalSum();
}
// take field value from id and make integer
function getCost(value) {
    return parseInt(document.getElementById(value + '-cost').innerText);
}

// total sum calculate
function totalSum() {
    // total cost from every field value
    const totalSum = getCost('mac') + getCost('memory') + getCost('ssd') + getCost('delivery');
    document.getElementById('total-cost').innerText = totalSum;
    document.getElementById('final-cost').innerText = totalSum;
}

// coupon code er hisab nikash
document.getElementById('apply-button').addEventListener('click', function () {
    const couponField = document.getElementById('coupon-text');
    const couponText = couponField.value;
    if (couponText == 'stevekaku') {
        const totalCost = getCost('total');
        const discountPrice = totalCost - (totalCost / 5);
        document.getElementById('final-cost').innerText = discountPrice;
    }
    // clear input field
    couponField.value = '';
});