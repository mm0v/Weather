"use strict";

$(document).ready(function () {
    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${$('#myWeather').val()}&appid=fed35d00aceba09ad5ed047e14a4d286&units=metric`
            async function myweather() {
                let response = await fetch(url);
                let data = await response.json();
                $('#city').html(data.name);
                $('#temp').html(data.main.temp);
                $('#feels').html(data.main.feels_like);
                $('#myWeather').val('');
                console.log(data);
            }
            myweather();
        };
    });


    $('#btn').click(function (e) {
        e.preventDefault();
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${$('#myWeather').val()}&appid=fed35d00aceba09ad5ed047e14a4d286&units=metric`
        async function myweather() {
            let response = await fetch(url);
            let data = await response.json();
            $('#city').html(data.name);
            $('#temp').html(data.main.temp);
            $('#feels').html(data.main.feels_like);
            $('#myWeather').val('');
            console.log(data);
        };
        myweather();
    });

});


// $(document).ready(function () {
//     $(document).on('keypress', function (e) {
//         if (e.which == 13) {
//             let url = `https://api.openweathermap.org/data/2.5/weather?q=${$("#myweather").val()}&APPID=07f2ff58f276f6c76273c618311f64ab&units=metric`
//             async function myweather() {
//                 let responce = await fetch(url)
//                 let data = await responce.json()
//                 $("#city").html(data.name);
//                 $("#temp").html(data.main.temp);
//                 $("#feels").html(data.main.feels_like);
//                 $("#myweather").val("");
//                 console.log(data);
//             }
//             myweather()
//         }
//     });

//     $("#btn").click(function (e) {
//         e.preventDefault();
//         let url = `https://api.openweathermap.org/data/2.5/weather?q=${$("#myweather").val()}&APPID=07f2ff58f276f6c76273c618311f64ab&units=metric`
//         async function myweather() {
//             let responce = await fetch(url)
//             let data = await responce.json()
//             $("#city").html(data.name);
//             $("#temp").html(data.main.temp);
//             $("#feels").html(data.main.feels_like);
//             $("#myweather").val("");
//             console.log(data);
//         }
//         myweather()
//     });

// });