
let Container1 = document.querySelector('.Container1');

let tableau = [];

for(let i=0;i<16;i++){

    tableau[i]=[];
    for(let j =0;j<16;j++){

        tableau[i][j] = document.createElement('div');
        
        tableau[i][j].style.width = '23px';
        tableau[i][j].style.height = '23px';
        tableau[i][j].style.border= 'solid skyblue 1px'
        tableau[i][j].addEventListener('mouseover',() => tableau[i][j].setAttribute('class', 'getHover'))
        Container1.appendChild(tableau[i][j]);

    }
}