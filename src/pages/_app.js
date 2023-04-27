import Navbar from "@/components/Navbar/Navbar";
import "bulma/css/bulma.min.css";
import "../../public/styles.css";
import "bulma/css/bulma.min.css";
import "../components/Navbar/Navbar.module.css";
import Intro from "@/components/Intro/Intro";
import Services from "@/components/Services/Services";

function MyApp({ Component, pageProps }) {
  return (
    <div className="p-3">
      <div>
        <Navbar />
      </div>
      <div class="intro-section section has-text-centered is-mobile is-fullheight">
        <Intro />
      </div>
      <div  class="services-section section is-mobile is-fullheight">
        <Services />
      </div>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;