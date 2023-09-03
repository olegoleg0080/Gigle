const loadAnimation = document.querySelector('.load-wrapper');
loadAnimka();
function loadAnimka() {
    document.body.style = 'position: fixed;'
    let load = setTimeout(exitLoad, 5000);
    function exitLoad() {
        loadAnimation.style = 'display: none;';
        document.body.style = 'position: statik;'
        document.body.style = 'overflow-x: hidden'
    }

    
}