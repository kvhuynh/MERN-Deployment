const { Pet } = require("../models/pet.model");

const createPet = async (data) => {
    console.log("service: createPet");
    console.log(data);
    const pet = await Pet.create(data);
    console.log(pet);
    return pet;
}

const getAllPets = async () => {
    const pets = await Pet.find();

    return pets
}

const getPetById = async (id) => {
    const pet = await Pet.findById(id);

    return pet;
}

const deletePetById = async (id) => {
    const pet = await Pet.findByIdAndDelete(id);

    return pet;
}

const updatePetById = async (id, data) => {
    console.log("service: updatePetById");
    console.log("updatePetById data: " + JSON.stringify(data));
    const pet = await Pet.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true
    });

    console.log(pet);

    return pet
}

module.exports = {
    createPet,
    getAllPets,
    getPetById,
    deletePetById,
    updatePetById
};