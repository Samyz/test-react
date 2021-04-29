import React from 'react';
import { Container } from 'react-bootstrap';
import './Curriculum.css';

import CurriculumLink from './CurriculumLink';

var num = 2;
var curriculumPic = [];
for (var i = 1; i <= num; i++) {
  curriculumPic.push(require(`../../pic/curriculumLink${i}.png`).default);
  // console.log(`../../pic/curriculumLink${i}.png`, curriculumPic[i]);
}

const Curriculum = () => {
  const curriculumTopic = [
    'หลักสูตรระดับปริญญาตรี',
    'หลักสูตรระดับบัณฑิตศึกษา',
  ];
  const curriculumInfo = [
    'Bachelor of Engineering Program in Computer Engineering',
    'Master of Engineering Program in Computer Engineering',
  ];

  return (
    <div>
      <Container className='main curriculum body'>
        <p className='main curriculum topic thai_head_1'>
          ภาควิชาวิศวกรรมคอมพิวเตอร์
        </p>
        <p className='main curriculum info thai_body_1'>
          มุ่งผลิตบัณฑิตให้มีความรู้ความเชี่ยวชาญในสาขาวิศวกรรมคอมพิวเตอร์
          สนองความต้องการของตลาด
          แรงงานทั้งภาครัฐและภาคเอกชนตามเกณฑ์มาตรฐานการอุดมศึกษาและสอดคล้องตามแผนพัฒนาเศรษฐกิจ
          และสังคมแห่งชาติ
        </p>
        <div className='main curriculum link slide'>
          {curriculumPic.map((value, index) => {
            return (
              <CurriculumLink
                src={curriculumPic[index]}
                // src={require('../../pic/curriculumLink1.png')}
                topic={curriculumTopic[index]}
                info={curriculumInfo[index]}
              />
              // <CurriculumLink
              //   src={curriculumPic[1]}
              //   topic={curriculumTopic[1]}
              //   info={curriculumInfo[1]}
              // />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Curriculum;
