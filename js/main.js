// interaacion con menu de nav
let items = document.querySelectorAll('.menu-items')

items.forEach(function(item){
    item.addEventListener('click',function(e){
        let addItem = document.querySelector('.active');
        addItem.classList.remove('active')
        e.target.classList.add('active')
    })
})

// interaccion con dark mode 
const btnSwitch = document.querySelector('#switch')

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

const btnSwitch1 = document.querySelector('.switch')

btnSwitch.addEventListener('click', () => {
    btnSwitch.classList.toggle('active');
})