import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../images/tinderlogo.png";
import "./Header.css";

function Header({ backButton }) {
  const History = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => History.goBack()}>
          <ArrowBackIosIcon  className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon  className="header__icon" />
        </IconButton>
      )}

      <Link to="/">
        <img className="header__logo" src={Logo} alt="tinder logo" />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon  className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
