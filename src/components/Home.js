import React from 'react'
import Navbar from './Navbar'
import Stats from './Stats'
import { useState, useEffect } from 'react'
import { sentences } from '../sentences'
import Typing from './Typing'


const Home = () => {
    const [seconds, setSeconds] = useState(60);
    const [wordsPerMin, setWordsPerMin] = useState(0);
    const [charsPerMin, setCharsPerMin] = useState(0);
    const [accuracy, setAccuracy] = useState(0);
    const [sentence, setSentence] = useState("");
    const [isTypingStarted, setIsTypingStarted] = useState(false)
    const [isFinished, setIsFinished] = useState(false)

    const [words, setWords] = useState([])
    const [currentIndex, setCurrentIndex] = useState(1)
    const [currentWord, setCurrentWord] = useState("")
    const [inputValue, setInputValue] = useState("")


    useEffect(() => {
        setSentence(sentences[Math.floor(Math.random() * sentences.length)])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (seconds === 0) {
            setIsFinished(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [seconds])

    useEffect(() => {
       isTypingStarted && seconds>0 && setTimeout(() => setSeconds(seconds - 1), 1000);
    }, [isTypingStarted, seconds])

    function restart(){
        setSeconds(60)
        setWordsPerMin(0)
        setCharsPerMin(0)
        setAccuracy(0)
        setSentence(sentences[Math.floor(Math.random() * sentences.length)])
        setIsTypingStarted(false)
        setIsFinished(false)
        setCurrentIndex(1)
        setCurrentWord("")
        setInputValue("")
        setWords([])

    }
 
        
    return (
        <>
            <Navbar />
            <div style={{display:"flex", justifyContent:'center', alignItems:"center", flexDirection:"column", paddingTop:"2rem"}}>
                <div>
                    TYPING SPEED TEST
                </div>
                <div style={{fontSize:"32px", paddingTop:"1rem", fontWeight:"600"}}>
                    Test your typing skills
                </div>
                <Stats seconds={seconds} wordsPerMin={wordsPerMin} charsPerMin={charsPerMin} accuracy={accuracy} setWordsPerMin={setWordsPerMin} setCharsPerMin={setCharsPerMin} setAccuracy={setAccuracy}/>

                <div style={{paddingTop:"3rem"}}>
                    <Typing sentence={sentence} seconds={seconds} wordsPerMin={wordsPerMin}
                     charsPerMin={charsPerMin} accuracy={accuracy} setWordsPerMin={setWordsPerMin} 
                     setCharsPerMin={setCharsPerMin} setAccuracy={setAccuracy}
                     isTypingStarted= {isTypingStarted} setIsTypingStarted= {setIsTypingStarted} restart= {restart} isFinished={isFinished} 
                     words={words} setWords = {setWords} 
                     currentIndex = {currentIndex} setCurrentIndex = {setCurrentIndex}
                    currentWord = {currentWord} setCurrentWord = {setCurrentWord}
                    inputValue = {inputValue} setInputValue = {setInputValue}
                     />
                </div>
            </div>
        </>
    )
}




export default Home