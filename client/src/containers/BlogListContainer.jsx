import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBlogs } from '../actions/blogActions';

import BlogList from '../components/blogs/BlogList';

class BlogListContainer extends Component {
  componentDidMount() {
    const { getBlogs } = this.props;
    getBlogs();
  }

  render() {
    const { blogs, loading } = this.props.blog;
    console.log(blogs);
    return (
      <div className="blogs-list-container">
        <BlogList
          blogs={blogs}
          loading={loading}
        />
      </div>
    );
  }
}

BlogListContainer.propTypes = {
  getBlogs: PropTypes.func.isRequired,
  blog: PropTypes.shape({
    blogs: PropTypes.object,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  blog: state.blog,
});

export default connect(mapStateToProps, { getBlogs })(BlogListContainer);