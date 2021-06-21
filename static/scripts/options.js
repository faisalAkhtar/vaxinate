function updateDisplayStyles(flag, values) {
    if (window.innerWidth > 900) {
        facilitateDistricts(false)
    } else if (window.innerWidth <= 900) {
        facilitateDistricts(true)
    }

    if (flag) {
        document.getElementsByName("vaccine")[0].checked = true
        document.getElementsByName("district")[0].checked = true
    } else {
        refillForm(values)
    }
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
            options += "<input type='radio' name='district' id='district_" + district['district_id'] + "' value='" + district['district_id'] + "'> \n"
            options += "<label for='district_" + district['district_id'] + "'>" + district['district_name'] + "</label> \n"
        })
    }

    document.getElementsByClassName("district")[0].innerHTML = options
}

function refillForm(values) {
    let temp
    let variables = ["vaccine", "district"]

    variables.forEach(item => {
        temp = document.getElementsByName(item)
        if (temp[0].type == "radio") {
            for (let ind = 0; ind < temp.length; ind++) {
                if (temp[ind].value == values[item]) {
                    temp[ind].checked = true
                    break
                }
            }
        } else {
            temp[0].value = values[item]
        }
    })
}