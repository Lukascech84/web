$(document).ready(function () {

  function animace(){
    $(".menu1").delay(1000).animate({
      width: '100%'
    });

    $(".menu2").delay(1000).animate({
      width: '0%'
    });

    $(".menu3").delay(1500).animate({
      top: '0%'
    });

    $(".nadpis1").animate({
      "margin-left": '-100%',
      opacity: '0',
    },750);

    $(".text1").delay(200).animate({
      "margin-left": '-100%',
    },750);

    $(".text2").delay(300).animate({
      "margin-left": '-100%',
      opacity: '0',
    },750);

    $(".text3").delay(400).animate({
      "margin-left": '-100%',
      opacity: '0',
    },750);

    $(".text4").delay(500).animate({
      "margin-left": '-100%',
      opacity: '0',
    },750);

    $(".text5").delay(600).animate({
      "margin-left": '-100%',
      opacity: '0',
    },750);

    $(".about1").delay(100).animate({
      "margin-left": '200%',
      opacity: '0',
    });

    $(".about2").delay(200).animate({
      "margin-left": '200%',
      opacity: '0',
    });

    $(".kontakt1").delay(300).animate({
      "margin-left": '200%',
      opacity: '0',
    });

    $(".kontakt2").delay(400).animate({
      "margin-left": '200%',
      opacity: '0',
    });
  }


  $(".text1").click(function () {
    animace();
    setTimeout(function () {
      window.location.href = "./a/index.html";
    }, 2000);
  });


  $(".text2").click(function () {
    animace();
    setTimeout(function () {
      window.location.href = "./b/index.html";
    }, 2000);
  });


  $(".text3").click(function () {
    animace();
    setTimeout(function () {
      window.location.href = "./c/index.html";
    }, 2000);
  });


  $(".text4").click(function () {
    animace();
    setTimeout(function () {
      window.location.href = "./d/index.html";
    }, 2000);
  });


  $(".text5").click(function () {
    animace();
    setTimeout(function () {
      window.location.href = "./e/index.html";
    }, 2000);
  });
  

});


