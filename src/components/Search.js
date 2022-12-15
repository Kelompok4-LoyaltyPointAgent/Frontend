import { TextField } from "@mui/material";
import { BiSearch, BiSortDown } from "react-icons/bi";

const Search = ({ posts, setSearchResults, pages, placeHolder }) => {
  const handleSearchChange = (e) => {
    e.preventDefault();
    if (!e.target.value) return setSearchResults(posts);

    let resultArray;

    if (pages == "stock") {
      resultArray = posts.filter((post) => post.name.includes(e.target.value));
    } else if (pages == "transaksi") {
      resultArray = posts.filter(
        (post) =>
          post.user?.email.includes(e.target.value) ||
          post.user?.name.includes(e.target.value)
      );
    } else if (pages == "user") {
      resultArray = posts.filter(
        (post) =>
          post.name.includes(e.target.value) ||
          post.email.includes(e.target.value)
      );
    }

    setSearchResults(resultArray);
  };
  return (
    <div className="d-flex flex-row gap-2 pe-3">
      <div className="">
        <TextField
          id="search"
          variant="outlined"
          onChange={handleSearchChange}
          label={
            <p style={{ fontSize: "13px", fontWeight: "540" }}>
              <BiSearch style={{ height: "20px", width: "20px" }} />
              {placeHolder}
            </p>
          }
          size="small"
        />
      </div>
      <div>
        <BiSortDown style={{ height: "40px", width: "30px" }} />
      </div>
    </div>
  );
};

export default Search;
