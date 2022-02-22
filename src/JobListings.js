import JobListing from "./JobListing";

const JobListings = ({ listingsData, data, setData, filterList, setFilterList }) => {
    // Add a tag to the filter list
    const addFilter = (tag) => {
        if (!filterList.includes(tag)) setFilterList([...filterList, tag]);
    };

    return (
        <div className="JobListings">
            {
                data.map((listing) => (
                    <JobListing
                        key={ listing.id }
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
                        filterList={ filterList }
                        addFilter={ addFilter }
                    />
                ))
            }
        </div>
    );
}

export default JobListings;