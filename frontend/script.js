function loadEvent(eventObject){

  const rootElement = document.getElementById("root");

  console.dir(rootElement);

  const listOfSectionElements = document.querySelectorAll("section");
  console.log(listOfSectionElements);


  let anchors = "";


  for (const sectionElement of listOfSectionElements) {
      console.log(sectionElement.id);
      anchors += `<a href="#${ sectionElement.id }"> ${ sectionElement.id } </a>`;
  }

  console.log(anchors);

  rootElement.insertAdjacentHTML("afterbegin", `<header>${ anchors }</header>`);
  
}

window.addEventListener("load", loadEvent);
