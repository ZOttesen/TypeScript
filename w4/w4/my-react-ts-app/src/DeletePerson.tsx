import { type } from 'os';
import React, { ReactElement, SetStateAction } from 'react'
import { people } from './types';


type props = {

    setPeople: React.Dispatch<SetStateAction<people[]>>
    people:people[]
}

const DeletePerson: React.FC<props> = ({setPeople,people}) => {
    
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3008/person');
        const data = await response.json();
        const lastObject = data[data.length - 1];
        await fetch(`http://localhost:3008/person/${lastObject.id}`, {
          method: 'DELETE',
        });
        const arr = people.filter(el => el.id!=lastObject.id);
        setPeople(arr);
      
    }
    
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <button type="submit">delete person</button>
            </form>
        </div>
        )
      
}

export default DeletePerson
