import React from "react";

interface HeaderInterface {
  name?: string;
  appointment?: string;
  email?: string;
  phone?: string;
  LinkedInUrl?: string;
  githubUrl?: string;
  scrumUrl?: string;
}

const Header: React.FC<HeaderInterface> = ({
  name,
  appointment,
  email,
  phone,
  LinkedInUrl,
  githubUrl,
  scrumUrl,
}) => {
  return (
    <header className="resume-header pt-4 pt-md-0">
      <div className="media flex-column flex-md-row">
        <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
          <div className="primary-info">
            <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">
              {name}
            </h1>
            <div className="title mb-3"> {appointment} </div>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i
                  className="far fa-envelope fa-fw mr-2"
                  data-fa-transform="grow-3"
                />
                {email}
              </li>
              <li>
                <i
                  className="fas fa-mobile-alt fa-fw mr-2"
                  data-fa-transform="grow-6"
                />
                {phone}
              </li>
            </ul>
          </div>
          <div className="secondary-info ml-md-auto mt-2">
            <ul className="resume-social list-unstyled">
              <li className="mb-3">
                <a
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  href={LinkedInUrl}
                >
                  <span className="fa-container text-center mr-2">
                    <i className="fab fa-linkedin-in fa-fw" />
                  </span>
                  linkedin
                </a>
              </li>
              <li className="mb-3">
                <a
                  target="_blank"
                  href={githubUrl}
                  rel="nofollow noopener noreferrer"
                >
                  <span className="fa-container text-center mr-2">
                    <i className="fab fa-github-alt fa-fw" />
                  </span>
                  github
                </a>
              </li>
              <li className="mb-3">
                <a
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  href={scrumUrl}
                >
                  <span className="fa-container text-center mr-2">
                    <i className="fab fa-codepen fa-fw" />
                  </span>
                  scrummanager
                </a>
              </li>
              <li>
                <a href="https://cristiangutierrez.xyz">
                  <span className="fa-container text-center mr-2">
                    <i className="fas fa-globe" />
                  </span>
                  cristiangutierrez.xyz
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
