import React from 'react';
import { connect } from 'react-redux'
import ConfigureWindow from './ConfigureWindow';

class SidebarHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showConfigureWindow: null
    };
  }
  toggleConfigureWindow() {
    this.setState({
      showConfigureWindow: !this.state.showConfigureWindow
    });
  }
  render() {
    teamName = (this.props.teamInfo ? this.props.teamInfo.name : '')
    return (
      <div>
        <div className="sidebar-header">
          <div className="team-info" onClick={this.toggleConfigureWindow.bind(this)}>
            <span className="team-name">{teamName}</span>
            <p className="configure-toggler"></p>
          </div>
        </div>
        {
          this.state.showConfigureWindow &&
            <ConfigureWindow toggleConfigureWindow={this.toggleConfigureWindow.bind(this)} />
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    teamInfo: state.teamInfo
  };
};

export default connect(mapStateToProps)(SidebarHeader);
