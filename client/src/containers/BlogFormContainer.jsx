import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createBlog } from '../actions/blogActions';

import BlogForm from '../components/blogs/BlogForm';

class BlogFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: '',
      article: '',
      errors: {},
    };
    this.onChangeCallback = this.onChangeCallback.bind(this);
    this.onSubmitCallback = this.onSubmitCallback.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChangeCallback(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmitCallback() {
    const { headline, article } = this.state;
    const blogData = {
      headline,
      article,
    };
    this.props.createBlog(blogData, this.props.history);
  }

  render() {
    const {
      headline,
      article,
      errors,
    } = this.state;
    return (
      <div className="blog-form-container">
        <BlogForm
          headline={headline}
          article={article}
          errors={errors}
          onChangeCallback={this.onChangeCallback}
          onSubmitCallback={this.onSubmitCallback}
        />
      </div>
    );
  }
}

BlogFormContainer.propTypes = {
  blog: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  blog: state.blog,
  errors: state.errors,
});

export default connect(mapStateToProps, { createBlog })(withRouter(BlogFormContainer));
