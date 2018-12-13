import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
} from '@material-ui/core';

import isEmpty from '../../utils/is-empty';

const styles = theme => ({
  postFormCard: {
    margin: '24px 0',
  },
  postFormInput: {
  },
  postFormButton: {
    float: 'right',
    margin: '6px 0 12px 12px',
  },
});

const PostForm = ({
  comment,
  onChangeHandle,
  onSubmitHandle,
  onCancelHandle,
  errors,
  classes,
}) => {
  const onChange = e => {
    onChangeHandle(e);
  };

  const onSubmit = e => {
    e.preventDefault();
    onSubmitHandle();
  };

  const onCancel = () => {
    onCancelHandle();
  };

  return (
    <div className="post-form">
      <Container>
        <Row>
          <Col xs="12">
            <Card raised className={classes.postFormCard}>
              <CardHeader className={classes.postFormCardheader} color="primary" title="Comment" />
              <CardContent>
                <form onSubmit={onSubmit} noValidate>
                  <TextField
                    id="outlined-multiline-static"
                    className={classes.postFormInput}
                    label="Write a Comment"
                    multiline
                    rows="4"
                    fullWidth
                    defaultValue="Comment"
                    margin="normal"
                    variant="outlined"
                    name="comment"
                    value={comment}
                    onChange={onChange}
                    error={errors.comment}
                    helperText={errors ? errors.comment : ''}
                  />
                  <Button
                    type="submit"
                    value="Submit"
                    variant="contained"
                    color="primary"
                    disabled={isEmpty(comment) ? 'disabled' : null}
                    className={classes.postFormButton}
                  >
                    {'Post Comment'}
                  </Button>
                  <Button onClick={onCancel} variant="outlined" className={classes.postFormButton}>Cancel</Button>
                </form>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

PostForm.propTypes = {
  comment: PropTypes.string.isRequired,
  onChangeHandle: PropTypes.func.isRequired,
  onSubmitHandle: PropTypes.func.isRequired,
  onCancelHandle: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    comment: PropTypes.string,
  }).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(PostForm);
