$(function(){
  // 文字の色が変わる
  $('#change-color').on('click',function(){
    $('#target').css('color','red');
  });
  // 文字の内容が変わる
  $('#change-text').on('click',function(){
    $('#target').text('Hello!');
  });
  // フェードアウト
  $('#fade-out').on('click',function(){
    $('#target').fadeOut();
  });
  // フェードイン
  $('#fade-in').on('click',function(){
    $('#target').fadeIn();
  });
})