const shareButton = document.querySelector('.share');
const socialMedia = document.querySelector('.author');

shareButton.addEventListener('click', (e) => {
    e.defaultPrevented;
    socialMedia.classList.toggle('active');
});