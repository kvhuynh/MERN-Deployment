import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deletePetById, getAllPets } from "../services/internalApiService";

// import { Button } from "../components/Button"

export const AllPets = (props) => {
    const [allPets, setAllPets] = useState([]);

    useEffect(() => {
        getAllPets()
            .then((data) => {
                setAllPets(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    allPets.sort((a, b) => a.name.localeCompare(b.name))

    return (
        <div className="w-50mx mt-5 mx-auto">
            <div className="d-flex justify-content-between">
                <div className="left-header">
                    <h1 className="text-left">Pet Shelter</h1>
                    <h2>These pets are looking for a good home</h2>
                </div>
                <Link to={`/pets/new`}>add a pet to the shelter</Link>
            </div>
            <table className="table text-center">
                <thead>
                    <tr>
                        <th scope="col">Name</th>   
                        <th scope="col">Type</th>   
                        <th scope="col">Actions</th>   
                    </tr>
                </thead>
                <tbody>
                {allPets.map((pet) => {
                const {_id, name, type } = pet;
                return (
                    <tr key={_id}>
                        <td >
                            {name}
                            {/* <Link to={`/pets/${_id}/edit`} className="btn btn-sm btn-outline-warning mx-1">Edit</Link> */}
                            {/* <button onClick={(e) => {
                                handleDeleteClick(_id);
                            }} className="btn btn-sm btn-outline-danger mx-1">Delete</button> */}
                            
                            {/* <Button handleDelete={handleDeleteClick} id={_id} successCallBack={filteredPets} allPets={allPets}></Button> */}
                        </td>
                        <td key={type}>{ type }</td>
                        <td className="">
                            <Link to={`/pets/${_id}`}>
                                Details
                            </Link> |
                            <Link to={`/pets/${_id}/edit`}>
                                Edit
                            </Link>  
                        </td>
                    </tr>
                )
            })
            }
                </tbody>
            </table>
        </div>
    )
}

export default AllPets;