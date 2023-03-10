import React, { SetStateAction, useState } from 'react'
import { people } from './types'
import uniqId from 'uniqid'

type props = {
    setPeople: React.Dispatch<SetStateAction<people[]>>
    people: people[]
}



const AddPerson: React.FC<props> = ({setPeople, people }) => {
  
    const [inputs,setInputs] = useState({namei: "", agei: 0, cityi: ""})


    const[namei, setName] = useState("")
    const[agei, setAge] = useState(0)
    const[cityi, setCity] = useState("")


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const PersonToAdd = {
            id: people.length+1,
            name: namei,
            age: agei,
            city: cityi
        };      

        const data = await fetch('http://localhost:3008/person', {
            method:"POST",
            body: JSON.stringify(PersonToAdd),
            headers: {
                "Content-Type": "application/json"
            }
        })
        setPeople([...people,PersonToAdd])

    }

  return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input value={namei} onChange={(e) => setName(e.target.value)} required type="text" name="namei" placeholder='name' />
            <input value={agei} onChange={(e) => setAge(parseInt(e.target.value))}required type="number" name="agei" placeholder='age' />
            <input value={cityi} onChange={(e) => setCity(e.target.value)}required type="text" name="ciryi" placeholder='city' />
            <button type="submit">Add person</button>
        </form>
    </div>
  )
}

export default AddPerson
