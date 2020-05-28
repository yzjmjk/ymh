var hot_ul = document.getElementById('hot_ul');
var ulli = hot_ul.getElementsByTagName('li');

for(var i=0;i<ulli.length;i++){
    ulli[i].onclick = function(){
        for(var i=0;i<ulli.length;i++){
            ulli[i].className = ''
        }
        this.className = 'active'
    }
}