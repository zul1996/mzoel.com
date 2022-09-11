window.addEventListener('scroll', () => {
    const nav = document.getElementsByTagName('nav')[0];
    if (window.scrollY > 30) {
        nav.classList.add('scroll');
    } else {
        nav.classList.remove('scroll');
    }
});