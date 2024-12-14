import express from "express";
import AnimalsController from "./controllers/AnimalsController.mjs";


const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Ok")
})

// app.get("/animals", AnimalsController.getAllAnimals); OK
// app.get("/animals/:id", AnimalsController.getAnimalById); program zdurniał na punkcie tego
// app.get("/animals/endangered", AnimalsController.getEndangeredAnimals); Działa, pod warunkiem, że linia 15 jest zakomentowana
// app.get("/animals/habitat/:habitat", AnimalsController.getAnimalsByHabitat); ten sam komentarz co linijkę wyżej
// app.put("/animals/:id", AnimalsController.updateAnimal); Nie testowałem


app.listen(PORT, () => {
    console.log("Server started on port 3000");
})