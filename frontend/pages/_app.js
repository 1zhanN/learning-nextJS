import "../styles/globals.css";
import Section1 from "../components/Section1/Section1.jsx";
import Section2 from "../components/Section2/Section2.jsx";
import Section3 from "../components/Section3/Section3.jsx";

const app = () => {
    return (
        <div className="px-4">
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    );
};

export default app;
