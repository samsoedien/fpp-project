import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
} from '@material-ui/core';

const styles = theme => ({
  blogFormCard: {
    margin: '24px 0',
  },
  blogFormInput: {
    margin: '12px 0',
  },
  blogFormButton: {
    float: 'right',
  },
});

const BlogForm = ({
  heading,
  article,
  onChangeCallback,
  onSubmitCallback,
  errors,
  classes,
}) => {
  const onChange = e => {
    onChangeCallback(e);
  };

  const onSubmit = e => {
    e.preventDefault();
    onSubmitCallback();
  };
  return (
    <div className="post-form">
      <Container>
        <Row>
          <Col md="8">
            <Card className={classes.blogFormCard}>
              <CardHeader className={classes.blogFormCardheader} color="primary" title="Comment" />
              <CardContent>
                <form onSubmit={onSubmit} noValidate>
                  <TextField
                    id="mui-theme-provider-outlined-input"
                    className={classes.blogFormInput}
                    variant="outlined"
                    fullWidth
                    label="Heading"
                    type="text"
                    name="heading"
                    value={heading}
                    onChange={onChange}
                    error={errors.heading}
                    helperText={errors ? errors.heading : ''}
                  />
                  <TextField
                    id="mui-theme-provider-outlined-input"
                    className={classes.blogFormInput}
                    variant="outlined"
                    multiline
                    rows="4"
                    fullWidth
                    label="Article"
                    type="text"
                    name="article"
                    value={article}
                    onChange={onChange}
                    error={errors.article}
                    helperText={errors ? errors.article : ''}
                  />
                  <Button type="submit" value="Submit" className={classes.blogFormButton}>Comment</Button>
                </form>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

BlogForm.propTypes = {
  heading: PropTypes.string.isRequired,
  article: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BlogForm);
