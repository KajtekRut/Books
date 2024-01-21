import "./Subsites.css"
export default function Registration() {
    return (
        <div className="btn-container">
            <input placeholder="Utwórz login" type="text" />
            <input placeholder="Utwórz hasło" type="text" />
            <a className="btn">Zarejestruj się</a>
        </div>
    )
}