$(function(){

  var $metro_card_calculator = $('#metro_card_calculator'),
      $remaining_amount = $('#remaining_amount'),
      $number_of_rides = $('#number_of_rides'),
      $result = $('#result'),
      $rides = $('#rides'),
      cost_of_single_ride = 2.75;
  
  $metro_card_calculator.submit(function (event) {
    event.preventDefault();

    var remaining_amount = parseFloat($remaining_amount.val()),
        number_of_rides = parseInt($number_of_rides.val()),
        amount_to_add = (cost_of_single_ride * number_of_rides) - remaining_amount;

    $result.text(amount_to_add);
    $rides.text(number_of_rides);
  });
});