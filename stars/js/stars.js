$(document).ready(function() {
    'use strict';

    $('#one').delegate('img', 'click', function() {
        $(this).attr('src', 'img/star_highlight.png');
        $('#two img').attr('src', 'img/star_empty.png');
        $('#three img').attr('src', 'img/star_empty.png');
        $('#four img').attr('src', 'img/star_empty.png');
        $('#five img').attr('src', 'img/star_empty.png');
        $('#starsNum').text('One star');
    });

    $('#two').delegate('img', 'click', function() {
        $('#one img').attr('src', 'img/star_highlight.png');
        $(this).attr('src', 'img/star_highlight.png');
        $('#three img').attr('src', 'img/star_empty.png');
        $('#four img').attr('src', 'img/star_empty.png');
        $('#five img').attr('src', 'img/star_empty.png');
        $('#starsNum').text('Two stars');
    });

    $('#three').delegate('img', 'click', function() {
        $('#one img').attr('src', 'img/star_highlight.png');
        $('#two img').attr('src', 'img/star_highlight.png');
        $(this).attr('src', 'img/star_highlight.png');
        $('#four img').attr('src', 'img/star_empty.png');
        $('#five img').attr('src', 'img/star_empty.png');
        $('#starsNum').text('Three stars');
    });

    $('#four').delegate('img', 'click', function() {
        $('#one img').attr('src', 'img/star_highlight.png');
        $('#two img').attr('src', 'img/star_highlight.png');
        $('#three img').attr('src', 'img/star_highlight.png');
        $(this).attr('src', 'img/star_highlight.png');
        $('#five img').attr('src', 'img/star_empty.png');
        $('#starsNum').text('Four stars');
    });

    $('#five').delegate('img', 'click', function() {
        $('#one img').attr('src', 'img/star_highlight.png');
        $('#two img').attr('src', 'img/star_highlight.png');
        $('#three img').attr('src', 'img/star_highlight.png');
        $('#four img').attr('src', 'img/star_highlight.png');
        $(this).attr('src', 'img/star_highlight.png');
        $('#starsNum').text('Five stars');
    });
});