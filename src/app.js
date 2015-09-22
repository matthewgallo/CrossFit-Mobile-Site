$( document ).ready(function(){
  // iPhone preview
  bioMp($("#preview"), {
    url: "http://matthewgallo.github.io/CrossFit-Mobile-Site/",
    view: "left",
    image: "assets/iphone6_side_left_black.png"
  });


// Toggle drop down menu for site navigation
  $(".icon-align-left").click(function(){
    $(".header-menu").toggle("slow");
  });

  $(".icon-align-right").click(function(){
    $(".header-right").toggle("slow");
  });

// Inner toggles
  $(".military").click(function(){
    $(".military-list").toggle("slow");
  });

  $(".crossfit-affiliate").click(function(){
    $(".crossfit-list").toggle("slow");
  });

  $(".courses").click(function(){
    $(".geographic-location").toggle("slow");
  });

  $(".archives").click(function(){
    $(".archives-menu").toggle("slow");
  });

// Inner inner toggles
  $(".location-us").click(function(){
    $(".us-classes").toggle("slow");
  });

  $(".location-canada").click(function(){
    $(".canada-classes").toggle("slow");
  });

  $(".location-mexico").click(function(){
    $(".mexico-classes").toggle("slow");
  });

  $(".location-europe").click(function(){
    $(".europe-classes").toggle("slow");
  });

  $(".location-australia").click(function(){
    $(".australia-classes").toggle("slow");
  });

  $(".location-me").click(function(){
    $(".me-classes").toggle("slow");
  });

  $(".location-china").click(function(){
    $(".china-classes").toggle("slow");
  });

  $(".location-africa").click(function(){
    $(".africa-classes").toggle("slow");
  });

  $(".location-central").click(function(){
    $(".central-classes").toggle("slow");
  });




// Date select box
  $().dateSelectBoxes({
    monthElement: $('#month'),
    yearElement: $('#year'),
    keepLabels: true
  });

  $().dateSelectBoxes({
    yearElement: $('#year-2'),
    keepLabels: true
  });


// Post Modal 1
  $("#dialog-1").dialog({ autoOpen: false, 
    show: {
        effect: "blind",
        duration: 1000
      },
    hide: {
        effect: "blind",
        duration: 1000
      },
    modal: true,
    width: 310,
    resizable: false,
    minHeight:"auto",
    position: { 
      my: 'center',
      at: 'center',
      of: $('.post-1')
    },
    buttons: {
          "Close": function() {
            $(this).dialog("close");
          }
        }
  });
  $(".title-1").click(function(){
    $(".ui-dialog-content").dialog("close");
    $("#dialog-1").dialog("open");
    $('.ui-dialog :button').blur();
  });

// Post Modal 2
  $("#dialog-2").dialog({ autoOpen: false, 
    show: {
        effect: "blind",
        duration: 1000
      },
    hide: {
        effect: "blind",
        duration: 1000
      },
    modal: true,
    width: 310,
    resizable: false,
    minHeight:"auto",
    position: { 
      my: 'center',
      at: 'center',
      of: $('.post-2')
    },
    buttons: {
          "Close": function() {
            $(this).dialog("close");
          }
        }
  });
  $(".title-2").click(function(){
    $(".ui-dialog-content").dialog("close");
    $("#dialog-2").dialog("open");
    $('.ui-dialog :button').blur();
  });

  // Post Modal 3
  $("#dialog-3").dialog({ autoOpen: false, 
    show: {
        effect: "blind",
        duration: 1000
      },
    hide: {
        effect: "blind",
        duration: 1000
      },
    modal: true,
    width: 310,
    resizable: false,
    minHeight:"auto",
    position: { 
      my: 'center',
      at: 'center',
      of: $('.post-3')
    },
    buttons: {
          "Close": function() {
            $(this).dialog("close");
          }
        }
  });
  $(".title-3").click(function(){
    $(".ui-dialog-content").dialog("close");
    $("#dialog-3").dialog("open");
    $('.ui-dialog :button').blur();
  });

  // Post Modal 4
  $("#dialog-4").dialog({ autoOpen: false, 
    show: {
        effect: "blind",
        duration: 1000
      },
    hide: {
        effect: "blind",
        duration: 1000
      },
    modal: true,
    width: 310,
    resizable: false,
    minHeight:"auto",
    position: { 
      my: 'center',
      at: 'center',
      of: $('.post-4')
    },
    buttons: {
          "Close": function() {
            $(this).dialog("close");
          }
        }
  });
  $(".title-4").click(function(){
    $(".ui-dialog-content").dialog("close");
    $("#dialog-4").dialog("open");
    $('.ui-dialog :button').blur();
  });

  // Post Modal 5
  $("#dialog-5").dialog({ autoOpen: false, 
    show: {
        effect: "blind",
        duration: 1000
      },
    hide: {
        effect: "blind",
        duration: 1000
      },
    modal: true,
    width: 310,
    resizable: false,
    minHeight:"auto",
    position: { 
      my: 'center',
      at: 'center',
      of: $('.post-5')
    },
    buttons: {
          "Close": function() {
            $(this).dialog("close");
          }
        }
  });
  $(".title-5").click(function(){
    $(".ui-dialog-content").dialog("close");
    $("#dialog-5").dialog("open");
    $('.ui-dialog :button').blur();
  });

  // Post Modal 6
  $("#dialog-6").dialog({ autoOpen: false, 
    show: {
        effect: "blind",
        duration: 1000
      },
    hide: {
        effect: "blind",
        duration: 1000
      },
    modal: true,
    width: 310,
    resizable: false,
    minHeight:"auto",
    position: { 
      my: 'center',
      at: 'center',
      of: $('.post-6')
    },
    buttons: {
          "Close": function() {
            $(this).dialog("close");
          }
        }
  });
  $(".title-6").click(function(){
    $(".ui-dialog-content").dialog("close");
    $("#dialog-6").dialog("open");
    $('.ui-dialog :button').blur();
  });

  // Post Modal 7
  $("#dialog-7").dialog({ autoOpen: false, 
    show: {
        effect: "blind",
        duration: 1000
      },
    hide: {
        effect: "blind",
        duration: 1000
      },
    modal: true,
    width: 310,
    resizable: false,
    minHeight:"auto",
    position: { 
      my: 'center',
      at: 'center',
      of: $('.post-7')
    },
    buttons: {
          "Close": function() {
            $(this).dialog("close");
          }
        }
  });
  $(".title-7").click(function(){
    $(".ui-dialog-content").dialog("close");
    $("#dialog-7").dialog("open");
    $('.ui-dialog :button').blur();
  });

  // Post Modal 8
  $("#dialog-8").dialog({ autoOpen: false, 
    show: {
        effect: "blind",
        duration: 1000
      },
    hide: {
        effect: "blind",
        duration: 1000
      },
    modal: true,
    width: 310,
    resizable: false,
    minHeight:"auto",
    position: { 
      my: 'center',
      at: 'center',
      of: $('.post-8')
    },
    buttons: {
          "Close": function() {
            $(this).dialog("close");
          }
        }
  });
  $(".title-8").click(function(){
    $(".ui-dialog-content").dialog("close");
    $("#dialog-8").dialog("open");
    $('.ui-dialog :button').blur();
  });

  // Post Modal 9
  $("#dialog-9").dialog({ autoOpen: false, 
    show: {
        effect: "blind",
        duration: 1000
      },
    hide: {
        effect: "blind",
        duration: 1000
      },
    modal: true,
    width: 310,
    resizable: false,
    minHeight:"auto",
    position: { 
      my: 'center',
      at: 'center',
      of: $('.post-9')
    },
    buttons: {
          "Close": function() {
            $(this).dialog("close");
          }
        }
  });
  $(".title-9").click(function(){
    $(".ui-dialog-content").dialog("close");
    $("#dialog-9").dialog("open");
    $('.ui-dialog :button').blur();
  });

  // Post Modal 10
  $("#dialog-10").dialog({ autoOpen: false, 
    show: {
        effect: "blind",
        duration: 1000
      },
    hide: {
        effect: "blind",
        duration: 1000
      },
    modal: true,
    width: 310,
    resizable: false,
    minHeight:"auto",
    position: { 
      my: 'center',
      at: 'center',
      of: $('.post-10')
    },
    buttons: {
          "Close": function() {
            $(this).dialog("close");
          }
        }
  });
  $(".title-10").click(function(){
    $(".ui-dialog-content").dialog("close");
    $("#dialog-10").dialog("open");
    $('.ui-dialog :button').blur();
  });

  // Post Modal 11
  $("#dialog-11").dialog({ autoOpen: false, 
    show: {
        effect: "blind",
        duration: 1000
      },
    hide: {
        effect: "blind",
        duration: 1000
      },
    modal: true,
    width: 310,
    resizable: false,
    minHeight:"auto",
    position: { 
      my: 'center',
      at: 'center',
      of: $('.post-11')
    },
    buttons: {
          "Close": function() {
            $(this).dialog("close");
          }
        }
  });
  $(".title-11").click(function(){
    $(".ui-dialog-content").dialog("close");
    $("#dialog-11").dialog("open");
    $('.ui-dialog :button').blur();
  });

  // Post Modal 12
  $("#dialog-12").dialog({ autoOpen: false, 
    show: {
        effect: "blind",
        duration: 1000
      },
    hide: {
        effect: "blind",
        duration: 1000
      },
    modal: true,
    width: 310,
    resizable: false,
    minHeight:"auto",
    position: { 
      my: 'center',
      at: 'center',
      of: $('.post-12')
    },
    buttons: {
          "Close": function() {
            $(this).dialog("close");
          }
        }
  });
  $(".title-12").click(function(){
    $(".ui-dialog-content").dialog("close");
    $("#dialog-12").dialog("open");
    $('.ui-dialog :button').blur();
  });

  // Post Modal 13
  $("#dialog-13").dialog({ autoOpen: false, 
    show: {
        effect: "blind",
        duration: 1000
      },
    hide: {
        effect: "blind",
        duration: 1000
      },
    modal: true,
    width: 310,
    resizable: false,
    minHeight:"auto",
    position: { 
      my: 'center',
      at: 'center',
      of: $('.post-13')
    },
    buttons: {
          "Close": function() {
            $(this).dialog("close");
          }
        }
  });
  $(".title-13").click(function(){
    $(".ui-dialog-content").dialog("close");
    $("#dialog-13").dialog("open");
    $('.ui-dialog :button').blur();
  });

// Post Modal 14
  $("#dialog-14").dialog({ autoOpen: false, 
    show: {
        effect: "blind",
        duration: 1000
      },
    hide: {
        effect: "blind",
        duration: 1000
      },
    modal: true,
    width: 310,
    resizable: false,
    minHeight:"auto",
    position: { 
      my: 'center',
      at: 'center',
      of: $('.post-14')
    },
    buttons: {
          "Close": function() {
            $(this).dialog("close");
          }
        }
  });
  $(".title-14").click(function(){
    $(".ui-dialog-content").dialog("close");
    $("#dialog-14").dialog("open");
    $('.ui-dialog :button').blur();
  });

  // Post Modal 15
  $("#dialog-15").dialog({ autoOpen: false, 
    show: {
        effect: "blind",
        duration: 1000
      },
    hide: {
        effect: "blind",
        duration: 1000
      },
    modal: true,
    width: 310,
    resizable: false,
    minHeight:"auto",
    position: { 
      my: 'center',
      at: 'center',
      of: $('.post-15')
    },
    buttons: {
          "Close": function() {
            $(this).dialog("close");
          }
        }
  });
  $(".title-15").click(function(){
    $(".ui-dialog-content").dialog("close");
    $("#dialog-15").dialog("open");
    $('.ui-dialog :button').blur();
  });


// Scroll To Top Button
  $('.icon-up-open-big').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  
});