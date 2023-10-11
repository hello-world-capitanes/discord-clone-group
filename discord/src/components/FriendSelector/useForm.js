import { useState } from "react"
import userData from '../../assets/userdb.json'
function useForm(initialValue = {
}) {
    const friends = userData.User.friends
    const [form, setForm] = useState(initialValue)
    const [selectedFriends, setSelectedFriends] =useState(0)

    function toSelect() {
        return 10 - selectedFriends
    }

    function canSelectMore() {
        if (selectedFriends >= 10){
            return false
        }
        return true
    }
    function isSelected(username) {
        if (Object.keys(form).includes(username) && form[username]) {
            return true
        }
        return false
    }

    function handleOnChangeForm(event) {
        const name = event.target.name
        if(event.target.checked) {
            setSelectedFriends(prevState => prevState + 1)
        } else {
            setSelectedFriends(prevState => prevState - 1)
        }

        const newForm = {
            ...form,
            [name]: event.target.checked
        }
        setForm(newForm)
         
    }

    function handleSubmit(event) {
        event.preventDefault()
        const createMD = friends.filter((ele) => {
            if (Object.keys(form).includes(ele.username) && form[ele.username]){
                return ele
            }
        })
        // Pasar a la ruta que habra el chat con los usuarios
    }

    return { isSelected, canSelectMore, toSelect, handleOnChangeForm, handleSubmit }
}

export default useForm