import "./App.css";
import { Button, Divider, Form, Input, message, Typography } from "antd";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
// import { Class } from "leaflet";
// import Mapcontent from "./components/maps/Mapcontent";
// import "leaflet/dist/leaflet.css";

// function App() {
//   return (
//     <>
//       <Mapcontent />
//     </>
//   );
// }

function App() {
  const login = () => {
    message.success("Login Successful!");
  };
  return (
    <div className="appBg">
      <Form className="loginForm" onFinish={login}>
        <Typography.Title>Welcome to STL System</Typography.Title>
        <Form.Item
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter valid email",
            },
          ]}
          label="User name"
          name={"myUsername"}
        >
          <Input placeholder="Enter your user name" />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please enter your password ",
            },
          ]}
          label="Password"
          name={"myPassword"}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
        <Divider style={{ borderColor: "black" }}>or Login with</Divider>
        <div className="socialLogin">
          <GoogleOutlined
            className="socialIcon"
            onClick={login}
            style={{ color: "red" }}
          />
          <FacebookOutlined
            className="socialIcon"
            onClick={login}
            style={{ color: "blue" }}
          />
        </div>
      </Form>
    </div>
  );
}

export default App;
