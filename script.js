body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #1e90ff, #ffd700);
    color: #333;
    scroll-behavior: smooth;
    overflow-x: hidden;
    position: relative;
}

header {
    text-align: center;
    padding: 50px 20px;
    background: rgba(255, 255, 255, 0.8);
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    animation: fadeIn 1s ease-in;
}

h1 {
    font-size: 3em;
    color: #ff4500;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

h1 .highlight {
    background: #ffd700;
    padding: 5px 15px;
    border-radius: 20px;
    color: #1e90ff;
    font-weight: bold;
}

section {
    padding: 40px 20px;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    animation: slideIn 1s ease-in;
}

h2 {
    font-size: 2em;
    color: #fff;
    margin-bottom: 20px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}

#countdown {
    background: rgba(255, 69, 0, 0.8);
    color: #fff;
    border-radius: 15px;
    padding: 20px;
}

#timer {
    font-size: 1.8em;
    font-weight: bold;
}

#timer span {
    color: #ffd700;
    text-shadow: 0 0 5px rgba(255, 215, 0, 0.7);
}

#guest-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 300px;
    margin: 0 auto;
}

.guest {
    background: #1e90ff;
    color: #fff;
    padding: 15px;
    border-radius: 10px;
    font-size: 1.2em;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;
}

.guest:hover {
    transform: scale(1.05);
}

#details {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
}

#music-toggle {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    background: #ff4500;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    z-index: 10;
}

#music-toggle:hover {
    background: #e03e00;
}

#balloon-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideIn {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

@media (max-width: 600px) {
    h1 { font-size: 2em; }
    h2 { font-size: 1.5em; }
    #timer { font-size: 1.2em; }
    .guest { font-size: 1em; }
}
