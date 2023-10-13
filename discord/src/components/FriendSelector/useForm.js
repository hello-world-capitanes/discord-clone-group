import { useState } from "react"
import userData from '../../assets/userdb.json'
function useForm(initialValue = {
}) {
    const friends = userData.User.friends
    const [form, setForm] = useState(initialValue)

    function toSelect() {
        return 10 - Object.values(form).filter(ele => ele==true).length
    }

    function canSelectMore() {
        return  !(Object.values(form).filter(ele => ele==true).length >= 10)
    }
    function isSelected(username) {
        return (Object.keys(form).includes(username) && form[username])
    }

    function handleOnChangeForm(event) {
        const name = event.target.name

        const newForm = {
            ...form,
            [name]: event.target.checked
        }
        setForm(newForm)
         
    }

    function handleSubmit(event) {
        event.preventDefault()
        const createMD = friends.filter((ele) => {
            return (Object.keys(form).includes(ele.username) && form[ele.username])
        })
        // Pasar a la ruta que habra el chat con los usuarios
    }

    return { isSelected, canSelectMore, toSelect, handleOnChangeForm, handleSubmit }
}

export default useForm