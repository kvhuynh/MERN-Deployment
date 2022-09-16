import './App.css';

import { Navigate, Route, Routes }  from "react-router-dom";

import { AllPets } from "./views/AllPets";
import { NewPet } from "./views/NewPet";
import { EditPet } from "./views/EditPet";
import { OnePet } from "./views/OnePet";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigate  to="/pets" replace />}/>
        <Route path="pets/:id" element={<OnePet />}/>
        <Route path="/pets/:id/edit" element={ <EditPet /> }></Route>
        <Route path="/pets/new" element={<NewPet />} />
        <Route path="/pets" element={<AllPets/ >}/>
      </Routes>
    </div>
  );
}

export default App;
