export function Error(props) {
  console.log(props.error);
  return (
    <div className="error-state">
      <h1>404</h1>
      <h2>PAGE NOT FOUND</h2>
      <p>Oops! Something went wrong... :P</p>
    </div>
  );
}
