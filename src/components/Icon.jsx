import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaCog,
} from 'react-icons/fa';
import React from 'react';

const iconStyle = {
  fontSize: '2em', // ← 1.5 × parent font-size
  verticalAlign: 'middle',
};

const Icon = ({ fontAwsomeCode }) => {
  switch (fontAwsomeCode) {
    case 'fas fa-phone':
      return <FaPhone style={iconStyle} />;
    case 'fas fa-envelope':
      return <FaEnvelope style={iconStyle} />;
    case 'fab fa-linkedin':
      return <FaLinkedin style={iconStyle} />;
    case 'fab fa-github':
      return <FaGithub style={iconStyle} />;
    case 'fab fa-facebook':
      return <FaFacebook style={iconStyle} />;
    case 'fab fa-whatsapp':
      return <FaWhatsapp style={iconStyle} />;
    case 'fa fa-cog':
      return <FaCog style={iconStyle} />;

    default:
      return <p>Icon not available.</p>;
  }
};

export default Icon;
