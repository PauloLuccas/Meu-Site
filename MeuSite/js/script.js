function nightMode(){
    var body = document.getElementById('body');
    var currentClass = body.className;
    body.className = currentClass == 'light-mode' ? 'dark-mode' : 'light-mode';
}