import "./Login.css";
import Password from "../Password";

export default function Login() {
    const handleReset = () => {

    }

    return (
        <div>
            <label>Email</label>
            <input type="email" />
            <label>Mot de passe</label>
            <Password ref={PasswordRef}/>
            <button>Connexion</button>
            <button>Reset</button>
        </div>
    );
}