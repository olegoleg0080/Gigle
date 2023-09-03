let timer;
let closeWindow;
const closeTimer = document.querySelector('.timer-wrapper');
document.addEventListener('mousemove', resetTimer);
document.addEventListener('mousedown', resetTimer);
document.addEventListener('keypress', resetTimer);
document.addEventListener('touchmove', resetTimer);
const closeBtn = document.querySelector('.timer-btn');
closeBtn.addEventListener('click', closeTimerFunc)
resetTimer()
function resetTimer() {
    clearTimeout(timer);
    timer = setTimeout(modal, 49000);
    
    function modal() {
        closeTimer.style = 'display: flex;';
        closeWindow = setTimeout(() => {
            closeTimer.style = 'display: none;';
            window.close();
        }, 10000);
    }
}
function closeTimerFunc() {
    closeTimer.style = 'display: none;';
    clearTimeout(closeWindow)
}
