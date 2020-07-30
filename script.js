let count = 0;
let sun = '<i class="fas fa-sun"></i>';
let moon = '<i class="fas fa-moon"></i>';



let pElements = document.querySelectorAll('p');
let h2Elements = document.querySelectorAll('h2');
let h2SpanElements = document.querySelectorAll('h2 span');
let h6Elements = document.querySelectorAll('h6');

function toggleEffect() {
        // buttonChange.innerHTML = sun;
        // console.log(buttonChange);
        ++count;
        if (count % 2 == 0) {
            console.log(count);
            darkMode();
            // buttonChange.innerHTML = moon;
        }
        else {
            lightMode();
        }

}


function lightMode(){
    document.querySelector('body').style.background = '#ffffff';
    document.querySelector('nav').style.background = '#ffffff';
    document.querySelector('.btn-toggle').innerHTML = '<i class="fas fa-moon"></i>';
    document.querySelector('i').style.color = '#131415';
    // document.querySelector('i:hover').style.background = '#fafafa';

    for (let i = 0; i < pElements.length; i++) {
        pElements[i].style.color = '#131415';
    }
    for (let j = 0; j < h2Elements.length; j++) {
        h2Elements[j].style.color = '#131415';

    }
    for (let k = 0; k < h2SpanElements.length; k++) {
        h2SpanElements[k].style.color = '#0493d3';

    }
    for (let l = 0; l < h6Elements.length; l++) {
        h6Elements[l].style.color = '#0493d3';
        h6Elements[l].style.background = '#fafafa';
    }
}

function darkMode(){
    document.querySelector('body').style.background = '#131415';
    document.querySelector('body').style.color = '#fafbfc';
    document.querySelector('nav').style.background = '#131415';
    document.querySelector('button').innerHTML = '<i class="fas fa-sun"></i>';
    document.querySelector('i').style.color = '#fafbfc';
    // document.querySelector('i:hover').style.background = 'rgb(39, 38, 38)';

    for (let i = 0; i < pElements.length; i++) {
        pElements[i].style.color = '#fafbfc';
    }
    for (let j = 0; j < h2Elements.length; j++) {
        h2Elements[j].style.color = '#fafbfc';

    }
    for (let k = 0; k < h2SpanElements.length; k++) {
        h2SpanElements[k].style.color = '#ffe77a';

    }
    for (let l = 0; l < h6Elements.length; l++) {
        h6Elements[l].style.color = '#ffe77a';
        h6Elements[l].style.background = '#1a1a1a';
    }
}


// let count = 0;
// let sun = '<i class="fas fa-sun"></i>';
// let moon = '<i class="fas fa-moon"></i>';
// function changeTheme() {
//     let buttonChange = document.querySelector("#btn");
//     buttonChange.innerHTML = sun;
//     console.log(buttonChange);
//     ++count;
//     if (count % 2 == 0) {
//         console.log(count);
//         changedark();
//         buttonChange.innerHTML = moon;
//     }
//     else {
//         changeLight();
//     }
// }

// function changedark() {
//     let changeBG = document.querySelector("body");
//     changeBG.style.backgroundColor = 'black';
//     changeBG.style.color = 'white';
//     let quote = document.querySelectorAll(".block");
//     quote[0].style.color = "red";
//     quote[1].style.color = "blue";
// }
// function changeLight() {
//     let changeBG = document.querySelector("body");
//     changeBG.style.backgroundColor = 'white';
//     changeBG.style.color = 'black';
//     let quote = document.querySelectorAll(".block");
//     quote[0].style.color = "blue";
//     quote[1].style.color = "red";
// }

