import React from "react";
import {
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
  isEditHomeWork?: Homework;
  isEditOpen: boolean;
  isOpenDetails: boolean;
  isshowModal: boolean;
  tableData: Homework[];
  selectedHomework?: Homework;
}

interface Homework {
  key: string;
  subject: string;
  time: string;
  date: string;
  noidung: string;
}

export const columns: TableColumnsType<Homework> = [
  {
    title: "Môn Học",
    dataIndex: "subject",
    key: "subject",
  },
  {
    title: "Thời Gian",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Ngày Hết Hạn",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Nội Dung",
    dataIndex: "noidung",
    key: "noidung",
  },
  {
    title: "Hành Động",
    key: "hanhdong",
    render: (_: any, record: Homework) => {
      return (
        <div>
          <Tooltip title="Chi tiết">
            <Button
              shape="circle"
              htmlType="button"
              className="chitietbaitap"
              onClick={() => record.OpenDetails(record)}
            >
              <i className="bx bx-glasses"></i>
            </Button>
          </Tooltip>
          <Tooltip title="Chỉnh sửa">
            <Button
              onClick={() => record.OpenEdit(record)}
              shape="circle"
              htmlType="button"
            >
              <i className="bx bxs-edit-alt"></i>
            </Button>
          </Tooltip>
          <Tooltip title="Xóa">
            <Button
              shape="circle"
              htmlType="button"
              className="xoabaitap"
              onClick={() => record.DeleteHomework(record.key)} // Thêm sự kiện xóa
            >
              <i className="bx bxs-trash-alt"></i>
            </Button>
          </Tooltip>
        </div>
      );
    },
  },
];

class Tablebaitap extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpenDetails: false,
      isshowModal: false,
      isEditOpen: false,
      isEditHomeWork: undefined,
      tableData: JSON.parse(localStorage.getItem("tableData") || "[]"),
    };
  }

  OpenDetails = (homework: Homework) => {
    this.setState({ isOpenDetails: true, selectedHomework: homework });
  };

  CancelDetails = () => {
    this.setState({ isOpenDetails: false, selectedHomework: undefined });
  };

  showModal = () => {
    this.setState({ isshowModal: true });
  };

  OpenEdit = (homework: Homework) => {
    this.setState({ isEditOpen: true, isEditHomeWork: homework });
  };

  CloseEdit = () => {
    this.setState({ isEditOpen: false, isEditHomeWork: undefined });
  };

  cancel = () => {
    this.setState({ isshowModal: false });
  };

  onFinish = (values: any) => {
    const currentData = this.state.tableData;
    currentData.unshift({
      key: Math.random().toString(),
      ...values,
    });

    localStorage.setItem("tableData", JSON.stringify(currentData));

    this.setState({
      isOpenDetails: false,
      isshowModal: false,
      tableData: JSON.parse(localStorage.getItem("tableData") || "[]"),
    });

    message.success("Thêm bài tập thành công");
  };

  SaveChange = (values: any) => {
    const ChangeData = this.state.tableData.map((homework) =>
      homework.key === this.state.isEditHomeWork?.key
        ? { ...homework, ...values }
        : homework
    );
  
    localStorage.setItem("tableData", JSON.stringify(ChangeData));
  
    this.setState({
      tableData: ChangeData,
      isEditOpen: false,
      isEditHomeWork: undefined,
    });

    message.success("Chỉnh sửa bài tập thành công");
  };
  

  // Hàm xử lý xóa bài tập
  deleteHomework = (key: string) => {
    const updatedData = this.state.tableData.filter(
      (homework) => homework.key !== key
    );

    localStorage.setItem("tableData", JSON.stringify(updatedData));

    this.setState({
      tableData: updatedData,
    });

    message.error("Xóa bài tập thành công");
  };

  render() {
    const tableColumns = columns.map((column) => {
      if (column.key === "hanhdong") {
        return {
          ...column,
          render: (_: any, record: Homework) => {
            return (
              <div>
                <Tooltip title="Chi tiết">
                  <Button
                    shape="circle"
                    htmlType="button"
                    className="chitietbaitap"
                    onClick={() => this.OpenDetails(record)}
                  >
                    <i className="bx bx-glasses"></i>
                  </Button>
                </Tooltip>
                <Tooltip title="Chỉnh sửa">
                  <Button
                    onClick={() => this.OpenEdit(record)}
                    shape="circle"
                    htmlType="button"
                  >
                    <i className="bx bxs-edit-alt"></i>
                  </Button>
                </Tooltip>
                <Tooltip title="Xóa">
                  <Button
                    shape="circle"
                    htmlType="button"
                    className="xoabaitap"
                    onClick={() => this.deleteHomework(record.key)} // Thêm sự kiện xóa
                  >
                    <i className="bx bxs-trash-alt"></i>
                  </Button>
                </Tooltip>
              </div>
            );
          },
        };
      }
      return column;
    });

    return (
      <div className="thongtinnguoidung">
        <button type="submit" onClick={this.showModal} className="nutthem">
          <i className="bx bxs-book-add"></i> Thêm Bài Tập
        </button>
        <Table
          dataSource={this.state.tableData}
          tableLayout="fixed"
          className="tablebaitap"
          pagination={{ pageSize: 6 }}
          bordered
          columns={tableColumns}
          size="small"
        />
        <Modal
          footer={false}
          title="Nhập thông tin bài tập"
          open={this.state.isshowModal}
          onCancel={this.cancel}
        >
          <div>
            <Form layout="vertical" onFinish={this.onFinish}>
              <Form.Item
                label="Môn Học:"
                name={"subject"}
                rules={[{ required: true, message: "Vui lòng nhập môn học" }]}
              >
                <Input placeholder="Nhập môn học bạn muốn thêm" type="text" />
              </Form.Item>
              <Form.Item
                label="Thời Gian:"
                name={"time"}
                rules={[{ required: true, message: "Vui lòng nhập thời gian" }]}
              >
                <Input type="time" />
              </Form.Item>
              <Form.Item
                label="Ngày Hết Hạn:"
                name={"date"}
                rules={[
                  { required: true, message: "Vui lòng nhập Ngày Hết Hạn" },
                ]}
              >
                <Input type="date" />
              </Form.Item>
              <Form.Item
                label="Nội dung:"
                name={"noidung"}
                rules={[{ required: true, message: "Vui lòng nhập nội dung" }]}
              >
                <Input.TextArea placeholder="Thêm nội dung bạn muốn" rows={4} />
              </Form.Item>
              <button type="submit" className="createbaitap">
                Tạo mới
              </button>
            </Form>
          </div>
        </Modal>
        <Modal
          footer={false}
          title="Chi Tiết Bài Tập"
          open={this.state.isOpenDetails}
          onCancel={this.CancelDetails}
        >
          {this.state.selectedHomework && (
            <div>
              <p>
                <b>Môn Học:</b> {this.state.selectedHomework.subject}
              </p>
              <p>
                <b>Thời Gian:</b> {this.state.selectedHomework.time}
              </p>
              <p>
                <b>Ngày Hết Hạn:</b> {this.state.selectedHomework.date}
              </p>
              <p>
                <b>Nội Dung:</b> {this.state.selectedHomework.noidung}
              </p>
            </div>
          )}
        </Modal>
        <Modal
          footer={false}
          title="Nhập Nội Dung Chỉnh Sửa"
          open={this.state.isEditOpen}
          // onOk={handleOk}
          onCancel={this.CloseEdit}
        >
          <div>
            <Form initialValues={this.state.isEditHomeWork} layout="vertical" onFinish={this.SaveChange}>
              <Form.Item
                label="Môn học:"
                name={"subject"}
                rules={[{ required: true, message: "Vui lòng nhập môn học" }]}
              >
                <Input
                  placeholder="Nhập môn học mà bạn muốn chỉnh sửa"
                  type="text"
                ></Input>
              </Form.Item>
              <Form.Item
                label="Thời gian:"
                name={"time"}
                rules={[{ required: true, message: "Vui lòng nhập thời gian" }]}
              >
                <Input type="time"></Input>
              </Form.Item>
              <Form.Item
                label="Ngày đến hạn:"
                name={"date"}
                rules={[
                  { required: true, message: "Vui lòng nhập ngày đến hạn" },
                ]}
              >
                <Input type="date"></Input>
              </Form.Item>
              <Form.Item
                label="Nội dung:"
                name={"noidung"}
                rules={[{ required: true, message: "Vui lòng nhập nội dung" }]}
              >
                <Input.TextArea
                  placeholder="Nhập nội dung bạn muốn chỉnh sửa"
                  rows={4}
                />
              </Form.Item>
              <button type="submit" className="createbaitap">
                Lưu thay đổi
              </button>
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Tablebaitap;
