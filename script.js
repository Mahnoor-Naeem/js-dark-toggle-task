
function toggleEffect(){
    let pElements = document.querySelectorAll('p');
    let h2Elements = document.querySelectorAll('h2');
    let h2SpanElements = document.querySelectorAll('h2 span');
    let h6Elements = document.querySelectorAll('h6'); 

    document.querySelector('body').style.background ='#ffffff';
    document.querySelector('nav').style.background = '#ffffff';
    document.querySelector('i').style.color = '#131415';
    document.querySelector('i:hover').style.background = '#fafafa';


    for(let i = 0; i < pElements.length; i++){
        pElements[i].style.color = '#131415';
    }
    for(let j = 0; j < h2Elements.length; j++){
        h2Elements[j].style.color = '#131415';
       
    }
    for(let k = 0; k < h2SpanElements.length; k++){
        h2SpanElements[k].style.color = '#0493d3';
       
    }
    for(let l = 0; l < h6Elements.length; l++){
        h6Elements[l].style.color = '#0493d3';
        h6Elements[l].style.background = '#fafafa';
    }

}

// function myFunction(x) {
//     x.classList.toggle("fa-thumbs-down");
//   }





