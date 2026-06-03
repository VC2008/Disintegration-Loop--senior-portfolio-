   // STEP 1: Define the array FIRST
        const projects = [
            {
        "projectName": "Costa Rica Website",
        "projectYear": 2023,
        "mainSubject": "General html",
        "ranking": 3,
        "description": "Travel project for a place of choosing"
    },
    {
        "projectName": "Farmers Market",
        "projectYear": 2024,
        "mainSubject": "General Css",
        "ranking": 4,
        "description": "Make a page for the farmers market"
    },
    {
        "projectName": "Magic 8 Ball",
        "projectYear": 2025,
        "mainSubject": "JS prompts",
        "ranking": 2,
        "description": "A simple magic 8 ball game"
    },
    {
        "projectName": "Adjective Generator",
        "projectYear": 2025,
        "mainSubject": "Js lists",
        "ranking": 7,
        "description": "Uses arrays to generate random adjectives"
    },
    {
        "projectName": "Hangman Project",
        "projectYear": 2025,
        "mainSubject": "General html",
        "ranking": 1,
        "description": "A classic hangman game implemented with HTML, CSS, and JavaScript"
    },
    {
        "projectName": "College Project",
        "projectYear": 2025,
        "mainSubject": "General html",
        "ranking": 8,
        "description": "Website for a college you'd like to attend"
    },
    {
        "projectName": "Winter Project",
        "projectYear": 2026,
        "mainSubject": "Js and Css",
        "ranking": 6,
        "description": "Team project for winter break"
    },
    {
        "projectName": "Client Project",
        "projectYear": 2026,
        "mainSubject": "Working with others + JS",
        "ranking": 5,
        "description": "music website for my friend"
    }
        ];


      
        const container = document.getElementById("projectContainer");


       
        projects.sort((a, b) => b.ranking - a.ranking);



        projects.forEach(project => {

            // Print project names to console
            console.log(project.projectName);

            // Add HTML cards
            container.innerHTML += `
                <div class="project-card">

                    <h2>${project.projectName}</h2>

                    <p><strong>Year:</strong> ${project.projectYear}</p>

                    <p><strong>Subject:</strong> ${project.mainSubject}</p>

                    <p><strong>Ranking:</strong> ${project.ranking}</p>

                    <p>${project.description}</p>

                </div>
            `;
        });