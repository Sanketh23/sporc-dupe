import React from "react";

interface CircleTimerProps {
    timeLeft: number;
    totalTime: number;
    size?: number;
    strokeWidth?: number;
}

export default function CircleTimer({
    timeLeft,
    totalTime,
    size = 90,
    strokeWidth = 6,
}: CircleTimerProps) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const progress = timeLeft / totalTime;
    const dashOffset = circumference * (1 - progress);

    // -----------------------------
    // Dynamic Color Logic
    // -----------------------------
    let color = "#34d399"; // emerald-400 (green)

    if (progress <= 0.5 && progress > 0.2) {
        color = "#facc15"; // yellow-400
    } else if (progress <= 0.2) {
        color = "#f87171"; // red-400
    }

    return (
        <div className="relative flex items-center justify-center">
            <svg width={size} height={size}>
                {/* Background Circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth={strokeWidth}
                    fill="none"
                />

                {/* Animated Progress Circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                    strokeLinecap="round"
                    style={{
                        transition: "stroke-dashoffset 0.3s linear, stroke 0.3s ease",
                    }}
                />
            </svg>

            {/* Timer Text */}
            <div
                className="absolute inset-0 flex items-center justify-center 
             text-xl font-bold"
                style={{ color }}
            >
                {timeLeft}s
            </div>

        </div>
    );
}
