import AnimalsService from "../services/AnimalsService.mjs";

const AnimalsController = {
    async getAllAnimals(req, res){
        try {
            const animals = await AnimalsService.getAnimals()
            res.json(animals)
        } catch (error) {
            res.status(500).json({message:`Fail to load animals ${error}`})
        }
    },

    async getAnimalById(req, res){
        try {
            const animalId = parseInt(req.params.id)
            const {animal} = await AnimalsService.findAnimalById(animalId)
            res.json(animal)
        } catch (error) {
            res.status(500).json({message:`Fail to load animals ${error}`})
        }
    },

    async getEndangeredAnimals(req, res){
        try {
            const animals = await AnimalsService.findEndangeredAnimals();
            res.json(animals);
        } catch (error) {
            res.status(500).json({message:`Fail to load animals ${error}`});
        };
    },


    async getAnimalsByHabitat(req, res){
        try {
            const animals = await AnimalsService.findAnimalByHabitat(req.params.habitat);
            res.json(animals);
        } catch (error) {
            res.status(500).json({message:`Fail to load animals ${error}`});
        };
    },

    async updateAnimal(req,res){
        const animalId = parseInt(req.params.id)
        const newAnimal = req.body

        try {
            const updateAnimal = await AnimalsService.updateAnimal(animalId, newAnimal)
            res.json({message: "Animal updated", animal: updateAnimal})
        } catch (error) {
            if(error.message.includes("not found")){
                res.status(404).json({message: error.message})
            } else {
                res.status(500).json({message: "Failed to update animal"})
            }
        }

    }
}

export default AnimalsController