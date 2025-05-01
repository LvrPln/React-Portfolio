import '../index.css';
import Mee from '../image/meee.jpg';

const Home = () => {
    return (
    <section className="home-container" id="home">
        <div className="info-style">
        <h1>
            Hi, I'm <strong>Vira</strong>
        </h1>
        <h2 className="subtitle">ESL Teacher & IT Student</h2>
        <p className="description">
            I am a passionate ESL teacher and IT student, eager to explore the world of technology. I am dedicated
            to helping students achieve their language learning goals while fostering a love for learning and
            innovation.
        </p>
        <a href="#contact" className="link-style">
            Get in Touch!
        </a>
        </div>

        <div className="img-container">
        <img src={Mee} alt="Vira" className="img" />
        </div>
    </section>
    );
};

export default Home;
