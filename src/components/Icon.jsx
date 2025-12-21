import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaCog,
  FaCode,
  FaCubes,
  FaCodeBranch,
  FaCloud,
  FaServer,
  FaHeartbeat,
  FaDesktop,
  FaCogs,
  FaDatabase,
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
    case 'fa fa-cogs':
      return <FaCogs style={iconStyle} />;
    case 'fa fa-code':
      return <FaCode style={iconStyle} />;
    case 'fa fa-cubes':
      return <FaCubes style={iconStyle} />;
    case 'fas fa-code-branch':
      return <FaCodeBranch style={iconStyle} />;
    case 'fa fa-cloud':
      return <FaCloud style={iconStyle} />;
    case 'fa fa-server':
      return <FaServer style={iconStyle} />;
    case 'fa fa-heartbeat':
      return <FaHeartbeat style={iconStyle} />;
    case 'fa fa-desktop':
      return <FaDesktop style={iconStyle} />;
    case 'fa fa-database':
      return <FaDatabase style={iconStyle} />;
    default:
      return <p>Icon not available.</p>;
  }
};

export default Icon;
