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
         h = h.replace(/[\s\n]+/g,' ')
         div.innerHTML=h
         webComputer.refs(div)
         webComputer.scripts(div)
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
    // index ids
    var ind={},i=1
    rr.forEach(function(r){
        if(!ind[r.id]){
            ind[r.id]=i
            i++
            var li = document.createElement('li')
            ol.appendChild(li)
            $.getJSON('ref/'+r.id+'.json')
             .then(function(ri){
                 if(ri.url){
                     ri.html+=' <a href="'+ri.url+'" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a>.'
                 }
                 li.innerHTML=ri.html
             })
        }
    })
    // replace each ref by index
    rr.forEach(function(r,i){
        r.textContent='['+ind[r.id]+']' // add links here at some point
        r.style.color='blue'
    })
}

webComputer.scripts=function(div){
    div.innerHTML.match(/<script src="[^"]+"><\/script>/g).forEach(function(src){
        src = src.replace(/<script src="([^"]+)"><\/script>/,'$1')
        var s = document.createElement('script')
        s.src = src
        document.head.appendChild(s)
        //debugger
    })
    //debugger
}


webComputer()