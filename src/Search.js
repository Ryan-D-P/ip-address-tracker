import "./Search.css"

const Search = () => {
    return (
        <div className="Search">
            <form id="ip-form" onSubmit={ () => console.log(`Submit...`) }>
                <div className="search-input">
                        <input
                            type="text"
                            name="ip"
                            id="ip"
                            placeholder="Search for any IP address or domain"
                        />
                </div>
                <div className="search-button">
                    <button form="ip-form">{ `>` }</button>
                </div>
            </form>
        </div>
    );
}

export default Search;