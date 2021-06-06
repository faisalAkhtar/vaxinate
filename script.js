window.onload = () => {
    init()
}

window.onresize = () => {
    updateDateDisplayStyle()
}

function init() {
    checkPreviouslySavedObjects()
    updateDateDisplayStyle()
}

function checkPreviouslySavedObjects() {
    if (localStorage.getItem("hospitals") == null) {
        console.log("INIT")
        getHospitalsFromAPI("145")
    } else {
        let then = new Date(localStorage.getItem("faisalTime"))
        let now = new Date()
        if ((now - then) / 1000 > (5 * 60)) {       // Refresh search after 5 minutes
            console.log("REFRESH")
            getHospitalsFromAPI("145")
        } else {
            console.log("DATA FETCHED AT :  " + then)
        }
    }
}

function updateDateDisplayStyle() {
    if (window.innerWidth > 900) {
        facilitateDates(false)
    } else if (window.innerWidth <= 900) {
        facilitateDates(true)
    }
    document.getElementsByName("date")[0].checked = true
    document.getElementsByName("vaccine")[0].checked = true
    displayData(document.getElementsByName("date")[0].value, document.getElementsByName("vaccine")[0].value)
}

function facilitateDates(flag) {
    const dateObj = new Date()
    let date

    let options = ""
    if (flag) options += "<select name='date'> \n"
    for (let ind = 0; ind <= 7; ind++) {
        date = getDateString(dateObj)

        if (flag) {
            options += "<option value=\"" + date + "\">" + date + "</option> \n"
        } else {
            options += "<input type='radio' name='date' id=\"" + date + "\" value=\"" + date + "\"> \n"
            options += "<label for=\"" + date + "\">" + date + "</label> \n"
        }

        dateObj.setDate(dateObj.getDate() + 1)
    }
    if (flag) options += "</select> \n"

    document.getElementsByClassName("date")[0].innerHTML = options
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

function getHospitalsFromAPI(district_id) {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=" + district_id + "&date=10-06-2021")
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let hospitals = JSON.parse(xhr.responseText)
                localStorage.setItem("hospitals", JSON.stringify(hospitals))
                localStorage.setItem("faisalTime", new Date())
                init()
            } else {
                console.log("status : " + xhr.status)
                console.log("responseText : " + xhr.responseText)
            }
        }
    }
    xhr.send()
}

function getVaccines(form) {
    displayData(form.date.value, form.vaccine.value)
}
