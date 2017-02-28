console.log('webComputer loaded ...');

WebComputer=function(div){

this.Book=function(){
    var h = '<h1 style="color:maroon">Data Science for<br> the WebComputer</h1>'
    h +='...'
    this.div.innerHTML=h


}

// ini
console.log('ini')
if(div=='webComputerDiv'){
    this.div = document.getElementById('webComputerDiv')
    this.Book()
}

};

webComputer = new WebComputer('webComputerDiv')

