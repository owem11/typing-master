# ⌨️ Typing Master — React Speed Test

A sleek, minimal, Monkeytype-inspired typing speed application built with **React**, **Context API**, and **Styled Components**.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ⚡ Features

* **Real-Time WPM & Accuracy Engine:** Instant calculation of Words Per Minute (WPM) and accuracy percentages upon test completion.
* **Customizable Test Timers:** Seamlessly toggle between 15-second, 30-second, and 60-second modes managed via React Context.
* **Dynamic Keystroke Feedback:** Character-level visual cues (green/bright for correct, red for typos) with an animated blinking caret.
* **Hidden Input Focus Trap:** Focuses keystrokes without obstructing the custom typography and styled DOM elements.
* **Monkeytype Minimalist Theme:** Dark-mode UI palette (`#323437`) optimized for contrast and reduced eye strain.

---

## 📂 Project Structure

```text
typing-master/
├── src/
│   ├── Components/
│   │   ├── TypingBox.jsx      # Core typing engine & word refs
│   │   └── UpperMenu.jsx      # Timer configuration bar
│   ├── Context/
│   │   └── TestModeContext.jsx # Global test timer state management
│   ├── Styles/
│   │   └── global.js          # Theme design tokens & animation keyframes
│   ├── App.js                 # App root layout
│   └── index.js               # React entry point with Context Provider
└── package.json
