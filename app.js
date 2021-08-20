// 16GB memory = 180
// 512 SSD = 100
// 1TB SSD = 180

function addValue(extra, value) {
    const initialCost = document.getElementById(extra + '-cost');
    initialCost.innerText = value;
    totalSum();
}
function initialValue(value) {
    const cost = document.getElementById(value + '-cost');
    cost.innerText = 0;
    totalSum();
}
function totalSum() {
    const sum = document.getElementById('total-cost');
    const macCost = parseInt(document.getElementById('mac-cost').innerText);
    const memoryCost = parseInt(document.getElementById('memory-cost').innerText);
    const ssdCost = parseInt(document.getElementById('ssd-cost').innerText);
    const deliveryCost = parseInt(document.getElementById('delivery-cost').innerText);
    const totalSum = macCost + memoryCost + ssdCost + deliveryCost;
    sum.innerText = totalSum;
}


