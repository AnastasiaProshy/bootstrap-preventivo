'use strict';

//read the form
const formPreventive = document.getElementById('preventive-form');

//take care of submitting the form. The form values will be read here.
formPreventive.addEventListener('submit', function (event) {
    event.preventDefault();

    const enterValidWork = document.getElementById('valid-work');
    const promoError = document.getElementById('promo-error');
    const activePromo = document.getElementById('promo-25%');
    const wrongPromo = document.getElementById('promo-wrong');
    const missedPromo = document.getElementById('promo-missed');

    //page allerts d-none
    [enterValidWork, promoError, activePromo, wrongPromo, missedPromo].forEach(element => element.classList.add('d-none'));

    //used variables
    const [userWork, userPromo] = ['user-work', 'user-promo'].map(id => document.getElementById(id).value);
    console.log(userWork);
    console.log(userPromo);

    ////not used variables
    console.log(document.getElementById('user-name').value);
    console.log(document.getElementById('user-surname').value);
    console.log(document.getElementById('user-email').value);
    console.log(document.getElementById('additional-info').value);
    console.log(document.getElementById('check-policy').checked ? 'on' : 'off');  // ? = if

    //result 
    let resultPrice = (checkPromo(userPromo, switchPrice(userWork))).toFixed(2).toString().split(".");
    document.getElementById('result-integer').innerText = `€ ${resultPrice[0]}`;
    document.getElementById('result-decimals').innerText = `,${resultPrice[1]}`;

    /*computing operations price*/
    function switchPrice(userWork) {
        let price = 0;
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
                enterValidWork.classList.remove('d-none');
        }
        return price;
    }
    //promo
    function checkPromo(userPromo, price) {
        let finalPrice = 0;
        userPromo = userPromo.toUpperCase();
        if (userPromo === '') {
            finalPrice = price * 10;
            missedPromo.classList.remove('d-none');
        }
        else if (userPromo === 'YHDNU32'
            || userPromo === 'JANJC63'
            || userPromo === 'PWKCN25'
            || userPromo === 'SJDPO96'
            || userPromo === 'POCIE24') {
            finalPrice = price * 10 * 0.75;
            activePromo.classList.remove('d-none');
        }
        else {
            finalPrice = price * 10;
            promoError.classList.remove('d-none');
            wrongPromo.classList.remove('d-none');
        }
        return finalPrice;
    }

});