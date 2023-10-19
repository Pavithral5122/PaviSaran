class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distanceMiles, durationMinutes) {
        return this.baseFare + (this.costPerMile * distanceMiles) + (this.costPerMinute * durationMinutes);
    }
}
const calculator = new UberPriceCalculator(2.0, 1.0, 0.2);
const price = calculator.calculatePrice(5, 15);
console.log(`Price: $${price.toFixed(2)}`);

