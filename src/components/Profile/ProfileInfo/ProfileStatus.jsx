import React from "react";
import classes from "./ProfileInfo.module.css";
class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  componentDidUpdate(prevProps, prevState) {
    // prevState & prevProps - предыдущие стэйт и пропсы!!!!
    // this.state & this.props - актуальные пропсы и стэйт!!!!
    if (prevProps.status !== this.props.satus) {
      this.setState({
        status: this.props.status,
      });
      // синхронизируем статус только если он реально был изменен, или если пришел из вне новый!!!!!
    }
  }
  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "_____________"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            ></input>
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
