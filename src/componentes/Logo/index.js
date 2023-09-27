import './estilo.css'
import logo from '../../imagens/logo.svg'

export default function Logo(){
    return(
        <div className="logo">
            <img
                src={logo}
                alt="logo"
                className='logo-img'
            />
            <p><b>Alura</b> Books</p>
        </div>
    )
}