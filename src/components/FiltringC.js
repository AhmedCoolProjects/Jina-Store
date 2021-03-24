import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import ListSubheader from "@material-ui/core/ListSubheader";
import Switch from "@material-ui/core/Switch";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import Collapse from "@material-ui/core/Collapse";
import Slider from "@material-ui/core/Slider";

import AccessibilityOutlinedIcon from "@material-ui/icons/AccessibilityOutlined";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
function valuetext(value) {
  return `${value} $`;
}
const marks = [
  {
    value: 0,
    label: "0$",
  },
  {
    value: 250,
    label: "250$",
  },
  {
    value: 500,
    label: "500$",
  },
];
export default function FiltringC() {
  const classes = useStyles();
  const [value, setValue] = useState([0, 500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      subheader={<ListSubheader>Filter</ListSubheader>}
      className={classes.root}>
      <ListItem>
        <Slider
          value={value}
          onChange={handleChange}
          getAriaValueText={valuetext}
          marks={marks}
          min={0}
          max={500}
          valueLabelDisplay="auto"
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <LocalShippingOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Free Shipping" />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            // onChange={handleToggle("wifi")}
            // checked={checked.indexOf("wifi") !== -1}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <LocalOfferOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Promos" />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            // onChange={handleToggle("bluetooth")}
            // checked={checked.indexOf("bluetooth") !== -1}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <AccessibilityOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Sizes" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested} button>
            <ListItemText primary="XL" />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                // onChange={handleToggle(value)}
                // checked={checked.indexOf(value) !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem className={classes.nested} button>
            <ListItemText primary="XXL" />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                // onChange={handleToggle(value)}
                // checked={checked.indexOf(value) !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem className={classes.nested} button>
            <ListItemText primary="XXXL" />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                // onChange={handleToggle(value)}
                // checked={checked.indexOf(value) !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
