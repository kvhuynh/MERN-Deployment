import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { updatePetById } from "../services/internalApiService";
import { getPetById } from "../services/internalApiService";

import { Form } from "../components/Form"

export const EditPet = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [firstSkill, setFirstSkill] = useState("");
    const [secondSkill, setSecondSkill] = useState("");
    const [thirdSkill, setThirdSkill] = useState("");

    const [errors, setErrors] = useState(null);
    const [loaded, setLoaded] = useState(false);
    
    
    useEffect(() => {
        getPetById(id)
            .then((data) => {
                setName(data.name);
                setType(data.type);
                setDescription(data.description);
                setFirstSkill(data.firstSkill);
                setSecondSkill(data.secondSkill);
                setThirdSkill(data.thirdSkill)
                setLoaded(true)
            })
            .catch((error) => {
                console.log(error);
            })

    }, [id]);

    const handleUpdateSubmit = (e, newId, newName, newType, newDescription, newFirstSkill, newSecondSkill, newThirdSkill) => {
        e.preventDefault();
        console.log(newId);
        // KEYS MUST MATCH MODEL KEYS
        const editedPet = {
            name: newName,
            type: newType,
            description: newDescription,
            firstSkill: newFirstSkill,
            secondSkill: newSecondSkill,
            thirdSkill: newThirdSkill  
        }

        console.log(editedPet);

        updatePetById(newId, editedPet)
            .then((updatedPet) => {
                navigate(`/pets/${id}`)
            })
            .catch((error) => {
                setErrors(error?.response?.data?.errors);
                console.log(error);
            })
    }

    return(
        <div className="w-50 p-4 rounded mx-auto shadow">
            { loaded &&
            <Form onSubmitHandler={handleUpdateSubmit} initialName={name} id={id} initialType={type} initialDescription={description} initialFirstSkill={firstSkill} initialSecondSkill={secondSkill} initialThirdSkill={thirdSkill} errorState={errors} ></Form>
            }
            {/* <form onSubmit={ (e) => handleUpdateSubmit(e)}>
                <div className="form-group">
                    <label className="h6">Title</label>
                    {errors?.name && (
                        <span style={{ color: 'red' }}>
                        {' '}
                        {errors?.name?.message}
                        </span>
                    )}
                    <input type="text" onChange={ (e) => {
                        setName(e.target.value)
                    } } className="form-control" value={name}/>
                </div>
                <button className="btn btn-sm btn-outline-success mt-3">Update</button>
            </form> */}
        </div>
    );

}

export default EditPet;
