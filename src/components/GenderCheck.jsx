import React from "react"

const GenderCheck = ({gender, setGender}) => {
    return (
        <div className="genderCheck">
            <label>
                <input type="checkbox" value="male" defaultChecked onChange={() => {
                    setGender({...gender, male: !gender.male})
                }}/>
                Male
            </label>
            <label>
                <input type="checkbox" value="female" defaultChecked onChange={() => {
                    setGender({...gender, female: !gender.female})
                }}/>
                Female
            </label>
            <label>
                <input type="checkbox" value="anon" defaultChecked onChange={() => {
                    setGender({...gender, anon: !gender.anon})
                }}/>
                <span>Anon</span>
            </label>
        </div>
    )
}

export default GenderCheck