import { CSSProperties } from "react";
// import "./myComponent.css"
// import đường dẫn css

interface Props {
  fullname: string;
  color: string;
}

function MyComponent(props: Props) {
  const style: CSSProperties = {
    fontSize: 30,
    color: props.color,
  };

  // khai báo tên sau fun phải trùng tên tệp
  return <h1 style={style}>{props.fullname}</h1>;
  // class trong react là className"#"
}

export default MyComponent; // xuất ra để có thể import vào apptsx
