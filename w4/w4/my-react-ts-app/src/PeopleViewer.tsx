import { type } from 'os'
import React from 'react'
import internal from 'stream'
import people from './people.json'

type props = {
    id: number
    name: string
    age: number
    city: string
}

type peopleProps={
    people: props[]
}

const PeopleViewer:React.FC<peopleProps> = ({people}) => {
  return (

    <div>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>city</th>
                </tr>
            </thead>
            <tbody>
                {people.map((person: props)=> 
                <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.age}</td>
                    <td>{person.city}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default PeopleViewer
