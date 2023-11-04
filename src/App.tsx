import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import Fallback from "./components/fallback/Fallback";
import { router } from "./routes/Routes";
import { store } from "./services/store";

const theme = createTheme({
  colors: {},
});

const App = () => {
  return (
    <Provider store={store}>
      <MantineProvider>
        <Notifications position="bottom-right" />
        <Suspense fallback={<Fallback />}>
          <RouterProvider router={router} />
        </Suspense>
      </MantineProvider>
    </Provider>
  );
};

export default App;
