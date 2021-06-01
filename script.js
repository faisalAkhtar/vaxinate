window.onload = () => {
    init()
}

let hospitals = {
    "sessions": [
        {
            "center_id": 702903,
            "name": "SKV East Vinod Nagar Site-3",
            "address": "SKV East Vinod Nagar Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110091,
            "from": "09:00:00",
            "to": "17:00:00",
            "lat": 28,
            "long": 77,
            "fee_type": "Free",
            "session_id": "5acf4aca-f3b4-48d3-a091-e5b88542701e",
            "date": "08-06-2021",
            "available_capacity_dose1": 25,
            "available_capacity_dose2": 20,
            "available_capacity": 45,
            "fee": "0",
            "min_age_limit": 45,
            "vaccine": "COVISHIELD",
            "slots": [
                "09:00AM-11:00AM",
                "11:00AM-01:00PM",
                "01:00PM-03:00PM",
                "03:00PM-05:00PM"
            ]
        },
        {
            "center_id": 693884,
            "name": "RSKV Vidyalaya W Vinod Nagar-2",
            "address": "West Delhi Vinod Nagar I.P. Extension Patparganj",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110092,
            "from": "09:00:00",
            "to": "17:00:00",
            "lat": 28,
            "long": 77,
            "fee_type": "Free",
            "session_id": "2eda344b-4aac-4a97-ac32-bb626ffe1267",
            "date": "08-06-2021",
            "available_capacity_dose1": 6,
            "available_capacity_dose2": 9,
            "available_capacity": 15,
            "fee": "0",
            "min_age_limit": 45,
            "vaccine": "COVISHIELD",
            "slots": [
                "09:00AM-11:00AM",
                "11:00AM-01:00PM",
                "01:00PM-03:00PM",
                "03:00PM-05:00PM"
            ]
        },
        {
            "center_id": 732213,
            "name": "Drive Thru-National Victor Max",
            "address": "National Victor Public School Patparganj Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110092,
            "from": "09:00:00",
            "to": "17:00:00",
            "lat": 28,
            "long": 77,
            "fee_type": "Paid",
            "session_id": "4d6481f1-b03b-4bad-ab29-3b96130e4cf7",
            "date": "08-06-2021",
            "available_capacity_dose1": 292,
            "available_capacity_dose2": 0,
            "available_capacity": 292,
            "fee": "1100",
            "min_age_limit": 18,
            "vaccine": "COVISHIELD",
            "slots": [
                "09:00AM-11:00AM",
                "11:00AM-01:00PM",
                "01:00PM-03:00PM",
                "03:00PM-05:00PM"
            ]
        },
        {
            "center_id": 718003,
            "name": "Dharamshila Narayan Hospital-1",
            "address": "Dharmshila Narayan HospitalVasundhra Enclave Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110096,
            "from": "09:00:00",
            "to": "21:00:00",
            "lat": 28,
            "long": 77,
            "fee_type": "Paid",
            "session_id": "41b29efd-d4d1-4ede-9c27-618e027f522a",
            "date": "08-06-2021",
            "available_capacity_dose1": 0,
            "available_capacity_dose2": 0,
            "available_capacity": 0,
            "fee": "650",
            "min_age_limit": 45,
            "vaccine": "COVISHIELD",
            "slots": [
                "09:00AM-12:00PM",
                "12:00PM-03:00PM",
                "03:00PM-06:00PM",
                "06:00PM-09:00PM"
            ]
        },
        {
            "center_id": 732348,
            "name": "National Victor School Max WP",
            "address": "National Victor Public School Patparganj Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110092,
            "from": "09:00:00",
            "to": "17:00:00",
            "lat": 28,
            "long": 77,
            "fee_type": "Paid",
            "session_id": "722f3eb1-16a7-4f95-9153-2159c4d09ae7",
            "date": "08-06-2021",
            "available_capacity_dose1": 0,
            "available_capacity_dose2": 0,
            "available_capacity": 0,
            "fee": "0",
            "min_age_limit": 18,
            "vaccine": "COVISHIELD",
            "slots": [
                "09:00AM-11:00AM",
                "11:00AM-01:00PM",
                "01:00PM-03:00PM",
                "03:00PM-05:00PM"
            ]
        },
        {
            "center_id": 732213,
            "name": "Drive Thru-National Victor Max",
            "address": "National Victor Public School Patparganj Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110092,
            "from": "09:00:00",
            "to": "17:00:00",
            "lat": 28,
            "long": 77,
            "fee_type": "Paid",
            "session_id": "b4de44bd-e6ab-4155-b107-46cfbdd3b33a",
            "date": "08-06-2021",
            "available_capacity_dose1": 0,
            "available_capacity_dose2": 0,
            "available_capacity": 0,
            "fee": "1100",
            "min_age_limit": 45,
            "vaccine": "COVISHIELD",
            "slots": [
                "09:00AM-11:00AM",
                "11:00AM-01:00PM",
                "01:00PM-03:00PM",
                "03:00PM-05:00PM"
            ]
        }
    ]
}

function init() {
    console.log(hospitals.sessions)
    makeTable(hospitals.sessions)
}

function makeTable(sessions) {
    let htm = ""
    htm += "<table> \n"
    htm += "<tr> \n"
    htm += "<th>Centre ID</th> \n"
    htm += "<th>Name</th> \n"
    htm += "<th>Address</th> \n"
    htm += "<th>Fees</th> \n"
    htm += "<th>Dose-1</th> \n"
    htm += "<th>Dose-2</th> \n"
    htm += "<th>Vaccine</th> \n"
    htm += "</tr> \n"

    sessions.forEach(item => {
        htm += "<tr> \n"
        htm += "<td>" + item['center_id'] + "</td> \n"
        htm += "<td>" + item['name'] + "</td> \n"
        htm += "<td>" + item['address'] + "<br>PIN : " + item['pincode'] + "</td> \n"
        htm += "<td>" + (item['fee_type'] == "Free" ? "Free" : item['fee']) + "</td> \n"
        htm += "<td>" + item['available_capacity_dose1'] + "</td> \n"
        htm += "<td>" + item['available_capacity_dose2'] + "</td> \n"
        htm += "<td>" + item['vaccine'] + "</td> \n"
        htm += "</tr> \n"
    })

    htm += "</table> \n"

    document.querySelector("#app").innerHTML = htm
}