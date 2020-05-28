//产品内容
var oblock = document.getElementById('block');
var odiv = oblock.children;
for(i = 0;i<odiv.length;i++){
    odiv[i].onclick = function(){
        for(i = 0;i<odiv.length;i++){
            odiv[i].style.border = '1px solid #fff';
        }
        this.style.border = '1px solid red';
    }
}

//分页器
var opage = document.getElementById('page');
var onext = document.getElementById('next');
var pag_ul = document.getElementById('paging-ul');
var pag_li = pag_ul.getElementsByTagName('li');
var otext = document.getElementById('text');
var obut = document.getElementById('but');
var num = 0;
for(i=0;i<pag_li.length;i++){
    pag_li[i].index = i;
    pag_li[i].onclick = function () {
        num = this.index;
        for(n = 0;n<pag_li.length;n++){
            pag_li[n].className = '';
        }
        this.className = 'active';
        otext.value = this.innerHTML;
    }
}
opage.onclick = function () {
    for(n = 0;n<pag_li.length;n++){
        pag_li[n].className = '';
    }
    if(num==0){
        num=pag_li.length-1;
    }else{
        num--;
        
    }
    pag_li[num].className = 'active';
    otext.value = pag_li[num].innerHTML;
}
onext.onclick = function () {
    for(n = 0;n<pag_li.length;n++){
        pag_li[n].className = '';
    }
    if(num>=pag_li.length-1){
        num=0;
    }else{
        num++;
        
    }
    pag_li[num].className = 'active';
    otext.value = pag_li[num].innerHTML;
}
obut.onclick = function () {
    for(n = 0;n<pag_li.length;n++){
        pag_li[n].className = '';
    }
    if(otext.value>6){
        otext.value=6
    }
    num = otext.value - 1;
    pag_li[num].className = 'active';
    
  }

// 产品分类
var ori = document.getElementById('g-b-r');
var op = ori.getElementsByTagName('p');
var oli = ori.getElementsByTagName('li');
for(i = 0;i<op.length;i++){
    op[i].onclick = function () {
        for(i = 0;i<op.length;i++){
            op[i].className = 'fl';
        }
        this.className = 'fl active'
      }
}
for(i = 0;i<oli.length;i++){
    oli[i].onclick = function () {
        for(i = 0;i<oli.length;i++){
            oli[i].className = '';
        }
        this.className = 'active'
      }
}

// 回到顶部
var backTop = document.getElementById("back-top") //获取到div 对象

　

　　// onscroll 事件 ====》在元素滚动条在滚动时触发。

　　window.onscroll = function (){

　　　　var scrollTop = document.documentElement.scrollTop ?     // 三目运算 = 兼容问题

　　　　　　　　　　　document.documentElement.scrollTop :

　　　　　　　　　　　document.body.scrollTop;

　　　　if(scrollTop > 500){                           　　 //当滚动条滚动的距离大于 800 的时候，才会显示 回到顶部的div

　　　　　　backTop.style.display = "block"

　　　　}else{

　　　　　　backTop.style.display = "none"

　　　　}

　　}

　　// 为 div 添加点击事件

　　var id;  // ===== 要注意 id声明的位置

　　backTop.onclick = function (){

　　　　id = setInterval(function (){          // 使用间隔函数的理由===》当点击回到顶部的时候，不是一下子滚动距离就变成0 ，而是形成一个过渡的过程，每隔16毫秒，current-100

　　　　var current = document.documentElement.scrollTop ?    // 取得当前滚动的距离

　　　　　　　　　　document.documentElement.scrollTop :

　　　　　　　　　　document.body.scrollTop;

　　　　if(current === 0){

　　　　　　clearInterval(id);  　　// 当滚动距离为0 的时候，要清除这个间隔函数

　　　　}

　　　　document.documentElement.scrollTop = current - 100    // 形成一个慢慢过渡到0 的过程

　　　　document.body.scrollTop = current - 100   // 写两个是为了兼容

　　　　} , 16)

　}

 

　　// 在回到顶部的过程时候，鼠标滚轮动的时候，滚动会暂停

　　// 添加一个鼠标滚轮事件

　　window.onmousewheel = function (){

　　clearInterval(id);  // ======= 这个时候会涉及到上面标注的要注意id的位置，最开始的时候 把他写在了函数体里面，到这里的时候就获取不到了。

　　}