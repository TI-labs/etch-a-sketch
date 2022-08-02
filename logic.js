
function emptyContainer(container){

    
    

}





let Container1 = document.querySelector('.Container1');

let tableau = [];

for(let i=0;i<16;i++){

    tableau[i]=[];
    for(let j =0;j<16;j++){

        tableau[i][j] = document.createElement('div');
        
        tableau[i][j].style.width = '23px';
        tableau[i][j].style.height = '23px';
        tableau[i][j].style.border= 'solid skyblue 1px'
        tableau[i][j].addEventListener('mouseover',() => tableau[i][j].setAttribute('class', 'getHover'));
        Container1.appendChild(tableau[i][j]);

    }
}


let btn = document.querySelector('.densityGrid');



// btn.addEventListener('click',(e => {

    
    
//     let numberOfBlock = Number(prompt('choose the density'));

//     let blockWidth = Math.floor(400 / numberOfBlock);


//     let strToShow = (blockWidth - 2).toString()  + 'px';
//     console.log(strToShow);

//     for(let i=0;i< numberOfBlock;i++){

//         tableau[i]=[];
//         for(let j =0;j< numberOfBlock;j++){
    
//             tableau[i][j] = document.createElement('div');
            
//             tableau[i][j].style.width = strToShow;
//             tableau[i][j].style.height = strToShow;
//             tableau[i][j].style.border= 'solid skyblue 1px'
//             tableau[i][j].addEventListener('mouseover',() => tableau[i][j].setAttribute('class', 'getHover'))
//             Container1.appendChild(tableau[i][j]);
    
//         }
//     }



// }))