import {promises} from "fs";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const animalsFile = path.resolve(__dirname, '../data/zoo.json');

const AnimalsService = {
    async getAnimals(encoding = "utf8"){
        try{
            const data = await promises.readFile(animalsFile, encoding);
            return JSON.parse(data || "[]")
        } catch(err){
            console.error("Error loading animal ", err)
            throw new Error("Error loading animal")
        }
    },

    async findAnimalById(id){
        const animals = await this.getAnimals()
        const animalIndex = animals.findIndex(animal => animal.id === id)
        if(animalIndex === -1){
            throw new Error(`Animal with id ${id} not found`)
        }
        return {animal: animals[animalIndex], index: animalIndex, animals}
    },

    async findEndangeredAnimals(){
        const animals = await this.getAnimals();
        const animalsList = animals.filter(animal => animal.isEndangered === true);
        if(animalsList === "[]"){
            throw new Error("No animals are endangered")
        };
        return animalsList;
    },

    async findAnimalByHabitat(habitat){
        const animals = await this.getAnimals();
        const animalsList = animals.filter(animal => animal.habitat === habitat);
        if(animalsList == "[]"){
            throw new Error(`No animals living in ${habitat} were found`);
        };
        return animalsList;
    },

    async updateAnimal(id, newAnimalData){
        const {animal, index, animals} = await this.findAnimalById(id)
        animals[index] = {...animal, ...newAnimalData}
        await this.saveAnimals(animals)
        return animals[index]
    },

    async saveAnimals(animals){
        try{
            const jsonData = JSON.stringify(animals, null, 2)
            await promises.writeFile(animalsFile, jsonData, "utf8")
        }catch(err){
            throw new Error("Error saving animals list")
        }
    }

}

export default AnimalsService