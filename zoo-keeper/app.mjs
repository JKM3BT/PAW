import express from "express";
import AnimalsController from "./controllers/AnimalsController.mjs";


const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Ok")
})

app.get("/animals", AnimalsController.getAllAnimals); // Ok
app.get("/animals/id/:id", AnimalsController.getAnimalById); // Ok
app.get("/animals/endangered", AnimalsController.getEndangeredAnimals); // Ok
app.get("/animals/habitat/:habitat", AnimalsController.getAnimalsByHabitat); // Ok
app.get("/animals/species", AnimalsController.getAnimalsBySpecies); // Ok
// app.post("/animals", AnimalsController); Didn't bother to finish it
app.put("/animals/id/:id", AnimalsController.updateAnimal); // Not ok
app.delete("/animals/id/:id", AnimalsController.deleteAnimal); // Not ok


app.listen(PORT, () => {
    console.log("Server started on port 3000");
})