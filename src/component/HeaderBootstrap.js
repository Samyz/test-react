import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
  Container,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderBootstrap.css';

import Logo from '../pic/CE 1.png';

const HeaderBootstrap = (props) => {
  const faculty = ['หลักสูตรระดับปรัญญาตรี', 'หลักสูตรระดับบัญฑิตศึกษา'];
  const student = ['รายวิชา', 'โปรเจค'];

  return (
    <>
      <Navbar expand='lg' className='navbar'>
        <Container>
          <Navbar.Brand href='#home' className='eng_head_2'>
            <img
              alt=''
              src={Logo}
              width='35px'
              height='35px'
              alignright='10px'
              // className='d-inline-block align-top'
            />{' '}
            KMITL
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto thai_body_2'>
              <Nav.Link
                href='#home'
                style={{
                  backgroundColor: props.page === 'home' ? '#FF7637' : '',
                }}
              >
                หน้าหลัก
              </Nav.Link>
              <NavDropdown
                title='หลักสูตร'
                style={{
                  backgroundColor: props.page === 'cirriculum' ? '#FF7637' : '',
                }}
              >
                {faculty.map((item, index) => {
                  return (
                    <NavDropdown.Item
                      href={`#action/3.${index + 1}`}
                      className='thai_body_1'
                    >
                      {item}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
              <Nav.Link
                href='#link'
                style={{
                  backgroundColor:
                    props.page === 'announcement' ? '#FF7637' : '',
                }}
              >
                ข่าวประชาสัมพันธ์
              </Nav.Link>
              <NavDropdown
                title='สำหรับนักศึกษา'
                style={{
                  backgroundColor: props.page === 'student' ? '#FF7637' : '',
                }}
              >
                {student.map((item, index) => {
                  return (
                    <NavDropdown.Item
                      href={`#action/3.${index + 1}`}
                      className='thai_body_1'
                    >
                      {item}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
              <Nav.Link
                href='#link'
                style={{
                  backgroundColor: props.page === 'teacher' ? '#FF7637' : '',
                }}
              >
                บุคลากร
              </Nav.Link>
              <Nav.Link
                href='#link'
                style={{
                  backgroundColor: props.page === 'port' ? '#FF7637' : '',
                }}
              >
                ผลงาน
              </Nav.Link>
              <Nav.Link
                href='#link'
                style={{
                  backgroundColor: props.page === 'about' ? '#FF7637' : '',
                }}
              >
                เกี่ยวกับสำนัก
              </Nav.Link>
            </Nav>
            <Button variant='outline-success'>Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderBootstrap;
