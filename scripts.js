$( document ).ready(function() {

    console.log( "ready!" );

    const APIKey = "eb1ae0ed6b4f10b87612d7b544d30b97";

    $("#submit").on("click", function() {
        //get the input value
        const cityName = $("#search").val();
        //use the imput value to search weather
        var settings = {
            "url": `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`,
            "method": "GET"
          };
          
          $.ajax(settings).done(function (res) {
            console.log(res);

            const template = `
                <div>
                    <h1>${res.name}</h1>
                    <p>Temp: ${res.main.temp}</p>
                    <p>Humidity: ${res.main.humidity}</p>
                    <p>Wind: ${res.wind.speed}</p>
                </div>
            `;

            $("#weather").html(template);
          });
    });
});


