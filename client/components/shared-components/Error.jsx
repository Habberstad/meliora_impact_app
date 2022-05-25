export function Error(props) {
    return <div>
        <h1>Error</h1>
        <div id="error-text">{props.error.toString()}</div>
    </div>;
}