window.onload=function(){
    let message = document.getElementById('result');

    let countryBtn = document.getElementById('lookup');
    countryBtn.addEventListener('click',function(action){
        action.preventDefault();
        let countryReq = document.getElementById("country").value;
        fetch("http://localhost/info2180-lab5/world.php" + "?country=" + countryReq)
        .then(response =>{
            if (response.ok){
                return response.text()
            }else{
                return Promise.reject("There was an issue with the request.")
            }
        })
        .then(data => {
            message.innerHTML = data;
        })
        .catch(error => console.log("Error: " + error));
    });

    let cityBtn = document.getElementById('lookupCity');
    cityBtn.addEventListener('click',function(action){
        action.preventDefault();
        let cityReq = document.getElementById("country").value;
        fetch("http://localhost/info2180-lab5/world.php" + "?country=" + cityReq + "&context=cities")
        .then(response =>{
            if (response.ok){
                return response.text()
            } else{
                return Promise.reject("There was issue with the request.")
            }
        })
        .then(data => {
            message.innerHTML = data;
        })
        .catch(error => console.log("Error: " + error));
    });
}