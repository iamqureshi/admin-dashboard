import store from "@/app/store";
import mainTheme from "@/styles/MainTheme";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { ArcElement, Chart as ChartJS } from "chart.js";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }) {
  ChartJS.register(ArcElement);

  return (
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
