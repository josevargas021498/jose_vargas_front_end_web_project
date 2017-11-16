// ******************************************* PAGE_DATA ********************************************************** //
PAGE_DATA = {
    vehicle1: {
        imgUrl: '../frontend-starter/aguyfromalabamatruck.jpg',
        make: 'Chevrolet Silverado 2500 DuraMax z71 (BlackWidowEdition)',
        year: '2007',
        mileage: '79,800',
        description:
            'Fully loaded with the 6.2 Super-Turbo charged engine. Cold air intake, CrookStreed headers, straight pipe, 10in Exhaust tips ready to roll some coal.\
        this vehicle is ready for action as it can pick up 0-60 in 3.8 seconds. 890hp under the hood with high end RockStar rims and tires.',
        price: '$79,500'
    },
    vehicle2: {
        imgUrl:
            'http://cdn.pcwallart.com/images/ford-raptor-2014-black-wallpaper-3.jpg',
        make: 'Ford F-150 Raptor',
        year: '2016',
        mileage: '45,000',
        description:
            'This Vehicle is a one of a kind Ford. It counts with the title of being the fastest 4X4 Ford pick up truck. 0-60 in 4.7 seconds. \
        This vehicle offers a full SONY XPlode sound system with 12in subs under the seats. Touch screen navigator in console, ac&heat all around along \
        with hd dvd player.',
        price: '$67,000'
    },
    vehicle3: {
        imgUrl:
            'https://wrapbullys.com/wp-content/uploads/2016/03/Jeep-Wrangler-Rubicon-Wrap-23.jpg',
        make: 'Jeep Wrangler Rubicon Recon Edition',
        year: '2016',
        mileage: '21,300',
        description:
            'You will not regret this ultimate edition Jeep right here. This is one of the best strictly off roaders \
        ever made. Comes equiped with a 4.6 455hp v6 engine and the interior is just WWWwwooOOooowwWWW!!',
        price: '$54,600'
    }
};

// ************************************** END OF PAGE_DATA ****************************************************** //
function visualizeVehicle1() {
    var vehicle = PAGE_DATA.vehicle1;
    var html = '<img src="' + vehicle.imgUrl + '">';
    html += '<h3> ' + vehicle.make + ' </h3>';
    html += '<h5> Year: ' + vehicle.year + ' </h5>';
    html += '<h5> Mileage: ' + vehicle.mileage + ' </h5>';
    html += '<h5> Description: ' + vehicle.description + ' </h5>';
    html += '<h4> Price: ' + vehicle.price + ' </h4>';
    html += '<button id="add-to-cart" > Add To Cart </button> <hr>';

    return html;
}
function visualizeVehicle2() {
    var vehicle = PAGE_DATA.vehicle2;
    var html = '<img src="' + vehicle.imgUrl + '">';
    html += '<h3> ' + vehicle.make + ' </h3>';
    html += '<h5> Year: ' + vehicle.year + ' </h5>';
    html += '<h5> Mileage: ' + vehicle.mileage + ' </h5>';
    html += '<h5> Description: ' + vehicle.description + ' </h5>';
    html += '<h4> Price: ' + vehicle.price + ' </h4>';
    html += '<button id="add-to-cart" > Add To Cart </button> <hr>';

    return html;
}
function visualizeVehicle3() {
    var vehicle = PAGE_DATA.vehicle3;
    var html = '<img id="raptor" src="' + vehicle.imgUrl + '">';
    html += '<h3> ' + vehicle.make + ' </h3>';
    html += '<h5> Year: ' + vehicle.year + ' </h5>';
    html += '<h5> Mileage: ' + vehicle.mileage + ' </h5>';
    html += '<h5> Description: ' + vehicle.description + ' </h5>';
    html += '<h4> Price: ' + vehicle.price + ' </h4>';
    html += '<button id="add-to-cart" > Add To Cart </button> <hr>';

    return html;
}

// ************************************************************ ENLARGE IMG ************************************************//
function enlargeImg() {
    var html = PAGE_DATA.map(function(image) {
        return chirps(image.imgUrl);
    });
}

function drawVehicles() {
    $('.vehicles').append(
        visualizeVehicle1() + visualizeVehicle2() + visualizeVehicle3()
    );
}

// *************************************************** VISUAlIZING CAR ****************************************** //
function main() {
    drawVehicles();
}

$(main);
