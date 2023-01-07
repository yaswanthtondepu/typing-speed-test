import React from 'react'

const Stats = ({seconds, wordsPerMin, charsPerMin, accuracy}) => {
    return (
        <div style={{ display: "flex", gap: "2rem", paddingTop: "2rem" }}>
            <div style={statsContainer}>
                <div style={Container}>{seconds}</div>
                <div>seconds</div>
            </div>

            <div style={statsContainer}>
                <div style={Container}>{wordsPerMin}</div>
                <div>words/min</div>
            </div>

            <div style={statsContainer}>
                <div style={Container}>{charsPerMin}</div>
                <div>chars/min</div>
            </div>

            <div style={statsContainer}>
                <div style={Container}>{accuracy}</div>
                <div>% accuracy</div>
            </div>


        </div>
    )
}

const statsContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px"
}

const Container = {
    display: "flex",
    backgroundColor: "#ccc",
    padding: "1rem",
    borderRadius: "10px",
    fontSize: "1.3rem",
    color: "#000",
    width: "20px",
    alignItems: "center",
    justifyContent: "center"
}

export default Stats