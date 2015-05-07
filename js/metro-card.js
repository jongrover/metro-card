$(function(){

  var $metro_card_calculator = $('#metro_card_calculator'),
      $remaining_amount = $('#remaining_amount'),
      $number_of_rides = $('#number_of_rides'),
      $result = $('#result'),
      $more_rides = $('#more_rides'),
      $rides_remaining = $('#rides_remaining'),
      $balance_remaining = $('#balance_remaining'),
      cost_per_single_ride = 2.75;
  
  $metro_card_calculator.submit(function (event) {
    event.preventDefault();

    var remaining_amount = parseFloat($remaining_amount.val()),
        number_of_rides = parseInt($number_of_rides.val()),
        rides_left = remaining_amount / cost_per_single_ride,
        left_over = remaining_amount % cost_per_single_ride,
        amount_to_add = (cost_per_single_ride * number_of_rides) - remaining_amount;

    $rides_remaining.text(Math.round(rides_left));
    $balance_remaining.text(accounting.formatMoney(left_over));
    $result.text(accounting.formatMoney(amount_to_add));
    $more_rides.text(number_of_rides);
  });
});