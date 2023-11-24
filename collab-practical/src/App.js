import "./styles/global.scss";
import HomePage from "./components/homePage/HomePage";
import { ConfigProvider } from "antd";
import theme from "./theme/Theme";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <div className="App">
        <HomePage />
      </div>
    </ConfigProvider>
  );
}

export default App;
