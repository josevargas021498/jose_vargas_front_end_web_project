var PAGE_DATA = {
    vehicle: [
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
            retailPrice: '$89,500'
        }
    ],
    vehicle: [
        {
            imgUrl:
                'https://pictures.dealer.com/l/liftedtrucks/0657/0694931c69e8d6493c0db071e09ab385x.jpg?impolicy=resize&w=320',
            year: '2017',
            make: 'Chevrolet',
            model: 'Silverado 1500 z71',
            engine: '5.3 Super charged',
            mileage: '19,800',
            description:
                'This silverado is one of the cleanest we have HERE TODAY! Do NOT miss the opportunity.',
            retailPrice: '$62,400'
        }
    ]
};

function pathToAllVehicles() {
    var path = PAGE_DATA.vehicle;
    for (var i in path) {
        var vehicle = path[i];
        return vehicle;
    }
}
function displayAllVehicles(vehicle) {
    var HTML = '<img id="blackwidow" src="' + vehicle.imgUrl + '">';
    HTML +=
        '<h2> ' +
        ' ' +
        vehicle.year +
        ' ' +
        vehicle.make +
        ' ' +
        vehicle.model +
        '</h2>';
    HTML += '<h5> ' + vehicle.engine + '</h5>';
    HTML += '<h5> ' + vehicle.mileage + '</h5>';
    HTML += '<h5> ' + vehicle.description + '</h5>';
    HTML += '<h1> ' + vehicle.retailPrice + '</h1>';
    HTML += '<button id="buy">BUY NOW</button>';

    return HTML;
}
function buy() {
    $('#buy').on('click', function() {
        $('#buy').attr('disabled', true);
    });
}

function draw() {
    $('.main-content').append(displayAllVehicles(pathToAllVehicles()));
}

function main() {
    draw();
}
$(main);
