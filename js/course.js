$(document).ready(function(){
    $.get("http://demo6370041.mockable.io/getcourses", function(data, status){
        data=data.data;
        $("#data").html('<tr><th class="group01" >iD</th><th class="group02">Name</th></tr>');
        $("#data01").html('<tr><td class="group01">'+data[0].id+'</td><td class="group02">'+data[0].name+'</td></tr>');
        $("#data02").html('<tr><td class="group01">'+data[1].id+'</td><td class="group02">'+data[1].name+'</td></tr>');
        $("#data03").html('<tr><td class="group01">'+data[2].id+'</td><td class="group02">'+data[2].name+'</td></tr>');
        $("#data04").html('<tr><td class="group01">'+data[3].id+'</td><td class="group02">'+data[3].name+'</td></tr>');
    });
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
});