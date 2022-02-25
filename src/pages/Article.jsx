import React, { useRef } from 'react'

const Article = () => {
    const titleRef = useRef()

    function handleBackClick() {
        titleRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div>
            <h1 ref={titleRef}>A React article for Latin readers</h1>
            <button onClick={handleBackClick}>Back to the top</button>
        </div>
    )
}