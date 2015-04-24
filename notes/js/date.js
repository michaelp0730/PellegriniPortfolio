$(document).ready(function() {

    'use strict';

    var date    = new Date(),
        year    = date.getFullYear();

    year === 2013 ? $('#year').text('2013') : $('#year').text('2013 - ' + year);

});
