const menubutton = document.querySelector('.menu')
const navitem = document.querySelector('.nav-item')
const navopen = document.querySelector('.menu-close');
const navlink = document.querySelectorAll('.nav-link');


menubutton.addEventListener('click', () => {
    navitem.classList.toggle('showme');
})
function linkAction() {
    navlink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    navitem.classList.toggle('showme')
}

navlink.forEach(n => n.addEventListener('click', linkAction))

function send() {
    let email = document.getElementById('email').value;
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let telephone = document.getElementById('telephone').value;
    let message = document.getElementById('message').value;

    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            firstname: firstname,
            lastname: lastname,
            telephone: telephone,
            message: message
        })
    })
        .then(response => response.text())
        .then(data => {
            alert(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
