window.onload = () => {
    init()
}

window.onresize = () => {
    if (window.innerWidth > 900) {
        facilitateDates(false)
    } else if (window.innerWidth <= 900) {
        facilitateDates(true)
    }
}

let hospitals = {
    "centers": [
        {
            "center_id": 695265,
            "name": "RSK Vidyalaya Laxmi Nagar-1",
            "address": "11 Guru Angad Nagar West Laxmi Nagar Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110092,
            "lat": 28,
            "long": 77,
            "from": "10:30:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "3bba9b6f-7754-4807-8f39-eae0972279ab",
                    "date": "09-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "10:30AM-11:30AM",
                        "11:30AM-12:30PM",
                        "12:30PM-01:30PM",
                        "01:30PM-05:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 732285,
            "name": "DriveThru SportComplex CWG Max",
            "address": "Sport Complex Common Wealth Village Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110092,
            "lat": 28,
            "long": 77,
            "from": "10:00:00",
            "to": "17:00:00",
            "fee_type": "Paid",
            "sessions": [
                {
                    "session_id": "bf840225-9382-475c-9642-df0793a2133a",
                    "date": "09-06-2021",
                    "available_capacity": 754,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "10:00AM-12:00PM",
                        "12:00PM-02:00PM",
                        "02:00PM-04:00PM",
                        "04:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 754,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "f59d8706-3008-417e-8050-6109e0aba790",
                    "date": "09-06-2021",
                    "available_capacity": 31,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "10:00AM-12:00PM",
                        "12:00PM-02:00PM",
                        "02:00PM-04:00PM",
                        "04:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 14,
                    "available_capacity_dose2": 17
                },
                {
                    "session_id": "6d557eec-15fc-4e69-ac44-71e76cd99df1",
                    "date": "10-06-2021",
                    "available_capacity": 49,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "10:00AM-12:00PM",
                        "12:00PM-02:00PM",
                        "02:00PM-04:00PM",
                        "04:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 30,
                    "available_capacity_dose2": 19
                },
                {
                    "session_id": "1635f243-f0e1-49a4-a86f-45e6b9f527fe",
                    "date": "10-06-2021",
                    "available_capacity": 977,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "10:00AM-12:00PM",
                        "12:00PM-02:00PM",
                        "02:00PM-04:00PM",
                        "04:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 977,
                    "available_capacity_dose2": 0
                }
            ],
            "vaccine_fees": [
                {
                    "vaccine": "COVISHIELD",
                    "fee": "1100"
                }
            ]
        },
        {
            "center_id": 695275,
            "name": "RSK Vidyalaya Laxmi Nagar-4",
            "address": "11 Guru Angad Nagar West Laxmi Nagar Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110092,
            "lat": 28,
            "long": 77,
            "from": "10:30:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "57817b17-0184-4e4f-bf49-35d7a8dab2ff",
                    "date": "09-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "10:30AM-11:30AM",
                        "11:30AM-12:30PM",
                        "12:30PM-01:30PM",
                        "01:30PM-05:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
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
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "21:00:00",
            "fee_type": "Paid",
            "sessions": [
                {
                    "session_id": "87761367-d4b0-4bd7-af42-56a58cfc59d2",
                    "date": "09-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-12:00PM",
                        "12:00PM-03:00PM",
                        "03:00PM-06:00PM",
                        "06:00PM-09:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "51f9b117-c103-4e4d-90c0-ff3ebc051c25",
                    "date": "09-06-2021",
                    "available_capacity": 26,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 26,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "f3c38a45-f820-41c5-97ba-9567985b6ff4",
                    "date": "10-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-12:00PM",
                        "12:00PM-03:00PM",
                        "03:00PM-06:00PM",
                        "06:00PM-09:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "47065347-41d3-4365-84d4-6d004e133943",
                    "date": "10-06-2021",
                    "available_capacity": 261,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-12:00PM",
                        "12:00PM-03:00PM",
                        "03:00PM-06:00PM",
                        "06:00PM-09:00PM"
                    ],
                    "available_capacity_dose1": 261,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "81d94a28-5cd6-4c06-9f9e-f1beda3a1856",
                    "date": "11-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-12:00PM",
                        "12:00PM-03:00PM",
                        "03:00PM-06:00PM",
                        "06:00PM-09:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "3abe0662-4f47-4e17-b825-08beee2b1c50",
                    "date": "11-06-2021",
                    "available_capacity": 373,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-12:00PM",
                        "12:00PM-03:00PM",
                        "03:00PM-06:00PM",
                        "06:00PM-09:00PM"
                    ],
                    "available_capacity_dose1": 373,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "8187d430-ad0e-44e9-9d70-df4f5bdae5b8",
                    "date": "12-06-2021",
                    "available_capacity": 305,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-12:00PM",
                        "12:00PM-03:00PM",
                        "03:00PM-06:00PM",
                        "06:00PM-09:00PM"
                    ],
                    "available_capacity_dose1": 305,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "0764bbcb-b504-4cd0-ab5e-f79fa6f2338f",
                    "date": "12-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-12:00PM",
                        "12:00PM-03:00PM",
                        "03:00PM-06:00PM",
                        "06:00PM-09:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "b1ab3a2f-11e7-4bb7-ba00-d64706fe1409",
                    "date": "13-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-12:00PM",
                        "12:00PM-03:00PM",
                        "03:00PM-06:00PM",
                        "06:00PM-09:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "5e4d87ff-2b4d-4762-ad95-45568e8c018c",
                    "date": "13-06-2021",
                    "available_capacity": 388,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-12:00PM",
                        "12:00PM-03:00PM",
                        "03:00PM-06:00PM",
                        "06:00PM-09:00PM"
                    ],
                    "available_capacity_dose1": 388,
                    "available_capacity_dose2": 0
                }
            ],
            "vaccine_fees": [
                {
                    "vaccine": "COVISHIELD",
                    "fee": "650"
                }
            ]
        },
        {
            "center_id": 695412,
            "name": "SKV Dallupura Site-2",
            "address": "Block- F Dallupura Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110096,
            "lat": 28,
            "long": 77,
            "from": "10:30:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "65026f91-a6c1-487e-b267-f4683d8682d0",
                    "date": "09-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "10:30AM-11:30AM",
                        "11:30AM-12:30PM",
                        "12:30PM-01:30PM",
                        "01:30PM-05:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 593535,
            "name": "LBS Hospital-2",
            "address": "Lal Bahadur Shastri Hospital Khichiripur Delhi 91",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110091,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "a4958822-2226-432f-a55d-61115ac37c52",
                    "date": "09-06-2021",
                    "available_capacity": 90,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 71,
                    "available_capacity_dose2": 19
                }
            ]
        },
        {
            "center_id": 695267,
            "name": "RSK Vidyalaya Laxmi Nagar-2",
            "address": "11 Guru Angad Nagar West Laxmi Nagar Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110092,
            "lat": 28,
            "long": 77,
            "from": "10:30:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "fd9ba1f1-8414-4ac8-818d-645b964a611f",
                    "date": "09-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "10:30AM-11:30AM",
                        "11:30AM-12:30PM",
                        "12:30PM-01:30PM",
                        "01:30PM-05:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 702885,
            "name": "SKV Mandawali No.3 Site-1",
            "address": "SKV Mandawali No.3 East Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110092,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "383f75b8-efe5-4741-a264-9cb600253da6",
                    "date": "09-06-2021",
                    "available_capacity": 35,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 15,
                    "available_capacity_dose2": 20
                }
            ]
        },
        {
            "center_id": 702781,
            "name": "Janki Devi SKVS Mayur Vihar-S1",
            "address": "Janki Devi SKV School Pocket-2 Mayur Vihar Phase-1 Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110091,
            "lat": 0,
            "long": 0,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "f0dd9d9a-f438-46d6-b83b-d22c409bab4b",
                    "date": "09-06-2021",
                    "available_capacity": 26,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 8,
                    "available_capacity_dose2": 18
                }
            ]
        },
        {
            "center_id": 702870,
            "name": "School Of Excell.Khichripur-2",
            "address": "School Of Excellance Khichripur Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110091,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "5bc01789-cb78-4ada-9daa-2027f69ead24",
                    "date": "09-06-2021",
                    "available_capacity": 50,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 30,
                    "available_capacity_dose2": 20
                }
            ]
        },
        {
            "center_id": 702896,
            "name": "SKV East Vinod Nagar Site-1",
            "address": "SKV East Vinod Nagar Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110091,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "2b421925-954c-4fb6-bf2c-4153e2e34bc4",
                    "date": "09-06-2021",
                    "available_capacity": 46,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 27,
                    "available_capacity_dose2": 19
                }
            ]
        },
        {
            "center_id": 702800,
            "name": "GGSSS School LalitaPark Site-2",
            "address": "Lalita Park Laxmi Nagar New Delhi Delhi 110031",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110031,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "6ae8946a-baa2-4ef0-a518-56ada528a907",
                    "date": "09-06-2021",
                    "available_capacity": 50,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 30,
                    "available_capacity_dose2": 20
                }
            ]
        },
        {
            "center_id": 693889,
            "name": "RSKV Vidyalaya W Vinod Nagar-3",
            "address": "West Vinod Nagar I.P. Extension Patparganj",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110092,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "607603d6-a02e-4062-b8f0-d9f6a9024940",
                    "date": "09-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 693930,
            "name": "RSK Vidyalaya W ChanderNagar-1",
            "address": "Chander Nagar Road Krishna Nagar Extension Near Reliance Fresh Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110051,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "96338ab6-cc54-49a6-93fd-8f97323540b8",
                    "date": "09-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 693807,
            "name": "GBSS School New Ashok Nagar-4",
            "address": "Block B Ashok Nagar Extension New Ashok Nagar Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110096,
            "lat": 28,
            "long": 77,
            "from": "10:30:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "80e51f43-9f03-4458-812d-5c9f219626ed",
                    "date": "09-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "10:30AM-11:30AM",
                        "11:30AM-12:30PM",
                        "12:30PM-01:30PM",
                        "01:30PM-05:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 722711,
            "name": "Janki Devi SKVS Mayur Vihar-S4",
            "address": "Janki Devi SKV School Pocket-2 Mayur Vihar Phase-1 Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110091,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "a7d9fcf8-5345-4744-9e3c-58142dfd32d6",
                    "date": "09-06-2021",
                    "available_capacity": 48,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 28,
                    "available_capacity_dose2": 20
                }
            ]
        },
        {
            "center_id": 706672,
            "name": "GBSSS Vasundhara Enclave",
            "address": "GBSSS Vasundhara Enclave Delhi- 110096",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110096,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "d04eb8d8-6c54-4a6e-979f-acea404ecceb",
                    "date": "09-06-2021",
                    "available_capacity": 37,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 18,
                    "available_capacity_dose2": 19
                }
            ]
        },
        {
            "center_id": 695272,
            "name": "RSK Vidyalaya Laxmi Nagar-3",
            "address": "11 Guru Angad Nagar West Laxmi Nagar Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110092,
            "lat": 28,
            "long": 77,
            "from": "10:30:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "60002abb-d13b-4f33-9728-5ea7a9c3db5e",
                    "date": "09-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "10:30AM-11:30AM",
                        "11:30AM-12:30PM",
                        "12:30PM-01:30PM",
                        "01:30PM-05:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 7979,
            "name": "MAX HOSPITAL-1",
            "address": "108 I.P. Extension Patparganj Delhi 110092",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110092,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Paid",
            "sessions": [
                {
                    "session_id": "11cf16c3-a0e6-4bda-8a55-d6fe81a66cae",
                    "date": "09-06-2021",
                    "available_capacity": 105,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 60,
                    "available_capacity_dose2": 45
                },
                {
                    "session_id": "c49a7a9d-dadf-4ecc-89de-089f3bca7f27",
                    "date": "09-06-2021",
                    "available_capacity": 1616,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 1616,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "573bdd01-2b29-4642-9c95-560a9b0fb5e8",
                    "date": "10-06-2021",
                    "available_capacity": 1737,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 1737,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "beb07855-c079-435d-ab76-7816794cbb65",
                    "date": "10-06-2021",
                    "available_capacity": 38,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 23,
                    "available_capacity_dose2": 15
                },
                {
                    "session_id": "70cbb18e-6cef-46e3-bb63-8dbce9561ddb",
                    "date": "11-06-2021",
                    "available_capacity": 1777,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 1777,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "a0f5a1bc-e26b-4eb1-ad74-716666a7bc5f",
                    "date": "11-06-2021",
                    "available_capacity": 35,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 22,
                    "available_capacity_dose2": 13
                },
                {
                    "session_id": "6096b57b-6342-4bce-ad9c-09aa8244fcd0",
                    "date": "12-06-2021",
                    "available_capacity": 1760,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 1760,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "f8d1882e-e066-4447-9482-adbc8d489cdb",
                    "date": "12-06-2021",
                    "available_capacity": 24,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 22,
                    "available_capacity_dose2": 2
                },
                {
                    "session_id": "49f68ff5-5385-456a-984b-5a7492fb69ff",
                    "date": "13-06-2021",
                    "available_capacity": 42,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 24,
                    "available_capacity_dose2": 18
                },
                {
                    "session_id": "c839f257-be12-4113-b904-8ba17e5d9bcf",
                    "date": "13-06-2021",
                    "available_capacity": 2288,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 2288,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "05fd9e25-c998-4c4c-80ba-b38484c4c812",
                    "date": "14-06-2021",
                    "available_capacity": 1846,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 1846,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "0efb5b9b-fe52-4686-9e24-fd51e53913bf",
                    "date": "14-06-2021",
                    "available_capacity": 143,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 96,
                    "available_capacity_dose2": 47
                },
                {
                    "session_id": "93b6f931-f776-4aa6-a496-c9c187d7c386",
                    "date": "15-06-2021",
                    "available_capacity": 1797,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 1797,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "298eeeab-2241-4557-b597-8fc2d1258a3b",
                    "date": "15-06-2021",
                    "available_capacity": 44,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 27,
                    "available_capacity_dose2": 17
                }
            ],
            "vaccine_fees": [
                {
                    "vaccine": "COVISHIELD",
                    "fee": "900"
                }
            ]
        },
        {
            "center_id": 7955,
            "name": "Chacha Nehru Bal Chikitsalaya",
            "address": "Chacha Nehru Bal Chikitsalaya Geeta Colony Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110031,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "e56886c4-4634-4e35-810a-12281cd99f8e",
                    "date": "09-06-2021",
                    "available_capacity": 20,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 20,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 702866,
            "name": "School Of Excell. Khichripur-1",
            "address": "School Of Excellance Khichripur Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110091,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "9d7e7053-d4ce-4324-bb0e-08fd553fbc81",
                    "date": "09-06-2021",
                    "available_capacity": 47,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 27,
                    "available_capacity_dose2": 20
                }
            ]
        },
        {
            "center_id": 722705,
            "name": "GGSSS School LalitaPark Site-4",
            "address": "Lalita Park Laxmi Nagar New Delhi Delhi 110031",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110031,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "8a21383b-7403-4134-85c5-bfa559a5f3f1",
                    "date": "09-06-2021",
                    "available_capacity": 49,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 29,
                    "available_capacity_dose2": 20
                }
            ]
        },
        {
            "center_id": 693798,
            "name": "GBSS School New Ashok Nagar-3",
            "address": "Block B Ashok Nagar Extension New Ashok Nagar Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110096,
            "lat": 28,
            "long": 77,
            "from": "10:30:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "b67ad9cc-a85b-436a-b7ab-12219ac62de0",
                    "date": "09-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "10:30AM-11:30AM",
                        "11:30AM-12:30PM",
                        "12:30PM-01:30PM",
                        "01:30PM-05:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 718017,
            "name": "Dharamshila Narayan Hospital-2",
            "address": "Dharamshila Narayan Hospital Vasundhra Enclave Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110096,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "21:00:00",
            "fee_type": "Paid",
            "sessions": [
                {
                    "session_id": "c56dc935-6b85-4ee4-b6d4-d75b3cfdecd4",
                    "date": "09-06-2021",
                    "available_capacity": 367,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-12:00PM",
                        "12:00PM-03:00PM",
                        "03:00PM-06:00PM",
                        "06:00PM-09:00PM"
                    ],
                    "available_capacity_dose1": 367,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "87677ae4-914f-47ff-93e4-abdfde5e972c",
                    "date": "09-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-12:00PM",
                        "12:00PM-03:00PM",
                        "03:00PM-06:00PM",
                        "06:00PM-09:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "3db5e676-db19-41a4-a7b5-e7de14fe5310",
                    "date": "10-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-12:00PM",
                        "12:00PM-03:00PM",
                        "03:00PM-06:00PM",
                        "06:00PM-09:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "bf05a327-e781-4e76-b326-b63321a34f85",
                    "date": "10-06-2021",
                    "available_capacity": 458,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-12:00PM",
                        "12:00PM-03:00PM",
                        "03:00PM-06:00PM",
                        "06:00PM-09:00PM"
                    ],
                    "available_capacity_dose1": 458,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "a8062e98-0811-422c-94de-5e1036a4e3f2",
                    "date": "11-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-12:00PM",
                        "12:00PM-03:00PM",
                        "03:00PM-06:00PM",
                        "06:00PM-09:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "19e74ade-05fa-4409-ac5c-9693ef95e9ab",
                    "date": "11-06-2021",
                    "available_capacity": 456,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-12:00PM",
                        "12:00PM-03:00PM",
                        "03:00PM-06:00PM",
                        "06:00PM-09:00PM"
                    ],
                    "available_capacity_dose1": 456,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "27bd845d-0cd9-4194-a941-c5ec70220b30",
                    "date": "12-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-12:00PM",
                        "12:00PM-03:00PM",
                        "03:00PM-06:00PM",
                        "06:00PM-09:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "9b8f6a6e-5544-4333-b3d1-943736cf0304",
                    "date": "12-06-2021",
                    "available_capacity": 447,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-12:00PM",
                        "12:00PM-03:00PM",
                        "03:00PM-06:00PM",
                        "06:00PM-09:00PM"
                    ],
                    "available_capacity_dose1": 447,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "761a598b-1532-46f4-887a-956cac2c4abb",
                    "date": "13-06-2021",
                    "available_capacity": 473,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-12:00PM",
                        "12:00PM-03:00PM",
                        "03:00PM-06:00PM",
                        "06:00PM-09:00PM"
                    ],
                    "available_capacity_dose1": 473,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "d50a8271-84d3-409a-99cb-ea885b2eace3",
                    "date": "13-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-12:00PM",
                        "12:00PM-03:00PM",
                        "03:00PM-06:00PM",
                        "06:00PM-09:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ],
            "vaccine_fees": [
                {
                    "vaccine": "COVISHIELD",
                    "fee": "650"
                }
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
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "f7f83f07-a1cc-42ab-9420-d223d65ce86c",
                    "date": "09-06-2021",
                    "available_capacity": 41,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 31,
                    "available_capacity_dose2": 10
                }
            ]
        },
        {
            "center_id": 697735,
            "name": "EDMC PS Mayur Vihar P-3 Site-1",
            "address": "EDMC PS Mayur Vihar Phase-3 Pocket A-3 Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110096,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "458b6dbb-94e0-4b05-83f8-accb951fcc2a",
                    "date": "09-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
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
            "lat": 28,
            "long": 77,
            "from": "10:00:00",
            "to": "17:00:00",
            "fee_type": "Paid",
            "sessions": [
                {
                    "session_id": "9272206c-dcd0-46a9-b5eb-dac8391bdc9c",
                    "date": "09-06-2021",
                    "available_capacity": 760,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "10:00AM-12:00PM",
                        "12:00PM-02:00PM",
                        "02:00PM-04:00PM",
                        "04:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 760,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "5838d8c5-3bbe-42be-a5a8-1adab0dd2124",
                    "date": "09-06-2021",
                    "available_capacity": 11,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "10:00AM-12:00PM",
                        "12:00PM-02:00PM",
                        "02:00PM-04:00PM",
                        "04:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 6,
                    "available_capacity_dose2": 5
                },
                {
                    "session_id": "f238d108-8773-4e35-bd36-8326ad5d9eaa",
                    "date": "10-06-2021",
                    "available_capacity": 47,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "10:00AM-12:00PM",
                        "12:00PM-02:00PM",
                        "02:00PM-04:00PM",
                        "04:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 27,
                    "available_capacity_dose2": 20
                },
                {
                    "session_id": "7eecf4a9-1e23-4e73-a064-959b47584001",
                    "date": "10-06-2021",
                    "available_capacity": 966,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "10:00AM-12:00PM",
                        "12:00PM-02:00PM",
                        "02:00PM-04:00PM",
                        "04:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 966,
                    "available_capacity_dose2": 0
                }
            ],
            "vaccine_fees": [
                {
                    "vaccine": "COVISHIELD",
                    "fee": "1100"
                }
            ]
        },
        {
            "center_id": 702796,
            "name": "GGSSS School LalitaPark Site-1",
            "address": "Lalita Park Laxmi Nagar New Delhi Delhi 110031",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110031,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "002e8aaf-f0a8-4d1c-b178-4c050ba9f79b",
                    "date": "09-06-2021",
                    "available_capacity": 48,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 28,
                    "available_capacity_dose2": 20
                }
            ]
        },
        {
            "center_id": 693761,
            "name": "GBSS School New Ashok Nagar-1",
            "address": "Block B Ashok Nagar Extension New Ashok NagarDelhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110096,
            "lat": 28,
            "long": 77,
            "from": "10:30:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "aa4f28fe-6c81-49ca-a2fd-cc6f7552963a",
                    "date": "09-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "10:30AM-11:30AM",
                        "11:30AM-12:30PM",
                        "12:30PM-01:30PM",
                        "01:30PM-05:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 593520,
            "name": "CNBC Hospital-2",
            "address": "Chacha Nehru Bal Chikitsalaya Geeta Colony Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110031,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "52eac1e4-125c-4cb3-9858-9f28b4a2cb84",
                    "date": "09-06-2021",
                    "available_capacity": 90,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 44,
                    "available_capacity_dose2": 46
                }
            ]
        },
        {
            "center_id": 693952,
            "name": "RSK Vidyalaya W ChanderNagar-4",
            "address": "Chander Nagar Road Krishna Nagar Extension Near Reliance Fresh Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110051,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "f52ba779-ab31-44f7-968f-09dd623aa45e",
                    "date": "09-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 695414,
            "name": "SKV Dallupura Site-3",
            "address": "Block- F Dallupura Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110096,
            "lat": 28,
            "long": 77,
            "from": "10:30:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "fecb537d-7214-4c11-854e-d7e093c81a16",
                    "date": "09-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "10:30AM-11:30AM",
                        "11:30AM-12:30PM",
                        "12:30PM-01:30PM",
                        "01:30PM-05:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 695280,
            "name": "RSK Vidyalaya Laxmi Nagar-5",
            "address": "11 Guru Angad Nagar West Laxmi Nagar Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110092,
            "lat": 28,
            "long": 77,
            "from": "10:30:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "364588df-edaf-4c2b-ac93-8fae35ba8d20",
                    "date": "09-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "10:30AM-11:30AM",
                        "11:30AM-12:30PM",
                        "12:30PM-01:30PM",
                        "01:30PM-05:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 7954,
            "name": "Lal Bahadur Shastri Hospital",
            "address": "Lal Bahadur Shastri Hospital Khichiripur Delhi 91",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110091,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "ba1b5e07-4513-4c0d-b598-c47ba3d6b80b",
                    "date": "09-06-2021",
                    "available_capacity": 94,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 74,
                    "available_capacity_dose2": 20
                }
            ]
        },
        {
            "center_id": 697736,
            "name": "EDMC PS Mayur Vihar P-3 Site-2",
            "address": "EDMC PS Mayur Vihar Phase-3 Pocket A-3 Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110096,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "26fedbab-9d2d-4fdf-a8bd-cec82b20058b",
                    "date": "09-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 702903,
            "name": "SKV East Vinod Nagar Site-3",
            "address": "SKV East Vinod Nagar Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110091,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "0196d915-caef-4e62-b279-d8fd1fd6c751",
                    "date": "09-06-2021",
                    "available_capacity": 50,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 30,
                    "available_capacity_dose2": 20
                }
            ]
        },
        {
            "center_id": 693812,
            "name": "GBSS School New Ashok Nagar-5",
            "address": "Block B Ashok Nagar Extension New Ashok Nagar Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110096,
            "lat": 28,
            "long": 77,
            "from": "10:30:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "f3e4b79e-572a-4c2e-af1c-d26a71567cb1",
                    "date": "09-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "10:30AM-11:30AM",
                        "11:30AM-12:30PM",
                        "12:30PM-01:30PM",
                        "01:30PM-05:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 695386,
            "name": "SKV Dallupura Site-1",
            "address": "Block F Dallupura Village Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110096,
            "lat": 28,
            "long": 77,
            "from": "10:30:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "50fb30e8-8524-4b22-86d5-4026e4ff7692",
                    "date": "09-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "10:30AM-11:30AM",
                        "11:30AM-12:30PM",
                        "12:30PM-01:30PM",
                        "01:30PM-05:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 693781,
            "name": "GBSS School New Ashok Nagar-2",
            "address": "Block B Ashok Nagar Extension New Ashok Nagar Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110096,
            "lat": 28,
            "long": 77,
            "from": "10:30:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "7be4abbe-8b04-401a-8167-c822ef084d85",
                    "date": "09-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "10:30AM-11:30AM",
                        "11:30AM-12:30PM",
                        "12:30PM-01:30PM",
                        "01:30PM-05:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 702899,
            "name": "SKV East Vinod Nagar Site-2",
            "address": "SKV East Vinod Nagr Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110091,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "51a394b9-0347-4543-80c9-d3498157b5f5",
                    "date": "09-06-2021",
                    "available_capacity": 50,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 30,
                    "available_capacity_dose2": 20
                }
            ]
        },
        {
            "center_id": 693880,
            "name": "RSKV Vidyalaya W Vinod Nagar-1",
            "address": "West Vinod Nagar I.P. Extension Patparganj Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110092,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "baf628c5-09bf-4e99-b38a-d1873955a255",
                    "date": "09-06-2021",
                    "available_capacity": 39,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 30,
                    "available_capacity_dose2": 9
                }
            ]
        },
        {
            "center_id": 693942,
            "name": "RSK Vidyalaya W ChanderNagar-2",
            "address": "Chander Nagar Road Krishna Nagar Extension Near Reliance Fresh Delhi",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110051,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "9eaf0b48-8b3d-4b91-a75d-822c73fb40bf",
                    "date": "09-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 560610,
            "name": "Max Hospital Patparganj",
            "address": "108 I.P. Extension Patparganj Delhi 110092",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110092,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Paid",
            "sessions": [
                {
                    "session_id": "128cb831-05fa-4f8e-aacf-23870b9f9d4b",
                    "date": "09-06-2021",
                    "available_capacity": 1563,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 1558,
                    "available_capacity_dose2": 5
                },
                {
                    "session_id": "7f7ec3c3-2d10-468e-94f6-82719c2f04aa",
                    "date": "10-06-2021",
                    "available_capacity": 1654,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 1654,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "0f91e67f-5af9-4b61-909c-caf3b2c8c45c",
                    "date": "11-06-2021",
                    "available_capacity": 1721,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 1721,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "361f00bf-f26f-4fcf-b1ed-0af95a07ea3b",
                    "date": "12-06-2021",
                    "available_capacity": 1731,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 1731,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "247dd473-7d1c-4678-bb52-323f1e492134",
                    "date": "13-06-2021",
                    "available_capacity": 2266,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 2266,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "d5691b56-9ad9-43cc-9706-8060efc60402",
                    "date": "14-06-2021",
                    "available_capacity": 1838,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 1838,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "de372d6d-62ba-4e49-98a5-da0d5dcb9c4d",
                    "date": "15-06-2021",
                    "available_capacity": 1790,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 1790,
                    "available_capacity_dose2": 0
                }
            ],
            "vaccine_fees": [
                {
                    "vaccine": "COVISHIELD",
                    "fee": "900"
                }
            ]
        },
        {
            "center_id": 7976,
            "name": "MH Khichripur CHC",
            "address": "Daanveer Bhamashah Maternity Home Khichripur Near Police Station Kalyan Puri Delhi-91",
            "state_name": "Delhi",
            "district_name": "East Delhi",
            "block_name": "Not Applicable",
            "pincode": 110091,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "2274e273-24c8-4938-8a1c-c0028502bc60",
                    "date": "10-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "60d33854-1bf5-42fe-95de-bf25f84a4a26",
                    "date": "12-06-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        }
    ]
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

function getVaccines(form) {
    displayData(form.date.value, form.vaccine.value)
}

function displayData(prefferedDate, prefferedVaccine) {
    let htm = ""

    let centers = hospitals.centers
    centers.forEach(item => {
        htm += processCentreDetails(item, prefferedDate, prefferedVaccine)
    })

    document.querySelector("#app").innerHTML = htm
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