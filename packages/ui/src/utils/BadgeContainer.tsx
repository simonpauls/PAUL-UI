import { IconGithub, IconGlobe } from "../icons";
import "./badge-container.css";

export const BadgeContainer = () => {
  return (
    <div className="sb-unstyled badge-container">
      <a
        href="https://paul.sirpauls.com"
        target="_blank"
        rel="noreferrer"
        className="badge-link"
      >
        <div className="badge-icon-wrapper">
          <IconGlobe size="20" />
        </div>
        <div className="badge-text-wrapper">
          <span className="badge-text-primary">View website</span>
          <span className="badge-text-secondary">PAUL (Pattern & Asset UI Library)</span>
        </div>
      </a>
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="badge-link"
        style={{ opacity: 0.6 }}
      >
        <div className="badge-icon-wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg"
            alt="NPM"
            style={{ width: "24px", height: "auto" }}
          />
        </div>
        <div className="badge-text-wrapper">
          <span className="badge-text-primary">View package</span>
          <span className="badge-text-secondary">Coming Soon</span>
        </div>
      </a>
      <a
        href="https://github.com/simonpauls/PAUL"
        target="_blank"
        rel="noreferrer"
        className="badge-link"
      >
        <div className="badge-icon-wrapper">
          <IconGithub size="20" />
        </div>
        <div className="badge-text-wrapper">
          <span className="badge-text-primary">View repository</span>
          <span className="badge-text-secondary">GitHub</span>
        </div>
      </a>
    </div>
  );
};
