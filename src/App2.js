import React from "react";
import Header from "./components/Header"
import List from './components/List'
import Footer from './components/Footer'

class App extends React.Component {
  state = {
    todos: [
      {
        id: '001',
        name: '吃饭',
        done: true
      },
      {
        id: '002',
        name: '睡觉',
        done: true
      },
      {
        id: '003',
        name: '睡觉',
        done: false
      }
    ]
  }

  addTodo = (todoObj)=> {
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({todos: newTodos})
  }

  render(){
    const {todos} = this.state
    
    return (
      <div>
        <Header addTodo={this.addTodo} />
        <List todos={todos} />
        <Footer />
      </div>
    )
  }
}

export default App


