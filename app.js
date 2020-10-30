var apiKey = 'ca398e759895dcc24e3a1b9a43315752';
var msg = document.getElementById('msg')

function getData()
{
    var input = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${apiKey}`
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        document.getElementById('p1').innerHTML = "temp:"+data.main.temp;
        document.getElementById('p2').innerHTML = "City:"+data.name;
        var icon = "https://api.openweathermap.org/img/w/"+data.weather[0].icon+".png"
        document.getElementById('icon').src = icon;
    })
    .catch(()=>{
        msg.textContent="please search for a valid city"
    })
}