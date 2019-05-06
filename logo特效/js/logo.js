/**
 * logo动画
 * @authors Your Name (you@example.org)
 * @date    2019-04-01 09:39:36
 * @version $Id$
 */

  //logo动画
  var logoShow = function(){
    setTimeout(function(){
      $("#logo-plus .logo-new").addClass("show");
      setTimeout(function(){
        $("#logo-plus .logo-new").addClass("active");
        setTimeout(function(){
          $("#logo-tip").addClass("show");
          $("#logo-plus .logo-new").hide();
          $("#logo-plus .logo-base").show();
        },700);
      },500);
    },200);
  }
  //LOGO变化
  logoShow();
            
