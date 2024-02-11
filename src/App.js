import React, { Component } from "react";
import TodoItems from "./Component/Component/TodoList/TodoItems";
import AddItem from "./Component/Component/AddItems/AddItems";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "sara", age: 34 },
      { id: 2, name: "soha", age: 24 },
      { id: 3, name: "soaad", age: 44 },
    ],
  };
  deleteItem = (id) => {
    let items = this.state.items;
    let i = items.findIndex((item) => item.id === id);
    items.splice(i, 1);
    this.setState({ items: items });
  };
  AddItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem AddItem={this.AddItem} />
      </div>
    );
  }
}

export default App;
