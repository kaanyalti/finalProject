import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import VideoList from "./VideoOverview/VideoList";
import VideoDetail from "./VideoOverview/VideoDetail";
import Sidebar from "../components/Layout/Sidebar.jsx";
import { Jumbotron, Grid, Row, Col } from "react-bootstrap";

// The VideoList component matches one of two different routes
// depending on the full pathname
const VideosAll = () => <h1>VideosAll</h1>;

const AdminRoute = props => {
  const StickLeft = {
    marginLeft: "0px"
  };

  const test = {
    height: "100vh"
  };

  return (
    <Switch>
      <Grid style={this.StickLeft}>
        <Row>
          <Col style={this.test}>
            <Sidebar />
          </Col>
        </Row>
        <Row>
          <Col>
            <Route
              exact
              path="/admin"
              render={() =>
                props.loggedIn ? (
                  <VideoList videoData={props.videoData} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route exact path="/admin/videos" component={VideosAll} />
            <Route path="/admin/videos/:video_id" component={VideoDetail} />
          </Col>
        </Row>
      </Grid>
    </Switch>
  );
};

export default AdminRoute;
