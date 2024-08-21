import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import EventList from "../components/EventList";
import PeriodSelector from "../components/PeriodSelector";
import Timeline from "../components/Timeline";
import { formatTime, getBookingsForWeek, groupByDate } from "../utils/bookings";

const fullDayFormat = {
    Sun: 'Sunday',
    Mon: 'Monday',
    Tue: 'Tuesday',
    Wed: 'Wednesday',
    Thu: 'Thursday',
    Fri: 'Friday',
    Sat: 'Saturday'
};

export default function BookingsPage() {
    const [searchParams] = useSearchParams()
    const { period } = useParams()
    const roomId = searchParams.get("roomId")
    const selectedBookings = getBookingsForWeek(roomId, period)
    const periodBookings = groupByDate(selectedBookings)
    const upComingBooking = periodBookings[0]
    const navigate = useNavigate()

    return (
        <>
            <div className="flex">
                {/* ฝั่งซ้าย */}
                <div className="relative bg-blue_46529D w-[585px] h-screen flex flex-col">
                    <div className="absolute right-0 bg-blue_2EBAEE w-[495px] h-[135px] cursor-pointer"
                    onClick={() => navigate('/')}>
                        <div className="absolute bottom-[25px] left-[50px] font-bold text-white text-[54px]">{roomId}</div>
                    </div>
                    {upComingBooking &&
                        <div className="mt-[30%] flex flex-col h-full overflow-hidden text-white">
                            <div className="ml-[100px] font-lato font-bold text-[18px]">Upcoming</div>
                            <div className="ml-[100px] font-lato font-thin text-[64px]">
                                <div className="opacity-50">{fullDayFormat[upComingBooking.fullDate.day]}</div>
                                <div>{`${upComingBooking.fullDate.date} ${upComingBooking.fullDate.month}`}</div>
                            </div>
                            <div className="flex-1 overflow-y-auto scrollbar-hidden z-10">
                                {upComingBooking.bookings.map((booking) => (
                                    <EventList
                                        key={booking.id}
                                        title={booking.title}
                                        startTime={formatTime(booking.startTime)}
                                        endTime={formatTime(booking.endTime)}
                                    />
                                ))}
                            </div>
                        </div>
                    }
                    <div className="absolute bottom-0 w-full h-[40%] bg-blue_4D59A1" />
                </div>
                {/* ฝั่งขวา */}
                <div className="flex-grow flex flex-col h-screen">
                    <div className="relative min-h-[135px] bg-gray_EFEEEC">
                        <div className="absolute bottom-0 flex w-fit h-[52px] justify-center left-[8%] font-medium text-2xl">
                            <PeriodSelector period={"THIS WEEK"} periodPath={"thisweek"} />
                            <PeriodSelector period={"NEXT WEEK"} periodPath={"nextweek"} />
                            <PeriodSelector period={"WHOLE MONTH"} periodPath={"wholemonth"} />
                        </div>
                    </div>
                    <div className="relative h-full overflow-y-scroll scrollbar-hidden">
                        <div className="absolute w-[1px] h-full bg-gray_ECECEC left-[8%]"></div>
                        <div className="flex flex-col">
                            {periodBookings.map((item, index) => (
                                <Timeline key={index} bookings={item.bookings} fullDate={item.fullDate} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
