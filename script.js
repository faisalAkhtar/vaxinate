window.onload = () => {
    init()
}

window.onresize = () => {
    updateDisplayStyles()
}

function init() {
    checkPreviouslySavedObjects()
    updateDisplayStyles()
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
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=" + district_id + "&date=10-06-2021")
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let hospitals = JSON.parse(xhr.responseText)
                localStorage.setItem("hospitals_" + district_id, JSON.stringify(hospitals))
                localStorage.setItem("faisalTime", new Date())

                console.log("Fetching hospitals. district_id : " + district_id)

                displayData(
                    document.getElementsByName("date")[0].value,
                    document.getElementsByName("vaccine")[0].value,
                    district_id
                )
            } else {
                alert("status : " + xhr.status + "\nresponse : " + xhr.responseText)
            }
        }
    }
    xhr.send()
}

function getVaccines(form) {
    displayData(form.date.value, form.vaccine.value, form.district.value)
}