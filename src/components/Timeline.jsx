import { formatTime } from "../utils/bookings";
import PeriodItem from "./PeriodItem";

export default function Timeline({
    bookings,
    fullDate,
}) {
    return (
        <div className="h-fit mt-8 flex flex-col relative">
            <div className="bg-gray_ECECEC border py-2 font-bold text-gray_787878 pl-[11%]">{`${fullDate.day}, (${fullDate.date} ${fullDate.month})`}</div>
            <div className="flex flex-col gap-4 py-7">
                {bookings.map((booking,index) => <PeriodItem key={booking.id} title={booking.title} startTime={formatTime(booking.startTime)} endTime={formatTime(booking.endTime)} index={index} />)}
            </div>
        </div>
    )
}