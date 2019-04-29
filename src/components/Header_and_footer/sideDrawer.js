import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { scroller } from "react-scroll";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = props => {
  const scrollToElements = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    });
    props.onClose(false);
  };

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => scrollToElements("featured")}>
          Events start in
        </ListItem>

        <ListItem button onClick={() => scrollToElements("venuenfo")}>
          Venue NFO
        </ListItem>
        <ListItem button onClick={() => scrollToElements("highlights")}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => scrollToElements("pricing")}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => scrollToElements("location")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};
export default SideDrawer;
