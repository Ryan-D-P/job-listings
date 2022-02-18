import JobListing from "./JobListing";

const JobListings = ({ data }) => {
    return (
        <div className="JobListings">
            {
                data.map((listing) => (
                    <div className="JobListing-wrapper" key={ listing.id }>
                        <JobListing
                            id={ listing.id }
                            company={ listing.company }
                            logo={ listing.logo }
                            isNew={ listing.new }
                            isFeatured={ listing.featured }
                            position={ listing.position }
                            role={ listing.role }
                            level={ listing.level }
                            postedAt={ listing.postedAt }
                            contract={ listing.contract }
                            location={ listing.location }
                            languages={ listing.languages }
                            tools={ listing.tools }
                        />
                    </div>
                ))
            }
        </div>
    );
}

export default JobListings;