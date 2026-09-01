import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
    --bg-color: #000;
    --main-color: #e2b714;
    --sub-color: #646669;
    --text-color: #d1d0c5;
    --error-color: #ca4754;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto Mono', 'Century Gothic', monospace, sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  }

  .App {
    width: 1000px;
    max-width: 90%;
    margin: 0 auto;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 90vh;
  }

  .header, .footer {
    text-align: center;
    color: var(--sub-color);
    font-size: 0.9rem;
  }

  /* Upper Menu Bar */
  .upper-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;
    color: var(--sub-color);
    font-size: 1.2rem;
  }

  .countdown {
    color: var(--main-color);
    font-size: 1.5rem;
    font-weight: bold;
  }

  .modes {
    display: flex;
    gap: 15px;
    background-color: #2c2e31;
    padding: 8px 18px;
    border-radius: 8px;
  }

  .time-mode {
    cursor: pointer;
    color: var(--sub-color);
    transition: color 0.2s ease;
  }

  .time-mode:hover {
    color: var(--text-color);
  }

  /* Hidden Input Trap */
  .hidden-input {
    opacity: 0;
    position: absolute;
    left: -9999px;
    top: -9999px;
  }

  /* Text Container & Cursor Engine */
  .typing-box-wrapper {
    position: relative;
    width: 100%;
    cursor: pointer;
    outline: none;
  }

  .words-wrapper {
    display: flex;
    flex-wrap: wrap;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: var(--sub-color); /* Muted color for untyped text */
    user-select: none;
    max-height: 140px;
    overflow: hidden;
  }

  .word {
    margin-right: 12px;
    margin-bottom: 8px;
    display: inline-block;
  }

  .char {
    position: relative;
    transition: color 0.1s ease;
  }

  /* Character State Styles */
  .char.correct {
    color: var(--text-color); /* Bright white/grey when typed correctly */
  }

  .char.incorrect {
    color: var(--error-color); /* Red on error */
  }

  /* Animated Blinking Caret on active letter */
  .char.current {
    color: var(--text-color);
    border-left: 2px solid var(--main-color);
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%, 100% { border-color: var(--main-color); }
    50% { border-color: transparent; }
  }

  /* Result Screen Layout */
  .result-view {
    text-align: center;
    padding: 3rem;
    background: #2c2e31;
    border-radius: 12px;
  }

  .result-view h1 {
    color: var(--main-color);
    margin-bottom: 1rem;
  }

  .result-view h2 {
    font-size: 1.8rem;
    margin: 0.5rem 0;
  }

  .result-view button {
    margin-top: 1.5rem;
    padding: 10px 24px;
    font-size: 1rem;
    background: var(--main-color);
    color: var(--bg-color);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.1s ease;
  }

  .result-view button:hover {
    transform: scale(1.05);
  }
`;