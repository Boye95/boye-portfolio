import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiTwitter} from "react-icons/fi";

const Socials = () => {
    return (
        <div className={"header__socials"}>
            <a href={"https://www.linkedin.com/in/samuel-folaranmi-107074214/"} target={"_blank"} rel={"noreferrer"}><BsLinkedin /></a>
            <a href={"https://github.com/Boye95"} target={"_blank"} rel={"noreferrer"}><FaGithub /></a>
            <a href={"https://twitter.com/ade_boyee"} target={"_blank"} rel={"noreferrer"}><FiTwitter /></a>
        </div>
    )
}

export default Socials