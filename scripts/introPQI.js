console.log('loaded introPQI.js');

(function(id){ // do it all as an annonymous functionc all
    if(id){
        console.log('found target id')
        fun = function(){
            $.getScript('https://mathbiol.github.io/openHealth/jobs/pqiSuffolk.js')
            //debugger
            // restyle head
            fun.t = setInterval(function(){
                console.log('checking for pqi loading ',Date())
                if($('h4',openHealthJob).length>0){
                    h4 = $('h4',openHealthJob)
                    h4.forEach(function(h){
                       h.style.fontSize=14
                    })
                    clearInterval(fun.t)
                    //debugger
                }
            },1000)

        }
        if(typeof(openHealth)=='undefined'){ // satisfy dependency if needed
            $.getScript('https://mathbiol.github.io/openHealth/openHealth.js')
             .then(fun)
        }else{
            fun()
        }
        
    }else{
        console.log('target id not found')
    }

})('assemble_PQItool_here')
