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
let arrowRight = document.querySelector('a.btn-secondary');

arrowRight.addEventListener('click', function(){
    let parent = document.querySelectorAll('div.row')[1];
    let firstChild = parent.firstElementChild;
    let lastChild = parent.lastElementChild;

    parent.insertBefore(lastChild, firstChild);
});

//FONCTIONNALITÉ 8
let arrowLeft = document.querySelector('a.btn-primary');

arrowLeft.addEventListener('click', function(e){
    e.preventDefault();
    
    let parent = document.querySelectorAll('div.row')[1];
    let firstChild = parent.firstElementChild;
    let lastChild = parent.lastElementChild;

    parent.insertBefore(firstChild,lastChild.nextSibling);
});

//FONCTIONNALITÉ 9
let row = document.querySelectorAll('div.row')[1];
let col = document.querySelectorAll('div.col-md-4');

window.addEventListener('keypress', function(e){
    if(document.getSelection().anchorNode.textContent === 'JS & Events' && window.getSelection().focusOffset === 0){
        if(e.key === "a"){
            row.setAttribute('class', '');
            row.classList.add('row');
            row.classList.add('justify-content-left');

            for(let i=0; i<col.length; i++){
                col[i].setAttribute('class', '');
                col[i].classList.add('col-md-3');
            };
        }else if(e.key === "y"){
            row.setAttribute('class', '');
            row.classList.add('row');
            row.classList.add('justify-content-center');

            for(let i=0; i<col.length; i++){
                col[i].setAttribute('class', '');
                col[i].classList.add('col-md-3');
            };
        }else if(e.key === "p"){
            row.setAttribute('class', '');
            row.classList.add('row');
            row.classList.add('justify-content-end');

            for(let i=0; i<col.length; i++){
                col[i].setAttribute('class', '');
                col[i].classList.add('col-md-3');
            };
        } else if (e.key === "b"){
            row.setAttribute("class", "");
            row.classList.add("row");
    
            for (let i=0; i < col.length; i++){
              col[i].setAttribute("class", "");
              col[i].classList.add("col-md-4");
            };
        };
    };           
});




// Fonctionnalité Konami Code 🤫
let pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let current = 0;

document.addEventListener('keydown', function keyHandler(event){
  if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}
  current++;
  if (pattern.length === current) {
		current = 0;
		window.alert('Congratulations! You Found an Easter Egg!');
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
	}
}, false);