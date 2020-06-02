import React, { Component } from "react";
import PropTypes from "prop-types";

class ContactCard extends Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          <li>
            <b>Name:</b> {this.props.name}
          </li>
          <li>
            <b>Mobile:</b> {this.props.mobile}
          </li>
          <li>
            <b>Work:</b> {this.props.work}{" "}
          </li>
          <li>
            <b>Email:</b> {this.props.email}
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  work: PropTypes.string,
  email: PropTypes.string,
};

export default ContactCard;
