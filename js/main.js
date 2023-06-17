let items = document.querySelectorAll('.menu-items')

items.forEach(function(item){
    item.addEventListener('click',function(e){
        let addItem = document.querySelector('.active');
        addItem.classList.remove('active')
        e.target.classList.add('active')
    })
})