export default function PeriodItem({
    startTime,
    endTime,
    title,
    index
}) {
    return (
        <div className="relative">
            <div className={`absolute left-[8%] top-2 h-[10px] w-[10px] ${index % 3 === 2 ? "bg-blue_2EBAEE" : index % 3 === 1 ? "bg-green-500" : "bg-red-500"} rounded-full transform -translate-x-1/2`} />
            <div className="ml-[11%]">
                <div className="opacity-50 text-base">{`${startTime} - ${endTime}`}</div>
                <div className="text-xl">{title}</div>
            </div>
        </div>
    )
}
