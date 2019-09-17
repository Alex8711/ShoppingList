import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/actionItem";

class ItemModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      value: ""
    };
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const newItem = { name: this.state.value };
    this.props.addItem(newItem);

    this.toggle();
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>Add Item</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <form onSubmit={this.handleSubmit}>
            <label>
              Please input the new item's name
              <input
                type="string"
                value={this.state.value}
                id="itemName"
                name="itemName"
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);
