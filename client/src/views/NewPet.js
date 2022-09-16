import { useState } from "react";
import { createPet } from "../services/internalApiService";
import { useNavigate, Link } from "react-router-dom";

import { Form } from "../components/Form"

export const NewPet = () => {
    const navigate = useNavigate();

    // const [name, setName] = useState("");
    const [errors, setErrors] = useState(null);

    const handleSubmit = (e, id, newName, newType, description, firstSkill, secondSkill, thirdSkill) => {
        e.preventDefault();

        console.log(newName);

        const petData = {
            name: newName,
            type: newType,
            description,
            firstSkill,
            secondSkill,
            thirdSkill,
            likes: 0
        }

        createPet(petData)
            .then((data) => {
                navigate("/pets");
            })
            .catch((error) => {
                console.log(error);
                setErrors(error?.response?.data?.errors);
            })

        console.log("here" + errors);
    }

    return(
        <div className="w-50mx mt-5 mx-auto">
            <div className="d-flex justify-content-between">
                <div className="left-header">
                    <h1 className="text-left">Pet Shelter</h1>
                    <h2>Know a pet needing a home?</h2>
                </div>
                <Link to={`/pets`}>back to home</Link>
            </div>
            <Form onSubmitHandler={handleSubmit} initialName="" initialType="" initialDescription="" errorState={errors} ></Form>
            {/* <form onSubmit={ (e) => handleSubmit(e)}>
                <div className="form-group">
                    <label className="h6">Name: </label>
                    {errors?.name && (
                        <span style={{ color: 'red' }}>
                        {' '}
                        {errors?.name?.message}
                        </span>
                    )}
                    <input type="text" onChange={ (e) => {
                        setName(e.target.value)
                    } } className="form-control"/>
                </div>
                <button className="btn btn-sm btn-outline-success mt-3">Submit</button>
            </form> */}
        </div>
    );
}

export default NewPet;