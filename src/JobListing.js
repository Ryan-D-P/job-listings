import "./JobListing.css";

const JobListing = ( {
                        company,
                        logo,
                        isNew,
                        isFeatured,
                        position,
                        role,
                        level,
                        postedAt,
                        contract,
                        location,
                        languages,
                        tools,
                        filterList,
                        addFilter
                } ) => {

    // If current job listing matches any current filter tags: return null
    const filters = [role, level, ...languages, ...tools];
    // If not all tags in filterList is included in a JobListing: return null
    if (!filterList.every(tag => filters.includes(tag))) return null;

    return (
        <div className="JobListing">
            <div className="job-wrapper">
                <div className="job-wrapper__column">
                    <div className="job-logo">
                        <img src={ require(`../src${logo.substring(1)}`) } alt="logo-img" />
                    </div>
                    <div className="job-title">
                        <div className="job-company">
                            <div>
                                <p>{ company }</p>
                            </div>
                            <div className="job-listing-types">
                                {
                                    isNew ? (
                                                <div className="job-listing-type new">
                                                    <p>NEW!</p>
                                                </div>
                                            ) : null
                                }
                                {
                                    isFeatured ? (
                                                <div className="job-listing-type featured">
                                                    <p>FEATURED</p>
                                                </div>
                                            ) : null
                                }
                            </div>
                        </div>
                        <div className="job-role">
                            <h2>{ position }</h2>
                        </div>
                        <div className="job-details">
                            <div>
                                <p>{ postedAt }</p>
                            </div>
                            <div>
                                <p>{ contract }</p>
                            </div>
                            <div>
                                <p>{ location }</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="job-wrapper__column">
                    <div className="job-tags">
                        <div className="job-tag" onClick={ () => addFilter(role) }>
                            <p onClick={ () => addFilter(role) }>{ role }</p>
                        </div>
                        <div className="job-tag" onClick={ () => addFilter(level) }>
                            <p onClick={ () => addFilter(level) }>{ level }</p>
                        </div>
                        {
                            [...languages, ...tools].map((tag, idx) => (
                                <div className="job-tag" key={ idx } onClick={ () => addFilter(tag) }>
                                    <p onClick={ () => addFilter(tag) }>{ tag }</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobListing;