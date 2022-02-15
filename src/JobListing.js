import "./JobListing.css";
import companyLogo from "./images/the-air-filter-company.svg";

const JobListing = () => {
    return (
        <div className="JobListing">
            <div className="job-wrapper">
                <div className="job-wrapper__column">
                    <div className="job-logo">
                        <img src={ companyLogo } alt="logo-img" />
                    </div>
                    <div className="job-title">
                        <div className="job-company">
                            <div>
                                <p>Photosnap</p>
                            </div>
                            <div className="job-listing-types">
                                <div className="job-listing-type">
                                    <p>NEW</p>
                                </div>
                                <div className="job-listing-type">
                                    <p>FEATURED</p>
                                </div>
                            </div>
                        </div>
                        <div className="job-role">
                            <h2>Senior Frontend Developer</h2>
                        </div>
                        <div className="job-details">
                            <div>
                                <p>1d ago</p>
                            </div>
                            <div>
                                <p>Full Time</p>
                            </div>
                            <div>
                                <p>USA only</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="job-wrapper__column">
                    <div className="job-tags">
                        <div className="job-tag">
                            <p>Frontend</p>
                        </div>
                        <div className="job-tag">
                            <p>Senior</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobListing;