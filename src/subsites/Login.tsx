import "./Subsites.css"
export default function Login() {
    return (
        <div className="btn-container">
            <input placeholder="Podaj login" type="text" />
            <input placeholder="Podaj hasło" type="text" />
            <a className="btn">Zaloguj się</a>
        </div>
    )
}