    		var oul=document.getElementById("ul");
    		var oli=oul.getElementsByTagName("li");
    		var odiv=document.getElementById("div");
    		var op=odiv.getElementsByTagName('p');

       for(var i=0;i<oli.length;i++){
          	oli[i].index=i;
          	   oli[i].onclick=function (){
          	   	for(var i=0;i<oli.length;i++){
          	   		op[i].className=""
          	   		}
          	   	
          	   op[this.index].className="avtive"
          	   }
          
          }
