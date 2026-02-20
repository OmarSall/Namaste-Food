import { Component } from 'react';

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        name: 'Dummy',
        location: 'Default',
        avatar_url: 'https://avatars2.githubusercontent.com/u/55?v=4',
      },
    };
    console.log('Child Constructor');
  }

  async componentDidMount() {
    console.log('Child Component Did Mount');
    // Api call
    const data = await fetch('https://api.github.com/users/akshaymarch7');
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    this.timer = setInterval(() => {
      console.log('Namaste Timer');
    }, 1000);

    console.log(json);
  }

  // useEffect older version
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.count !== prevState.count ||
      this.state.count !== prevState.count
    ) {
      // code
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log('Child Component Did Unmount');
  }

  render() {
    const { count, count2 } = this.state;

    console.log('Child Render');

    const { name, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} className="user-card__avatar" />
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h1>Count2: {count2}</h1>
        <button
          onClick={() => {
            this.setState({
              count2: count2 + 2,
            });
          }}
        >
          Count2 Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: Barcelona</h3>
        <h4>Contact:@omarsall</h4>
      </div>
    );
  }
}

export default UserClass;
