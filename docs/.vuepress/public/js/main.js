function init(){
    var sidebar=document.getElementsByClassName('sidebar');
    var img=document.createElement('img');
    img.src='/images/photo.jpg';
    img.style.width="80%";
    img.style.margin='10%';

    sidebar[0].appendChild(img);
    console.log('添加广告图片');
}
setTimeout('init()',500)