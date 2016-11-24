$(document).ready(function(){
  $geocode = 0;
  $lng=0;
  $lat=0;
  $area=0;
  $cost=0;
  $('#open_address').click(function(){
    $('#first_question').fadeOut(function(){
      $('#second_question').fadeIn();
    });
  });

  $('#back').click(function(){
    $('#second_question').fadeOut(function(){
      $('#first_question').fadeIn();
    });
  });

  $('#fetch_corrdinate').click(function(){
   $address = $('#full_address').val();
   $address = $address.split(" ").join("+");
   //alert($address);
   $.post("https://maps.googleapis.com/maps/api/geocode/json?address="+$address+"&key=AIzaSyCfEsQEi0ggRfdPj9Xah5Ou87jBUUxMX7U", $address, function(data, status){
        //alert("Data: " + data + "\nStatus: " + status);
        $geocode=data;
    });
    $('#fetch_corrdinate').fadeOut(function(){
      $('#result_long').append($geocode['results'][0]['geometry']['location']['lng']);
      $lng=$geocode['results'][0]['geometry']['location']['lng'];
      $('#result_lat').append($geocode['results'][0]['geometry']['location']['lat']);
      $lat=$geocode['results'][0]['geometry']['location']['lat'];
      $("#fetched_coordinate").fadeIn();
    });
  });

  $('#open_crd').click(function(){
    $('#first_question').fadeOut(function(){
      $('#third_question').fadeIn();
    });
  });

  $("#select_address2").click(function(){
    //alert();
    $("#location_panel").fadeOut(function(){
      $("#rooftop_area").fadeIn();
    });
  });

  $("#enter_long").change(function(){
    $lng=parseFloat($('#enter_long').val());
    $lat=parseFloat($('#enter_lat').val());
  });

  $("#enter_lat").change(function(){
    $lng=parseFloat($('#enter_long').val());
    $lat=parseFloat($('#enter_lat').val());
  });

  $("#select_address").click(function(){
    //alert();
    $("#location_panel").fadeOut(function(){
      $("#rooftop_area").fadeIn();
    });
  });

  $("#selected_area").change(function(){
    $area=parseFloat($('#selected_area').val());
  });

  $("#select_area").click(function(){
    //alert();
    $("#rooftop_area").fadeOut(function(){
      $("#electicity_cost").fadeIn();
    });
  });

  $("#selected_cost").change(function(){
    $cost=parseFloat($('#selected_cost').val());
  });

  $("#Final").click(function(){
    var lng = $lng;
    var lat = $lat;
    $.post("php/geocode.php",
        {lng,lat},
        function(data,status){
          //alert(data);

      $average=15.5;
      $ss=$area/100;
      $ag=$average;
      $saving=1367*$cost;
      $sc=$ss*65000;
      $roi=$saving/$sc;
          document.getElementById("#near").innerHTML="<ul><li>Average Generation = "+$average+"</li><li>System Size = "+$ss+"</li><li>Total System Cost = "+$sc+"</li><li>Total Saving = "+$saving+"</li></ul>";
        });
  });

});
