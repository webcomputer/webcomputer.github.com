console.log('webComputer loaded ...');

webComputer=function(){
    console.log('ini')
    if(document.getElementById('webComputerDiv')){
        webComputer.book(document.getElementById('webComputerDiv'),location.href+'/html/intro.html')
    }
}


webComputer.book=function(div,path){
    $.get(path)
     .then(function(h){
         div.innerHTML=h
     })
}


webComputer()