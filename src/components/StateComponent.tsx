import React from "react";

interface State {
  username: string;
  password: string;
}
interface Props {}

class StateComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    this.setState({
      username: event.target.value,
    });
  };

  onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    this.setState({
      password: event.target.value,
    });
  };

  login = () => {
    alert(`username: ${this.state.username}\npassword: ${this.state.password}`);
  };

  render() {
    return (
      <div>
        <label htmlFor="username">Username:</label> <br />
        <input
          id="username"
          type="text"
          required
          onChange={this.onChangeUsername}
          value={this.state.username}
        />{" "}
        <br />
        <label htmlFor="pass">Password:</label> <br />
        <input
          type="password"
          name="password"
          id="pass"
          onChange={this.onChangePassword}
          value={this.state.password}
          required
        />{" "}
        <br />
        <button onClick={this.login} className="dangnhap" type="submit">
          Đăng Nhập
        </button>
      </div>
    );
  }
}

export default StateComponent;
