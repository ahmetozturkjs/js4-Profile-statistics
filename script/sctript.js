let h2s=document.querySelectorAll("h2");
let is=document.querySelectorAll("i")

h2s.forEach((h2)=>{
    h2.innerText="0"
        uptade()
        function uptade(){
           let nownumber=+h2.innerText;
           let datano=h2.dataset.no;
           let arti=datano/15;
           nownumber=Math.round(arti+nownumber);
           h2.innerText=nownumber;
        
           if(nownumber<datano){
            setTimeout(uptade,50)
           }
           else{
            h2.innerText=datano;
           }
        }
})

