var dropdown=document.querySelector('.dropdown');
var dropdownContent=dropdown.querySelector('.dropdown-content')
dropdown.addEventListener('mouseenter',function(){
    dropdownContent.style.display='block';
});

dropdown.addEventListener('mouseleave',function(){
    dropdownContent.style.display='none';
});