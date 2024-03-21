const a = document.getElementById('dis');

function appendtext(char){
    a.value+=char;
}

function clear(){
    a.value = "";
}

function result(){
    a.innerHTML = eval(a.value);
}