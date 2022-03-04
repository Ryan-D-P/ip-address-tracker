import "./Search.css"
import iconArrow from "./images/icon-arrow.svg";

const Search = ({ position, setPosition }) => {
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
                    <button form="ip-form"><img src={ iconArrow } alt="iconArrow" /></button>
                </div>
            </form>
        </div>
    );
}

export default Search;