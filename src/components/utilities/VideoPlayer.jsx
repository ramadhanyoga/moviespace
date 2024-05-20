"use client"

import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "250",
        height: "200"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
            <button onClick={handleVideoPlayer}
            className="text-color-primary float-right bg-color-secondary px-3 mb-2">X</button>
            <YouTube 
            videoId={youtubeId} 
            onReady={(event) => event.target.pauseVideo()}
            opts={option}
            />
        </div>
        )
    }

    const ButtonOpenTrailer = () => {
        return (
            <button onClick={handleVideoPlayer}
            className="fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark hover:bg-color-accent transition-all shadow-xl rounded">
                Tonton Trailer
            </button>
        )
    }

    return isOpen ? <Player /> : <ButtonOpenTrailer />
}

export default VideoPlayer