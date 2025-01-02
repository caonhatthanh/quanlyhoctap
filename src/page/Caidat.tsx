import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import profile from "./assets/profile/profile.jpg";
import "../bootstrap-5.3.3-dist/css/bootstrap.min.css";
import "../bootstrap-5.3.3-dist/js/bootstrap.bundle.min.js";
import { ACCOUNTS } from "../components/FormLogin/LLogin.tsx";
import "./logout.css";
import { message } from "antd";

interface Props {}

interface State {
  isLogin: boolean;
  showPopup: boolean;
}

class Caidat extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isLogin: ACCOUNTS.some(
        (account) =>
          localStorage.getItem("username") === account.USERNAME &&
          localStorage.getItem("password") === account.PASSWORD
      ),
      showPopup: false,
    };
  }
  logout = () => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (storedUsername && storedPassword) {
      // Xóa các giá trị trong localStorage
      localStorage.removeItem("username");
      localStorage.removeItem("password");

      // Cập nhật trạng thái
      this.setState({
        isLogin: false,
      });
    }
    message.success("Đăng xuất thành công");
  };

  PopupDangXuat = () => {
    this.setState({ showPopup: true });
  };

  DongYDangXuat = () => {
    this.logout();
    this.setState({ showPopup: false });
  };

  TuChoiDangXuat = () => {
    this.setState({ showPopup: false });
  };

  render() {
    return this.state.isLogin == false ? (
      <Navigate to={"/"}></Navigate>
    ) : (
      <div>
        <div className="header">
          <div className="row">
            <div className="col-12">
              <div className="timkiem">
                <input
                  type="text"
                  className="khungtiemkiem"
                  placeholder="Tìm kiếm..."
                />
                <button className="nuttimkiem">
                  <i className="bx bx-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar">
          <div className="logo-section">
            <h2 className="logo">
              Ruby<span>StudyHub</span>
            </h2>
          </div>
          <ul className="nav-list">
            <li>
              <Link className="nav-link" to={"/dashboard"}>
                <i className="bx bx-grid-alt"></i>Dashboard
              </Link>
            </li>
            <li>
              <Link to={"/user"} className="nav-link">
                <i className="bx bxs-user"></i>Người Dùng
              </Link>
            </li>
            <li>
              <Link to={"/baitap"} className="nav-link">
                <i className="bx bx-book"></i>Bài Tập
              </Link>
            </li>
            <li>
              <Link to={"/lichsu"} className="nav-link">
                <i className="bx bx-history"></i>Lịch Sử
              </Link>
            </li>
            <li>
              <Link to={"/thongtin"} className="nav-link">
                <i className="bx bxl-sketch"></i>Thông Tin
              </Link>
            </li>
          </ul>
          <div className="profile-section">
            <img src={profile} alt="profile" className="profile-img" />
            <div className="profile-info">
              <p className="profile-name">Cao Nhật Thanh</p>
              <p className="profile-role">Quản Lý</p>
            </div>
            <button
              type="button"
              onClick={this.PopupDangXuat}
              className="logout-btn"
            >
              <i className="bx bx-log-out"></i> Đăng xuất
            </button>
          </div>
        </div>
        {/* popup đăng xuất */}
        {this.state.showPopup && (
          <div className="popup-overlay">
            <div className="popup">
              <h4>Xác nhận đăng xuất</h4>
              <p>Bạn có chắc chắn muốn đăng xuất?</p>
              <div className="popup-buttons">
                <button className="btn-confirm" onClick={this.DongYDangXuat}>
                  Đồng ý
                </button>
                <button className="btn-cancel" onClick={this.TuChoiDangXuat}>
                  Hủy
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Caidat;
