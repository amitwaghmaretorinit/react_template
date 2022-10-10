module.exports = {
    global: {
        window: {
            matchMedia: () => {
                return {
                    matches: true,
                    addListener: jest.fn(),
                    removeListener: jest.fn()
                };
            }
        }
    }
}