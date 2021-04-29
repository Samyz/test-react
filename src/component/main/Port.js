import React from 'react';

import { Container } from 'react-bootstrap';
import PortLink from '../PortLink';
import './Port.css';

var num = 2;
var portPic = [];
for (var i = 1; i <= num; i++) {
  portPic.push(require(`../../pic/portLink${i}.png`).default);
  // console.log(`../../pic/curriculumLink${i}.png`, curriculumPic[i]);
}
portPic.push(require(`../../pic/portLink1.png`).default);
portPic.push(require(`../../pic/portLink1.png`).default);
// const link1 = require('../../pic/portLink1.png').default;

const data = [
  {
    topic: 'TurtleBOT3 Thailand Championship 2019',
    rank: 'รางวัลชนะเลิศ และ รองชนะเลิศลำดับที่ 1',
    info:
      'ขอแสดงความยินดีกับ ทีม Tao tid siren! ที่ได้ รางวัลชนะเลิศ และทีม SRC รางวัลรองชนะเลิศ ลำ ดับที่ 1 จากการแข่งขัน TurtleBOT3 Thailand Championship 2019',
    date: '3 May 2019',
  },
  {
    topic: 'World Robot Olympiad 2019 (WRO 2019)',
    rank: 'รางวัลชนะเลิศลำดับที่ 8',
    info:
      'ขอแสดงความยินดีกับทีม Sathunopante ที่ได้รางวัลชนะเลิศลำดับที่ 8 จากการแข่งขันโอลิมปิกหุ่นยนต์ ชิงแชมป์โลก World Robot Olympiad 2019 (WRO 2019) ณ เมืองเยอร์ ประเทศฮังการี',
    date: '9 Nov 2019',
  },
  {
    topic: 'TurtleBOT3 Thailand Championship 2019',
    rank: 'รางวัลชนะเลิศ และ รองชนะเลิศลำดับที่ 1',
    info:
      'ขอแสดงความยินดีกับ ทีม Tao tid siren! ที่ได้ รางวัลชนะเลิศ และทีม SRC รางวัลรองชนะเลิศ ลำ ดับที่ 1 จากการแข่งขัน TurtleBOT3 Thailand Championship 2019',
    date: '3 May 2019',
  },
  {
    topic: 'TurtleBOT3 Thailand Championship 2019',
    rank: 'รางวัลชนะเลิศ และ รองชนะเลิศลำดับที่ 1',
    info:
      'ขอแสดงความยินดีกับ ทีม Tao tid siren! ที่ได้ รางวัลชนะเลิศ และทีม SRC รางวัลรองชนะเลิศ ลำ ดับที่ 1 จากการแข่งขัน TurtleBOT3 Thailand Championship 2019',
    date: '3 May 2019',
  },
];

const Port = () => {
  return (
    <div className='main port body'>
      <Container>
        <p className='main port topic thai_head_1'>ผลงาน</p>
        <div className='main port link slide'>
          {portPic.map((value, index) => {
            return <PortLink src={portPic[index]} data={data[index]} />;
          })}
          {/* <PortLink src={link1} data={}/>
          <PortLink src={link1} /> */}
        </div>
      </Container>
    </div>
  );
};

export default Port;
