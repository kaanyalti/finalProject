import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardHeader,
  CardFooter,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
import Moment from "react-moment";

class VideoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  containerStyle = {
    marginTop: "5vh"
  };

  cardStyle = {
    marginBottom: "5vh",
  }

  iframeStyle = {

  }

  spreadEvenly = {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between"
  };

  render() {
    return this.props.videoData.length === 0 ? (
      <p>Loading...</p>
    ) : (
      <Container style={this.containerStyle}>
        <Row>
          {this.props.videoData.map(video => {
            const { id, publishedAt, title, statistics, thumbnail } = video;
            return (
              <Col md={{ size: 4 }} key={id}>
                <Card style={this.cardStyle}>
                  <CardHeader>{title}</CardHeader>
                  <CardImg top width="100%" src={thumbnail.url} alt="Card image cap" />
                  <CardBody>
                    <CardSubtitle />
                    <CardText>
                      <div style={this.spreadEvenly}>
                        <div className="stats">
                          <i title="Amount of views" class="fas fa-eye" />{" "}
                          <span>{statistics.viewCount}</span>
                        </div>
                        <div className="stats">
                          <i title="Amount of likes" className="fas fa-heart" /> <span>{statistics.likeCount}</span>
                        </div>
                        <div className="stats">
                          <i title="Amount of comments" class="fas fa-comments" />{" "}
                          <span>{statistics.commentCount}</span>
                        </div>
                        <div className="stats">
                          <i title="Amount of dislikes" class="fas fa-thumbs-down" />{" "}
                          <span>{statistics.dislikeCount}</span>
                        </div>
                      </div>
                    </CardText>
                  </CardBody>
                  <CardFooter className="text-muted" style={this.spreadEvenly}>
                    <div>
                      <i title="Time since published" class="far fa-clock" />{" "}
                      <span><Moment fromNow>
                        {publishedAt.substring(0, publishedAt.length - 1)}
                      </Moment></span>
                    </div>
                    <Button color="basic">
                      <Link to={`/admin/videos/${video.id}`}>
                        <i title="View data visualisations" className="fas fa-ellipsis-h" style={{color: "black"}}/>
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default VideoList;
