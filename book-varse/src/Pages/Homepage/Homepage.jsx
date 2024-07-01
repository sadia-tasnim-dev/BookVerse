import { Banner } from "./Banner";
import { Books } from "./Books";
import { Footer } from "../../Pages/Homepage/footer";

export const Homepage = () => {
  return (
    <div>
      <div className="container">
        <Banner />
        <Books />
      </div>
      <Footer />
    </div>
  );
};
