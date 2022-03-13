if($(window).width()<885)
  $(".menu").css("width","0");
$(".body_bg").hide();
$(".btn_clous").click(function(){
  $(".menu").css("width","0");
  $(".body_bg").hide();
  $("header").css("position", "absolute")
  $(".open_catalog_a").attr("href","#")
  href = 0
  if($(window).width()<614){
    $(".logo").css("opacity","1")
    $(".call_top_text").css("opacity","1")
  }
  $(".call_bottom, .open_menu").css("z-index", "5000")
  $(".kruglaya-volna").css("z-index", "1000")
  $(".open_catalog_li_hover").addClass("open_catalog_li");
  $(".open_catalog_li").removeClass("open_catalog_li_hover");
  $(".open_catalog_li_hover ol").slideUp(500);
})
$(".open_menu").click(function(){
  $(".menu").css("width","100%");
  $(".open_catalog_li").addClass("open_catalog_li_hover");
  $(".open_catalog_li_hover").removeClass("open_catalog_li");
  $(".call_bottom, .open_menu").css("z-index", "0")
  $("header").css("position", "fixed");
  $("header").css("z-index", "11");
  $(".body_bg").show();
  $(".kruglaya-volna").css("z-index", "9")
  $(".open_catalog_li_hover").click(function(event){
    $(".open_catalog_li_hover ol").slideDown(500);
    event.stopPropagation()
    $("body").click(function(){
      $(".open_catalog_li_hover ol").slideUp(500);
    })
  })
})
$(".call_back_form").hide()
$(".call_back, .footer_cal_back").click(function(){
  $(".call_back_form").show()
});
$(".call_back_form_clous").click(function(){
  $(".call_back_form").hide()
});
$(".buy_form").click(function(event){
  event.stopPropagation()
})
$(".open_form").click(function(event){
  $(".form_bg").show();
  event.stopPropagation()
  $("body").click(function(){
    $(".form_bg").hide();
  })
})
$(".clous_form").click(function(){
  $(".form_bg").hide()
})
$(document).ready(function(){
  if($(".header_class").val()=="5"){
    $("header").addClass("header_all")
  }
});
$(".uslug").click(function(event){
  $(this).children(".services_ol").slideDown(500);
  event.stopPropagation();
  $("body").click(function(){
    $(".services_ol").slideUp(500);
  })
})
$(".uslug").click(function(event){
  $(".uslug a").css("z-index","-1")
  $(this).children("a").css("z-index","2")
})
