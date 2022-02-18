const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    expect.arrayContaining(shuffleArray)
})

test('shuffleArray should', () => {
    expect(shuffleArray).toHaveLength(shuffleArray.length)
})