import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchpost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchpost();
  }

  render() {
    return <div> Post Show! </div>;
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchpost })(PostsShow);
