import { getUpdatedDays } from '../src/utils/get-updated-days'

describe('Test getUpdatedDays()', () => {

    const days = [
        { date: 1, reserved: false, reservationId: '' },
        { date: 2, reserved: false, reservationId: '' },
        { date: 3, reserved: false, reservationId: '' },
    ]

    const expectedResult = [
        { date: 1, reserved: false, reservationId: '' },
        { date: 2, reserved: true, reservationId: 1 },
        { date: 3, reserved: false, reservationId: '' },
    ]

    it(`returns a new array and not the modified supplied array`, () => {

        expect(getUpdatedDays(days, 2, 1).updatedDays === days).toBe(false)

    })


    it(`returns a new array with the 'reserved' prop of the matching date set to its boolean opposite
        and, if the matching day has the 'reserved' property set to 'false', 'reservationId' is set to the third parameter`, () => {

        expect(getUpdatedDays(days, 2, 1).updatedDays).toEqual(expectedResult)

    })

    it(`returns a property named 'nextReservation'. If a date is matched, this property is one plus the value of the third parameter`, () => {

        expect(getUpdatedDays(days, 2, 1).nextReservation).toEqual(2)

    })

    it(`returns a property named 'nextReservation'. If no date is matched, this property equals the third parameter`, () => {

        expect(getUpdatedDays(days, 7, 1).nextReservation).toEqual(1)

    })
})
