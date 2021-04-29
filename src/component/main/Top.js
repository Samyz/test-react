import React from "react";
import { Container } from "react-bootstrap";
import "./Top.css";

import main from "../../pic/main.png";
import arrow from "../../pic/arrow down icon.png";
import { IoIosArrowDropdown } from "react-icons/io";

const Top = () => {
  return (
    <div className='main top all'>
      <img src={main} className='main top background' alt='background pic' />
      <Container className='main top body'>
        <div>
          <p className='main top topic eng_head_1'>Department of Computer Engineering Faculty of Engineering</p>
        </div>
        <div>
          <p className='main top info eng_head_2'>KING MONGKUT'S INSTITUTE OF TECHNOLOGY LADKRABANG</p>
        </div>
        {/* <img src={arrow} alt='arrow icon' /> */}
        <IoIosArrowDropdown className='main top arrow' />
      </Container>
    </div>
  );
};

export default Top;
