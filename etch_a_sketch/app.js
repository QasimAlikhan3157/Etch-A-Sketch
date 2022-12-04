let grid = Number(prompt("Please Enter Grid"));
console.log(typeof(grid)+" "+ grid);

let black_btn=document.querySelector('.black');
console.log(black_btn.value);
let red_btn=document.querySelector('.red');
console.log(red_btn);
let blue_btn=document.querySelector('.blue');
console.log(blue_btn);
let rainbow_btn=document.querySelector('.rainbow');
console.log(rainbow_btn);
let eraser_btn=document.querySelector('.eraser');
console.log(eraser_btn);
let clear_btn=document.querySelector('.clear');
console.log(clear_btn);



function color_option(){
    black_btn.addEventListener('click',()=>{
        changeColor('black')
        console.log('blackkkkkkkk');
    })
    red_btn.addEventListener('click',()=>{
        changeColor('red')
        console.log('red');
    })
    blue_btn.addEventListener('click',()=>{
        changeColor('blue')
        console.log('blue');
    })
    rainbow_btn.addEventListener('click',()=>{
        rainbow();
    })
    eraser_btn.addEventListener('click',()=>{
        changeColor('wheat')
    })
    clear_btn.addEventListener('click',()=>{
        clear();
    })


}
color_option();








let container_div=document.querySelector('.container')
console.log(container_div);




for(let i=0;i<grid;i++){
    let row=document.createElement('div')
    // console.log(row);
    row.classList.add('row')
    for(let j=0;j<grid;j++){
        let column=document.createElement('div')
        // console.log(column);
        column.classList.add('column')
        row.appendChild(column)

    }
    container_div.appendChild(row)
}


let column_div=document.querySelectorAll('.column')
console.log(column_div);


// for(let i=0;i<column_div.length;i++){
//  column_div[i].addEventListener('mouseover',()=>{
//     column_div[i].style.backgroundColor="red";
//  })
// }

function changeColor(color){
    for(let i=0;i<column_div.length;i++){
        column_div[i].addEventListener('mouseover',()=>{
           column_div[i].style.backgroundColor=`${color}`;
        })
       }

}




function rainbow(){
    for(let i=0;i<column_div.length;i++){
        column_div[i].addEventListener('mouseover',()=>{
           column_div[i].style.backgroundColor=changeHex();
        })
       }
}

function changeHex() {
    let hex = '#';
    const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; 

  
    for(let i = 0; i < 6; i++){
      const index = Math.floor(Math.random() * hexValues.length)
      hex += hexValues[index];
    }
  console.log(hex);
  return hex
   
  }
  changeHex();









  function clear(){
    for(let i=0;i<column_div.length;i++){
        column_div[i].style.backgroundColor='wheat';

    }
  }

