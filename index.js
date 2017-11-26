PAGE_DATA = {
    vehicles: [
        {
            chevrolet: [
                {
                    vehicle: {
                        imgUrl: '',
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
                }
            ],
            ford: [
                {
                    vehicle: {
                        imgUrl: '',
                        year: '2016',
                        make: 'Ford',
                        model: 'F-150 Raptor Limited',
                        engine: '5.6 V8',
                        mileage: '98,291',
                        description:
                            'The Ford Raptor... Just by looking at it we all go WWwwOOoowwWW!! This beauty has an all leather interior \
                        counting with a touch screen navigation system integrated in the flat screen radio. Has sensors all around to display as roof view \
                        WHEREVER you are. It has the nitto trail grapplers for the mountains or farm work along with a 3.5" Rough Country Suspension Lift. \
                        This baby is READY for you, are YOU read for it?? Check us out!!',
                        retailPrice: '62,800'
                    }
                }
            ],
            jeep: [
                {
                    vehicle: {
                        imgUrl:
                            'https://wrapbullys.com/wp-content/uploads/2016/03/Jeep-Wrangler-Rubicon-Wrap-23.jpg',
                        year: '2016',
                        make: 'Jeep',
                        model: 'Wrangler Rubicon Recon Edition',
                        engine: '4.5 Wrangler Super Charged',
                        mileage: '21,300',
                        description:
                            'You will not regret this ultimate edition Jeep right here. This is one of the best strictly off roaders \
                    ever made. Comes equiped with a 4.6 455hp v6 engine and the interior is just WWWwwooOOooowwWWW!!',
                        retailPrice: '$54,600'
                    }
                }
            ],
            toyota: [
                {
                    vahicle: {
                        imgUrl: '',
                        year: '2014',
                        make: 'Toyota',
                        model: 'Tacoma',
                        engine: '4.6 Eco-Boost',
                        mileage: '19,000',
                        description:
                            'This is the lightest of the Toyotas, but do not over look it because it can haul just like a full sizre!\
                        It has the 4.6 Charged engine that will make your regular gas burn hotter than lava!! The Hotter The BADDER!!! GET IT NOW \
                        if you are looking for a lightweight, full sized crew-cab like this one!',
                        retailPrice: '$49,400'
                    }
                }
            ]
        }
    ]
};

function pathToChevroletVehicles() {
    var path = PAGE_DATA.vehicles;
    for (var i = 0; i < path.length; i++) {
        console.log(path[i]);
    }
}
function displayChevroletVehicles() {
    var HTML = '<img src="' + '';
}

// function pathToAllVehicles() {
//     var allBrands = PAGE_DATA.vehicles;
//     for (var brand in allBrands) {
//         var vehiclesInBrand = allBrands[brand];
//         for (var vehicle in vehiclesInBrand) {
//             var myVehicle = vehiclesInBrand[vehicle];
//             console.log(myVehicle);
//             for (var props in myVehicle) {
//                 var myProps = myVehicle[props];
//                 for (var i in myProps) {
//                     var details = myProps[i];
//                     // console.log(details);
//                     return details;
//                 }
//             }
//         }
//     }
// }

// function displayAllVehicles(par) {
//     var html = '<img src="' + par.imgUrl + '">';
//     var html = '<h1>' + par.year + par.make + par.model + '</h1>';
//     return html;
// }

// function draw() {
//     $('.main-content').append(displayAllVehicles(pathToAllVehicles()));
// }

function main() {
    // draw();
    pathToChevroletVehicles();
}
$(main);
