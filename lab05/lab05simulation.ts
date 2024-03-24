import { AutomotiveVehicle, CrappyCar, ExcellentElectricCar } from "./lab05";

class FleetCar {
    private car: AutomotiveVehicle;
    private totalkm: number = 0;
    private totalPassengers: number = 0;

    public name;

    public constructor(car: AutomotiveVehicle) {
        this.car = car;
        this.name = car.carName;
    }

    public simlateOneRide = () => {
        // ride for 2-5km empty
        this.car.dropOff();
        for (let i = 0; i < Math.ceil(Math.random() * 3) + 2; i++) {
            this.car.moveOneKm();
        }
    
        // pick up passengers
        const nrOfPassengers = this.car.pickUp();
    
        // ride for 5-15km
        const nrOfKm = Math.ceil(Math.random() * 10) + 5;
        for (let i = 0; i < nrOfKm; i++) {
            this.car.moveOneKm();
        }
    
        // drop off passengers
        this.car.dropOff();
    
        this.totalPassengers += nrOfPassengers;
        this.totalkm += nrOfKm;
    }

    getStatistics = () => [this.totalPassengers, this.totalkm, this.car.currentProfit()]
}

const fleetCars: FleetCar[] = [new CrappyCar(), new ExcellentElectricCar()].map(car => new FleetCar(car));

// simulate 1000 rides
const n = 1000;
for (let i = 0; i < n; i++) {
    fleetCars.forEach(car => car.simlateOneRide());
}

fleetCars.forEach(car => {
    const [passengers, km, profit] = car.getStatistics();
    console.log(`After ${n} rides, car ${car.name} made ${profit} profit, by driving ${passengers} passengers over ${km} km`);
})