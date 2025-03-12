const express = require("express");
const app = express();
const port = 3002;

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send("Server del mio blog")
})

app.listen(port, (req, res) => {
    console.log(`Server is running on port http://localhost:${port}`);
    
})

app.get("/bacheca", (req, res) => {
    const posts = [
        {
            title: "ciambellone",
            content: "preparazione del ciambellone",
            img: "/images/ciambellone.jpeg",
            tags: ["ciambellone", "dolce", "ricetta"]
        },
        {
            title: "cracker barbabietola",
            content: "ricetta cracker barbabietola",
            img: "/images/cracker_barbabietola.jpeg",
            tags: ["cracker", "barbabietola", "salato"]
        },
        {
            title: "pane fritto dolce",
            content: "preparazione del pane fritto dolce",
            img: "/images/pane_fritto_dolce.jpeg",
            tags: ["pane", "fritto", "dolce"]
        },
        {
            title: "pasta barbabietola",
            content: "ricetta pasta barbabietola",
            img: "/images/pasta_barbabietola.jpeg",
            tags: ["pasta", "barbabietola", "vegana"]
        },
        {
            title: "torta paesana",
            content: "preparazione della torta paesana",
            img: "/images/torta_paesana.jpeg",
            tags: ["torta", "paesana", "tradizione"]
        }
    ]

    console.log(posts);
    res.json(posts)
})