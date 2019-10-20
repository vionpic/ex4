$(document).ready(function(){
    $.get("http://demo6370041.mockable.io/getcourses", function(data, status){
        data=data.data;
        $("#data").html('<tr><th class="group01" >iD</th><th class="group02">Name</th></tr>');
        $("#data01").html('<tr><td class="group01">'+data[0].id+'</td><td class="group02">'+data[0].name+'</td></tr>');
        $("#data02").html('<tr><td class="group01">'+data[1].id+'</td><td class="group02">'+data[1].name+'</td></tr>');
        $("#data03").html('<tr><td class="group01">'+data[2].id+'</td><td class="group02">'+data[2].name+'</td></tr>');
        $("#data04").html('<tr><td class="group01">'+data[3].id+'</td><td class="group02">'+data[3].name+'</td></tr>');
    });
        $("li.pageli01").addClass("active");
        $("#data01").click(function(){
            $.get("http://demo6370041.mockable.io/course/1", function(data, status){
                $("#decription01").html('<tr><td class="decription">'+data.description+'</td></tr>');
            });
            $("#decription01").show();
            $("#decription02").hide();
            $("#decription03").hide();
            $("#decription04").hide();
        });
        $("#data02").click(function(){
            $.get("http://demo6370041.mockable.io/course/2", function(data, status){
                $("#decription02").html('<tr><td class="decription">'+data.description+'</td></tr>');
            });
            $("#decription01").hide();
            $("#decription02").show();
            $("#decription03").hide();
            $("#decription04").hide();
        });
        $("#data03").click(function(){
            $.get("http://demo6370041.mockable.io/course/3", function(data, status){
                $("#decription03").html('<tr><td class="decription">'+data.description+'</td></tr>');
            });
            $("#decription01").hide();
            $("#decription02").hide();
            $("#decription03").show();
            $("#decription04").hide();
        });
        $("#data04").click(function(){
            $.get("http://demo6370041.mockable.io/course/4", function(data, status){
                $("#decription04").html('<tr><td class="decription">'+data.description+'</td></tr>');
            });
            $("#decription01").hide();
            $("#decription03").hide();
            $("#decription02").hide();
            $("#decription04").show();
        });
});

$("a.previous").click(function(){
    $.get("http://demo6370041.mockable.io/getcourses", function(data, status){
        data=data.data;
        $("#data").html('<tr><th class="group01" >iD</th><th class="group02">Name</th></tr>');
        $("#data01").html('<tr><td class="group01">'+data[0].id+'</td><td class="group02">'+data[0].name+'</td></tr>');
        $("#data02").html('<tr><td class="group01">'+data[1].id+'</td><td class="group02">'+data[1].name+'</td></tr>');
        $("#data03").html('<tr><td class="group01">'+data[2].id+'</td><td class="group02">'+data[2].name+'</td></tr>');
        $("#data04").html('<tr><td class="group01">'+data[3].id+'</td><td class="group02">'+data[3].name+'</td></tr>');
    });
    $("li.pageli01").addClass("active");
    $("li.pageli02").removeClass("active");
        $("#data01").click(function(){
            $.get("http://demo6370041.mockable.io/course/1", function(data, status){
                $("#decription01").html('<tr><td class="decription">'+data.description+'</td></tr>');
            });
            $("#decription01").show();
            $("#decription02").hide();
            $("#decription03").hide();
            $("#decription04").hide();
        });
        $("#data02").click(function(){
            $.get("http://demo6370041.mockable.io/course/2", function(data, status){
                $("#decription02").html('<tr><td class="decription">'+data.description+'</td></tr>');
            });
            $("#decription01").hide();
            $("#decription02").show();
            $("#decription03").hide();
            $("#decription04").hide();
        });
        $("#data03").click(function(){
            $.get("http://demo6370041.mockable.io/course/3", function(data, status){
                $("#decription03").html('<tr><td class="decription">'+data.description+'</td></tr>');
            });
            $("#decription01").hide();
            $("#decription02").hide();
            $("#decription03").show();
            $("#decription04").hide();
        });
        $("#data04").click(function(){
            $.get("http://demo6370041.mockable.io/course/4", function(data, status){
                $("#decription04").html('<tr><td class="decription">'+data.description+'</td></tr>');
            });
            $("#decription01").hide();
            $("#decription03").hide();
            $("#decription02").hide();
            $("#decription04").show();
        });
        $("#decription01").hide();
        $("#decription02").hide();
        $("#decription03").hide();
        $("#decription04").hide();
});
$("a.page01").click(function(){
      $.get("http://demo6370041.mockable.io/getcourses", function(data, status){
        data=data.data;
        $("#data").html('<tr><th class="group01" >iD</th><th class="group02">Name</th></tr>');
        $("#data01").html('<tr><td class="group01">'+data[0].id+'</td><td class="group02">'+data[0].name+'</td></tr>');
        $("#data02").html('<tr><td class="group01">'+data[1].id+'</td><td class="group02">'+data[1].name+'</td></tr>');
        $("#data03").html('<tr><td class="group01">'+data[2].id+'</td><td class="group02">'+data[2].name+'</td></tr>');
        $("#data04").html('<tr><td class="group01">'+data[3].id+'</td><td class="group02">'+data[3].name+'</td></tr>');
    });
    $("li.pageli01").addClass("active");
    $("li.pageli02").removeClass("active");
        $("#data01").click(function(){
            $.get("http://demo6370041.mockable.io/course/1", function(data, status){
                $("#decription01").html('<tr><td class="decription">'+data.description+'</td></tr>');
            });
            $("#decription01").show();
            $("#decription02").hide();
            $("#decription03").hide();
            $("#decription04").hide();
        });
        $("#data02").click(function(){
            $.get("http://demo6370041.mockable.io/course/2", function(data, status){
                $("#decription02").html('<tr><td class="decription">'+data.description+'</td></tr>');
            });
            $("#decription01").hide();
            $("#decription02").show();
            $("#decription03").hide();
            $("#decription04").hide();
        });
        $("#data03").click(function(){
            $.get("http://demo6370041.mockable.io/course/3", function(data, status){
                $("#decription03").html('<tr><td class="decription">'+data.description+'</td></tr>');
            });
            $("#decription01").hide();
            $("#decription02").hide();
            $("#decription03").show();
            $("#decription04").hide();
        });
        $("#data04").click(function(){
            $.get("http://demo6370041.mockable.io/course/4", function(data, status){
                $("#decription04").html('<tr><td class="decription">'+data.description+'</td></tr>');
            });
            $("#decription01").hide();
            $("#decription03").hide();
            $("#decription02").hide();
            $("#decription04").show();
        });
        $("#decription01").hide();
        $("#decription02").hide();
        $("#decription03").hide();
        $("#decription04").hide();
});
$("a.page02").click(function(){
    $.get("http://demo6370041.mockable.io/getcourses", function(data, status){
      data=data.data;
      $("#data").html('<tr><th class="group01" >iD</th><th class="group02">Name</th></tr>');
      $("#data01").html('<tr><td class="group01">'+data[4].id+'</td><td class="group02">'+data[4].name+'</td></tr>');
      $("#data02").html('<tr><td class="group01">'+data[5].id+'</td><td class="group02">'+data[5].name+'</td></tr>');
      $("#data03").html('<tr><td class="group01">'+data[6].id+'</td><td class="group02">'+data[6].name+'</td></tr>');
      $("#data04").html('<tr><td class="group01">'+data[7].id+'</td><td class="group02">'+data[7].name+'</td></tr>');
  });
  $("li.pageli02").addClass("active");
  $("li.pageli01").removeClass("active");
        $("#data01").click(function(){
            $.get("http://demo6370041.mockable.io/course/5", function(data, status){
                $("#decription01").html('<tr><td class="decription">'+data.description+'</td></tr>');
            });
            $("#decription01").show();
            $("#decription02").hide();
            $("#decription03").hide();
            $("#decription04").hide();
        });
        $("#data02").click(function(){
            $.get("http://demo6370041.mockable.io/course/6", function(data, status){
                $("#decription02").html('<tr><td class="decription">'+data.description+'</td></tr>');
            });
            $("#decription01").hide();
            $("#decription02").show();
            $("#decription03").hide();
            $("#decription04").hide();
        });
        $("#data03").click(function(){
            $.get("http://demo6370041.mockable.io/course/7", function(data, status){
                $("#decription03").html('<tr><td class="decription">'+data.description+'</td></tr>');
            });
            $("#decription01").hide();
            $("#decription02").hide();
            $("#decription03").show();
            $("#decription04").hide();
        });
        $("#data04").click(function(){
            $.get("http://demo6370041.mockable.io/course/8", function(data, status){
                $("#decription04").html('<tr><td class="decription">'+data.description+'</td></tr>');
            });
            $("#decription01").hide();
            $("#decription03").hide();
            $("#decription02").hide();
            $("#decription04").show();
        });
        $("#decription01").hide();
        $("#decription02").hide();
        $("#decription03").hide();
        $("#decription04").hide();
});


$("a.nextleave").click(function(){
    $.get("http://demo6370041.mockable.io/getcourses", function(data, status){
        data=data.data;
        $("#data").html('<tr><th class="group01" >iD</th><th class="group02">Name</th></tr>');
        $("#data01").html('<tr><td class="group01">'+data[4].id+'</td><td class="group02">'+data[4].name+'</td></tr>');
        $("#data02").html('<tr><td class="group01">'+data[5].id+'</td><td class="group02">'+data[5].name+'</td></tr>');
        $("#data03").html('<tr><td class="group01">'+data[6].id+'</td><td class="group02">'+data[6].name+'</td></tr>');
        $("#data04").html('<tr><td class="group01">'+data[7].id+'</td><td class="group02">'+data[7].name+'</td></tr>');
    });
    $("li.pageli02").addClass("active");
    $("li.pageli01").removeClass("active");
          $("#data01").click(function(){
              $.get("http://demo6370041.mockable.io/course/5", function(data, status){
                  $("#decription01").html('<tr><td class="decription">'+data.description+'</td></tr>');
              });
              $("#decription01").show();
              $("#decription02").hide();
              $("#decription03").hide();
              $("#decription04").hide();
          });
          $("#data02").click(function(){
              $.get("http://demo6370041.mockable.io/course/6", function(data, status){
                  $("#decription02").html('<tr><td class="decription">'+data.description+'</td></tr>');
              });
              $("#decription01").hide();
              $("#decription02").show();
              $("#decription03").hide();
              $("#decription04").hide();
          });
          $("#data03").click(function(){
              $.get("http://demo6370041.mockable.io/course/7", function(data, status){
                  $("#decription03").html('<tr><td class="decription">'+data.description+'</td></tr>');
              });
              $("#decription01").hide();
              $("#decription02").hide();
              $("#decription03").show();
              $("#decription04").hide();
          });
          $("#data04").click(function(){
              $.get("http://demo6370041.mockable.io/course/8", function(data, status){
                  $("#decription04").html('<tr><td class="decription">'+data.description+'</td></tr>');
              });
              $("#decription01").hide();
              $("#decription03").hide();
              $("#decription02").hide();
              $("#decription04").show();
          });
          $("#decription01").hide();
          $("#decription02").hide();
          $("#decription03").hide();
          $("#decription04").hide();
});
