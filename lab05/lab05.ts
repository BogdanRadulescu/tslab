interface Vehicle {
    pickUp(): number;
    dropOff(): void;
    moveOneKm(): void;
    currentProfit(): number;
}

export abstract class AutomotiveVehicle implements Vehicle {
    // these are functions, because Vehicles have special rules
    protected kmPerLitreWhileEmpty: () => number;
    protected kmPerLitreWhileFull: () => number;
    protected humanCapacity: () => number;
    protected fuelCapacity: () => number;
    protected profitPerKm: () => number;

    protected fuelPrice: () => number;
    protected currentFuel: number;

    // currentOccupancy is not always the same as humanCapacity
    protected currentOccupancy: number;
    protected totalProfit = 0;

    public carName: string;
    
    public abstract moveOneKm(): void;

    public pickUp(): number {
        // TODO: change currentOccupancy and return the number of passengers
        return 0;
    }

    public dropOff(): void {
        // TODO: change currentOccupancy
    }

    public currentProfit(): number {
        return this.totalProfit;
    }
}

export class CrappyCar extends AutomotiveVehicle {
    public constructor() {
        super();
        this.carName = "Dacia Logan";

        // TODO: initialize all properties in the parent class
    }

    public moveOneKm(): void {
        // TODO: refuel if necessary

        // TODO: move one km. Account for whether the car has people or not when computing fuel and profit
    }
}

export class ExcellentElectricCar extends AutomotiveVehicle {
    public constructor() {
        super();
        this.carName = "Tesla Latest Model";

        // TODO: initialize all properties in the parent class
        // You need to keep track of the total number of km as well
    }

    public moveOneKm(): void {
        // TODO: refuel if necessary

        // TODO: move one km. Account for whether the car has people or not when computing fuel and profit
        // Also keep in mind this car is electric, and its battery gets worse over time
    }
}