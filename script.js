var projects = [
    {
        "projectName": "Costa Rica Website",
        "projectYear": 2023,
        "mainSubject": "General html",
        "ranking": 3,
        "description": "Travel project for a place of choosing",
         "image": "IMGS/Flag-Costa-Rica.webp",
        "link" : "https://replit.com/join/uvurcpuial-vincentcolon"
    },
    {
        "projectName": "Farmers Market",
        "projectYear": 2024,
        "mainSubject": "General Css",
        "ranking": 4,
        "description": "Make a page for the farmers market",
         "image": "IMGS/0e46c4744ce2bd3323ef93fc2a5922f0.300x300x1.jpg",
         "link" : "https://replit.com/join/yettujhxqq-vincentcolon"

    },
    {
        "projectName": "Magic 8 Ball",
        "projectYear": 2025,
        "mainSubject": "JS prompts",
        "ranking": 2,
        "description": "A simple magic 8 ball game",
         "image": "IMGS/Djungelskog.jpg",
         "link" : "https://github.com/VC2008/MagicEightBall"
    },
    {
        "projectName": "Adjective Generator",
        "projectYear": 2025,
        "mainSubject": "Js lists",
        "ranking": 7,
        "description": "Uses arrays to generate random adjectives",
         "image": "IMGS/Ultra-Mega-Super-Hyper-Refined_Synthesizer.webp",
         "link" : "https://github.com/VC2008/MagicEightBall"
    },
    {
        "projectName": "Hangman Project",
        "projectYear": 2025,
        "mainSubject": "General html",
        "ranking": 1,
        "description": "A classic hangman game implemented with HTML, CSS, and JavaScript",
         "image": "IMGS/Giggler-vector.webp",
         "link" : "https://github.com/VC2008/MagicEightBall"
    },
    {
        "projectName": "College Project",
        "projectYear": 2025,
        "mainSubject": "General html",
        "ranking": 8,
        "description": "Website for a college you'd like to attend",
         "image": "IMGS/New_Jersey_IT_logo.svg.png",
         "link" : "https://github.com/VC2008/College-Website"
    },
    {
        "projectName": "Winter Project",
        "projectYear": 2026,
        "mainSubject": "Js and Css",
        "ranking": 6,
        "description": "Team project for winter break",
         "image": "IMGS/Wheel-of-Names.png",
         "link" : "https://github.com/VC2008/Wheel-of-Frozen-Fortune"
    },
    {
        "projectName": "Client Project",
        "projectYear": 2026,
        "mainSubject": "Working with others + JS",
        "ranking": 5,
        "description": "music website for my friend",
         "image": "IMGS/Abyssboxlogo.png",
         "link" : "https://github.com/VC2008/Kaiden-s-Music-Portfolio"
    }
]


      
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

                    <img src="${project.image}" class="card-img-top" alt="${project.projectName}">

                     <a href="${project.link}" class="btn btn-primary" target="_blank">
                    View Project
                </a>

                </div>
            `;
        });