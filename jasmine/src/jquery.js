$( document ).ready(function(){
  therm = new Thermostat();
  $( '#temperature' ).html(therm.temperature);
  $( '#energyuse' ).html(therm.energyUse());
  $( '#PowerSaverOn' ).change( function () {
    therm.switchOn();
    $( '#PowerSaverController' ).html("<input type='range' min='10' max='25' value='20' class='slider'>");
  });
  $( '#PowerSaverOff' ).change( function () {
    therm.switchOff();
    $( '#PowerSaverController' ).html("<input type='range' min='10' max='32' value='20' class='slider'>");
  });
  $( '.slider').click( function(){
    therm.temperature = $(".slider").val();
    $( '#temperature' ).html(therm.temperature);
    $( '#energyuse').html(therm.energyUse());
  });
  $( '#PowerSaverController' ).change( function () {
    $( '.slider').click( function(){
      therm.temperature = $(".slider").val();
      $( '#temperature' ).html(therm.temperature);
      $( '#energyuse').html(therm.energyUse());
    });
  });
  $( '#reset' ).click( function() {
    therm.resetTemperature();
    $( '#temperature' ).html(therm.temperature);
    $( '#energyuse').html(therm.energyUse());
  });



});
