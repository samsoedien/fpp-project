import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createProfile, getCurrentProfile } from '../actions/profileActions';
import isEmpty from '../utils/is-empty';

import ProfileForm from '../components/profiles/ProfileForm';

class ProfileUpdateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateProfile: true,
      displaySocialInputs: false,
      handle: '',
      profession: '',
      location: '',
      bio: '',
      skills: '',
      twitter: '',
      facebook: '',
      instagram: '',
      errors: {},
    };

    this.onChangeCallback = this.onChangeCallback.bind(this);
    this.onSubmitCallback = this.onSubmitCallback.bind(this);
  }

  componentDidMount() {
    const { getCurrentProfile } = this.props;
    getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    const { profile } = nextProps.profile;
    if (profile) {
      // Bring skills array back to CSV
      const skillsCSV = profile.skills.join(',');

      // If profile field doesnt exist, make empty string
      profile.profession = !isEmpty(profile.profession) ? profile.company : '';
      profile.location = !isEmpty(profile.location) ? profile.location : '';
      profile.bio = !isEmpty(profile.bio) ? profile.bio : '';
      profile.social = !isEmpty(profile.social) ? profile.social : {};
      profile.twitter = !isEmpty(profile.social.twitter) ? profile.social.twitter : '';
      profile.facebook = !isEmpty(profile.social.facebook) ? profile.social.facebook : '';
      profile.instagram = !isEmpty(profile.social.instagram) ? profile.social.instagram : '';

      // Set component fields state
      this.setState({
        handle: profile.handle,
        profession: profile.profession,
        location: profile.location,
        bio: profile.bio,
        skills: skillsCSV,
        twitter: profile.twitter,
        facebook: profile.facebook,
        instagram: profile.instagram,
      });
    }
  }

  onChangeCallback(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmitCallback() {
    const {
      handle,
      profession,
      location,
      bio,
      skills,
      twitter,
      facebook,
      instagram,
    } = this.state;
    const profileData = {
      handle,
      profession,
      location,
      bio,
      skills,
      twitter,
      facebook,
      instagram,
    };
    const { createProfile, history } = this.props;
    createProfile(profileData, history);
  }

  render() {
    const {
      handle,
      profession,
      location,
      bio,
      skills,
      twitter,
      facebook,
      instagram,
      errors,
      displaySocialInputs,
      updateProfile,
    } = this.state;
    return (
      <div className="profile-update-container">
        <ProfileForm
          errors={errors}
          updateProfile={updateProfile}
          displaySocialInputs={displaySocialInputs}
          onChangeCallback={this.onChangeCallback}
          onSubmitCallback={this.onSubmitCallback}
          handle={handle}
          profession={profession}
          location={location}
          bio={bio}
          skills={skills}
          twitter={twitter}
          facebook={facebook}
          instagram={instagram}
        />
      </div>
    );
  }
}

ProfileUpdateContainer.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}).isRequired,
  history: PropTypes.object.isRequired, // eslint-disable-line
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  createProfile,
  getCurrentProfile,
})(withRouter(ProfileUpdateContainer));
