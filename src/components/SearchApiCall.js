import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { setSearch } from "../Redux/ProductAdminSlice/ProductSlice";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../styles/AuthNavbar.module.css";

export const SearchApiCall = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const searchRef = useRef(null);
  const debounceTimer = useRef(0);

  useEffect(() => {
    if (input.length === 0) {
      dispatch(setSearch([]));
    }
  }, [input, dispatch]);

  const handleSearch = (text) => {
    if (text?.length !== 0) {
      const urlParams = new URLSearchParams();
      urlParams.append("searchQuery", text);

      axios
        .get(
          `${
            process.env.REACT_APP_BASEURL
          }/products/filter?${urlParams.toString()}`,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res?.data);
          searchRef.current.focus();
          dispatch(setSearch(res?.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      handleSearch(e.target.value);
    }, 1000);
  };
  return (
    <TextField
      ref={searchRef}
      placeholder="Search…"
      autoComplete="off"
      value={input}
      onChange={handleChange}
      className={styles.searchTextField}
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        width: { xs: "150px", sm: "350px" },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon
              sx={{
                cursor: "pointer",
                color: "#4a90e2",
              }}
            />
          </InputAdornment>
        ),
      }}
    />
  );
};
