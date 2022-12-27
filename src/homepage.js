import {useState} from "react"

function Homepage() {
const [likes, setLikes] = useState(0); 

function handleClick() {
setLikes(likes + 1);
}

return (
 <div>
 {/* ... */}
<button onClick={handleClick}>Likes ({likes})</button>
 </div>
);
}

export default Homepage