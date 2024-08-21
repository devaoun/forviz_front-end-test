export default function EventList({
  title,
  startTime,
  endTime
}) {
  return (
    <div className="text-white flex flex-col gap-[8px] py-[20px] px-[92px]">
        <div className="text-[16px] opacity-50 font-normal">{`${startTime} - ${endTime}`}</div>
        <div>{title}</div>
    </div>
  )
}
