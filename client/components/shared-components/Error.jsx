export function Error(props) {
  console.log(props.error);
  return (
    <div className="error-state">
      <h1>404</h1>
      <p>Oops! Something went wrong... :P</p>
    </div>
  );
}
