fetch('projects.json')
  .then(response => response.json()) // Parse the JSON string into an object
  .then(data => {
    // Access the HTML elements and update their content
    document.getElementById('projectName').textContent = data.projectName;
    document.getElementById('projectYear').textContent = data.projectYear;
    document.getElementById('mainSubject').textContent = data.mainSubject;
    document.getElementById('ranking').textContent = data.ranking;
    document.getElementById('description').textContent = data.description;
  })
  .catch(error => console.error('Error loading JSON:', error));