import maleGenderIcon from "../image/male_icon.svg";
import femaleGenderIcon from "../image/female_icon.svg";
import anonimGenderIcon from "../image/anonim_icon.svg"

const Contact = ({firstName, lastName, phone, gender}) => {
    // console.log(firstName, lastName, phone, gender)

    const getGender = (gender) => {
        switch (gender) {
            case "male":
                return maleGenderIcon;
            case "female":
                return femaleGenderIcon;
            default:
                return anonimGenderIcon
        }
    };
    
    return (
        <div className="contact">
            <div className="contact-avatar"></div>
            <div className="contact-info">
                <div className="contact-fullName">
                    <span className="name">{firstName} </span>
                    <span className="surname">{lastName} </span>
                </div>
                <div className="contact-phone">{phone}</div>
            </div>
            <img className="contact-gender" src={getGender(gender)} alt="gender" />
        </div>
    )
}

export default Contact