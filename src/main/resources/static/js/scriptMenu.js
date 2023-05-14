//MOBILE
function m_seafood(){
    document.getElementById('m_display_seafood').style.display="flex";
    document.getElementById('m_display_meat').style.display="none";
    document.getElementById('m_display_drink').style.display="none";

    document.getElementById('m_seafood').style.color="black";
    document.getElementById('m_meat').style.color="#ccc";
    document.getElementById('m_drink').style.color="#ccc";

}
function m_meat(){
    document.getElementById('m_display_seafood').style.display="none";
    document.getElementById('m_display_meat').style.display="flex";
    document.getElementById('m_display_drink').style.display="none";

    document.getElementById('m_seafood').style.color="#ccc";
    document.getElementById('m_meat').style.color="black";
    document.getElementById('m_drink').style.color="#ccc";

}
function m_drink(){
    document.getElementById('m_display_seafood').style.display="none";
    document.getElementById('m_display_meat').style.display="none";
    document.getElementById('m_display_drink').style.display="flex";

    document.getElementById('m_seafood').style.color="#ccc";
    document.getElementById('m_meat').style.color="#ccc";
    document.getElementById('m_drink').style.color="black";

}
if(window.matchMedia("(max-width: 414px)").matches){

    // AddNew
    var m_addNewFood = document.getElementsByClassName('m_orderbtn');
    for(var i = 0;i < m_addNewFood.length; i++ ){
        var m_button = m_addNewFood[i];
        var index = 0;
        m_button.addEventListener('click',function(event){
            index++;
            var m_buttonClicked = event.target;

            var m_image = m_buttonClicked.parentElement.parentElement.children[1].innerHTML;
            var m_name = m_buttonClicked.parentElement.parentElement.children[2].children[0].innerHTML;
            var m_price = m_buttonClicked.parentElement.parentElement.children[3].children[0].innerHTML;
            var m_id = m_buttonClicked.parentElement.parentElement.children[4].children[0].innerHTML;

            var m_listTotal = document.getElementById('m_listTotal');
            m_listTotal.innerHTML += ''+
                '<div class="m_total-card">'+
                '<div class="m_img-total-card">'+
                '<img src="'+m_image +'">'+
                '</div>'+
                '<div class="m_infor-total-card">'+
                '<input type="text" name="id'+index+'" hidden value="'+m_id+'">'+
                '<input type="text" name="name'+index+'" hidden value="'+m_name+'">'+
                '<input type="text" name="price'+index+'" hidden value="'+m_price+'">'+
                '<input type="text" name="image'+index+'" hidden value="'+m_image+'">'+

                '<b>'+m_name+'</b>'+
                '<p>Giá: <span class="m_listPrice">'+m_price+'</span> VND</p>'+
                '<span class="input-number-decrement">–</span>'+
                '<input name="number'+index+'" class="input-number" type="text" value="1" readonly>'+
                '<span class="input-number-increment">+</span>'+
                '</div>'+
                '<div class="m_remove-total-card">'+
                '<i class="fas fa-minus-square remove"></i>'+
                '</div>'+
                '</div>';

            //tính tổng
            var sumPrice = document.getElementById('m_sumPrice');
            var sum = 0;
            var listPrice = document.getElementsByClassName('m_listPrice');
            for (var i = 0; i < listPrice.length; i++){
                var box = listPrice[i].parentElement.parentElement.children[7].value;
                sum += box * parseInt(listPrice[i].innerHTML);
            }
            sumPrice.innerHTML = sum;


            // Trừ
            var decButton = document.getElementsByClassName('input-number-decrement');

            for(var i = 0;i < decButton.length; i++ ){
                var button = decButton[i];
                button.addEventListener('click',function(event){
                    var buttonClicked = event.target;
                    var input = buttonClicked.parentElement.children[7];
                    var inputValue = input.value;
                    var newValue = parseInt(inputValue) - 1;
                    if(newValue > 0){
                        input.value = newValue;

                        //tính tổng
                        var sumPrice = document.getElementById('m_sumPrice');
                        var sum = 0;
                        var listPrice = document.getElementsByClassName('m_listPrice');
                        for (var i = 0; i < listPrice.length; i++){
                            var box = listPrice[i].parentElement.parentElement.children[7].value;
                            sum += box * parseInt(listPrice[i].innerHTML);
                        }
                        sumPrice.innerHTML = sum;
                    }
                })
            }

            // Cộng
            var incButton = document.getElementsByClassName('input-number-increment');
            for(var i = 0;i < incButton.length; i++ ){
                var button = incButton[i];
                button.addEventListener('click',function(event){
                    var buttonClicked = event.target;
                    var input = buttonClicked.parentElement.children[7];
                    var inputValue = input.value;
                    var newValue = parseInt(inputValue) + 1;
                    if(newValue < 11){
                        input.value = newValue;

                        //tính tổng
                        var sumPrice = document.getElementById('m_sumPrice');
                        var sum = 0;
                        var listPrice = document.getElementsByClassName('m_listPrice');
                        for (var i = 0; i < listPrice.length; i++){
                            var box = listPrice[i].parentElement.parentElement.children[7].value;
                            sum += box * parseInt(listPrice[i].innerHTML);
                        }
                        sumPrice.innerHTML = sum;
                    }
                })
            }

            // Xóa
            var listRemove = document.getElementsByClassName('remove');
            for(var i = 0; i < listRemove.length; i++){
                var button = listRemove[i];
                button.addEventListener('click',function(event){
                    var buttonClicked = event.target;
                    var box = buttonClicked.parentElement.parentNode;
                    var parenBox = box.parentNode;
                    parenBox.removeChild(box);

                    //tính tổng
                    var sumPrice = document.getElementById('m_sumPrice');
                    var sum = 0;
                    var listPrice = document.getElementsByClassName('m_listPrice');
                    for (var i = 0; i < listPrice.length; i++){
                        var box = listPrice[i].parentElement.parentElement.children[7].value;
                        sum += box * parseInt(listPrice[i].innerHTML);
                    }
                    sumPrice.innerHTML = sum;

                })
            }

            var boxNumber = document.getElementById('numberFoodMobile');
            boxNumber.value = index;
        })
    }

    // //AddNew
} else {
    //TABLE - PC
    function seafood(){
        document.getElementById('seafood').style.width="0";
        document.getElementById('meat').style.width="0";
        document.getElementById('drink').style.width="0";

        document.getElementById('new-seafood').style.width="23%";
        document.getElementById('seafood-image').style.display="block";
        document.getElementById('seafood-nav').style.width="25%";

        setTimeout(function() {
            document.getElementById('seafood-name').style.display="block";
        }, 2000);
        var newSeafood = document.getElementById('new-seafood');
        newSeafood.classList.add('borderRight');
        setTimeout(function() {
            document.getElementById('seafood-image').style.width="78%";
        }, 200);

        setTimeout(function() {
            document.getElementById('seafood-content').style.display="block";
        }, 2000);
    }

    function meat(){
        document.getElementById('seafood').style.width="0";
        document.getElementById('meat').style.width="0";
        document.getElementById('drink').style.width="0";

        document.getElementById('new-meat').style.width="20%";
        document.getElementById('meat-image').style.display="block";
        document.getElementById('meat-nav').style.width="25%";

        setTimeout(function() {
            document.getElementById('meat-name').style.display="block";
        }, 2000);
        var newSeafood = document.getElementById('new-meat');
        newSeafood.classList.add('borderRight');
        setTimeout(function() {
            document.getElementById('meat-image').style.width="76%";
        }, 200);

        setTimeout(function() {
            document.getElementById('meat-content').style.display="block";
        }, 2000);
    }

    function drink(){
        document.getElementById('seafood').style.width="0";
        document.getElementById('meat').style.width="0";
        document.getElementById('drink').style.width="0";

        document.getElementById('new-drink').style.width="20%";
        document.getElementById('drink-image').style.display="block";
        document.getElementById('drink-nav').style.width="25%";

        setTimeout(function() {
            document.getElementById('drink-name').style.display="block";
        }, 2000);
        var newdrink = document.getElementById('new-drink');
        newdrink.classList.add('borderRight');
        setTimeout(function() {
            document.getElementById('drink-image').style.width="76%";
        }, 200);

        setTimeout(function() {
            document.getElementById('drink-content').style.display="block";
        }, 2000);
    }

    function back(){
        document.getElementById('seafood').style.width="50%";
        document.getElementById('meat').style.width="40%";
        document.getElementById('drink').style.width="50%";

        ////////
        document.getElementById('new-seafood').style.width="0";
        document.getElementById('seafood-image').style.width="0";
        document.getElementById('seafood-nav').style.width="0";
        document.getElementById('seafood-name').style.display="none";

        setTimeout(function() {
            document.getElementById('seafood-image').style.display="none";
        }, 1990);
        document.getElementById('seafood-content').style.display="none";
        var newSeafood = document.getElementById('new-seafood');
        newSeafood.classList.remove('borderRight');

        ////////
        document.getElementById('new-meat').style.width="0";
        document.getElementById('meat-image').style.width="0";
        document.getElementById('meat-nav').style.width="0";
        document.getElementById('meat-name').style.display="none";

        setTimeout(function() {
            document.getElementById('meat-image').style.display="none";
        }, 1990);
        document.getElementById('meat-content').style.display="none";
        var newmeat = document.getElementById('new-meat');
        newmeat.classList.remove('borderRight');

        //////

        document.getElementById('new-drink').style.width="0";
        document.getElementById('drink-image').style.width="0";
        document.getElementById('drink-nav').style.width="0";
        document.getElementById('drink-name').style.display="none";

        setTimeout(function() {
            document.getElementById('drink-image').style.display="none";
        }, 1990);
        document.getElementById('drink-content').style.display="none";
        var newdrink = document.getElementById('new-drink');
        newdrink.classList.remove('borderRight');

    }


    var slideSeafood = 1;
    showSeafood(slideSeafood);

    function plusSeafood(n){
        showSeafood(slideSeafood+=n);
    }

    function seafoodName(n){
        showSeafood(slideSeafood = n);
    }

    function showSeafood(n) {
        var i;
        var x = document.getElementsByClassName("seafood-slide");
        var y = document.getElementsByClassName("name-seafood");

        if (n > x.length) {slideSeafood = 1}
        if (n < 1) {slideSeafood = x.length}

        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideSeafood-1].style.display = "block";

        for (i = 0; i < y.length; i++) {
            y[i].style.display = "none";
        }
        y[slideSeafood-1].style.display = "block";

    }


    var slideMeat = 1;
    showMeat(slideMeat);

    function plusMeat(n){
        showMeat(slideMeat+=n);
    }

    function meatName(n){
        showMeat(slideMeat = n);
    }

    function showMeat(n) {
        var i;
        var x = document.getElementsByClassName("meat-slide");
        var y = document.getElementsByClassName("name-meat");

        if (n > x.length) {slideMeat = 1}
        if (n < 1) {slideMeat = x.length}

        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideMeat-1].style.display = "block";

        for (i = 0; i < y.length; i++) {
            y[i].style.display = "none";
        }
        y[slideMeat-1].style.display = "block";

    }

    var slideDrink = 1;
    showDrink(slideMeat);

    function plusDrink(n){
        showDrink(slideMeat+=n);
    }

    function drinkName(n){
        showDrink(slideDrink = n);
    }

    function showDrink(n) {
        var i;
        var x = document.getElementsByClassName("drink-slide");
        var y = document.getElementsByClassName("name-drink");

        if (n > x.length) {slideDrink = 1}
        if (n < 1) {slideDrink = x.length}

        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideDrink-1].style.display = "block";

        for (i = 0; i < y.length; i++) {
            y[i].style.display = "none";
        }
        y[slideDrink-1].style.display = "block";

    }

// /////////////////////////////////////////////
    var addNewFood = document.getElementsByClassName('add');

    for(var i = 0;i < addNewFood.length; i++ ){
        var button = addNewFood[i];
        var index = 0;
        button.addEventListener('click',function(event){
            index++;
            var buttonClicked = event.target;
            var name = buttonClicked.parentElement.children[0].children[0].innerHTML;
            var price = buttonClicked.parentElement.children[0].children[1].children[0].innerHTML;
            var image = buttonClicked.parentElement.children[0].children[2].innerHTML;
            var id = buttonClicked.parentElement.children[0].children[3].innerHTML;

            var listFood = document.getElementById('listFood');
            listFood.innerHTML += ''+
                '<div class="card_order">'+
                '<div class="img_order">'+
                '<img src="'+image+'">'+
                '</div>'+
                '<div class="infor_order">'+
                '<h4>'+name+'</h4>'+
                '<input type="text" name="id'+index+'" style="display:none;" value="'+id+'">'+
                '<input type="text" name="name'+index+'" style="display:none;" value="'+name+'">'+
                '<input type="text" name="price'+index+'" style="display:none;" value="'+price+'">'+
                '<input type="text" name="image'+index+'" style="display:none;" value="'+image+'">'+

                '<p>Giá: <span class="price">'+price+'</span> VND</p>'+
                '<span class="input-number-decrement">–</span>'+
                '<input name="number'+index+'" class="input-number" type="text" value="1" readonly>'+
                '<span class="input-number-increment">+</span>'+
                '</div>'+
                '<div class="remove">'+
                '<i class="fas fa-minus-square"></i>'+
                '</div>'+
                '</div>';

            var decButton = document.getElementsByClassName('input-number-decrement');
            for(var i = 0;i < decButton.length; i++ ){
                var button = decButton[i];
                button.addEventListener('click',function(event){
                    var buttonClicked = event.target;
                    var input = buttonClicked.parentElement.children[7];
                    var inputValue = input.value;
                    var newValue = parseInt(inputValue) - 1;
                    if(newValue > 0){
                        input.value = newValue;

                        //tính tổng
                        var sumPrice = document.getElementById('sumPrice');
                        var sum = 0;
                        var listPrice = document.getElementsByClassName('price');
                        for(var i = 0; i < listPrice.length; i++){
                            var box = listPrice[i].parentElement.parentElement.children[7].value;
                            sum += parseInt(listPrice[i].innerHTML)*box;
                        }
                        sumPrice.innerHTML = sum;
                    }
                })
            }

            var incButton = document.getElementsByClassName('input-number-increment');
            for(var i = 0;i < incButton.length; i++ ){
                var button = incButton[i];
                button.addEventListener('click',function(event){
                    var buttonClicked = event.target;
                    var input = buttonClicked.parentElement.children[7];
                    var inputValue = input.value;
                    var newValue = parseInt(inputValue) + 1;
                    if(newValue < 11){
                        input.value = newValue;

                        //tính tổng
                        var sumPrice = document.getElementById('sumPrice');
                        var sum = 0;
                        var listPrice = document.getElementsByClassName('price');
                        for(var i = 0; i < listPrice.length; i++){
                            var box = listPrice[i].parentElement.parentElement.children[7].value;
                            sum += parseInt(listPrice[i].innerHTML)*box;
                        }
                        sumPrice.innerHTML = sum;
                    }
                })
            }

            var listRemove = document.getElementsByClassName('remove');
            for(var i = 0; i < listRemove.length; i++){
                var button = listRemove[i];
                button.addEventListener('click',function(event){
                    var buttonClicked = event.target;
                    var box = buttonClicked.parentElement.parentNode;
                    var parenBox = box.parentNode;
                    parenBox.removeChild(box);

                    var sumPrice = document.getElementById('sumPrice');
                    var sum = 0;
                    var listPrice = document.getElementsByClassName('price');
                    for(var i = 0; i < listPrice.length; i++){
                        var box = listPrice[i].parentElement.parentElement.children[7].value;
                        sum += parseInt(listPrice[i].innerHTML)*box;
                    }
                    sumPrice.innerHTML = sum;

                })
            }

            //tính tổng
            var sumPrice = document.getElementById('sumPrice');
            var sum = 0;
            var listPrice = document.getElementsByClassName('price');
            for(var i = 0; i < listPrice.length; i++){
                var box = listPrice[i].parentElement.parentElement.children[7].value;
                sum += parseInt(listPrice[i].innerHTML)*box;
            }
            sumPrice.innerHTML = sum;

            var boxNumber = document.getElementById('numberFood');
            boxNumber.value = index;

        })
    }

    /*------------------------------------------------___*/

}


