import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

function Search({ hideButtons = false }) {
    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const history = useHistory();

    const searchHandler = (e) => {
        e.preventDefault();

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input,
        });

        history.push("/search");
    };

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
                <KeyboardIcon className="search__keyboardIcon" />
                <MicIcon />
            </div>

            {!hideButtons ? (
                <div className="search__buttons">
                    <Button
                        type="submit"
                        onClick={searchHandler}
                        variant="outlined"
                    >
                        Google Search
                    </Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ) : (
                <div className="search__buttons">
                    <Button
                        className="search__buttonsHidden"
                        type="submit"
                        onClick={searchHandler}
                        variant="outlined"
                    >
                        Google Search
                    </Button>
                    <Button
                        className="search__buttonsHidden"
                        variant="outlined"
                    >
                        I'm Feeling Lucky
                    </Button>
                </div>
            )}
        </form>
    );
}

export default Search;
