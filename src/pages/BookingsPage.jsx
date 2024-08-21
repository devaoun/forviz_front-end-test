import { useSearchParams } from "react-router-dom";
import EventList from "../components/EventList";
import PeriodSelector from "../components/PeriodSelector";
import Timeline from "../components/Timeline";

const events = [
    {
        title: 'Event 1',
        date: 'August 1, 2024',
        description: 'This is the description for event 1.'
    },
    {
        title: 'Event 2',
        date: 'August 15, 2024',
        description: 'This is the description for event 2.'
    },
    {
        title: 'Event 3',
        date: 'August 30, 2024',
        description: 'This is the description for event 3.'
    },
];

export default function BookingsPage() {
    const [searchParams] = useSearchParams()
    const roomId = searchParams.get("roomId")
    return (
        <div className='flex h-screen bg-white'>
            <div className="flex-none w-[585px] bg-blue_46529D z-0">
                <div className="relative flex flex-col justify-center h-full">
                    <div className="absolute top-0 right-0 w-4/5 h-[135px] bg-blue_2EBAEE p-8">
                        <div className="w-fit text-white font-bold text-[54px] absolute bottom-0">{roomId}</div>
                    </div>
                    <div className="relative flex flex-col justify-center gap-[30px] pt-[150px]">
                        <div className="text-white ml-[90px] font-lato">Upcoming</div>
                        <div className="ml-[90px] text-white">
                            <div className="opacity-50 text-[50px] font-thin font-lato">Monday</div>
                            <div className="text-[50px] font-thin font-lato">28 Sep</div>
                        </div>
                        <div>
                            <EventList />
                            <EventList />
                            <EventList />
                        </div>
                    </div>
                    <div className="absolute bottom-0 -z-10 bg-blue_4D59A1 h-2/5 w-full"></div>
                </div>
            </div>
            <div className="grow w-full flex flex-col">
                <div className="h-[135px] bg-gray_EFEEEC w-full flex items-end">
                    <div className="h-[52px] w-[519px] ml-[8%] flex justify-around">
                        <PeriodSelector period={"THIS WEEK"} periodPath={"thisweek"} />
                        <PeriodSelector period={"NEXT WEEK"} periodPath={"nextweek"} />
                        <PeriodSelector period={"WHOLE MONTH"} periodPath={"wholemonth"} />
                    </div>
                </div>
                <div className="relative grow shadow-2xl z-0 overflow-y-scroll">
                    <div className="absolute left-[8%] h-full w-[1px] bg-gray_ECECEC" />
                    <Timeline />
                    <Timeline />
                </div>
            </div>
        </div>
    )
}