let mycurrentcolor;
function changecolor (color){
    console.log(color)
    if(color=='fill'){
        document.getElementById('change').style.backgroundColor=mycurrentcolor;
    }
}
function fillcolor (fcolor)
{
    mycurrentcolor=fcolor;
}
function m_search(t){
    let x=document.getElementsByTagName('div')[0];
    x.style.backgroundColor=t.value;
    x.innerHTML=t.value;
}