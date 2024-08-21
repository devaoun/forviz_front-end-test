import Selector from "../components/Selector";
import { roomIds } from "../mockData";

export default function SelectorPage() {
    return (
        <div className='p-8 flex flex-col justify-center items-center h-screen bg-white gap-72'>
            <div className="mx-auto w-fit text-[30px] font-bold">Select room</div>
            <div className="w-full flex justify-around gap-8">
                {roomIds.map(roomId => <Selector key={roomId} roomId={roomId} />)}
            </div>
        </div>
    )
}
