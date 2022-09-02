let rates = []
document.addEventListener('DOMContentLoaded', function() {
//USD based
// fetch("https://api.ratesapi.io/api/latest?base=USD").then(response => response.json()).then(data => {
    fetch(`https://api.exchangerate.host/latest?base=USD`,{ method: "GET", }).then(response => response.json()).then(data => {    
    document.querySelector('#date').innerHTML = "As of: " + data.date;    
    
    rates = data.rates;
	document.querySelector('#cny').innerHTML = 'Chinese Yuan: ' + rates.CNY.toLocaleString('en-US',  {minimumFractionDigits:2} );  
    document.querySelector('#vnd').innerHTML = 'Vietnam Dong: ' + rates.VND.toLocaleString('en-US',  {minimumFractionDigits:2} );      
    document.querySelector('#thb').innerHTML = 'Thai Baht: ' + rates.THB.toLocaleString('en-US',  {minimumFractionDigits:2} );    
    document.querySelector('#krw').innerHTML = 'Korean Won:   ' + rates.KRW.toLocaleString('en-US',  {minimumFractionDigits:2} ); 
    document.querySelector('#jpy').innerHTML = 'Japanese Yen:   ' + rates.JPY.toLocaleString('en-US',  {minimumFractionDigits:2} ); 
    document.querySelector('#inr').innerHTML = 'Indian Rupee:   ' + rates.INR.toLocaleString('en-US',  {minimumFractionDigits:2} ); 
    document.querySelector('#aud').innerHTML = 'Australian Dollar:   ' + rates.AUD.toLocaleString('en-US',  {minimumFractionDigits:2} ); 
    document.querySelector('#gbp').innerHTML = 'British Pound:   ' + rates.GBP.toLocaleString('en-US',  {minimumFractionDigits:2} ); 
    document.querySelector('#rub').innerHTML = 'Russian Ruble:   ' + rates.RUB.toLocaleString('en-US',  {minimumFractionDigits:2} ); 
    document.querySelector('#cad').innerHTML = 'Canadian Dollar:   ' + rates.CAD.toLocaleString('en-US',  {minimumFractionDigits:2} ); 
    document.querySelector('#mxn').innerHTML = 'Mexican Peso:   ' + rates.MXN.toLocaleString('en-US',  {minimumFractionDigits:2} ); 
    document.querySelector('#sgd').innerHTML = 'Singapore $:   ' + rates.SGD.toLocaleString('en-US',  {minimumFractionDigits:2} ); 
    document.querySelector('#eur').innerHTML = 'Euro:   ' + rates.EUR.toLocaleString('en-US',  {minimumFractionDigits:2} ); 
    document.querySelector('#try').innerHTML = 'Turkish Lira: ' + rates.TRY.toLocaleString('en-US',  {minimumFractionDigits:2} ); 
    document.querySelector('#php').innerHTML = 'Philippine Peso:   ' + rates.PHP.toLocaleString('en-US',  {minimumFractionDigits:2} ); 
    document.querySelector('#myr').innerHTML = 'Malaysian Ringgit:   ' + rates.MYR.toLocaleString('en-US',  {minimumFractionDigits:2} ); 
    document.querySelector('#cup').innerHTML = 'Cuban Peso:   ' + rates.CUP.toLocaleString('en-US',  {minimumFractionDigits:2} ); 
    document.querySelector('#uah').innerHTML = 'Ukraine Hryvnia:   ' + rates.CUP.toLocaleString('en-US',  {minimumFractionDigits:2} ); 
    document.querySelector('#pln').innerHTML = 'Polish Zloty:   ' + rates.PLN.toLocaleString('en-US',  {minimumFractionDigits:2} ); 
    document.querySelector('#czk').innerHTML = 'Czech Koruna:   ' + rates.CZK.toLocaleString('en-US',  {minimumFractionDigits:2} ); 
    document.querySelector('#all').innerHTML = 'Albanian Lek:   ' + rates.ALL.toLocaleString('en-US',  {minimumFractionDigits:2} ); 
    document.querySelector('#dzd').innerHTML = 'Algerian Dinar:   ' + rates.DZD.toLocaleString('en-US',  {minimumFractionDigits:2} ); 
    document.querySelector('#bgn').innerHTML = 'Bulgarian Lev:   ' + rates.BGN.toLocaleString('en-US',  {minimumFractionDigits:2} ); 
    document.querySelector('#lak').innerHTML = 'Laotian Kip:   ' + rates.LAK.toLocaleString('en-US',  {minimumFractionDigits:2} ); 
    document.querySelector('#khr').innerHTML = 'Cambodian Riel:   ' + rates.KHR.toLocaleString('en-US',  {minimumFractionDigits:2} );
    document.querySelector('#bdt').innerHTML = 'Bangladeshi Taka:   ' + rates.BDT.toLocaleString('en-US',  {minimumFractionDigits:2} );  
    document.querySelector('#pkr').innerHTML = 'Pakistan Rupee:   ' + rates.PKR.toLocaleString('en-US',  {minimumFractionDigits:2} );  
    document.querySelector('#brl').innerHTML = 'Brazilian Real:   ' + rates.BRL.toLocaleString('en-US',  {minimumFractionDigits:2} );  

 })

})

/* $(document).ready(function () {

    $('xdiv').hover(
    function () {
        $(this).stop().fadeOut(function () {
            var $temp = $(this).attr('src');
            $(this).attr('src', $(this).attr('data-alt-src'));
            $(this).attr('data-alt-src', $temp);
        });

        $(this).fadeIn();
    },

    function () {
        $(this).stop().fadeOut(function () {
            var $temp = $(this).attr('data-alt-src');
            $(this).attr('data-alt-src', $(this).attr('src'));
            $(this).attr('src', $temp);
        });

        $(this).fadeIn();

    });
}); */