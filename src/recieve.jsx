import { useContext } from "react";
import userContext from "./context.js";
function Shero ()
{
    const shinchan = useContext(userContext);
    return (
        <h1>{shinchan}</h1>
    );
}
export default Shero;