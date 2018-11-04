// Load & append element via XHTTP Request
function xhttpLoad(url, selector, addType) {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        var el = document.querySelector(selector);

        if (this.readyState == 4 && this.status == 200) {

            // Append
            if (addType === 'append') {
                el.innerHTML += this.responseText;
            }

            // Prepend
            if (addType === 'prepend') {
                el.innerHTML = this.responseText + el.innerHTML;
            }
        }
    };

    xhttp.open("GET", url + "?t=" + Math.random(), true);
    xhttp.send();
}

// Templater
function templateHelper() {

    // Templates list
    let layout = 'assets/tpl/layout/',
        tpl = {
            'favicon': {
                'url': layout + 'meta/favicon.tpl',
                'selector': 'head',
                'addType': 'append'
            },

            'header': {
                'url': layout + 'header.tpl',
                'selector': 'body',
                'addType': 'prepend'
            },

            'footer': {
                'url': layout + 'footer.tpl',
                'selector': 'body',
                'addType': 'append'
            },
        };

    let el = Object.values(tpl);

    for (let i = 0, l = el.length; i < l; i++) {
    		xhttpLoad(el[i].url, el[i].selector, el[i].addType);
    }
}

templateHelper();