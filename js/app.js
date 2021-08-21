// 16GB memory = 180
// 512 SSD = 100
// 1TB SSD = 180

// update price fields
function addValue(value, price) {
    const initialCost = document.getElementById(value + '-cost');
    initialCost.innerText = price;
    totalSum();
}
// update custom price field
function initialValue(value) {
    const cost = document.getElementById(value + '-cost');
    cost.innerText = 0;
    totalSum();
}
// take prices from id and make integer
function getCost(value) {
    return parseInt(document.getElementById(value + '-cost').innerText);
}

// total sum calculate
function totalSum() {
    const totalSum = getCost('mac') + getCost('memory') + getCost('ssd') + getCost('delivery');
    document.getElementById('total-cost').innerText = totalSum;
    document.getElementById('final-cost').innerText = totalSum;
}

// coupon code er hisab nikash
// stevekaku
document.getElementById('apply-button').addEventListener('click', function () {
    const couponField = document.getElementById('coupon-text');
    const couponText = couponField.value;
    if (couponText == 'stevekaku') {
        const totalCost = getCost('total');
        const discountPrice = totalCost - (totalCost / 5);
        document.getElementById('final-cost').innerText = discountPrice;
    }
    couponField.value = '';
});