"use client"

import * as motion from "motion/react-client"
import { useState } from "react"

export default function LayoutAnimation() {
    const [isOn, setIsOn] = useState(false)

    const toggleSwitch = () => setIsOn(!isOn)

    return (
        <button
            className="toggle-container"
            style={{
                ...container,
                backgroundColor: isOn ? "gray" : "cornflowerblue",
                justifyContent: "flex-" + (isOn ? "start" : "end"),
            }}
            onClick={toggleSwitch}
        >
            <motion.div
                className="toggle-handle"
                style={handle}
                layout
                transition={{
                    type: "spring",
                    visualDuration: 0.2,
                    bounce: 0.2,
                }}
            />
        </button>
    )
}

/**
 * ==============   Styles   ================
 */

const container = {
    width: 40,
    height: 18,
    
    borderRadius: 50,
    cursor: "pointer",
    display: "flex",
    padding: 2,
}

const handle = {
    width: 14,
    height: 14,
    backgroundColor: "#fff",
    borderRadius: "50%",
}