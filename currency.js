let rates = []
document.addEventListener('DOMContentLoaded', function() {
fetch("https://api.exchangeratesapi.io/latest?base=USD").then(response => response.json()).then(data => {
    
    document.querySelector('#date').innerHTML = "---" + data.date + "----";    
    
    rates = data.rates;
    document.querySelector('#cny').innerHTML = 'Chinese Yuan: ' + rates.CNY.toFixed(2);    
    document.querySelector('#krw').innerHTML = 'Korean Won:   ' + rates.KRW.toFixed(2); 
    document.querySelector('#jpy').innerHTML = 'Japanese Yen:   ' + rates.JPY.toFixed(2); 
    document.querySelector('#inr').innerHTML = 'Indian Rupee:   ' + rates.INR.toFixed(2); 
    document.querySelector('#sgd').innerHTML = 'Singapore Dollar:   ' + rates.SGD.toFixed(2); 
    document.querySelector('#idr').innerHTML = 'Indonesian Rupiah:   ' + rates.IDR.toFixed(2); 
    document.querySelector('#rub').innerHTML = 'Russian Ruble:   ' + rates.RUB.toFixed(2); 
    document.querySelector('#cad').innerHTML = 'Canadian Dollar:   ' + rates.CAD.toFixed(2); 

    
    
})
})
