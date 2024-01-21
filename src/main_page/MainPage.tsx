import "./MainPage.css"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

type Book = {
    id: number
    title: string
    completed: boolean
    simple_thumb: string
    author: string
}

const getBooks = async (): Promise<Book[]> => {
    const response = await fetch('https://wolnelektury.pl/api/books/?format=json')
    const data = await response.json()
    return data
}

export default function MainPage() {
    const [books, setBooks] = useState<Book[]>([])

    useEffect(() => {
        getBooks().then(setBooks)
    }, [])

    const navigate = useNavigate()

    function moveToLogin() {
        navigate("/login");
    }
    function moveToRegistration() {
        navigate("/registration")
    }
    return (
        <div id="container">
            <div id="header">
                <p id="logoText">Books</p>
                <ul id="headerButtons">
                    <li id="login" className="headerButton"><a onClick={moveToLogin}>Zaloguj sie</a></li>
                    <li id="register" className="headerButton"><a onClick={moveToRegistration}>Zarejestruj sie</a></li>
                </ul>
            </div>
            <div id="app-body">
                {books.map(book => (
                    <div className="box" key={book.id}>
                        <img src={book.simple_thumb} className="image" />
                        <div className="text">
                            <p className="title">{book.title}</p>
                            <p className="author">{book.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}