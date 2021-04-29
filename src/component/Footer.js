import React from 'react';

import { Container } from 'react-bootstrap';
import './Footer.css';
import { ImPhone, ImFacebook, ImLocation } from 'react-icons/im';
import { MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <div className='footer background'>
      <Container className='footer body'>
        <div className='footer body'>
          <div className='footer horizontal'>
            <div className='footer data'>
              <p className='footer topic thai_head_1'>ติดต่อเรา</p>
              <div className='footer text'>
                <ImPhone className='footer icon phone' />
                <p className='footer info phone thai_body_1'>
                  Tel. +66 2 329 8341 - 2 || Fax. +66 2 329 8343
                </p>
              </div>

              <div className='footer text'>
                <ImFacebook className='footer icon facebook' />
                <p className='footer info facebook thai_body_1'>
                  วิศวกรรมคอมพิวเตอร์ พระจอมเกล้าลาดกระบัง
                </p>
              </div>
              <div className='footer text'>
                <ImLocation className='footer icon location' />
                <p className='footer info location thai_body_1'>
                  ECC Building Moo 1 Ladkrabang 1, ถนน ฉลองกรุง 22 แขวง ลำปลาทิว
                  เขตลาดกระบัง กรุงเทพมหานคร 10520
                </p>
              </div>
            </div>
            <div className='footer map'></div>
          </div>
          <div className='footer foot'>
            <p className='footer copyright eng_head_4'>
              Copyright © 2020 iCE. All Rights Reserved. Developed by iCE Team.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
