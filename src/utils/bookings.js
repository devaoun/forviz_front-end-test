import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import bookings from '../mockData'

dayjs.extend(weekday);
dayjs.extend(customParseFormat);

export const getBookingsForWeek = (roomId, weekNo) => {
    const toDay = new Date("2019-09-26")
    toDay.setHours(0, 0, 0, 0)
    let startDate = new Date(toDay)
    let endDate = new Date(startDate)
    if (weekNo === "thisweek") {
        endDate.setDate(startDate.getDate() + 7)
    } else if (weekNo === 'nextweek') {
        startDate.setDate(startDate.getDate() + 7)
        endDate.setDate(startDate.getDate() + 7)
    } else if (weekNo === 'wholemonth') {
        startDate = new Date(toDay.getFullYear(), toDay.getMonth(), 1);
        endDate = new Date(toDay.getFullYear(), toDay.getMonth() + 1, 1);
    }
    const bookingsByRoomId = bookings.filter(booking => booking.roomId === roomId)
    const bookingsForWeek = bookingsByRoomId.filter(booking => {
        const bookingStartDate = new Date(booking.startTime)
        const bookingEndDate = new Date(booking.endTime)
        return bookingStartDate >= startDate && bookingEndDate <= endDate
    })
    return bookingsForWeek.sort((bookingA, bookingB) => new Date(bookingA.startTime) - new Date(bookingB.startTime))
}

export const formatDate = (dateStr) => {
    const date = dayjs(dateStr, 'YYYY-MM-DD HH:mm:ss');
    const dayOfWeek = date.format('ddd');
    const dayOfMonth = date.format('D');
    const month = date.format('MMM');

    return {
        day: dayOfWeek,
        date: parseInt(dayOfMonth, 10),
        month
    };
};

export const groupByDate = (bookings) => {
    const grouped = {};
    const test = new Date(bookings.startTime)
    bookings.forEach(booking => {
        const { day, date, month } = formatDate(booking.startTime);
        const fullDateKey = `${day}, (${date} ${month})`;

        if (!grouped[fullDateKey]) {
            grouped[fullDateKey] = {
                fullDate: {
                    day,
                    date,
                    month
                },
                bookings: []
            };
        }
        grouped[fullDateKey].bookings.push(booking);
    });

    return Object.values(grouped);
};

export const formatTime = (dateTimeStr) => {
    return dayjs(dateTimeStr, 'YYYY-MM-DD HH:mm:ss').format('HH:mm');
}

