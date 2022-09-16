import { useState, useEffect } from "react"


export const Form = (props) => {
    const { onSubmitHandler, initialName, initialType, initialDescription, initialFirstSkill, initialSecondSkill, initialThirdSkill, errorState, id } = props;
    const [ newName, setNewName] = useState(initialName);
    const [ newType, setNewType ] = useState(initialType)
    const [ newDescription, setNewDescription ] = useState(initialDescription)
    const [ newFirstSkill, setNewFirstSkill ] = useState(initialFirstSkill)
    const [ newSecondSkill, setNewSecondSkill ] = useState(initialSecondSkill)
    const [ newThirdSkill, setNewThirdSkill ] = useState(initialThirdSkill)

    const [errors, setErrors] = useState("")

    useEffect(() => {
        setErrors(errorState)
    }, [errorState])

    return (
        <form onSubmit={ (e) => {onSubmitHandler(e, id, newName, newType, newDescription, newFirstSkill, newSecondSkill, newThirdSkill)}}>
        <div className="form-group">
            <label className="h6">Name: </label>
            {errors?.name && (
                <span style={{ color: 'red' }}>
                {' '}
                {errors?.name?.message}
                </span>
            )}
            <input type="text" onChange={ (e) => {
                setNewName(e.target.value)
            } } className="form-control" value={newName}/>
        </div>

        <div className="form-group">
            <label className="h6">Type: </label>
            {errors?.type && (
                <span style={{ color: 'red' }}>
                {' '}
                {errors?.type?.message}
                </span>
            )}
            <input type="text" onChange={ (e) => {
                setNewType(e.target.value)
            } } className="form-control" value={newType}/>
        </div>    

        <div className="form-group">
            <label className="h6">Description: </label>
            {errors?.description && (
                <span style={{ color: 'red' }}>
                {' '}
                {errors?.description?.message}
                </span>
            )}
            <input type="text" onChange={ (e) => {
                setNewDescription(e.target.value)
            } } className="form-control" value={newDescription}/>
        </div>

        <div className="form-group">
            <label className="h6">Skill 1: </label>
            <input type="text" onChange={ (e) => {
                setNewFirstSkill(e.target.value)
            } } className="form-control" value={newFirstSkill}/>
        </div>

        <div className="form-group">
            <label className="h6">Skill 2: </label>
            <input type="text" onChange={ (e) => {
                setNewSecondSkill(e.target.value)
            } } className="form-control" value={newSecondSkill}/>
        </div>

        <div className="form-group">
            <label className="h6">Skill 3: </label>
            <input type="text" onChange={ (e) => {
                setNewThirdSkill(e.target.value)
            } } className="form-control" value={newThirdSkill}/>
        </div>

        <button className="btn btn-sm btn-outline-success mt-3">Submit</button>
    </form>
    )
}

export default Form;