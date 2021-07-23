window.onload = () => {
    init()
    removeLoader()
}

function init() {
    checkPreviouslySavedObjects()

    displayData(
        document.getElementsByName("vaccine")[0].value,
        document.getElementsByName("district")[0].value
    )
}

function checkPreviouslySavedObjects() {
    if (localStorage.getItem("faisalTime") == null) {
        console.log("INIT")
        getHospitalsFromAPI("141")
    } else {
        let then = new Date(localStorage.getItem("faisalTime"))
        let now = new Date()
        if ((now - then) / 1000 > (5 * 60)) {
            console.log("REFRESH")
            getHospitalsFromAPI("141")
        } else {
            console.log("DATA FETCHED AT :  " + then)
        }
    }
}

function getHospitalsFromAPI(district_id) {
    addLoader()
    let dateObj = new Date(),
        today = getDateString(dateObj)

    let xhr = new XMLHttpRequest()
    xhr.open("GET", "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=" + district_id + "&date=" + today)
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let hospitals = JSON.parse(xhr.responseText)
                localStorage.setItem("hospitals_" + district_id, JSON.stringify(hospitals))
                localStorage.setItem("faisalTime", new Date())

                console.log("Fetching hospitals. district_id : " + district_id)

                let values = getFormValues(),
                    vaccine = values["vaccine"]

                displayData(vaccine, district_id)
                removeLoader()
            } else {
                alert("status : " + xhr.status + "\nresponse : " + xhr.responseText)
            }
        }
    }
    xhr.send()
}

function getFormValues() {
    let values = {}
    let variables = ["vaccine", "district"]
    let temp

    variables.forEach(item => {
        temp = document.getElementsByName(item)
        if (temp[0].type == "checkbox") {
            values[item] = []
            for (let ind = 0; ind < temp.length; ind++) {
                if (temp[ind].checked) {
                    values[item].push(temp[ind].value)
                }
            }
        } else {
            values[item] = temp[0].value
        }
    })

    return values
}

function addLoader() {
    let loader = "<div class='loading'><div></div><h2>Loading</h2></div>"
    document.querySelector("#loader").innerHTML = loader
}

function removeLoader() {
    setTimeout(() => {
        document.querySelector(".loading").style.opacity = 0
    }, 500)
    setTimeout(() => {
        document.querySelector(".loading").remove()
    }, 1500)
}

function getVaccines() {
    let values = getFormValues(),
        vaccine = values["vaccine"],
        district = values["district"]
    displayData(vaccine, district)
}

function getDateString(dateObj) {
    let day, month, year

    day = dateObj.getDate()
    day = day < 10 ? "0" + day : day

    month = dateObj.getMonth() + 1
    month = month < 10 ? "0" + month : month

    year = dateObj.getFullYear()

    return (day + "-" + month + "-" + year)
}