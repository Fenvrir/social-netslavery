import React from 'react'
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import Music from './Music';


let AuthRedirectComponent = withAuthRedirect(Music)

class MusicContainer extends React.Component { 
    render() {
      return <AuthRedirectComponent />
    }
}

export default MusicContainer;