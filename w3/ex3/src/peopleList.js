"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderPeopleList = void 0;
function renderPeopleList(container, people) {
    // Create a div element for each person
    const personDivs = people.map(person => {
        const div = document.createElement('div');
        div.classList.add('person');
        div.innerHTML = `
        <h2 class="person__name">${person.name}</h2>
        <p class="person__occupation">${person.occupation}</p>
        <p class="person__age">${person.age}</p>
        <p class="person__salary">${person.salary}</p>
      `;
        return div;
    });
    // Append the person divs to the container element
    personDivs.forEach(div => container.appendChild(div));
}
exports.renderPeopleList = renderPeopleList;
