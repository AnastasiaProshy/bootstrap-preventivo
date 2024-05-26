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
    const userJob = document.getElementById('user-job');
    const userAdditional = document.getElementById('additional-info');
    const userPromo = document.getElementById('user-promo');
    const checkPolicy = document.getElementById('check-policy');

    console.log(userName.value);
    console.log(userSurname.value);
    console.log(userEmail.value);
    console.log(userJob.value);
    console.log(userAdditional.value);
    console.log(userPromo.value);
    console.log(checkPolicy.value);

    //computing operations

    document.getElementById('result').innerText = '€ 0,01';



});
