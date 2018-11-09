// Load & append element via XHTTP Request
function insertTpl(tpl) {

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            var scr = document.querySelector('[data-tpl="' + tpl + '"]');
            scr.insertAdjacentHTML('afterend', this.responseText);
            scr.parentNode.removeChild(scr);
        }
    };

    xhttp.open("GET", 'assets/tpl/layout/' + tpl + '.tpl?t=' + Math.random(), true);
    xhttp.send();
}