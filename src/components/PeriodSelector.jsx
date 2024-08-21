import { useState } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

export default function PeriodSelector({
    period,
    periodPath
}) {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const location = useLocation()

    const isActive = location.pathname.includes(periodPath)

    const handleClick = () => {
        const roomId = searchParams.get("roomId")
        navigate(`/bookings/${periodPath}?roomId=${roomId}`)
    }

    return (
        <button
            className={`relative w-full flex justify-center hover:opacity-100 ${!isActive ? 'opacity-50' : ''}`}
            onClick={handleClick}
        >
            {period}
            <div
                className={`absolute bottom-0 h-1 bg-blue_707FDD transition-all duration-300 ease-in-out ${isActive ? "w-[50px]" : "w-0"
                    }`}
            ></div>
        </button>
    )
}
