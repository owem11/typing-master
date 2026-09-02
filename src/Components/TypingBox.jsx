import React, { createRef, useEffect, useMemo, useRef, useState } from 'react';
import UpperMenu from './UpperMenu';
import Stats from './Stats';
import { useTestMode } from '../Context/TestModeContext';
import { generate as randomWords } from 'random-words';

const TypingBox = () => {
    const inputRef = useRef(null);
    const { testTime } = useTestMode();
    
    // State Declarations
    const [countDown, setCountDown] = useState(testTime);
    const [testStarted, setTestStarted] = useState(false);
    const [testEnded, setTestEnded] = useState(false);
    
    const [wordsArray, setWordsArray] = useState(() => randomWords(50));
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [correctChars, setCorrectChars] = useState(0);
    const [incorrectChars, setIncorrectChars] = useState(0);

    const wordSpanRef = useMemo(() => {
        return Array(wordsArray.length).fill(0).map(() => createRef());
    }, [wordsArray]);

    useEffect(() => {
        setCountDown(testTime);
    }, [testTime]);

    useEffect(() => {
        focusInput();
    }, []);

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    useEffect(() => {
        let interval = null;
        if (testStarted && countDown > 0) {
            interval = setInterval(() => {
                setCountDown((prev) => prev - 1);
            }, 1000);
        } else if (countDown === 0) {
            setTestEnded(true);
            setTestStarted(false);
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [testStarted, countDown]);

    const handleKeyDown = (e) => {
        if (testEnded) return;

        if (!testStarted) {
            setTestStarted(true);
        }

        const currentWordSpans = wordSpanRef[currentWordIndex].current.childNodes;

        // Spacebar logic
        if (e.keyCode === 32) {
            if (currentCharIndex < currentWordSpans.length) {
                currentWordSpans[currentCharIndex].classList.remove('current');
            }

            if (currentWordIndex + 1 < wordSpanRef.length) {
                wordSpanRef[currentWordIndex + 1].current.childNodes[0].className = 'char current';
                setCurrentWordIndex((prev) => prev + 1);
                setCurrentCharIndex(0);
            }
            return;
        }

        // Backspace logic
        if (e.keyCode === 8) {
            if (currentCharIndex !== 0) {
                if (currentCharIndex < currentWordSpans.length) {
                    currentWordSpans[currentCharIndex].className = 'char';
                }
                currentWordSpans[currentCharIndex - 1].className = 'char current';
                setCurrentCharIndex((prev) => prev - 1);
            }
            return;
        }

        // Character typing logic
        if (currentCharIndex < currentWordSpans.length) {
            if (e.key === currentWordSpans[currentCharIndex].innerText) {
                currentWordSpans[currentCharIndex].className = 'char correct';
                setCorrectChars((prev) => prev + 1);
            } else {
                currentWordSpans[currentCharIndex].className = 'char incorrect';
                setIncorrectChars((prev) => prev + 1);
            }

            if (currentCharIndex + 1 < currentWordSpans.length) {
                currentWordSpans[currentCharIndex + 1].className = 'char current';
            }
            setCurrentCharIndex((prev) => prev + 1);
        }
    };

    const calculateWPM = () => {
        return Math.round((correctChars / 5) / (testTime / 60));
    };

    const resetTest = () => {
        setCountDown(testTime);
        setCurrentWordIndex(0);
        setCurrentCharIndex(0);
        setCorrectChars(0);
        setIncorrectChars(0);
        setTestStarted(false);
        setTestEnded(false);
        setWordsArray(randomWords(50));
        focusInput();
    };

    return (
        <div className="typing-box-wrapper" onClick={focusInput}>
            <UpperMenu countDown={countDown} />
            
            <input
                type="text"
                className="hidden-input"
                ref={inputRef}
                onKeyDown={handleKeyDown}
            />

            {testEnded ? (
                <Stats 
                    wpm={calculateWPM()} 
                    accuracy={Math.round((correctChars / (correctChars + incorrectChars || 1)) * 100)} 
                    correctChars={correctChars}
                    incorrectChars={incorrectChars}
                    missedChars={0}
                    extraChars={0}
                    resetTest={resetTest}
                />
            ) : (
                <div className="words-wrapper">
                    {wordsArray.map((word, index) => (
                        <span className="word" key={index} ref={wordSpanRef[index]}>
                            {word.split('').map((char, charIdx) => (
                                <span 
                                    key={charIdx} 
                                    className={`char ${index === 0 && charIdx === 0 ? 'current' : ''}`}
                                >
                                    {char}
                                </span>
                            ))}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TypingBox;