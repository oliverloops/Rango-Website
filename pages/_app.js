import { FormspreeProvider } from "@formspree/react";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <FormspreeProvider project="1723073748489207795">
      <Component {...pageProps} />
    </FormspreeProvider>
  );
}

export default App;
