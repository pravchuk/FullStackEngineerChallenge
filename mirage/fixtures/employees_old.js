export default {
    "data" : [
        {
            "id": "10001",
            "type": "employees",
            "attributes":{
                "name": "Ashwini",
                "role": "Business Analyst",
                "team": "Platform Services",
                "isAdmin": false,
                "password": "123"
            },
            "relationships":{
                "reviews":{
                    "data": [
                    {
                        "id":"1",
                        "type": "reviews"
                    },
                    {
                        "id":"2",
                        "type": "reviews"
                    }
                ]
                }
            }
        },
        {
            "id": "10002",
            "type": "employees",
            "attributes":{
                "name": "Praveen",
                "role": "Software Engineer",
                "team": "Center of Excellence",
                "isAdmin": true,
                "password": "123"
            },
            "relationships":{
                "reviews":{
                    "data": [
                    {
                        "id":"3",
                        "type": "reviews"
                    },
                    {
                        "id":"4",
                        "type": "reviews"
                    }
                ]
                }
            }
        },
        {
            "id": "10003",
            "type": "employees",
            "attributes":{
                "name": "Kotes",
                "role": "Quality Assurance",
                "team": "Product Team",
                "isAdmin": true,
                "password": "123"
            },
            "relationships":{
                "reviews":{
                    "data": [
                    {
                        "id":"4",
                        "type": "reviews"
                    },
                    {
                        "id":"5",
                        "type": "reviews"
                    }
                ]
                }
            }
        }
    ],
    "included":
        [
            {
                "id":"1",
                "type": "reviews",
                "attributes":{
                    "by": "10002",
                    "status": "done",
                    "rating": 4,
                    "comment": "Very good."   
                }
            },
            {
                "id":"2",
                "type": "reviews",
                "attributes":{
                    "by": "10003",
                    "status": "pending"   
                }
            },
            {
                "id":"3",
                "type": "reviews",
                "attributes":{
                    "by": "10001",
                    "status": "done",
                    "rating": 4,
                    "comment": "Very good."   
                }
            },
            {
                "id":"4",
                "type": "reviews",
                "attributes":{
                    "by": "10003",
                    "status": "pending"   
                }
            },
            {
                "id":"5",
                "type": "reviews",
                "attributes":{
                    "by": "10001",
                    "status": "done",
                    "rating": 4,
                    "comment": "Very good."   
                }
            },
            {
                "id":"6",
                "type": "reviews",
                "attributes":{
                    "by": "10002",
                    "status": "pending"   
                }
            }
        ]
}