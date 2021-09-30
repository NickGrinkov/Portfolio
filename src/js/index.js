import '../scss/style.scss'

const burger = document.querySelector('.burger')
const wrapperContent = document.querySelector('.wrapper_content')
const headerList = document.querySelector('.header_list')
const header = document.querySelector('.header')
const headerItems = document.getElementsByClassName('header_list_item')

function showContent() {
    headerList.classList.toggle('hide')
    header.classList.toggle('hide')
    wrapperContent.classList.toggle('hide')
    burger.classList.toggle('change')
}


 if(document.documentElement.clientWidth < 768 ) {
    burger.addEventListener('click', showContent)

    for (let i = 0; i < headerItems.length; i++) {
    headerItems[i].addEventListener('click', showContent)
    }
 } else {
     ''
 }







