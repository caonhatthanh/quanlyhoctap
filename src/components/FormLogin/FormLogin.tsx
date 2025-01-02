import React from "react";
import "./FormLogin.css";
import "../../bootstrap-5.3.3-dist/css/bootstrap.min.css";
import "../../bootstrap-5.3.3-dist/js/bootstrap.bundle.min.js";
import logo from "./assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

interface State {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
interface Props {}

class FormLogin extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
  }

  onFirstname = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    this.setState({
      firstname: event.target.value,
    });
  };

  onLastname = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    this.setState({
      lastname: event.target.value,
    });
  };

  onEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    this.setState({
      email: event.target.value,
    });
  };

  onPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    this.setState({
      password: event.target.value,
    });
  };

  login = () => {
    alert(
      `firstname: ${this.state.firstname}\nlastname: ${this.state.lastname}\nemail: ${this.state.email}\npassword: ${this.state.password}`
    );
  };

  render() {
    return (
      <div>
        <div className="formlogin">
          <div className="container">
            <div className="row">
              <div className="col-6 info1">
                <div className="noidung1">
                  <h3 className="title">
                    <img src={logo} alt="logo" width={280} height={220} />
                  </h3>
                  <hr />
                  <h4>
                    <br />
                    <br />
                    <b className="slogan">
                      The Bridge Between Technology and Magic.
                    </b>
                  </h4>{" "}
                  <br />
                  <p className="description">
                    Build, Create, Thrive - Tạo ra các sản phẩm trực tuyến tuyệt
                    vời với code, thiết kế, và sự kết hợp mạnh mẽ
                  </p>
                  <br />
                  <br /> <hr />
                  <br /> <br /> <br /> <br />
                  <a href="http://sikawanonka.rf.gd/" className="author">
                    @sikawanonka
                  </a>
                </div>
              </div>
              <div className="col-6 info2">
                <div className="formdangky">
                  <div className="titledangky">
                    <h3>Đăng Ký</h3>
                    <p className="descriptiondangky">
                      Nhập thông tin để có thể đăng ký!
                    </p>
                    <label htmlFor="firstname">
                      First Name <b className="dausao">*</b>
                    </label>
                    <br />
                    <input
                      className="styled-input"
                      type="text"
                      id="firstname"
                      required
                      minLength={2}
                      maxLength={15}
                      placeholder="First Name"
                      onChange={this.onFirstname}
                      value={this.state.firstname}
                    />{" "}
                    <br />
                    <label htmlFor="lastname">
                      Last Name<b className="dausao">*</b>
                    </label>
                    <br />
                    <input
                      className="styled-input"
                      type="text"
                      id="lastname"
                      required
                      minLength={2}
                      maxLength={30}
                      placeholder="Last Name"
                      onChange={this.onLastname}
                      value={this.state.lastname}
                    />{" "}
                    <br />
                    <label htmlFor="email">
                      Email<b className="dausao">*</b>
                    </label>
                    <br />
                    <input
                      className="styled-input"
                      type="email"
                      id="email"
                      required
                      placeholder="example@gmail.com"
                      onChange={this.onEmail}
                      value={this.state.email}
                    />
                    <br />
                    <label htmlFor="pass">
                      Password<b className="dausao">*</b>
                    </label>
                    <br />
                    <input
                      placeholder="1234567pass@"
                      className="styled-input"
                      type="password"
                      id="pass"
                      required
                      minLength={8}
                      maxLength={30}
                      onChange={this.onPassword}
                      value={this.state.password}
                    />{" "}
                    <br /> <br />
                    <input
                      className="simple-checkbox"
                      type="checkbox"
                      required
                    />
                    <label className="checkbox-label" htmlFor="checkbox">
                      Tôi chấp nhận với tất cả{" "}
                      <b>
                        <a className="dieukhoan" href="#">
                          điều khoản và chính sách
                        </a>
                      </b>
                    </label>
                    <br /> <br />
                    <button
                      onClick={this.login}
                      className="signup"
                      type="submit"
                    >
                      Đăng ký
                    </button>
                    <br />
                    <p className="dacotk">
                      Nếu bạn đã có tài khoản{" "}
                      <b>
                        <Link className="dangnhap" to="/">
                          Đăng nhập
                        </Link>
                      </b>
                    </p>
                    <br />
                    <p className="phuongthuclogin">
                      Phương thức đăng nhập khác
                    </p>
                    <div className="otherlogin">
                      <button className="google">
                        <FontAwesomeIcon icon={faGoogle} /> Google
                      </button>
                      <button className="facebook">
                        <FontAwesomeIcon icon={faFacebook} /> Facebook
                      </button>
                      <button className="x">
                        <FontAwesomeIcon icon={faTwitter} /> Twiter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormLogin;
