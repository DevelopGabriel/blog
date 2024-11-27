let nav = document.querySelector('nav');
let search_link = document.querySelector('li:nth-child(2)');
console.log(search_link);
let caller = document.querySelector('div#caller');

caller.onmouseenter = function(){
    nav.setAttribute('class', 'show');
    console.log('show');
}

nav.onmouseleave = function(){
    setTimeout(() => {
        nav.removeAttribute('class', 'show');
        console.log('hide');
    }, 700);
}
