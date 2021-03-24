import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Avatar } from "@material-ui/core";
import dashboardSvg from "../assets/dashboard.svg";
import man from "../assets/man.svg";
import woman from "../assets/woman.svg";
import kid from "../assets/kid.svg";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
      <ListItem button>
        <ListItemIcon>
          <Avatar
            style={{ width: "1.5em", height: "1.5em" }}
            src={dashboardSvg}
          />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link to="/men" style={{ color: "inherit", textDecoration: "inherit" }}>
      <ListItem button>
        <ListItemIcon>
          <Avatar style={{ width: "1.5em", height: "1.5em" }} src={man} />
        </ListItemIcon>
        <ListItemText primary="Men" />
      </ListItem>
    </Link>
    <Link to="/women" style={{ color: "inherit", textDecoration: "inherit" }}>
      <ListItem button>
        <ListItemIcon>
          <Avatar style={{ width: "1.5em", height: "1.5em" }} src={woman} />
        </ListItemIcon>
        <ListItemText primary="Women" />
      </ListItem>
    </Link>
    <Link to="/kids" style={{ color: "inherit", textDecoration: "inherit" }}>
      <ListItem button>
        <ListItemIcon>
          <Avatar style={{ width: "1.5em", height: "1.5em" }} src={kid} />
        </ListItemIcon>
        <ListItemText primary="Kids" />
      </ListItem>
    </Link>
  </div>
);
