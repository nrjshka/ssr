import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import Users from './Users';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <Users {...this.props} />
    );
  }
};

const mapStateToProps = ({ users = [] }) => ({ users });

export default connect(mapStateToProps, { fetchUsers })(UsersList);