import React, { SetStateAction, useState } from 'react'
import { people } from './types'
import uniqId from 'uniqid'

type props = {
    setPeople: React.Dispatch<SetStateAction<people[]>>
    people: people[]
}



const EditPerson: React.FC<props> = ({setPeople, people }) => {
  
    const [inputs,setInputs] = useState({uidi: 0, namei: "", agei: 0, cityi: ""})

    const[uidi, setUidi] = useState(0)
    const[namei, setName] = useState("")
    const[agei, setAge] = useState(0)
    const[cityi, setCity] = useState("")


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
 

        const PersonChange = {
            id: uidi,
            name: namei,
            age: agei,
            city: cityi
        };      

        

        await fetch(`http://localhost:3008/person/${PersonChange.id}`, {
          method: 'PUT',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(PersonChange)
        })

        const newList = [...people]

        newList[PersonChange.id-1] = PersonChange;
        
        setPeople(newList)

    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input value={uidi} onChange={(e) => setUidi(parseInt(e.target.value))} required type="number" name="uidi" placeholder='uid' />
                <input value={namei} onChange={(e) => setName(e.target.value)} required type="text" name="namei" placeholder='name' />
                <input value={agei} onChange={(e) => setAge(parseInt(e.target.value))}required type="number" name="agei" placeholder='age' />
                <input value={cityi} onChange={(e) => setCity(e.target.value)}required type="text" name="ciryi" placeholder='city' />
                <button type="submit">Add person</button>
            </form>
        </div>
      )
}

export default EditPerson