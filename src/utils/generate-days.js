export const generateDays = n => {

    const days = []

    for(let i = 1; i <= n; i++) {
        days.push({
            date: i,
            reserved: false,
            reservationId: '',
        })
    }

    return days
}
