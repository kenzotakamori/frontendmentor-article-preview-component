let shareButton = document.getElementById('share-button');
let shareModal = document.getElementById('share-modal');

shareButton.addEventListener('mouseover', () => {
    shareModal.style.visibility = 'visible';
})

shareButton.addEventListener('click', () => {
    console.log(shareModal.style.visibility)
    shareModal.style.visibility = 'visible';
})

shareButton.addEventListener('mouseleave', () => {
    shareModal.style.visibility = 'hidden';
})