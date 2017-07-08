var secondes = 2;

$('document').ready(function(){
  $('#commencer').click(function(){

    $('#pari').css({'visibility': 'visible', 'opacity': '1'});

    var chrono = setInterval(function(){
      if (secondes === 0){
        clearInterval(chrono);
        $('.reponse').html("PERDU !");
        $('#pari').css({'visibility': 'hidden', 'opacity': '0'});

      }
      else {
        secondes--;
        $('.chrono').html(secondes);
      }
    }, 1000);
  });
});
