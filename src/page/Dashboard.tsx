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
import { FloatButton } from "antd";

interface Props {}

interface State {
  isLogin: boolean;
  showPopup: boolean; // Thêm state để kiểm tra việc hiển thị popup
}

class Dashboard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isLogin: ACCOUNTS.some(
        (account) =>
          localStorage.getItem("username") === account.USERNAME &&
          localStorage.getItem("password") === account.PASSWORD
      ),
      showPopup: false, // Khởi tạo state showPopup là false
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
    this.setState({ showPopup: true }); // Hiển thị popup khi ấn nút đăng xuất
  };

  DongYDangXuat = () => {
    this.logout();
    this.setState({ showPopup: false }); // Ẩn popup và thực hiện đăng xuất
  };

  TuChoiDangXuat = () => {
    this.setState({ showPopup: false }); // Ẩn popup nếu người dùng chọn hủy
  };

  render() {
    return this.state.isLogin == false ? (
      <Navigate to={"/"}></Navigate>
    ) : (
      <div>
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
        {/* Popup xác nhận đăng xuất */}
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
        <div className="tientrinh">
          <div className="titletientrinh">
            <p className="title">
              Hôm Nay<i className="pin bx bxs-pin"></i>
            </p>
            <p className="description">Tiến trình học tập</p>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="tongbaihoc">
                <div className="baihoc">
                  <i className="iconsach bx bxs-book"></i>
                  <Link to={"/baitap"}>
                    <button className="xemthembaihoc">Xem Thêm</button>
                  </Link>
                  <h1>10</h1>
                  <p className="info">Bài Tập</p>
                  <p className="banner">23h Cùng Ngày!</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="tonghoanthanh">
                <div className="hoanthanh">
                  <i className="iconcheck bx bxs-check-shield"></i>
                  <Link to={"/lichsu"}>
                    <button className="xemthemhoanthanh">Xem thêm</button>
                  </Link>
                  <h1>5</h1>
                  <p className="info">Hoàn Thành</p>
                  <p className="banner1">50%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ttphantram">
          <div className="tiendohoctap">
            <p className="title">
              Tổng quan tiến độ <i className="bx bx-line-chart"></i>
            </p>
          </div>
          <div className="bieudo">
            <div className="row">
              <div className="math col-3">
                <b>80,3%</b>
                <p className="monhoc">
                  <i className="bx bx-math"></i> Toán
                </p>
              </div>
              <div className="ly col-3">
                <b>60.3%</b>
                <p className="monhoc">
                  <i className="bx bxs-analyse"></i> Lý
                </p>
              </div>
              <div className="hoa col-3">
                <b>71.1%</b>
                <p className="monhoc">
                  <i className="bx bxl-graphql"></i> Hóa
                </p>
              </div>
              <div className="van col-3">
                <b>43.2%</b>
                <p className="monhoc">
                  <i className="bx bxs-leaf"></i> Văn
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="thongketiendo">
                <div className="toan">
                  <p className="title">
                    Toán <i className="bx bx-math"></i>
                  </p>
                  <p className="loadingbar">16/20</p>
                </div>
                <div className="lythongke">
                  <p className="title">
                    Lý <i className="bx bxs-analyse"></i>
                  </p>
                  <p className="loadingbar">12/20</p>
                </div>
                <div className="xemthemtiendo">
                  <button type="submit" className="xemthem">
                    Xem Thêm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
            <FloatButton.BackTop visibilityHeight={0} />
          </FloatButton.Group>
        </div>
      </div>
    );
  }
}

export default Dashboard;
