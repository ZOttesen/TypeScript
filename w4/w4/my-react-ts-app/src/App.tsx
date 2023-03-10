import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PeopleViewer from './PeopleViewer'
import AddPerson from './AddPerson'
import { people } from './types'
import DeletePerson from './DeletePerson'
import SortPeople from './SortPeople'
import EditPerson from './EditPerson'



function App() {
  const [name, setName] = useState<string>("")
  const [people, setPerson] = useState<people[]>([]);

  const fetchPeople = async () => {
    const peoples = await fetch("http://localhost:3008/person");
    const data = await peoples.json();
    setPerson(data);
  }

  useEffect(()=> {
    fetchPeople();
  },[])

  return (
    <div className="App">
    <PeopleViewer people={people}/>
    <AddPerson setPeople={setPerson} people={people}/>
    <DeletePerson setPeople={setPerson} people={people}/>
    <SortPeople setPeople={setPerson} people={people}/>
    <EditPerson setPeople={setPerson} people={people}/>
    </div>
  )
}

export default App
