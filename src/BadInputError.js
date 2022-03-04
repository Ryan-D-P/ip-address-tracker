import "./BadInputError.css"

const BadInputError = () => {
    return (
        <div className="BadInputError">
            <div className="error-wrapper">
                <p>Please input a valid IP address.</p>
            </div>
        </div>
    );
}

export default BadInputError;