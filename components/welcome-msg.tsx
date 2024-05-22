"use client"

import { useUser } from "@clerk/nextjs"

export const WelcomeMsg = () => {
    const { user, isLoaded } = useUser()

    return (
        <div className="space-y-2 mb-4">
            <h2 className="text-white text-2xl lg:text-4xl font-medium">
                Welcomoe Back{isLoaded ? ", " : " "}{user?.firstName}👍
            </h2>
            <p className="text-sm lg:text-base text-[#89b6fb]">
                This is your Financial Overview Report
            </p>
        </div>
    )
}