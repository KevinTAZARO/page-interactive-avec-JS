//FONCTIONALITÉ 1 :
let footer = document.querySelector('footer');
let clic = 0

footer.addEventListener('click', function(){
    console.log('clique');
});

//FONCTIONALITÉ 1bis :
footer.addEventListener('click', function(){
    clic += 1;
    console.log('clic numéro ' + clic);
});

//FONCTIONALITÉ 2 :
let hamburger = document.querySelector('button.navbar-toggler');
let menu = document.getElementById('navbarHeader');

hamburger.addEventListener('click', function(){
    menu.classList.toggle('collapse');
});

//FONCTIONALITÉ 3 :
let cardHtml = document.getElementsByClassName('card')[0];
let button = document.querySelector('button.btn-outline-secondary');

button.addEventListener('click', function(){
    cardHtml.style.color = 'red';
});

//FONCTIONALITÉ 4 :
let cardCss = document.getElementsByClassName("card")[1];
let button2 = document.querySelectorAll("button.btn-outline-secondary")[1];

button2.addEventListener('click', function(){
    if (cardCss.style.color === 'green'){
        cardCss.style.color = "";
    }else {
        cardCss.style.color = 'green';
    };
});

//FONCTIONALITÉ 5 :
let header = document.getElementsByTagName('header')[0];
let bootstrap = document.querySelector('link');

header.addEventListener('dblclick', function(){
    if (bootstrap.href === 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'){
    bootstrap.setAttribute('href', '');
}else{
    bootstrap.setAttribute('href', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
};
});

//FONCTIONNALITÉ 6
let buttons = document.querySelectorAll('button.btn-success');
console.log(button);

buttons.forEach(button =>{
    button.addEventListener('mouseover',function(){
        let image = button.parentNode.parentNode.parentNode.parentNode.firstElementChild;
        let text = button.parentNode.parentNode.parentNode.firstElementChild;
    
    if (image.style.width === '20%'){
        image.style.width = '100%';
        text.style.display = 'block';
    }else{
        image.style.width = '20%';
        text.style.display = 'none';
    };
    }); 
});

//FONCTIONNALITÉ 7
