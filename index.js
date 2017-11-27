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
// --------------------------------------------------------------- SHOW SITE -------------------------------------------------------//
function showSiteFront() {
    var HTML = '<div class="site-front"> <h1> WELCOME TO VARGAS OFF-ROAD!</h1>';
    HTML +=
        '<h2> BROWSE OUR BRANDS ! <i id="arrow-right" class="fa fa-arrow-right" aria-hidden="true"></i></h2>';

    HTML += '</div>';

    $('.main-content').html(HTML);
}

// ------------------------------------------------------ END SITE -----------------------------------------------------------------//

// ------------------------------------------------------- CHEVROLET VEHICLES ------------------------------------------------------//
function chevroletVehicles(vehicles) {
    if (vehicles.make.includes('Chevrolet')) {
        var HTML =
            '<h2>' + vehicles.year + vehicles.make + vehicles.model + '</h2>';
        HTML +=
            '<h5> Features: <p>' +
            vehicles.engine +
            '<br>' +
            vehicles.mileage +
            '<br>' +
            vehicles.description +
            '</p></h5>';
        HTML += '<h2>' + vehicles.retailPrice + '<br></h2>';
        HTML += '<h1>' + vehicles.stock + '<h1>';

        return HTML;
    }
}
function filteredChevrolets() {
    var vehicles = PAGE_DATA.allTrucks;

    for (var i in vehicles) {
        var vehicle = vehicles[i];
        //-------------------------------------//
        var result = vehicles.filter(chevroletVehicles);
        $('#chevy-link').on('click', function() {
            for (var v in result) {
                var filtered = result[v];
                console.log(filtered);
            }
        });
    }
}

// -------------------------------------------------------- FORD VEHICLES ---------------------------------------------------------//
function fordVehicles(vehicles) {
    return vehicles.make.includes('Ford');
}
function filteredfords() {
    var vehicles = PAGE_DATA.allTrucks;

    for (var i in vehicles) {
        var vehicle = vehicles[i];
        var result = vehicles.filter(fordVehicles);
        $('#ford-link').on('click', function() {
            for (var v in result) {
                var filtered = result[v];
                $('.main-content').html(filtered);
            }
        });
    }
}

// ------------------------------------------------------------ END CHEVROLET VEHICLES ----------------------------------------------//

function draw() {
    showSiteFront();
    filteredChevrolets();
}

function main() {
    draw();
    // filteredChevrolets();
}
$('body').on('load', main());
