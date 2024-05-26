'use strict';

//read the form
const formPreventive = document.getElementById('preventive-form');
console.log(formPreventive);

//price list
let price = 0;
let finalPrice = 0;


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

    console.log(userName.value);
    console.log(userSurname.value);
    console.log(userEmail.value);
    console.log(userWork.value);
    console.log(userAdditional.value);
    console.log(userPromo.value);
    console.log(checkPolicy.value);

    //computing operations

    switch (userWork) {
        case 'Backend':
            price = 20.50;
            break;
        case 'Frontend':
            price = 15.30;
            break;
        case 'Analysis':
            price = 33.60;
            break;
        default:
    }

    if (userPromo === '') {
        finalPrice = ((price * 10).toFixed(2)).toString();
        promoError.classList.add('d-none');
    }
    else if (userPromo === 'YHDNU32'
        || userPromo === 'JANJC63'
        || userPromo === 'PWKCN25'
        || userPromo === 'SJDPO96'
        || userPromo === 'POCIE24') {
        finalPrice = ((price * 10 * 0.75).toFixed(2)).toString();
        promoError.classList.add('d-none');
    }
    else {
        finalPrice = ((price * 10).toFixed(2)).toString();
        promoError.classList.remove('d-none');
    }

    //result +- discount
    let resultPrice = finalPrice.split(".");
    document.getElementById('result-integer').innerText = `€ ${resultPrice[0]}`;
    document.getElementById('result-decimals').innerText = `,${resultPrice[1]}`;

});
