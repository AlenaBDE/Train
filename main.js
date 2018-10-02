let stay = undefined;

window.onload = createTable(7, 7);

document.onkeydown = function (event) {
    if (event.keyCode == 39) {
        let id = Number(stay.id) + 1;
        if ((id > 17 & id < 21) || (id > 27 & id < 31) ||
            (id > 37 & id < 41) || (id > 47 & id < 51) ||
            (id > 57 & id < 61) || (id > 67 & id < 71) || (id > 77)) {
            stay == stay;
        } else {
            stay.style.backgroundImage = '';
            stay = document.getElementById(id + '');
            stay.style.backgroundImage = "url('img/right.png')";
        }
    }

    if (event.keyCode == 37) {
        let id = Number(stay.id) - 1;
        if ((id < 11) ||
            (id < 21 & id > 17) || (id < 31 & id > 27) ||
            (id < 41 & id > 37) || (id < 51 & id > 47) ||
            (id < 61 & id > 57) || (id < 71 & id > 67)) {
            stay.style.backgroundImage = "url('img/left.png')";
        }
        else {
            stay.style.backgroundImage = '';
            stay = document.getElementById(id + '');
            stay.style.backgroundImage = "url('img/left.png')";
        }
    }

    if (event.keyCode == 40) {
        let id = Number(stay.id) + 10;
        if (id > 77) {
            stay.style.backgroundImage = "url('img/front.png')";
        }
        else {
            stay.style.backgroundImage = '';
            stay = document.getElementById(id + '');
            stay.style.backgroundImage = "url('img/front.png')";
        }
    }

    if (event.keyCode == 38) {
        let id = Number(stay.id) - 10;
        if (id < 11) {
            stay.style.backgroundImage = "url('img/back.png')";
        }
        else {
            stay.style.backgroundImage = '';
            stay = document.getElementById(id + '');
            stay.style.backgroundImage = "url('img/back.png')";
        }
    }
}


function createTable(rows, cells) {
    let table = document.createElement('table');
    let div_table = document.getElementById('div_table');
    div_table.appendChild(table);
    table.setAttribute('border', '1');
    table.id = 'table';
    for (let i = 1; i <= cells; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 1; j <= rows; j++) {
            let td = document.createElement('td');
            td.className = 'card';
            tr.appendChild(td);
            td.id = getID(i, j);
        }
    }
    stay = document.getElementById('11');
    stay.style.backgroundImage = "url('img/right.png')";
    console.log(stay);

}

function getID(i, j) {
    return "" + i + j;
}

