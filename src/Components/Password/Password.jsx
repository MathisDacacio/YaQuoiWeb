import "./Password.css";
import {Eye, EyeOff} from  'lucide-react'
import { useState } from "react";

export default function Password({ref}) {
    const [InputType, setInputType] = useState("password");
    return (
        <div>
            <input type={InputType}
            placeholder="Entrez votre mot de passe"
            ref={ref}
            />
            <button onClick={() => setInputType(InputType === "password" ? "text" : "password")}>
                {InputType === "password" ? <Eye /> : <EyeOff />}
            </button>
        </div>
    );
}