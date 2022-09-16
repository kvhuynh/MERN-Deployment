import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { updatePetById } from "../services/internalApiService";
import { getPetById } from "../services/internalApiService";
import { deletePetById } from "../services/internalApiService";

// import { Button } from "../components/Button"

// create likes in data base and only have it be abled to click once per render

export const OnePet = (props) => {
    const [pet, setPet] = useState([]);
    const { name, type, description, firstSkill, secondSkill, thirdSkill, likes } = pet;
    const [isLiked, setIsLiked] = useState(false)
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getPetById(id)
            .then((data) => {
                setPet(data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id, isLiked])

    const handleDeleteClick = () => {
        deletePetById(id)
            .then((deletedPet) => {
                navigate(`/pets`)
            })
    }

    const handleIncrementLike = () => {
        if (!isLiked) {
            let liked = likes;
            console.log("liked" + liked);
            const updatedLikes = {
                likes: liked + 1
            }
            console.log(updatedLikes.likes);
    
            updatePetById(id, updatedLikes)
            setIsLiked(true)
        } else {
            return
        }
    }


    return (
        <div className="w-100 mx-auto shadow mb-4 rounded border p-4 mt-3">
            <div className="d-flex justify-content-between">
                <div className="left-header">
                    <h1 className="text-left">Pet Shelter</h1>
                    <h2>Details About: { name }</h2>
                </div>
                <Link to={`/pets/`}>back to home</Link>
            </div>
            <div className="mb-4 p-4">

                <p>Type: { type }</p>
                <p>Description: { description }</p>
                <p>First Skill: { firstSkill }</p>
                <p>Second Skill: { secondSkill }</p>
                <p>Third Skill: { thirdSkill }</p>
            </div>
            <button onClick={(e) => handleDeleteClick()} className="btn btn-sm btn-outline-danger">Adopt</button>
            <button onClick={(e) => handleIncrementLike()} className="btn btn-sm btn-outline-primary">Like</button>
            <p>Likes: {likes}</p>
            
            {/* <Button id={id} successCallBack={null}></Button> */}
        </div>
    );
}

export default OnePet;