var PAGE_DATA = {
    allTrucks: [
        {
            imgUrl: '../frontend-starter/aguyfromalabamatruck.jpg',
            year: '2007',
            make: 'Chevrolet',
            model: 'Silverado z71 DuraMax (BlackWidowEdition)',
            engine: '6.2 Super Turbo Charged, Cammed, Fuel: Diesel',
            mileage: '79,462',
            description:
                'This is it! The fastest road-legal in the United States NOW HERE!! This beast is equiped with the \
                    best of the BEST racing performance upgrades, with a 6.2 Super Turbo-Charged CAMMED diesel fuel engine! This baby\
                    can pick up from 0-60 in 3.7 seconds. To purchase this PantherEyed, please click the link below NOW!!',
            retailPrice: '$89,500',
            stock: 1
        },

        {
            imgUrl:
                'https://pictures.dealer.com/l/liftedtrucks/0657/0694931c69e8d6493c0db071e09ab385x.jpg?impolicy=resize&w=320',
            year: '2017',
            make: 'Chevrolet',
            model: 'Silverado 1500 z71',
            engine: '5.3 Super charged',
            mileage: '29,130',
            description:
                'This silverado is one of the cleanest we have HERE TODAY! Do NOT miss the opportunity.',
            retailPrice: '$53,400',
            stock: 3
        },
        {
            imgUrl:
                'https://pictures.dealer.com/l/liftedtrucks/0657/0694931c69e8d6493c0db071e09ab385x.jpg?impolicy=resize&w=320',
            year: '2017',
            make: 'Chevrolet',
            model: 'Silverado 1500 z71',
            engine: '5.3 Super charged',
            mileage: '10,800',
            description:
                'This silverado is one of the cleanest we have HERE TODAY! Do NOT miss the opportunity.',
            retailPrice: '$62,400',
            stock: 3
        },
        {
            imgUrl:
                'https://pictures.dealer.com/l/liftedtrucks/0657/0694931c69e8d6493c0db071e09ab385x.jpg?impolicy=resize&w=320',
            year: '2017',
            make: 'Chevrolet',
            model: 'Silverado 1500 z71',
            engine: '5.3 Super charged',
            mileage: '19,971',
            description:
                'This silverado is one of the cleanest we have HERE TODAY! Do NOT miss the opportunity.',
            retailPrice: '$60,000',
            stock: 3
        },
        {
            imgUrl: '',
            year: '2014',
            make: 'Ford',
            model: 'F-150 FX-4',
            engine: '5.4 Eco-boost',
            mileage: '49,999',
            description:
                'The fx-4... Aahhh... One of the nicest, boldiest trucks around. Who would not want to be riding in something\
            like this. Best part about it, WE HAVE IT HERE FOR YOU! It already has everything you need to go on an intense adventure!! Or if\
            you just want to show off, we have it too!! Only At Vargas Offroad!!',
            retailPrice: '$64,500',
            stock: 2
        },
        {
            imgUrl: '',
            year: '2014',
            make: 'Ford',
            model: 'F-150 FX-4',
            engine: '5.4 Eco-boost',
            mileage: '98,000',
            description:
                'The fx-4... Aahhh... One of the nicest, boldiest trucks around. Who would not want to be riding in something\
            like this. Best part about it, WE HAVE IT HERE FOR YOU! It already has everything you need to go on an intense adventure!! Or if\
            you just want to show off, we have it too!! Only At Vargas Offroad!!',
            retailPrice: '$58,500',
            stock: 2
        }
    ]
};

//---------------------------------------------------------ALL VEHICLES ----------------------------------------------------//
function allVehicles() {
    var path = PAGE_DATA.allTrucks;

    for (var i in path) {
        var vehicle = path[i];

        var html = '<img src="' + vehicle.imgUrl + '">';
        html +=
            '<h2>' +
            ' ' +
            vehicle.year +
            ' ' +
            vehicle.make +
            ' ' +
            vehicle.model +
            ' ' +
            '</h2>';
        html +=
            '<p> Features: <br>' +
            vehicle.engine +
            ' <br>' +
            vehicle.mileage +
            ' <br>' +
            vehicle.description +
            ' <br>' +
            vehicle.retailPrice +
            ' </p>';
        html += '<h1> In Stock: ' + vehicle.stock + '</h1>';
        html += '<button id="buy-vehicle"> BUY NOW! </button>';

        return html;
    }

    // $('.main-content').html(html);
}

//-------------------------------------------------------------------------------------------------------------//

//----------------------------------------------------BUY---------------------------------------//
function buyButtonHandler() {
    $('#buy-vehicle').click(function() {
        var path = PAGE_DATA.allTrucks;

        for (var i in path) {
            var vehicle = path[i];

            if (vehicle.stock != 0) {
                vehicle.stock -= 1;
                draw();
            }
        }
    });
}

//----------------------------------------------------------MAIN FUNCTIONS ----------------------------------------------------------//
function draw() {
    $('.main-content').html(allVehicles());
    buyButtonHandler();
}

function main() {
    draw();
}

$(main);
// function pathToAllVehicles() {
//     var path = PAGE_DATA;
//     for (var i in path) {
//         var vehicle = path[i];
//         console.log(vehicle);
//         return vehicle;
//     }
// }
// // function displayAllVehicles(vehicle) {
// //     var HTML = '<img id="blackwidow" src="' + vehicle.imgUrl + '">';
// //     HTML +=
// //         '<h2> ' +
// //         ' ' +
// //         vehicle.year +
// //         ' ' +
// //         vehicle.make +
// //         ' ' +
// //         vehicle.model +
// //         '</h2>';
// //     HTML += '<h5> ' + vehicle.engine + '</h5>';
// //     HTML += '<h5> ' + vehicle.mileage + '</h5>';
// //     HTML += '<h5> ' + vehicle.description + '</h5>';
// //     HTML += '<h1> ' + vehicle.retailPrice + '</h1>';
// //     HTML += '<button id="buy">BUY NOW</button>';

// //     return HTML;
// // }
// function allVehicles(vehicle) {
//     var HTML = '<img id="blackwidow" src="' + vehicle.imgUrl + '">';
//     HTML +=
//         '<h2> ' +
//         ' ' +
//         vehicle.year +
//         ' ' +
//         vehicle.make +
//         ' ' +
//         vehicle.model +
//         '</h2>';
//     HTML += '<h5> ' + vehicle.engine + '</h5>';
//     HTML += '<h5> ' + vehicle.mileage + '</h5>';
//     HTML += '<h5> ' + vehicle.description + '</h5>';
//     HTML += '<h1> ' + vehicle.retailPrice + '</h1>';
//     HTML += '<button id="buy">BUY NOW</button>';

//     return HTML;
// }
// function visualizeAllVehicles() {
//     var html = PAGE_DATA.allTrucks.map(function(vehicle) {
//         return allVehicles(vehicle);
//     });
// }

// // function buy() {
// //     $('#buy').on('click', function() {
// //         $('#buy').attr('disabled', true);
// //     });
// // }

// function draw(par) {
//     $('.main-content').append(par);
// }

// function main() {
//     draw(visualizeAllVehicles());
// }

// $('.main-content').on('load', main());
