
let data = [

    {
        "invoice" : 1,
        "clientName": "Thomas",
        "clientType": "In-State",
        "Date": "5/11/2019",
        "DueDate": "12/11/2019",
        "Total": 678,
        "Balance": 678,
        "Status" : "Draft"
    },
    {
        "invoice" : 2,
        "clientName": "Thomas",
        "clientType": "In-State",
        "Date": "5/11/2019",
        "DueDate": "12/11/2019",
        "Total": 678,
        "Balance": 678,
        "Status" : "Draft"
    },
    {
        "invoice" : 3,
        "clientName": "Thomas",
        "clientType": "In-State",
        "Date": "5/11/2019",
        "DueDate": "12/11/2019",
        "Total": 678,
        "Balance": 678,
        "Status" : "Draft"
    },
    {
        "invoice" : 10,
        "clientName": "Thomas",
        "clientType": "In-State",
        "Date": "5/11/2019",
        "DueDate": "12/11/2019",
        "Total": 678,
        "Balance": 678,
        "Status" : "Draft"
    },
    {
        "invoice" : 5,
        "clientName": "Thomas",
        "clientType": "In-State",
        "Date": "5/11/2019",
        "DueDate": "12/11/2019",
        "Total": 678,
        "Balance": 678,
        "Status" : "Draft"
    },

    {
        "invoice" : 6,
        "clientName": "Thomas",
        "clientType": "In-State",
        "Date": "5/11/2019",
        "DueDate": "12/11/2019",
        "Total": 678,
        "Balance": 678,
        "Status" : "Partial-Payment"
    },

    {
        "invoice" : 7,
        "clientName": "Thomas",
        "clientType": "In-State",
        "Date": "5/11/2019",
        "DueDate": "12/11/2019",
        "Total": 678,
        "Balance": 678,
        "Status" : "Paid"
    },

    {
        "invoice" : 8,
        "clientName": "Thomas",
        "clientType": "In-State",
        "Date": "5/11/2019",
        "DueDate": "12/11/2019",
        "Total": 678,
        "Balance": 678,
        "Status" : "Paid"
    },

    {
        "invoice" : 9,
        "clientName": "Thomas",
        "clientType": "In-State",
        "Date": "5/11/2019",
        "DueDate": "12/11/2019",
        "Total": 678,
        "Balance": 678,
        "Status" : "Partial-Payment"
    },

    {
        "invoice" : 4,
        "clientName": "Thomas",
        "clientType": "Out-State",
        "Date": "5/11/2019",
        "DueDate": "12/11/2019",
        "Total": 678,
        "Balance": 678,
        "Status" : "Draft"
    },

    {
        "invoice" : 11,
        "clientName": "Thomas",
        "clientType": "In-State",
        "Date": "5/11/2019",
        "DueDate": "12/11/2019",
        "Total": 678,
        "Balance": 678,
        "Status" : "Paid"
    },

    {
        "invoice" : 12,
        "clientName": "Thomas",
        "clientType": "In-State",
        "Date": "5/11/2019",
        "DueDate": "12/11/2019",
        "Total": 678,
        "Balance": 678,
        "Status" : "Draft"
    },

    {
        "invoice" : 13,
        "clientName": "Thomas",
        "clientType": "Out-State",
        "Date": "5/11/2019",
        "DueDate": "12/11/2019",
        "Total": 678,
        "Balance": 678,
        "Status" : "Draft"
    },

    {
        "invoice" : 14,
        "clientName": "Thomas",
        "clientType": "Out-State",
        "Date": "5/11/2019",
        "DueDate": "12/11/2019",
        "Total": 678,
        "Balance": 678,
        "Status" : "Partial-Payment"
    },

    {
        "invoice" : 15,
        "clientName": "Thomas",
        "clientType": "In-State",
        "Date": "5/11/2019",
        "DueDate": "12/11/2019",
        "Total": 678,
        "Balance": 678,
        "Status" : "Paid"
    },
]


// var element = document.querySelector("#table-container")
// element.classList.add("Paid")


var table = document.createElement("table");
var body = table.createTBody();
for (var i = 0; i < data.length; i++) {
    var row = body.insertRow();
    var obj = data[i];
    for (var key in obj) {
        var cell = row.insertCell();
        // console.log(key);
        
        cell.innerHTML = obj[key];


    }
}

document.getElementById("table-container").appendChild(table);


// for(var i=0; i<data.length; i++){
//     var invoices = data[i]['invoice'];
//     var clientName = data[i]['clientName'];
//     console.log(invoices);
//     console.log(clientName);
// }

function changeColor(){
    var b = document.getElementById("B");
    b.addEventListener("click", function() {
    b.style.backgroundColor = "#4351d3";
    b.style.color = "white";
  });
}

