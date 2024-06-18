const pushedBtn = document.getElementById('btn');
const btnText = document.getElementById('text');

pushedBtn.addEventListener('click', () => {
    btnText.textContent = 'ボタンをクリックしました';
})