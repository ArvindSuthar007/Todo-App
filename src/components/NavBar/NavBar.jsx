import "./NavBar.css";
import ToggleButton from "../Toggle Button/ToggleButton";
import github_icon from "../resources/github.svg";
import mail_icon from "../resources/mail.svg";
import linkedin_icon from "../resources/linkedin.svg";

export default function NavBar() {
  return (
    <div className="NavBar-container">
      <h1 id="Site-name">ToDo App</h1>

      <ToggleButton />

      <div className="Icons-container">
        <a href="https://github.com/ArvindSuthar007" target="_blank">
          <img src={github_icon} alt="GitHub_icon" />
        </a>
        <a href="" target="_blank">
          <img src={mail_icon} alt="mail_icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/arvind-suthar-10946b218/"
          target="_blank"
        >
          <img src={linkedin_icon} alt="linkedin_icon" />
        </a>
      </div>
    </div>
  );
}
