import getPeople from "./people";
import { renderPeopleList } from "./peopleList";
import Person from "./person";


const container = document.getElementById('app');

const people = getPeople();

renderPeopleList(container!,await people)
