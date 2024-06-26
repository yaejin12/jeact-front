import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./libs/routes/router";
import { ThemeProvider } from "styled-components";
import { theme } from "./libs/styles/theme";
import TodoProvider from "./store/todo.store";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoProvider>
        {/*key = {value}*/}
        <RouterProvider router={router} />
      </TodoProvider>
    </ThemeProvider>
    // 컴포넌트
  );
}
export default App;
