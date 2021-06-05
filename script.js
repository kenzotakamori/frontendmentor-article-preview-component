let shareButton = document.getElementById('share-button');
let shareModal = document.getElementById('share-modal');

shareButton.addEventListener('mouseenter', () => {
    shareModal.classList.add('open-desktop')
})

shareModal.addEventListener('mouseleave', () => {
    shareModal.classList.remove('open-desktop')
})

shareButton.addEventListener('click', (event) => {
    event.stopPropagation()
    shareModal.classList.add('open-mobile')
})

shareModal.addEventListener('click', (event) => {
    event.stopPropagation()
})

document.addEventListener('click', (event) => {
    shareModal.classList.remove('open-mobile')
})