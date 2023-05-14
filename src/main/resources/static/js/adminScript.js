var checkConfirm = true;

function confirm() {
    if (checkConfirm === true) {
        document.getElementById("confirm").style.display = "none";
        document.getElementById("confirmSlide").style.display = "none";

        document.getElementById("unConfirm").style.display = "flex";
        document.getElementById("unconfirmSlide").style.display = "block";

        checkConfirm = false;
    } else {
        document.getElementById("confirm").style.display = "flex";
        document.getElementById("confirmSlide").style.display = "block";

        document.getElementById("unConfirm").style.display = "none";
        document.getElementById("unconfirmSlide").style.display = "none";

        checkConfirm = true;
    }
}

var checkNav = true;
function showNav() {
    if (checkNav === true) {
        document.getElementById("information").style.width = "100%";
        document.getElementById("nav").style.display = "block";
        checkNav = false;
    } else {
        document.getElementById("nav").style.display = "none";
        checkNav = true;
    }
}

var slideConfirm = 1;
showConfirm(slideConfirm);

function plusConfirm(n) {
    showConfirm((slideConfirm += n));

}

function seafConfirm(n) {
    showConfirm((slideConfirm = n));
}

function showConfirm(n) {
    var i;
    var x = document.getElementsByClassName("slideConfirm");
    if (n > x.length) {
        slideConfirm = 1;
    }
    if (n < 1) {
        slideConfirm = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideConfirm - 1].style.display = "block";
}





var slideUnconfirm = 1;
showUnconfirm(slideUnconfirm);

function plusUnconfirm(n) {
    showUnconfirm((slideUnconfirm += n));
}

function seafUnconfirm(n) {
    showUnconfirm((slideUnconfirm = n));
    document.getElementById("nav_confirm").style.display = 'block';
    document.getElementById("nav_unConfirm").style.display = 'none';
}

function showUnconfirm(n) {
    var i;
    var x = document.getElementsByClassName("slideUnconfirm");
    if (n > x.length) {
        slideUnconfirm = 1;
    }
    if (n < 1) {
        slideUnconfirm = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideUnconfirm - 1].style.display = "block";
}