export default function Header() {
    return (
        <header className="header">
            <div className="header--logo-container">
                <img className="header--logo" src="./images/Troll Face.svg" alt="Troll Face" />
                <h1 className="header--title">Meme Generator</h1>
            </div>
            <h3 className="header--info">React Course - Project 3</h3>
        </header>
    );
}