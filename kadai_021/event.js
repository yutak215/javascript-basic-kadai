const pushedBtn = document.getElementById('btn');
const btnText = document.getElementById('text');

pushedBtn.addEventListener('click', () => {
    setTimeout(() => {
        btnText.textContent = 'ボタンをクリックしました';
    }, 2000);
})