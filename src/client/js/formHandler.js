function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    // checkForName(formText)
    Client.checkForName(formText)
    alert(formText)

    console.log("::: Form Submitted :::")
    fetch(`http://localhost:8081/api?text=${formText}`)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = `OBJECTIVITY: ${res.subjectivity}, CONFIDENCE: ${res.confidence}, IRONY: ${res.irony}`
    })
}

export { handleSubmit }
