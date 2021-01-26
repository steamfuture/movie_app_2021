import React from "react";
import "./Detail.css"

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    console.log(location.state);
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    console.log(location);
    if (location.state) {
      return (
        <div className="detail">
            <h3 className="detail__title">{location.state.title}</h3>
            <h5 className="detail__year">{location.state.year}</h5>
            <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
            <ul>
                {location.state.genres}
            </ul>
            <p className="detail__summary">{location.state.summary}</p>
        </div>
        );
    } else {
      return null;
    }
  }
}

export default Detail;
