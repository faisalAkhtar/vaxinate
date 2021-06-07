function updateDisplayStyles() {
    if (window.innerWidth > 900) {
        facilitateDistricts(false)
        facilitateDates(false)
    } else if (window.innerWidth <= 900) {
        facilitateDistricts(true)
        facilitateDates(true)
    }

    document.getElementsByName("date")[0].checked = true
    document.getElementsByName("vaccine")[0].checked = true
    document.getElementsByName("district")[0].checked = true
    displayData(document.getElementsByName("date")[0].value, document.getElementsByName("vaccine")[0].value)
}

function facilitateDistricts(flag) {
    let districts = [
        {
            "district_id": 141,
            "district_name": "Central Delhi"
        },
        {
            "district_id": 145,
            "district_name": "East Delhi"
        },
        {
            "district_id": 140,
            "district_name": "New Delhi"
        },
        {
            "district_id": 146,
            "district_name": "North Delhi"
        },
        {
            "district_id": 147,
            "district_name": "North East Delhi"
        },
        {
            "district_id": 143,
            "district_name": "North West Delhi"
        },
        {
            "district_id": 148,
            "district_name": "Shahdara"
        },
        {
            "district_id": 149,
            "district_name": "South Delhi"
        },
        {
            "district_id": 144,
            "district_name": "South East Delhi"
        },
        {
            "district_id": 150,
            "district_name": "South West Delhi"
        },
        {
            "district_id": 142,
            "district_name": "West Delhi"
        }
    ]

    let options = ""
    if (flag) {
        options += "<select name='district'> \n"
        districts.forEach(district => {
            options += "<option value='" + district['district_id'] + "'>" + district['district_name'] + "</option> \n"
        })
        options += "</select> \n"
    } else {
        districts.forEach(district => {
            options += "<input type='radio' name='district' id='district_"+district['district_id']+"' value='"+district['district_id']+"'> \n"
            options += "<label for='district_"+district['district_id']+"'>"+district['district_name']+"</label> \n"
        })
    }

    document.getElementsByClassName("district")[0].innerHTML = options
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