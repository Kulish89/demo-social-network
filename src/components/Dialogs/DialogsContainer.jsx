import { sendNewMessage } from "../../Redux/dialogs-reducer";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
  };
};

const DialogsContainer = compose(
  connect(mapStateToProps, { sendNewMessage }),
  withAuthRedirect
)(Dialogs);
export default DialogsContainer;
