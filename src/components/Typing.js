import React from 'react'
import { useEffect, useRef } from 'react'



const Typing = ({ sentence, wordsPerMin, isFinished,
    setWordsPerMin, setCharsPerMin, setAccuracy, isTypingStarted, setIsTypingStarted, restart,
words, setWords, currentIndex, setCurrentIndex, currentWord, setCurrentWord, inputValue, setInputValue }) => {
    
    const inputElement = useRef();
    const scrollElement = useRef();



    useEffect(() => {
        setWords(sentence.split(" "))
        setCurrentWord(sentence.split(" ")[0])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sentence])

   

    useEffect(() => {
        inputElement.current.focus();
    }, [])

    useEffect(() => {
        if (!currentWord.startsWith(inputValue.trim())) {
            inputElement.current.style.backgroundColor = "#c26363"
            inputElement.current.style.color = "white"
            inputElement.current.style.textDecoration = "line-through"
        }
        else {
            inputElement.current.style.color = "#000"
            inputElement.current.style.backgroundColor = "#ccc"
            inputElement.current.style.textDecoration = "none"
        }
    }, [inputValue, currentWord])

    function handleKeyPress(e) {

        if (!isTypingStarted) {
            setIsTypingStarted(true)
        }


        if (e.key === " ") {
            scrollElement.current.scrollBy(currentWord.length * 9, 0)
            if (inputValue.trim() === currentWord.trim()) {
                setWordsPerMin((prev) => prev + 1)
                setCharsPerMin((prev) => prev + currentWord.length)
            }


            setCurrentIndex(currentIndex + 1)
            setCurrentWord(words[currentIndex])
            setInputValue("")
        }
    }


    useEffect(() => {
        if (isTypingStarted) {
            let acc = (wordsPerMin / (currentIndex - 1)) * 100
            setAccuracy(Math.round(acc))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [wordsPerMin, currentIndex])

    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "2rem" }}>
            <div className='text-container' style={{ display: "flex", maxWidth: "calc(100vw - 2%)", overflowX: "auto" }} ref={scrollElement}>
                {words.map((word, index) => {
                    return <div key={index} style={{ padding: "0 0.25rem", backgroundColor: currentIndex - 1 === index ? '#9896b0' : '', fontWeight: currentIndex - 1 === index ? 'bold' : 'normal', color: currentIndex - 1 === index ? '#fff' : '', fontSize: currentIndex - 1 === index ? '1.3rem' : '' }}>{word}</div>
                })}
            </div>
            {/* <div className='text-container' style={{ display: "flex", maxWidth: "calc(100vw - 2%)" }} ref={scrollElement}>
               <div>
                    {words.slice(0,currentIndex-1).map((word, index) => {
                        return <div key={index} style={{ padding: "0 0.25rem", backgroundColor: currentIndex - 1 === index ? '#9896b0' : '', fontWeight: currentIndex - 1 === index ? 'bold' : 'normal', color: currentIndex - 1 === index ? '#fff' : '', fontSize: currentIndex - 1 === index ? '1.3rem' : '' }}>{word}</div>
                    })}
               </div>
               <div>
                {words[currentIndex-1]}
               </div>
               <div>
                    {words.splice(currentIndex, words.length).map((word, index) => {
                        return <div key={index} style={{ padding: "0 0.25rem", backgroundColor: currentIndex - 1 === index ? '#9896b0' : '', fontWeight: currentIndex - 1 === index ? 'bold' : 'normal', color: currentIndex - 1 === index ? '#fff' : '', fontSize: currentIndex - 1 === index ? '1.3rem' : '' }}>{word}</div>
                    })}
               </div>
            </div> */}
            {!isFinished && <div>
                <input type="text" style={inpStyle} value={inputValue} ref={inputElement} onChange={(e) => setInputValue(e.target.value)} onKeyPress={handleKeyPress} autoComplete="nope" />
            </div>}
            {isFinished && <> <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Time's up!</div>
                <button style={btnStyle} onClick={() => restart()}>Restart</button>
            </>
            }
        </div>
    )
}

const inpStyle = {
    backgroundColor: "#ccc",
    width: "250px",
    padding: "1rem 0",
    borderRadius: "10px",
    fontSize: "1.3rem",
    color: "#000",
    border: "none",
    outline: "none",
    textAlign: "center"
}

const btnStyle = {
    backgroundColor: "#ccc",
    width: "150px",
    padding: "1rem 0",
    borderRadius: "10px",
    fontSize: "1.3rem",
    color: "#000",
    border: "none",
    outline: "none",
    textAlign: "center",
    cursor: "pointer"
}
export default Typing