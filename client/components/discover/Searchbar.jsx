import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export function Searchbar(props) {
  const placeholderText = "Search for projects";

  return (
    <div className={"npo-search-container"}>
      <div className={"npo-search-field"}>
        <TextField
          value={props.emptySearchInput ? "" : props.searchString}
          variant={"outlined"}
          onChange={props.onChange}
          size={"small"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder={placeholderText}
          fullWidth
        />
      </div>
    </div>
  );
}
