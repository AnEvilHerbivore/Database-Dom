const invDB = JSON.parse(localStorage.getItem("HomeInventory"))

console.log(invDB)
const parent = document.querySelector("#myStuff")

for (k in invDB) {
    let newSection = document.createElement("section")
    newSection.textContent = k
    newSection.setAttribute("class", "title")
    parent.appendChild(newSection)
    for (let i = 0; i < invDB[k].length; i++) {
        let subSection = document.createElement("section")
        let text = document.createElement("p")
        subSection.textContent = invDB[k][i].name
        subSection.setAttribute("class", "item")
        newSection.appendChild(subSection)
        text.textContent = "Location: " + invDB[k][i].location
        text.setAttribute("class", "description")
        subSection.appendChild(text)
        text = document.createElement("p")
        text.setAttribute("class", "description")
        text.textContent =  "Description: " + invDB[k][i].desription
        subSection.appendChild(text)
    }
}

