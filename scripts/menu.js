let menuMobile = document.querySelector('.menuMobileWrap')
let menuMobileUl = document.querySelector('.menuMobileWrap ul')
let closeMenu = document.querySelector('.menuClose')
let menuHamburg = document.querySelector('.menuHamburguer')

function menuMobileAction(){
    if (menuMobile.style.display == '' || menuMobile.style.display == 'none'){
        console.log('Aqui')
        menuMobile.style.display = 'block'
        menuHamburg.style.opacity = '0'
        menuHamburg.style.transform = 'translatex(-16px)'
        setTimeout(() => {
            menuMobile.style.opacity = '1'
            menuMobile.style.transform = 'translatey(16px)'
            menuMobileUl.style.pointerEvents = 'auto'
            menuHamburg.style.display = 'none'
            closeMenu.style.display = 'block'
            setTimeout(() => {
                closeMenu.style.opacity = 1
                closeMenu.style.transform = 'translatex(0)'
            }, 250)
        }, 500);
    }else if (menuMobile.style.display == 'block'){
        menuMobile.style.opacity = '0'
        menuMobile.style.zIndex = 4;
        menuMobile.style.transform = 'translatey(0px)'
        menuMobileUl.style.pointerEvents = 'auto'
        closeMenu.style.opacity = '0'
        closeMenu.style.transform = 'translatex(16px)'
        setTimeout(() => {
            menuMobile.style.display = 'none'
            menuHamburg.style.display = 'block'
            closeMenu.style.display = 'none'
            setTimeout(() => {
                menuHamburg.style.opacity = 1
                menuHamburg.style.transform = 'translatex(0)'
            }, 250)
        }, 500);
    }
}

window.addEventListener('resize', () => { 
    if(window.innerWidth > 775){
        menuMobile.style.display = 'none';
        closeMenu.style.display = 'none';
        menuHamburg.style.display = 'block';
        menuHamburg.style.opacity = '1'   
    }
})