import Navbar from "@/components/Navbar/Navbar";
import "bulma/css/bulma.min.css";
import '../../public/styles.css'
import 'bulma/css/bulma.min.css';
import '../components/Navbar/Navbar.css'
import Intro from "@/components/Intro/Intro";
function MyApp({ Component, pageProps }) {
  return (<div className="p-3">
    <Navbar />
    <Intro />
    <Component {...pageProps} />
  </div>
  );
}

export default MyApp;