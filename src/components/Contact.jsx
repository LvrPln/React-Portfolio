import { FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Contact</h2>
            <div className="contact-info">
                <p>
                    <FaEnvelope /> <strong>Email:</strong>{" "}
                    <a href="mailto:elvirapialane16@gmail.com">elvirapialane16@gmail.com</a>
                </p>
                <p>
                    <FaPhone /> <strong>Phone:</strong>{" "}
                    <a href="tel:09634983705">09634983705</a>
                </p>
                <p>
                    <FaFacebook /> <strong>Facebook:</strong>{" "}
                    <a href="https://www.facebook.com/elvira.pialane13" target="_blank" rel="noopener noreferrer">Elvira Pialane</a>
                </p>
                <p>
                    <FaInstagram /> <strong>Instagram:</strong>{" "}
                    <a href="https://www.instagram.com/elviijp/" target="_blank" rel="noopener noreferrer">@elviijp</a>
                </p>
                <p>
                    <FaTiktok /> <strong>Tiktok:</strong>{" "}
                    <a href="https://www.tiktok.com/@elviijp" target="_blank" rel="noopener noreferrer">@Viraa</a>
                </p>
                <p>
                    <FaGithub /> <strong>GitHub:</strong>{" "}
                    <a href="https://github.com/LvrPln" target="_blank" rel="noopener noreferrer">LvrPn</a>
                </p>
            </div>

            <div className="social-follow">
                <p>Follow me on:</p>
                {/* Optionally, repeat icons as clickable buttons */}
            </div>
        </div>
    );
};

export default Contact;
