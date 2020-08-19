$(document).ready( function() {
    $('ul.price__tabs').on('click', 'li:not(.price__tab_active)', function() {
        $(this)
            .addClass('price__tab_active').siblings().removeClass('price__tab_active');
    });
   
    $('.price__tab').on('click', function() {
        $year = $('.price-year');
        $month = $('.price-month');
        var activeTabId = $(this)[0].getAttribute('data-id');

        switch(activeTabId) {
          case '0':
            $year.show();
            $month.hide();
            break;
          case '1':
            $year.hide();
            $month.show();
            break;
          default:
            console.error('Err');
        }
        return activeTabId;
    });

});