import React from 'react';
import './Navbar.css';

function Navbar({ toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">GetAJob</div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">Companies</a></li>
        <li><a href="#">Login</a></li>
        <li>
          <button className="theme-toggle" onClick={toggleTheme}>🌓</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
// This Navbar component serves as the navigation bar for the GetAJob application.
// It includes links to different sections of the site and a button to toggle between light and dark themes.
// The toggleTheme function is passed as a prop to allow the parent component to manage the theme state.
// The styling is handled in the Navbar.css file, ensuring a clean and responsive design.
// The navbar is designed to be user-friendly, with clear links and a simple theme toggle button.
// The use of semantic HTML elements like <nav> and <ul> enhances accessibility and SEO.
// The component is structured to be easily extendable, allowing for additional links or features in the future.
// The logo is displayed prominently, reinforcing the brand identity of GetAJob.
// The Navbar component is responsive, adapting to different screen sizes for optimal user experience.
// The use of CSS classes allows for easy customization and theming, making it flexible for future design changes.
// The component is designed to be lightweight and efficient, ensuring fast loading times and smooth navigation.
// Overall, the Navbar component is a crucial part of the GetAJob application, providing essential navigation