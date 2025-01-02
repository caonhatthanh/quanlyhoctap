import React from "react";
import {
  Avatar,
  Input,
  Form,
  Button,
  Table,
  Modal,
  Tooltip,
  TableColumnsType,
  message,
} from "antd";

interface Props {}

interface State {
  isOpenDetails: boolean;
  isshowModal: boolean;
  tableuserData: User[];
  chonnguoidung?: User;
  isOpenEdit: boolean;
  isEditUser?: User;
}

interface User {
  key: string;
  name: string;
  date: string;
  sdt: string;
  diachi: string;
  thumbnail: string;
}

export const columns: TableColumnsType<User> = [
  {
    key: "thumbnail-key",
    title: "Ảnh đại diện",
    dataIndex: "thumbnail",
    render(value) {
      return <Avatar src={value} size="large" />;
    },
  },
  {
    title: "Họ Tên",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Ngày Sinh",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Số điện thoại",
    dataIndex: "sdt",
    key: "sdt",
    align: "right",
  },
  {
    title: "Địa chỉ",
    dataIndex: "diachi",
    key: "diachi",
  },
];

class TableUser extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpenDetails: false,
      isshowModal: false,
      tableuserData: JSON.parse(localStorage.getItem("tableuserData") || "[]"),
      isOpenEdit: false,
      isEditUser: undefined,
    };
  }

  OpenDetails = (user: User) => {
    this.setState({ isOpenDetails: true, chonnguoidung: user });
  };

  CancelDetails = () => {
    this.setState({ isOpenDetails: false, chonnguoidung: undefined });
  };

  showModal = () => {
    this.setState({ isshowModal: true });
  };

  cancel = () => {
    this.setState({ isshowModal: false });
  };

  DeleteUser = (key: string) => {
    const XoaBaiTap = this.state.tableuserData.filter(
      (user) => user.key !== key
    );

    localStorage.setItem("tableuserData", JSON.stringify(XoaBaiTap));

    this.setState({
      tableuserData: XoaBaiTap,
    });

    message.error("Xóa người dùng thành công");
  };

  OpenEdit = (user: User) => {
    this.setState({ isOpenEdit: true, isEditUser: user });
  };

  CloseEdit = () => {
    this.setState({ isOpenEdit: false, isEditUser: undefined });
  };

  onFinish = (values: any) => {
    const currentData = this.state.tableuserData;
    currentData.unshift({
      key: Math.random().toString(),
      ...values,
    });

    localStorage.setItem("tableuserData", JSON.stringify(currentData));

    this.setState({
      isOpenDetails: false,
      isshowModal: false,
      tableuserData: JSON.parse(localStorage.getItem("tableuserData") || "[]"),
    });

    message.success("Thêm người dùng thành công");
  };

  SaveChange = (values: any) => {
    const ChangeData = this.state.tableuserData.map((user) =>
      user.key === this.state.isEditUser?.key
        ? { ...user, ...values }
        : user
    );

    localStorage.setItem("tableuserData", JSON.stringify(ChangeData));

    this.setState({
      tableuserData: ChangeData,
      isOpenEdit: false,
      isEditUser: undefined,
    });
    
    message.success("Chỉnh sửa người dùng thành công");
  };

  render() {
    const tableColumns = [
      ...columns,
      {
        title: "Hành Động",
        key: "hanhdong",
        render: (_: any, record: User) => {
          return (
            <div>
              <Tooltip title="Chi tiết">
                <Button
                  shape="circle"
                  onClick={() => this.OpenDetails(record)}
                  className="chitietbaitap"
                >
                  <i className="bx bx-glasses"></i>
                </Button>
              </Tooltip>
              <Tooltip title="Chỉnh sửa">
                <Button
                  shape="circle"
                  onClick={() => this.OpenEdit(record)}
                >
                  <i className="bx bxs-edit-alt"></i>
                </Button>
              </Tooltip>
              <Tooltip title="Xóa">
                <Button
                  onClick={() => this.DeleteUser(record.key)}
                  shape="circle"
                  className="xoabaitap"
                >
                  <i className="bx bxs-trash-alt"></i>
                </Button>
              </Tooltip>
            </div>
          );
        },
      },
    ];

    return (
      <div className="thongtinnguoidung">
        <button type="submit" onClick={this.showModal} className="nutthem">
          <i className="bx bxs-user-plus"></i> Thêm User
        </button>
        <Table
          dataSource={this.state.tableuserData}
          tableLayout="fixed"
          className="tablebaitap"
          pagination={{ pageSize: 6 }}
          bordered
          columns={tableColumns}
          size="small"
        />
        {/* Modal Thêm User */}
        <Modal
          footer={false}
          title="Nhập thông tin người dùng"
          open={this.state.isshowModal}
          onCancel={this.cancel}
        >
          <Form layout="vertical" onFinish={this.onFinish}>
            <Form.Item
              label="Họ Tên:"
              name="name"
              rules={[{ required: true, message: "Vui lòng nhập Họ Tên" }]}
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              label="Ngày Sinh"
              name="date"
              rules={[{ required: true, message: "Vui lòng nhập Ngày Sinh" }]}
            >
              <Input type="date" />
            </Form.Item>
            <Form.Item
              label="Số điện thoại"
              name="sdt"
              rules={[{ required: true, message: "Vui lòng nhập Số Điện Thoại" }]}
            >
              <Input type="number" maxLength={10} />
            </Form.Item>
            <Form.Item
              label="Địa chỉ:"
              name="diachi"
              rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              label="Avatar"
              name="thumbnail"
              rules={[{ required: true, message: "Vui lòng nhập Link ảnh" }]}
            >
              <Input type="text" />
            </Form.Item>
            <button type="submit" className="createbaitap">
              Thêm User
            </button>
          </Form>
        </Modal>

        {/* Modal Chi Tiết */}
        <Modal
          footer={false}
          title="Chi Tiết Người Dùng"
          open={this.state.isOpenDetails}
          onCancel={this.CancelDetails}
        >
          {this.state.chonnguoidung && (
            <div>
              <p>
                <b>Avatar:</b> {this.state.chonnguoidung.thumbnail}
              </p>
              <p>
                <b>Họ Tên:</b> {this.state.chonnguoidung.name}
              </p>
              <p>
                <b>Ngày sinh:</b> {this.state.chonnguoidung.date}
              </p>
              <p>
                <b>Số Điện Thoại:</b> {this.state.chonnguoidung.sdt}
              </p>
              <p>
                <b>Địa Chỉ:</b> {this.state.chonnguoidung.diachi}
              </p>
            </div>
          )}
        </Modal>

        {/* Modal Chỉnh Sửa */}
        <Modal
          footer={false}
          title="Chỉnh sửa thông tin người dùng"
          open={this.state.isOpenEdit}
          onCancel={this.CloseEdit}
        >
          <Form
            layout="vertical"
            onFinish={this.SaveChange}
            initialValues={this.state.isEditUser}
          >
            <Form.Item
              label="Họ Tên:"
              name="name"
              rules={[{ required: true, message: "Vui lòng nhập Họ Tên" }]}
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              label="Ngày Sinh"
              name="date"
              rules={[{ required: true, message: "Vui lòng nhập Ngày Sinh" }]}
            >
              <Input type="date" />
            </Form.Item>
            <Form.Item
              label="Số điện thoại"
              name="sdt"
              rules={[{ required: true, message: "Vui lòng nhập Số Điện Thoại" }]}
            >
              <Input type="number" maxLength={10} />
            </Form.Item>
            <Form.Item
              label="Địa chỉ:"
              name="diachi"
              rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              label="Avatar"
              name="thumbnail"
              rules={[{ required: true, message: "Vui lòng nhập Link ảnh" }]}
            >
              <Input type="text" />
            </Form.Item>
            <button type="submit" className="createbaitap">
              Lưu thay đổi
            </button>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default TableUser;
