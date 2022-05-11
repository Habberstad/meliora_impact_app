export function KeywordFilter(props) {
  return (
    <div>
      <label>Search: </label>
      <input type={"text"} onChange={props.onChange} />
    </div>
  );
}