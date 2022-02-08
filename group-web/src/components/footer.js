import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>  
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>CFN@BNL</h2>
            
              <a target="_blank" href="https://www.bnl.gov/contact-us/">Contact</a>
              <Link to='/'>PO Box 5000</Link>
              <Link to='/'>Upton, NY 11973-5000</Link>
              <Link to='/'>(631) 344-8000</Link>
              <Link to='/admin'>Admin Login</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Facilities</h2>
            
              <a target="_blank" href="https://www.bnl.gov/cfn/facilities/optics.php">Optical Spectroscopy</a>
              <a target="_blank" href="https://www.bnl.gov/cfn/facilities/probes.php">UV & X-Ray Probes</a>
              <a target="_blank" href="https://www.bnl.gov/cfn/facilities/microscopy.php">Electron Microscopy</a>
              <a target="_blank" href="https://www.bnl.gov/cfn/facilities/nanofabrication.php">Nanofabrication</a>
              <a target="_blank" href="https://www.bnl.gov/cfn/facilities/theory.php/">Theory & Computation</a>
            </div>
          </div>

        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Life in Long Island</Link>

          </div>
          <div class='footer-link-items'>
            <h2>Follow Us!</h2>
            {/* <Link to='/'>Facebook</Link> */}
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              CFN@BNL
            </Link>
            
          </div>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to={{pathname:"//www.facebook.com/BrookhavenLab/" }}
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
             <Link
              class='social-icon-link instagram'
              to={{ pathname:"//www.instagram.com/brookhavenlab/" }}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to={{ pathname:"//www.youtube.com/user/BrookhavenLab" }}
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to={{ pathname:"//twitter.com/BrookhavenLab" }}
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to={{ pathname:"//www.linkedin.com/company/brookhavenlab/" }}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
