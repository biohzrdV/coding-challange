const {generateTasks} = require('../../index');

describe ('generateTasks', () => {
    it('should return 5 task objects as a JSON string', () => {
        const result = generateTasks("interns-gets-starting");
        const tasks = JSON.parse(result)

        expect(Array.isArray(tasks)).toBe(true);
        expect(tasks.length).toBe(5);
    });
});
