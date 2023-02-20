import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import React from 'react';

const Icon = ({ fontAwsomeCode }) => {
    switch (fontAwsomeCode) {
        case 'fas fa-phone':
            return <FaPhone />;
        case 'fas fa-envelope':
            return <FaEnvelope />;
        case 'fab fa-linkedin':
            return <FaLinkedin />;
        case 'fab fa-github':
            return <FaGithub />;
        case 'fab fa-facebook':
            return <FaFacebook />;
        case 'fab fa-whatsapp':
            return <FaWhatsapp />;

        default:
            return <p>Icon not available.</p>;
    }
};

export default Icon;
