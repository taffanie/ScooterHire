const { expect } = require('@jest/globals');
const Scooter = require('./Scooter')

describe('Scooter', () => {
    const scooter1 = new Scooter("1")

    test('should have an ID', () => {
        expect(scooter1.id).toBe("1")
    });
});