// vanilla method
window.onload = function() { // fires when the window loads
    // make a new XML HTTP request object
    var http = new XMLHttpRequest(); // this object allows us to get data from the server
    
    http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 200) { // check if the state is available
            console.log(http.response);
        }
    };

    // open method - sets up the request (GET/POST), url, asychronous/syncronous
    http.open("GET", "tweets.json", true); // true -> asynchronous
    // sends the request to the server
    http.send();

}
// jQuery method


/* READY SATES

0 - request not initialized
1 - request has been set up
2 - request has been sent
3 - request is in process
4 - request is complete

*/