import { generateDays } from '../src/utils/generate-days'

describe('Test generateDays()', () => {

    const days = [
        { date: 1, reserved: false, reservationId: '' },
        { date: 2, reserved: false, reservationId: '' },
        { date: 3, reserved: false, reservationId: '' },
    ]

    it(`returns an array with the specified length, 
        with an incremented date starting at 1,
        with a reserved prop set to 'false',
        and with a reservationId prop set to an empty string`, () => {

            expect(generateDays(3)).toEqual(days)

        })

})
