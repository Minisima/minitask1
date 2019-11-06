window.onload = function () {

    document.getElementById('triangle').addEventListener('click', drawTriangle);
    document.getElementById('pyramid').addEventListener('click', drawPyramid);
    document.getElementById('reverse').addEventListener('click', drawReverse);
    document.getElementById('clear').addEventListener('click', clearContent);
}

function drawTriangle() {
    let picture = '';
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
            picture += '* ';
        } picture += '<br/>'
    }
    document.getElementById('content').innerHTML = picture;
}

function drawPyramid() {
    let picture = '';
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= (5 - i); j++) {
            picture += '&nbsp';
        }
        for (let k = 1; k <= i; k++) {
            picture += '* '
        }
        picture += '<br/>'
    }
    document.getElementById('content').innerHTML = picture;
}

function drawReverse() {
    let picture = '';
    for (let i = 5; i >= 1; i--) {
        for (let k = 5; k >= i; k--) {
            picture += '&nbsp';
        }
        for (let j = 1; j <= i; j++) {
            picture += '* ';
        }

        picture += '<br/>'
    }
    document.getElementById('content').innerHTML = picture;
}

function clearContent() {
    let elem = document.getElementById("content");
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
   
}