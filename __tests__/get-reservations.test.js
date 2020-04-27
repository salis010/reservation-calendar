import { getReservations } from '../src/utils/get-reservations'

describe('Test getReservations()', () => {

    const days = [
        { date: 1, reserved: false, reservationId: '' },
        { date: 2, reserved: true, reservationId: '' },
        { date: 3, reserved: true, reservationId: '' },
    ]

    const expectedResult = [
        { date: 2, reserved: true, reservationId: '' },
        { date: 3, reserved: true, reservationId: '' },
    ]

    it(`returns an array with just the elements which have the 'reserved' prop set to true`, () => {

            expect(getReservations(days)).toEqual(expectedResult)

        })

})
