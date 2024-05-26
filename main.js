'use strict';

//read the form
const formPreventive = document.getElementById('preventive-form');
console.log(formPreventive);

//take care of submitting the form. The form values will be read here.
formPreventive.addEventListener('submit', function (event) {
    event.preventDefault();

    const userName = document.getElementById('user-name');
    const userSurname = document.getElementById('user-surname');
    const userEmail = document.getElementById('user-email');
    const userWork = document.getElementById('user-work').value;
    const userAdditional = document.getElementById('additional-info');
    const userPromo = document.getElementById('user-promo').value;
    const checkPolicy = document.getElementById('check-policy');
    const promoError = document.getElementById('promo-error');
    const workType = document.getElementById('type-work');

    console.log(userName.value);
    console.log(userSurname.value);
    console.log(userEmail.value);
    console.log(userWork.value);
    console.log(userAdditional.value);
    console.log(userPromo.value);
    console.log(checkPolicy.value);

    //result +- discount
    let resultPrice = (checkPromo(userPromo, switchPrice(userWork))).toFixed(2).toString().split(".");
    document.getElementById('result-integer').innerText = `€ ${resultPrice[0]}`;
    document.getElementById('result-decimals').innerText = `,${resultPrice[1]}`;

    /*computing operations
    price*/
    function switchPrice(userWork) {
        let price = 0;
        switch (userWork) {
            case 'Backend':
                price = 20.50;
                workType.classList.add('d-none');
                break;
            case 'Frontend':
                price = 15.30;
                workType.classList.add('d-none');
                break;
            case 'Analysis':
                price = 33.60;
                workType.classList.add('d-none');
                break;
            default:
                workType.classList.remove('d-none');
        }
        return price;
    }
    //promo
    function checkPromo(userPromo, price) {
        let finalPrice = 0;
        userPromo = userPromo.toUpperCase();
        if (userPromo === '') {
            finalPrice = price * 10;
            promoError.classList.add('d-none');
        }
        else if (userPromo === 'YHDNU32'
            || userPromo === 'JANJC63'
            || userPromo === 'PWKCN25'
            || userPromo === 'SJDPO96'
            || userPromo === 'POCIE24') {
            finalPrice = price * 10 * 0.75;
            promoError.classList.add('d-none');
        }
        else {
            finalPrice = price * 10;
            promoError.classList.remove('d-none');
        }
        return finalPrice;
    }
});

