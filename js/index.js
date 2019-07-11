$(function(){
  $('body').on('tap','.exit',function(){
    localStorage.clear();
    location.href='../index.html'
  })
  if(localStorage.indexDom){// 已登录状态
    $('#index').html(localStorage.indexDom);
  };
})
