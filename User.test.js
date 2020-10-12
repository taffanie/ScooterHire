const User = require('./User')

describe('User', () => {
    const user1 = new User("Dwight")

    test('should have a name', () => {
        expect(user1.name).toBe("Dwight")
    });
});