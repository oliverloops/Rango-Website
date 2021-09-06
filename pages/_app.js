import { FormspreeProvider } from "@formspree/react";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <FormspreeProvider project="1725937456705961015">
      <Component {...pageProps} />
    </FormspreeProvider>
  );
}

export default App;
