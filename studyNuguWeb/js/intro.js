$(function(){
    setPop();
  });
  
  
  // 팝업 세팅
  function setPop() {
    var popOpenBtn = $('.popOpenBtnCmmn');
    
    //팝업 열기
    popOpenBtn.on('click',function(){
      var clickNum = $(this).attr('data-num');
      
      $('#popUp_'+clickNum).fadeIn(200);
    })
    
    //팝업 닫기
    $('.popBg, .popCloseBtnCmmn').on('click',function(){
      var clickNum = $(this).attr('data-num');
      
      $('#popUp_'+clickNum).fadeOut(200);
    })
  }