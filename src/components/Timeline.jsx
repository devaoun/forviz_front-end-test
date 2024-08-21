import PeriodItem from "./PeriodItem";

export default function Timeline({ events }) {
    return (
        <div className="h-fit mt-8 flex flex-col relative">
            <div className="bg-gray_ECECEC border py-2 font-bold text-gray_787878 pl-[11%]">{`Today (Mon, 28 Sep)`}</div>
            <div className="flex flex-col gap-4 py-7">
                <PeriodItem/>
                <PeriodItem/>
                <PeriodItem/>
                <PeriodItem/>
            </div>
        </div>
    )
}