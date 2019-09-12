import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/actionItem";

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  onDeleteClick(id) {
    this.props.deleteItem(id);
  }

  render() {
    const { items } = this.props.item;
    return (
      <div>
        <Container>
          <ListGroup>
            <TransitionGroup className="shopping-list">
              {items.map(({ id, name }) => (
                <CSSTransition key={id} timeout={500} classNames="fade">
                  <ListGroupItem>
                    <Button
                      className="btn-remove"
                      color="danger"
                      size="sm"
                      //Attention:
                      //如果要返回一个对象，就要注意，如果是单表达式，这么写的话会报错：
                      // SyntaxError:
                      // x => { foo: x }
                      // 因为和函数体的{ ... }有语法冲突，所以要改为：
                      // // ok:
                      // x => ({ foo: x })
                      //   onClick={() => {
                      //     this.setState(state => ({
                      //       items: state.items.filter(item => item.id !== id)
                      //     }));
                      //   }}
                      onClick={this.onDeleteClick.bind(this, id)}
                    >
                      &times;
                    </Button>
                    {name}
                  </ListGroupItem>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ListGroup>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);
