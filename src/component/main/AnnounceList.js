import React from 'react';

import AnnounceLink from './AnnounceLink';
import './AnnounceList.css';

var AnnounceTopic = [
  'CE SMART CAMP 12 ! เปิดรับสมัครแล้ว',
  '[วศ.บ.คอมพิวเตอร์] รับสมัคร TA ช่วยคุมแล็บวิชา Computer Organization เทอม 2/63 วันพฤ บ่าย',
  'การสอบสัมภาษณ์สหกิจศึกษาในภาคการศึกษาที่ 1 ปีการศึกษา 2564',
  'ขอนัดนักศึกษา 3D 3DT 4D ร่วมประชุมเรื่องงาน CE Smart Career',
  '[วศ.บ.คอมพิวเตอร์] 3D ฝึกงานปีการศึกษา 2563',
];

var AnnounceNoti = [true, true, false, false, false];

const AnnounceList = () => {
  return (
    <div className='main announce list'>
      {AnnounceTopic.map((value, index) => {
        return (
          <AnnounceLink
            info={AnnounceTopic[index]}
            notifications={AnnounceNoti[index]}
          />
        );
      })}
      {/* <AnnounceLink info={AnnounceTopic[0]} notifications={AnnounceNoti[0]} /> */}
    </div>
  );
};

export default AnnounceList;
