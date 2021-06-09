$( document ).ready(function() {

    console.log( "ready!" );

    const APIKey = "eb1ae0ed6b4f10b87612d7b544d30b97";

    $("#submit").on("click", function() {
        //get the input value
        const cityName = $("#search").val();
        //use the imput value to search weather
        var settings = {
            "url": `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=imperial`,
            "method": "GET"
          };
          
          $.ajax(settings).done(function (res) {
            console.log(res);

            const template = `
                <div class="card">
                    <div class="card-body">
                        <h1 class="card-title">${res.name}</h1>
                        <p class="card-title">Date: ${new Date().toLocaleDateString()}</p>
                        <p class="card-title">Temp: ${res.main.temp}</p>
                        <p class="card-title">feels Like: ${res.main.temp}</p>
                        <p class="card-title">Humidity: ${res.main.humidity}</p>
                        <p class="card-title">Wind: ${res.wind.speed}</p>
                    </div>
                </div>
            `;

            $("#weather").html(template);
          });
    });
});


