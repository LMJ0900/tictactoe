'use client'
import { useState } from "react"

export default function PlayerInfo({ initialname, symbol, isActive, onChangeName }: any) {
    const [playerName, setPlayerName] = useState(initialname)
    const [isEditing, setIsEditing] = useState(false);

    function handleEditing() {
        setIsEditing((editing) => !editing)
        if (isEditing) {
            onChangeName(symbol, playerName)
        }

    }

    function handleChange(event: any) {
        setPlayerName(event.target.value);
    }
    return (<>
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {(isEditing === true) ? <input type="text" required value={playerName} onChange={handleChange} /> : <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditing}>{(isEditing === true) ? "Save" : "Edit"}</button>
        </li>
    </>)
}