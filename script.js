document.addEventListener("DOMContentLoaded", function() {
    var quickpay = document.getElementById("quickpay");

    quickpay.addEventListener("click", function() {
        window.location.href = "paymentdetails.html";
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var paymentdetail = document.getElementById("paymentdetail");

    paymentdetail.addEventListener("click", function() {
        window.location.href = "summery.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var invoice = document.getElementById("invoice");

    invoice.addEventListener("click", function() {
        window.location.href = "invoice.html";
    });
});