import {useState} from 'react'
import Modal from 'react-modal'
import './bandejaEstilos.css'
import inbox from './inbox.svg'

const Inbox = () => {
    const [modalIsOpen, setModalIsOpen] = useState (false)

    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen (false)
    }

    const [messages] = useState([
        { author: 'Manuel' , text: 'Este es un mensaje no leído', leido: false, mencion: false}, 
        {author: 'Juanma' , text: 'Este es un mensaje y no leido', leido: false, mencion: false}, 
        {author: 'Rosario' , text: 'Esto es una mención y no leido', leido: false, mencion: true},
        {author: 'Rosario' , text: 'Esto es una mención y leído', leido: true, mencion: true},
        {author: 'María' , text: 'Esto es una mención y leído', leido: true, mencion: true},
        {author: 'Paula' ,text: 'Ete es un mencion y  leido', leido: true, mencion: true}, 
        {author: 'Paloma' , text: 'Mensaje leido + mencion', leido: true, mencion: true},
        {author: 'Raúl' , text: 'Mensaje leido + mencion', leido: true, mencion: true},
        {author: 'Adrián' , text: 'Mensaje no leido +', leido: false, mencion: false},
        {author: 'Luis' , text: 'Mensaje no leido ', leido: false, mencion: false},
        {author: 'Victoria' , text: 'Mensaje leido + mencion', leido: true, mencion: true},
        

    ])

    const [filter, setFilter] = useState ('para-ti')

    return (
        <div>
            <img 
                className="inbox-imagen"
                src={inbox}
                alt="Abrir bandeja de entrada"
                onClick={openModal}
            />    
            <Modal 
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Bandeja de Entrada"
                className="custom-modal"
            >
                <h2> Bandeja de Entrada</h2>
                <div>
                    <button onClick={() => setFilter('para-ti')}> Para ti </button>
                    <button onClick={() => setFilter('no-leidos')}> No leidos</button>
                    <button onClick={() => setFilter('menciones')}> Menciones </button>
                </div>
                <ul className="message-list">
                    {messages.map((message, index) => {
                        if (
                            (filter === 'para-ti' ||
                                (filter === 'no-leidos' && !message.leido) ||
                                (filter === 'menciones' && message.mencion) )
                        ) {
                            return (
                                <li key={index} className="message-item">
                                    <strong>{message.author} : </strong>
                                    {message.text}
                                   
                                </li>
                            )
                        }
                        return null
                    })}
                </ul>
                <button onClick={closeModal} className="cerrar-boton"> X </button>
            </Modal>
        </div>
    )
}

export default Inbox