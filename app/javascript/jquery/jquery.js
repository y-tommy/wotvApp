function damage(){
  var atk = $("field1").val();
  var pow = $("field2").val();
  var res = $("field3").val();
  var def = $("field4").val();
  var total = atk*pow;
  $('field_total').val('total');
};