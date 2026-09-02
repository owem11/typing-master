import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --bg-color: ${({ theme }) => theme.bg};
    --main-color: ${({ theme }) => theme.main};
    --sub-color: ${({ theme }) => theme.sub};
    --text-color: ${({ theme }) => theme.text};
    --error-color: ${({ theme }) => theme.error};
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
    transition: background-color 0.25s ease, color 0.25s ease;
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

  .header {
    text-align: center;
    color: var(--sub-color);
    font-size: 1.2rem;
    font-weight: bold;
  }

  /* Upper Menu */
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
    background-color: rgba(0, 0, 0, 0.15);
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

  /* Hidden Input */
  .hidden-input {
    opacity: 0;
    position: absolute;
    left: -9999px;
  }

  /* Typing Area */
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
    color: var(--sub-color);
    user-select: none;
    max-height: 140px;
    overflow: hidden;
  }

  .word {
    margin-right: 12px;
    margin-bottom: 8px;
    display: inline-block;
  }

  .char.correct {
    color: var(--text-color);
  }

  .char.incorrect {
    color: var(--error-color);
  }

  .char.current {
    color: var(--text-color);
    border-left: 2px solid var(--main-color);
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%, 100% { border-color: var(--main-color); }
    50% { border-color: transparent; }
  }

  /* Result View */
  .result-view {
    text-align: center;
    padding: 3rem;
    background: rgba(0, 0, 0, 0.15);
    border-radius: 12px;
  }

  .result-view h1 {
    color: var(--main-color);
    margin-bottom: 1rem;
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
  }

  /* 3-Column Footer Layout */
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-weight: bold;
    text_decoration: none;
    padding-top: 2rem;
    color: var(--sub-color);
    font-size: 1rem;
  }

  .footer-left {
    flex: 1;
    text-align: left;
    text_decoration: none;
  }

  .footer-center {
    flex: 1;
    text-align: center;
    text_decoration: none;
  }

  .footer-right {
    flex: 1;
    text-align: right;
  }

  .github-link {
    color: var(--sub-color);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .github-link:hover {
    color: var(--main-color);
    text-decoration: underline;
  }

  .theme-select {
    background-color: var(--bg-color);
    color: var(--text-color);
    border: 1px solid var(--sub-color);
    padding: 6px 12px;
    border-radius: 6px;
    font-family: inherit;
    font-size: 0.9rem;
    cursor: pointer;
    outline: none;
    transition: border-color 0.2s ease, background-color 0.25s ease;
  }

  .theme-select:hover, .theme-select:focus {
    border-color: var(--main-color);
  }

  .stats-box {
    display: flex;
    width: 1000px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
}

.left-stats {
    width: 30%;
    padding: 30px;
}

.right-stats {
    width: 70%;
}

.title {
    font-size: 20px;
    color: var(--sub-color);
}

.subtitle {
    font-size: 35px;
    color: var(--main-color);
    margin-bottom: 20px;
}
.stats-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.restart-btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
}

.restart-btn {
    padding: 10px 28px;
    font-size: 1rem;
    background-color: var(--main-color);
    color: var(--bg-color);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: opacity 0.2s ease;
}

.restart-btn:hover {
    opacity: 0.85;
}


`;