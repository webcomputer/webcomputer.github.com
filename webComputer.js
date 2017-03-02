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
         // parse references before inserting innerHTML
         h = h.replace(/<ref>([^<]+)<\/ref>/g,'<span id="$1" class="webBookRef">$1</span>')
         div.innerHTML=h
         webComputer.refs(div)
     })
}

webComputer.refs=function(div){ // references ref/<fn>.json
    var refs = document.getElementsByClassName('webBookRef')
    var hr = document.createElement('hr')
    div.appendChild(hr)
    var divRefs = document.createElement('div')
    div.appendChild(divRefs)
    var ol = document.createElement('ol')
    divRefs.appendChild(ol)
    var rr = []
    for(var i=0 ; i<refs.length ; i++){rr.push(refs[i])} // silly DOM prefers a non Array for selectors ... 
    rr.forEach(function(r,i){
        r.textContent='['+(i+1)+']'
        r.style.color='blue'
        var li = document.createElement('li')
        ol.appendChild(li)
        $.getJSON('ref/'+r.id+'.json')
         .then(function(ri){
             if(ri.url){
                 ri.html+=' <a href="'+ri.url+'" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a>.'
             }
             li.innerHTML=ri.html
         })
    })
}


webComputer()