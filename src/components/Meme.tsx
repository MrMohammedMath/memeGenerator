import React from "react"

export default function Meme() {
    const [memesData, setMemesData] = React.useState<{
        id: string,
        name: string,
        url: string,
        width: number,
        height: number,
        box_count: number
    }[]>([]);

    const [meme, setMeme] = React.useState<{
        img: string,
        topText: string,
        bottomText: string
    }>({
        img: "./images/memeimg.svg",
        topText: "",
        bottomText: ""
    });

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(json => {
                setMemesData(json.data.memes)
            });
    }, [])

    function newMemeImg(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        const r = parseInt((Math.random() * 100 as unknown) as string);
        setMeme(preMeme => {
            return {
                ...preMeme,
                img: memesData[r].url
            }
        });
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setMeme(preMeme => {
            const { name, value } = event.target;
            return {
                ...preMeme,
                [name]: value
            }
        })
    }

    return (
        <main>
            <form >
                <div className="form--inputs">
                    <input
                        type="text"
                        placeholder="Top text"
                        onChange={handleChange}
                        name="topText"
                        value={meme.topText}
                    />
                    <input
                        type="text"
                        placeholder="Bottom text"
                        onChange={handleChange}
                        name="bottomText"
                        value={meme.bottomText}
                    />
                </div>
                <button onClick={newMemeImg}>Get a new meme image</button>
            </form>

            <div className="meme--container">
                <img className="meme--img" src={meme.img} alt="memeimg" />
                <div className="meme-textLayer">
                    <span className="top-text-view">{meme.topText}</span>
                    <span className="bottom-text-view">{meme.bottomText}</span>
                </div>
            </div>
        </main>
    )
}