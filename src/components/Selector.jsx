import { useNavigate } from "react-router-dom"

export default function Selector({ roomId }) {
  const navigate = useNavigate()
  const handleSelect = () => {
    navigate(`/bookings/thisweek?roomId=${encodeURIComponent(roomId)}`);
  }
  return (
    <button className="border-2 bg-gray_F7F7F7 w-full h-[200px] rounded-lg hover:bg-gray_EFEEEC"
      onClick={handleSelect}
    >
      {roomId}
    </button>
  )
}
