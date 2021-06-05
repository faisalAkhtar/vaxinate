var hospitals = JSON.parse(localStorage.getItem("hospitals"))
window.onload = () => {
    init()
    if (localStorage.getItem("hospitals") == null) {
        localStorage.setItem("hospitals", JSON.stringify(hospitals))
        localStorage.setItem("faisalTime", new Date())
    } else if(localStorage.getItem("faisalTime") != null) {
        let then = new Date(localStorage.getItem("faisalTime"))
        let now = new Date()
        if ((now - then) / 1000 > (5 * 60)) {
            console.log("REFRESH")
            getHospitalsFromAPI()
        }
    } else {
        console.log("REFRESH")
        getHospitalsFromAPI()
    }
}

window.onresize = () => {
    if (window.innerWidth > 900) {
        facilitateDates(false)
    } else if (window.innerWidth <= 900) {
        facilitateDates(true)
    }
}

function init() {
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
    let date = new Date()

    let day, month, year
    year = date.getFullYear()
    month = date.getMonth() + 1
    if (month < 10) month = "0" + month
    day = date.getDate()

    let options = ""
    if (flag) options += "<select name='date'> \n"
    for (let ind = 0; ind <= 7; ind++, day++) {
        date = (day < 10 ? "0" + day : day) + "-" + month + "-" + year

        if (flag) {
            options += "<option value=\"" + date + "\">" + date + "</option> \n"
        } else {
            options += "<input type='radio' name='date' id=\"" + date + "\" value=\"" + date + "\"> \n"
            options += "<label for=\"" + date + "\">" + date + "</label> \n"
        }
    }
    if (flag) options += "</select> \n"

    document.getElementsByClassName("date")[0].innerHTML = options
}

function getHospitalsFromAPI() {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=145&date=10-06-2021")
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if(xhr.status == 200) {
                hospitals = JSON.parse(xhr.responseText)
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

function displayData(prefferedDate, prefferedVaccine) {
    let htm = ""

    if(!hospitals) return
    let centers = hospitals.centers
    centers.forEach(item => {
        htm += processCentreDetails(item, prefferedDate, prefferedVaccine)
    })

    if (htm == "") {
        htm += "<img class='noneCard' src='./none.gif'>"
    }

    document.querySelector("#app").innerHTML = htm
    document.querySelector("#result").innerHTML = "Results : " + prefferedVaccine + " | " + prefferedDate
}

function processCentreDetails(centre, prefferedDate, prefferedVaccine) {
    let cards = ""
    let fees, feesClass, dose1, dose1Class, dose2, dose2Class

    fees = "FREE"
    if (centre['fee_type'] == "Paid") {
        fees = "Rs " + centre['vaccine_fees'][0]['fee']
    }
    feesClass = fees == "FREE" ? "free" : "paid"

    centre.sessions.forEach(session => {
        // PREFERRABLE OPTIONS
        if (session['date'] == prefferedDate && session['min_age_limit'] == "18" && session['vaccine'] == prefferedVaccine) {

            dose1 = session['available_capacity_dose1'] == "0" ? "&times;" : session['available_capacity_dose1']
            dose1Class = session['available_capacity_dose1'] == "0" ? "oops" : "yayy"
            dose2 = session['available_capacity_dose2'] == "0" ? "&times;" : session['available_capacity_dose2']
            dose2Class = session['available_capacity_dose2'] == "0" ? "oops" : "yayy"

            cards += makeCard(
                centre['center_id'],
                centre['name'],
                centre['address'],
                centre['pincode'],
                fees,
                feesClass,
                dose1,
                dose1Class,
                dose2,
                dose2Class,
                session['vaccine'],
                session['min_age_limit']
            )
        }
    })
    return cards
}

function makeCard(centre, name, address, pincode, fees, feesClass, dose1, dose1Class, dose2, dose2Class, vaccine, minAge) {
    let div = "\n"
    div += "<div class='card'> \n"
    div += "<div class='top'> \n"
    div += "<div class='left'> \n"
    div += "<div class='name' data-centreId='" + centre + "'>" + name + "</div> \n"
    div += "<div class='address'>" + address + " " + pincode + "</div> \n"
    div += "</div> \n"
    div += "<div class='right'> \n"
    div += "<div class='vaccine'>" + vaccine + "</div> \n"
    div += "<div class='fees " + feesClass + "'>" + fees + "</div> \n"
    div += "</div> \n"
    div += "</div> \n"
    div += "<div class='btm'> \n"
    div += "<div class='minAge'>Age " + minAge + "</div> \n"
    div += "<div class='dose1'>Dose 1 <span class='" + dose1Class + "'>" + dose1 + "</span></div> \n"
    div += "<div class='dose2'>Dose 2 <span class='" + dose2Class + "'>" + dose2 + "</span></div> \n"
    div += "</div> \n"
    div += "</div> \n"

    return div
}