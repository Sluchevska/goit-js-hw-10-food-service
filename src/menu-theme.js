const labelRef = document.querySelector('#theme-switch-toggle')
const bodyRef = document.querySelector('body')


console.log(labelRef)
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
bodyRef.classList.add('light-theme')

labelRef.addEventListener('change', changeTheme)

function changeTheme(e) {
bodyRef.classList.toggle('dark-theme')
    
   
}