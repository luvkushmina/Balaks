body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #1e90ff, #ffd700);
    color: #333;
    scroll-behavior: smooth;
}

header {
    text-align: center;
    padding: 50px 20px;
    background: rgba(255, 255, 255, 0.8);
    animation: fadeIn 1s ease-in;
}

h1 {
    font-size: 3em;
    color: #ff4500;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

section {
    padding: 40px 20px;
    text-align: center;
    max-width: 1000px;
    margin: 0 auto;
    animation: slideIn 1s ease-in;
}

h2 {
    font-size: 2em;
    color: #fff;
    margin-bottom: 20px;
}

#countdown {
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    border-radius: 10px;
}

#timer {
    font-size: 1.5em;
}

#invitation form {
    display: flex;
    justify-content: center;
    gap: 10px;
}

#invitation input {
    padding: 10px;
    font-size: 1em;
    border: none;
    border-radius: 5px;
}

#invitation button {
    padding: 10px 20px;
    font-size: 1em;
    background: #ff4500;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#invitation button:hover {
    background: #e03e00;
}

#confirmation {
    margin-top: 10px;
    color: #fff;
}

#guest-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
}

.guest {
    background: rgba(255, 255, 255, 0.9);
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.photo-gallery img {
    width: 200px;
    height: 150px;
    object-fit: cover;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.3s;
}

.photo-gallery img:hover {
    transform: scale(1.05);
}

#lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
}

#lightbox img {
    max-width: 90%;
    max-height: 90%;
}

#lightbox span {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 2em;
    color: #fff;
    cursor: pointer;
}

.hidden {
    display: none;
}

#music-toggle {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px;
    background: #ff4500;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
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
    #timer { font-size: 1em; }
}
