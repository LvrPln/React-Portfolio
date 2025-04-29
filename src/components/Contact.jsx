import { FaEnvelope, FaPhone, FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";


const Contact = () => {
    return (
    <div className="contact-container">
        <h2>Contact</h2>
        <div className="contact-info">
            <p><FaEnvelope /> <strong>Email:</strong> elvirapaliane16@gmail.com</p>
            <p><FaPhone /> <strong>Phone:</strong> 09634983705</p>
            <p><FaInstagram /> <strong>Instagram:</strong> elviJp</p>
            <p><FaTiktok /> <strong>Tiktok:</strong> @Viraa</p>
            <p><FaGithub /> <strong>GitHub:</strong> LvrPn</p>
        </div>

        <div className="social-follow">
        <p>Follow me on:</p>
        {/* You can add icons/links here if needed */}
        </div>
    </div>
    );
};

export default Contact;
