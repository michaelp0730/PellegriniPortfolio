// weather.js

$(document).ready(function() {
    'use strict';

    $('#zipForm').submit(function() {

        var now = new Date(),
            now = now.getHours(),

            zipcode = $('#zip').val(),
            zipLength = zipcode.length,
            validZip = '',

            // regular expression to check for non-numeric characters
            check1 = zipcode.match(/[^0-9]/);

        if (check1 !== null) {
            $('#error').css({'visibility': 'visible'});
            $('#title').text('Location');
            $('#currentTemp').text('');
        }

        if (check1 === null && zipLength === 5) {
            $('#error').css({'visibility': 'hidden'});
            validZip = zipcode;

            $.ajax({

                url: "http://api.wunderground.com/api/0dce1cb4a645d4af/geolookup/conditions/q/" + validZip + ".json",
                dataType: "jsonp",
                success: function(parsed_json) {
                    var city = parsed_json['location']['city'];
                    var state = parsed_json['location']['state'];
                    var temp_f = parsed_json['current_observation']['temp_f'];
                    var conditions = parsed_json['current_observation']['weather'];

                    $('#title').text(city + ', ' + state);
                    $('#currentTemp').text(temp_f + ' degrees');
                    $('#conditions').text(conditions);

                    switch (conditions) {

                        case 'Clear':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_clear.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_sunny.gif');
                            }
                            break;

                        case 'Overcast':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_cloudy.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_cloudy.gif');
                            }
                            break;

                        case 'Partly Cloudy':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_cloudy.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_mostly_sunny.gif');
                            }
                            break;

                        case 'Mostly Cloudy':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_cloudy.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_cloudy.gif');
                            }
                            break;

                        case 'Scattered Clouds':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_clear.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_mostly_sunny.gif');
                            }
                            break;

                        case 'Funnel Cloud':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_cloudy.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_cloudy.gif');
                            }
                            break;

                        case 'Small Hail':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_showers.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_freezing_rain.gif');
                            }
                            break;

                        case 'Squals':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_thunder_storms.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_thunder_showers.gif');
                            }
                            break;

                        case 'Unknown Precipitation':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_showers.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_rainy.gif');
                            }
                            break;

                        case 'Light Fog':
                            $('#icon').attr('src', 'img/fog.gif');
                            break;

                        case 'Heavy Fog':
                            $('#icon').attr('src', 'img/fog.gif');
                            break;

                        case 'Light Fog Patches':
                            $('#icon').attr('src', 'img/fog.gif');
                            break;

                        case 'Heavy Fog Patches':
                            $('#icon').attr('src', 'img/fog.gif');
                            break;

                        case 'Patches of Fog':
                            $('#icon').attr('src', 'img/fog.gif');
                            break;

                        case 'Shallow Fog':
                            $('#icon').attr('src', 'img/fog.gif');
                            break;

                        case 'Partial Fog':
                            $('#icon').attr('src', 'img/fog.gif');
                            break;

                        case 'Light Spray':
                            $('#icon').attr('src', 'img/fog.gif');
                            break;

                        case 'Light Mist':
                            $('#icon').attr('src', 'img/fog.gif');
                            break;

                        case 'Heavy Mist':
                            $('#icon').attr('src', 'img/fog.gif');
                            break;

                        case 'Light Freezing Fog':
                            $('#icon').attr('src', 'img/fog.gif');
                            break;

                        case 'Heavy Freezing Fog':
                            $('#icon').attr('src', 'img/fog.gif');
                            break;

                        case 'Heavy Spray':
                            $('#icon').attr('src', 'img/fog.gif');
                            break;

                        case 'Light Drizzle':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_showers.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_cloudy_drizzle.gif');
                            }
                            break;

                        case 'Heavy Drizzle':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_showers.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_cloudy_drizzle.gif');
                            }
                            break;

                        case 'Light Rain':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_showers.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_rainy.gif');
                            }
                            break;

                        case 'Heavy Rain':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_showers.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_rainy.gif');
                            }
                            break;

                        case 'Light Rain Showers':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_showers.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_rainy.gif');
                            }
                            break;

                        case 'Heavy Rain Showers':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_showers.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_rainy.gif');
                            }
                            break;

                        case 'Light Rain Mist':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_cloudy.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_few_showers.gif');
                            }
                            break;

                        case 'Heavy Rain Mist':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_showers.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_few_showers.gif');
                            }
                            break;

                        case 'Light Snow':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_snow.gif');
                            }
                            break;

                        case 'Heavy Snow':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_snow.gif');
                            }
                            break;

                        case 'Light Low Drifting Snow':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_snow.gif');
                            }
                            break;

                        case 'Heavy Low Drifting Snow':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_snow.gif');
                            }
                            break;

                        case 'Light Blowing Snow':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_snow.gif');
                            }
                            break;

                        case 'Heavy Blowing Snow':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_snow.gif');
                            }
                            break;

                        case 'Light Snow Showers':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_flurries.gif');
                            }
                            break;

                        case 'Heavy Snow Showers':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_snow.gif');
                            }
                            break;

                        case 'Light Snow Blowing Snow Mist':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_flurries.gif');
                            }
                            break;

                        case 'Heavy Snow Blowing Snow Mist':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_flurries.gif');
                            }
                            break;

                        case 'Light Snow Grains':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_wet_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_flurries.gif');
                            }
                            break;

                        case 'Heavy Snow Grains':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_wet_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_flurries.gif');
                            }
                            break;

                        case 'Light Ice Crystals':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_freezing_rain.gif');
                            }
                            break;

                        case 'Heavy Ice Crystals':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_freezing_rain.gif');
                            }
                            break;

                        case 'Light Ice Pellets':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_freezing_rain.gif');
                            }
                            break;

                        case 'Heavy Ice Pellets':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_freezing_rain.gif');
                            }
                            break;

                        case 'Light Ice Pellet Showers':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_freezing_rain.gif');
                            }
                            break;

                        case 'Heavy Ice Pellet Showers':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_freezing_rain.gif');
                            }
                            break;

                        case 'Light Hail':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_freezing_rain.gif');
                            }
                            break;

                        case 'Heavy Hail':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_freezing_rain.gif');
                            }
                            break;

                        case 'Light Hail Showers':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_freezing_rain.gif');
                            }
                            break;

                        case 'Heavy Hail Showers':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_freezing_rain.gif');
                            }
                            break;

                        case 'Light Small Hail Showers':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_freezing_rain.gif');
                            }
                            break;

                        case 'Heavy Small Hail Showers':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_freezing_rain.gif');
                            }
                            break;

                        case 'Light Freezing Drizzle':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_freezing_rain.gif');
                            }
                            break;

                        case 'Heavy Freezing Drizzle':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_freezing_rain.gif');
                            }
                            break;

                        case 'Light Freezing Rain':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_freezing_rain.gif');
                            }
                            break;

                        case 'Heavy Freezing Rain':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_flurries.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_freezing_rain.gif');
                            }
                            break;

                        case 'Light Thunderstorm':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_thunder_storms.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_thunder_storms.gif');
                            }
                            break;

                        case 'Heavy Thunderstorm':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_thunder_storms.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_thunder_storms.gif');
                            }
                            break;

                        case 'Light Thunderstorms and Rain':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_thunder_storms.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_thunder_showers.gif');
                            }
                            break;

                        case 'Heavy Thunderstorms and Rain':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_thunder_storms.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_thunder_showers.gif');
                            }
                            break;

                        case 'Light Thunderstorms and Snow':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_thunder_storms.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_thunder_showers.gif');
                            }
                            break;

                        case 'Heavy Thunderstorms and Snow':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_thunder_storms.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_thunder_showers.gif');
                            }
                            break;

                        case 'Light Thunderstorms and Ice Pellets':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_thunder_storms.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_thunder_showers.gif');
                            }
                            break;

                        case 'Heavy Thunderstorms and Ice Pellets':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_thunder_storms.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_thunder_showers.gif');
                            }
                            break;

                        case 'Light Thunderstorms with Hail':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_thunder_storms.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_thunder_showers.gif');
                            }
                            break;

                        case 'Heavy Thunderstorms with Hail':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_thunder_storms.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_thunder_showers.gif');
                            }
                            break;

                        case 'Light Thunderstorms with Small Hail':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_thunder_storms.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_thunder_showers.gif');
                            }
                            break;

                        case 'Heavy Thunderstorms with Small Hail':
                            if (now <= 6 || now >= 18) {
                                $('#icon').attr('src', 'img/night_thunder_storms.gif');
                            } else {
                                $('#icon').attr('src', 'img/day_thunder_showers.gif');
                            }
                            break;

                        default:
                            $('#icon').attr('src', '');
                    }
                }

            });
        }

        return false;
    });





});