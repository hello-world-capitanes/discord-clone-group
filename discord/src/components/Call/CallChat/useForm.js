import { useState } from "react"

function useForm(initialValue = {
    text:""
}) {

    const [form, setForm] = useState(initialValue)

    function handleOnChangeForm(event) {

        const newText = {
            text: event.target.value
        }
        setForm(newText) 
        
    }

    return { form, handleOnChangeForm }
}

export default useForm