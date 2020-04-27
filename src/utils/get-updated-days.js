export const getUpdatedDays = (days, date, reservationId) => {

    const updatedDays = JSON.parse(JSON.stringify(days))
    let nextReservation = reservationId
    
    updatedDays.forEach(day => {
        if(day.date === date) {
            if(!day.reserved) {
                day.reservationId = nextReservation
                nextReservation++
            }
            day.reserved = !day.reserved
        }
    })

    return { updatedDays, nextReservation, }

}
