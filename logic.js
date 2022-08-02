
let Container1 = document.querySelector('.Container1');

let tableau = [];

for(let i=0;i<16;i++){

    tableau[i]=[];
    for(let j =0;j<16;j++){

        tableau[i][j] = document.createElement('div');
        tableau[i][j].style.backgroundColor= 'pink';
        tableau[i][j].style.width = '23px';
        tableau[i][j].style.height = '23px';
        tableau[i][j].style.border= 'solid blue 1px'
        Container1.appendChild(tableau[i][j]);

    }
}