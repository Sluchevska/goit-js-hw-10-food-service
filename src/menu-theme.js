const labelRef = document.querySelector('#theme-switch-toggle')
const bodyRef = document.querySelector('body')
const checkboxRef = document.querySelector('#theme-switch-toggle')

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const lightTheme = bodyRef.classList.add('light-theme')

labelRef.addEventListener('change', changeTheme)

function changeTheme() {
   
   bodyRef.classList.toggle('dark-theme')
    bodyRef.classList.remove('light-theme')
     
   onUpload()
  
}
 
function onUpload() {
    if (!lightTheme) {
        localStorage.setItem('myTheme', JSON.stringify(Theme.DARK))
        const savedTheme = localStorage.getItem('myTheme')
        const parsedTheme = JSON.parse(savedTheme)
    //   checkboxRef.checked=true
    } 
}





