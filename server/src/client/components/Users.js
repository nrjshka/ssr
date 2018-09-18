import React, { Component } from 'react';

class UsersList extends Component {
  renderUsers() {
    return this.props.users.map(user => (
      <li key={`user-${user.id}`}> {user.name}</li >
    ));
  }

  render() {
    return (
      <div>
        List of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
};

export default UsersList;