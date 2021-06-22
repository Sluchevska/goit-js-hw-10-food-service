import menu from './menu.json'
import menuTemplate from './menuTempl.hbs'
const menuItemBox = document.querySelector('.js-menu')

function createMenu(menu) {
    return menu.map(menuTemplate).join('')
}
console.log(menu)
menuItemBox.insertAdjacentHTML('beforeend', createMenu(menu))