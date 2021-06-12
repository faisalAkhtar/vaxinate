window.onload = () => {
    init()
}

window.onresize = () => {
    let values = getFormValues()
    updateDisplayStyles(false, values)
}

function init() {
    checkPreviouslySavedObjects()
    updateDisplayStyles(true)

    displayData(
        document.getElementsByName("date")[0].value,
        document.getElementsByName("vaccine")[0].value,
        document.getElementsByName("district")[0].value
    )
}

function checkPreviouslySavedObjects() {
    if (localStorage.getItem("faisalTime") == null) {
        console.log("INIT")
        getHospitalsFromAPI("145")
    } else {
        let then = new Date(localStorage.getItem("faisalTime"))
        let now = new Date()
        if ((now - then) / 1000 > (5 * 60)) {
            console.log("REFRESH")
            getHospitalsFromAPI("145")
        } else {
            console.log("DATA FETCHED AT :  " + then)
        }
    }
}

function getHospitalsFromAPI(district_id) {
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
                    vaccine = values["vaccine"],
                    date = values["date"]

                displayData(date, vaccine, district_id)
            } else {
                alert("status : " + xhr.status + "\nresponse : " + xhr.responseText)
            }
        }
    }
    xhr.send()
}

function getFormValues() {
    let values = {}
    let variables = ["vaccine", "date", "district"]
    let temp

    variables.forEach(item => {
        temp = document.getElementsByName(item)
        if(temp[0].type == "radio") {
            for (let ind = 0; ind < temp.length; ind++) {
                if (temp[ind].checked) {
                    values[item] = temp[ind].value
                    break
                }
            }
        } else {
            values[item] = temp[0].value
        }
    })

    return values
}

function getVaccines(form) {
    displayData(form.date.value, form.vaccine.value, form.district.value)
}