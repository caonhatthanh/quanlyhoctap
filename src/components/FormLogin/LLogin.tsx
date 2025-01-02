import React from "react";
import "./FormLogin.css";
import "../../bootstrap-5.3.3-dist/css/bootstrap.min.css";
import "../../bootstrap-5.3.3-dist/js/bootstrap.bundle.min.js";
import logo from "./assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link, Navigate } from "react-router-dom";
import Popup from "../../page/popup.tsx";
import { message } from "antd";

export const ACCOUNTS = [
  { USERNAME: "admin@admin.admin", PASSWORD: "admin123" },
  { USERNAME: "caonhatthanh@dashboard.admin", PASSWORD: "thanh2006" },
  { USERNAME: "nguyenngochuy@chymto.ngungon", PASSWORD: "huybeou" },
];

interface State {
  email: string;
  password: string;
  isLogin: boolean;
  showPopup: boolean;
}
interface Props {}

class FormLogin extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isLogin: ACCOUNTS.some(
        (account) =>
          account.USERNAME === localStorage.getItem("username") &&
          account.PASSWORD === localStorage.getItem("password")
      ),
      showPopup: false,
    };
  }

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
    const isValidAccount = ACCOUNTS.some(
      (account) =>
        account.USERNAME === this.state.email &&
        account.PASSWORD === this.state.password
    );

    if (isValidAccount) {
      localStorage.setItem("username", this.state.email);
      localStorage.setItem("password", this.state.password);
      this.setState({
        isLogin: true,
      });
    } else {
      this.setState({ showPopup: true });
    }

    message.success("Đăng nhập thành công");
  };

  closePopup = () => {
    this.setState({ showPopup: false });
  };

  render() {
    return this.state.isLogin == false ? (
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
                    <h3>Đăng Nhập</h3>
                    <p className="descriptiondangky">
                      Nhập thông tin để có thể đăng nhập!
                    </p>
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
                      Ghi nhớ tài khoản
                    </label>
                    <br /> <br />
                    <button
                      onClick={this.login}
                      className="signup"
                      type="submit"
                    >
                      Đăng Nhập
                    </button>
                    {this.state.showPopup && (
                      <Popup
                        message="Sai tên đăng nhập hoặc mật khẩu!"
                        onClose={this.closePopup}
                      />
                    )}
                    <br />
                    <p className="dacotk">
                      Nếu bạn chưa có tài khoản{" "}
                      <b>
                        <Link className="dangnhap" to="/dangky">
                          Đăng ký
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
    ) : (
      <Navigate to="/dashboard"></Navigate>
    );
  }
}

export default FormLogin;
