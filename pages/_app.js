import { FormspreeProvider } from "@formspree/react";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <FormspreeProvider project="1728250366899780717">
      <Component {...pageProps} />
    </FormspreeProvider>
  );
}

export default App;
