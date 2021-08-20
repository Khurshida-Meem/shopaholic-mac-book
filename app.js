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
    const sum = document.getElementById('total-cost');
    const finalCost = document.getElementById('final-cost');
    const macCost = getCost('mac');
    const memoryCost = getCost('memory');
    const ssdCost = getCost('ssd');
    const deliveryCost = getCost('delivery');
    const totalSum = macCost + memoryCost + ssdCost + deliveryCost;
    sum.innerText = totalSum;
    finalCost.innerText = totalSum;
}

// coupon code er hisab nikash
// stevekaku
document.getElementById('apply-button').addEventListener('click', function () {
    const couponField = document.getElementById('coupon-text');
    const finalCost = document.getElementById('final-cost')
    const couponText = couponField.value;
    if (couponText == 'stevekaku') {
        const totalCost = getCost('total');
        const discountPrice = totalCost - (totalCost / 5);
        finalCost.innerText = discountPrice;
    }
    couponField.value = '';
});