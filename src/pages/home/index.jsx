import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
const navigate = useNavigate()
const [roomcode , setroomcode] = useState("")


const handleformsubmit = (e) => {
    e.preventDefault();
navigate(`room/${roomcode}`)
}

    return (
        <div className="homepage">
<form onSubmit={handleformsubmit}>
<div>

<label>Enter room code</label>
<input type="text" placeholder="Enter roomcode" onChange={(e) =>{
    setroomcode(e.target.value)
}} />
<button type="submit">Enter room</button>
</div>
</form>

        </div>
    )
}

export default Homepage