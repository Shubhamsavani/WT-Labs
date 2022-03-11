let count=0
function fibb(){
    location.href='new_page.html';
}
function isPrime(n){
    let flag = true;
    for(i = 2; i <= n - 1; i++)
    {
        if (n % i == 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
function new_pg(){
    let num = prompt("please enter the number till which fibonnaci sequence you want to print");
    let a = 0;
    let b = 1;
    let str= '<div>0</div> <div>1</div> <div>1</div> ';
    
    
    for(let i = 1; i<=num; i++){
        if(a>1){

            if(isPrime(a)){
                str=str+'<div><span class="prime">'+a+'</span></div>';
            }else{
                str=str+'<div>'+a+'</div>';
                
            }
        }
        t = a + b;
        a = b;
        b = t;
    }
    document.getElementById("container2").innerHTML=str;
}

function counter(){
    count+=1;
    document.getElementById('counter').innerText=count;
}
function evenOdd(){
    let m= prompt('enter a number to check for even or odd');
    let item=document.createElement('div');
    item.innerText=m;
    if(m%2==0){
        item.classList.add('even');

    }else{
        item.classList.add('odd');
    }
    document.getElementById('evenOdd_container').appendChild(item);
}
function bgcolor(){
    let q= Math.floor(Math.random()*10000);
    document.body.style.backgroundColor='#'+q;
}
function noTilln(){
    location.href='no_till_n_page.html';
}
function new_pg2(){
    let n= prompt("enter n ");
    let x=1;
    let str='';
    while(n--){
        str=str+'<br>'+x;
        x++;
    }
    document.getElementById('container3').innerHTML=str;

}