const drawerdown = document.querySelector('.nav-ul');
const hideAside = document.querySelector('#nav-btn');

hideAside.addEventListener('click', () => {
    // drawerdown.style.display = 'none'
    if (drawerdown.style.display === 'block') {
        drawerdown.style.display = 'none'
    } else {
        drawerdown.style.display = 'block'

    }
})