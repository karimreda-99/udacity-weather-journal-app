/* Global Variables */
const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "160c6b6464f503eff13917561b87654a&units=imperial";
const localServer = "http://localhost:8000/";

document.getElementById("generate").addEventListener("click", () => performAction());
async function performAction(e) {
    let zip = document.getElementById("zip").value;
    let fetchURL = `${apiURL}${zip}&appid=${apiKey}`;
    await fetch(fetchURL).then((res) => {
        return res.json();
    }).then((r) => {
        postData(r.main.temp);
    });
}
// I will get required data
async function getData() {
    await fetch(localServer + 'sendAll').then((res) => {
        return res.json();
    }).then((r) => {
        document.getElementById("temp").innerHTML = r.temp;
        document.getElementById("date").innerHTML = r.date;
        document.getElementById("content").innerHTML = `I Feel: ${r.content}`;
    });
}

// I will post required data
async function postData(temp) {
    let d = new Date();
    let detectedDate = d.getMonth()+ 1 + '.' + d.getDate() + '.' + d.getFullYear();
    let feelings = document.getElementById("feelings").value;
    let newEntry = {
        temp: temp,
        date: detectedDate,
        content: feelings,
    };
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEntry),
    };
    await fetch(localServer + 'sendAll', options).then((res) => {
        return res.json();
    }).then((r) => {
        getData(newEntry);
    });
}