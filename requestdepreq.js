function httpGetAsync(lookup_station,callback) {
    var Http = new XMLHttpRequest
    var national_rail_api_key = '55f26e55-359a-4e6f-aa6c-f0d5e9e1ee19'
    
    url = "https://api.departureboard.io/api/v2.0/getDeparturesByCRS/" + lookup_station + "/?apiKey=" + national_rail_api_key
    
    Http.open('GET', url)

    Http.send(null)

    Http.onreadystatechange = processRequest;

    

    function processRequest(e) {
        if (Http.readyState == 4) {
            
            var response = Http.responseText

            // Process the JSON returned:

            

            console.log(response)


        }
    }
}
