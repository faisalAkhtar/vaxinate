function displayData(prefferedVaccines, prefferedDistrict) {
    let htm = ""
    let hospitals = JSON.parse(localStorage.getItem("hospitals_" + prefferedDistrict))

    if (!hospitals) {
        getHospitalsFromAPI(prefferedDistrict)
        return
    }
    let centers = hospitals.centers
    let dateArr = getSevenDates()
    let col = ""

    htm += "<div class='bag'>"
    dateArr.forEach(date => {
        htm += "<div class='col'>"
        htm += "<div class='dat'>" + getCuteDateString(date) + "</div>"

        centers.forEach(item => {
            col += processData(item, date, prefferedVaccines)
        })

        if (col === "") {
            htm += getThullu()
        } else htm += col
        col = ""

        htm += "</div>"
    })
    htm += "</div>"

    if (htm == "") {
        htm += "<img class='noneCard' src='./static/none.gif'>"
    }

    document.querySelector("#app").innerHTML = htm
}

function processData(centre, prefferedDate, prefferedVaccines) {
    let cards = ""
    let fees, feesClass, dose1, dose1Class, dose2, dose2Class

    fees = "FREE"
    if (centre['fee_type'] == "Paid") {
        if (centre['vaccine_fees']) {
            fees = "Rs " + centre['vaccine_fees'][0]['fee']
        } else {
            fees = centre['vaccine_fees'] ? "Rs " + centre['vaccine_fees'] : "N<span style='font-weight:normal'>/</span>A"
        }
    }
    feesClass = fees == "FREE" ? "free" : "paid"

    centre.sessions.forEach(session => {
        // PREFERRABLE OPTIONS
        if (session['date'] == prefferedDate && session['min_age_limit'] == "18" && prefferedVaccines.indexOf(session['vaccine']) >= 0) {

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

function getThullu() {
    let div = "\n"
    div += "<div class='card thullu'> \n"
    div += "<h1>?????????</h1> \n"
    div += "</div> \n"

    return div
}

function getCuteDateString(dString) {
    let mArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let dArray = dString.split("-")
    let sup = dArray[0] === "1" || dArray[0] === "21" || dArray[0] === "31" ? 'st' : (dArray[0] === "2" || dArray[0] === "22" ? 'nd' : (dArray[0] === "3" || dArray[0] === "23" ? 'rd' : 'th'))
    dArray.forEach((_, i) => dArray[i] = parseInt(dArray[i]))
    return dArray[0] + '<sup>' + sup + '</sup> ' + mArray[dArray[1] - 1]
}

function getSevenDates() {
    let dateObj = new Date()
    let dateArr = []
    for (let ind = 0; ind < 7; ind++) {
        dateArr.push(getDateString(dateObj))
        dateObj.setDate(dateObj.getDate() + 1)
    }
    return dateArr
}