import React, { ReactElement, SetStateAction } from 'react'
import { people } from './types';


type props = {

    setPeople: React.Dispatch<SetStateAction<people[]>>
    people:people[]
}

const SortPerson: React.FC<props> = ({setPeople,people}) => {
    
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const arr = [...people].sort((a, b) => a.age - b.age);
        setPeople(arr);
      
    }
    
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <button type="submit">sort poeople</button>
            </form>
        </div>
        )
      
}
export default SortPerson
