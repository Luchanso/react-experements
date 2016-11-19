class SubList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }

    setInterval((() => {
      this.test({id: Math.random(), text: 'test' + Math.random()})
    }).bind(this), 1000)
  }
}

class List extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }

    setInterval((() => {
      this.test({id: Math.random(), text: 'test' + Math.random()})
    }).bind(this), 1000)
  }

  test(data) {
    this.setState(prevState => {
      return prevState.items.push(data)
    })
  }

  render() {
    return (
      <ul>
        {this.state.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    )
  }
}

class HelloMessage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>Hello {this.props.name}</h2>
        <List/>
      </div>
    )
  }
}

ReactDOM.render(<HelloMessage name="John"/>, document.getElementById('root'))
