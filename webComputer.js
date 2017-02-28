console.log('webComputer loaded ...');

webComputer=function(){
    console.log('ini')
    if(document.getElementById('webComputerDiv')){
        webComputer.bookCover(document.getElementById('webComputerDiv'))
    }
}


webComputer.bookCover=function(div){
    var h = '<h1 style="color:maroon">Data Science for<br> the WebComputer</h1>'
    h +='<h5><i>Jonas S Almeida, March 2017 - ...</i></h4>'
    div.innerHTML=h
}


webComputer()