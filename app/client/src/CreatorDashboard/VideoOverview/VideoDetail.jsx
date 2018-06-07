import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import * as Reactions from "../../modules/getVideoDataMethods";

// Reactions.retrieveVideoData(videoID)

class VideoDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    const videoID = this.props.match.params.video_id;

    axios
      .get(`/api/videos/${videoID}/reactions`)
      .then(data => {
        this.setState({ data: data });
        console.log(this.state.data)
      })
      .catch(err => console.log("error: ", err));
  }

  render() {
    // const video = "";
    // if (!video) {
    //   return <div>Sorry, the video was not found</div>;
    // } else {
    return (
      <div>
        <h1>Individual video page</h1>
        {/*<h2>{video.title}</h2>*/}
        <Link to="/videos">Back</Link>
      </div>
    );
    // }
  }
}

export default VideoDetail;
