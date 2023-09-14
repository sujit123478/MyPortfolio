
const ul=document.getElementById('MenuLists');
const logo=document.querySelector('.Menu');
logo.addEventListener('click',()=>{
    console.log(ul);
        ul.classList.toggle('Show');
});

