import { Modal, Button } from "react-bootstrap";
import axios from 'axios';
import './App.css';
import React, { useState, useRef, useEffect } from 'react'
function App() {

  const [amount, setamount] = useState('');
  const handleSubmitraz = (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("please enter amount");
    } else {
      var options = {
        key: "rzp_test_ZhCcAohB1PTocy",
        key_secret: "lTMkvoekaSKZbUNrnw0zFs82",
        amount: amount * 100,
        currency: "INR",
        name: "Pizzo House",
        description: "Transaction Gateway",
        handler: function (response) {
        
         alert('Payment Successful');
        },
        prefill: {
          name: "Suparna Das",
          email: "email@email.com",
         contact: "9769852044"
        },
        notes: {
          address: "Razorpay Corporate office"
        },
        theme: {
          color: "#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }


  const [taskList, setTaskList] = useState([]);

  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  };

  const handleDelete = (index) => {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
  };


  //register
  const [uname, setName] = useState('');
  const [upwd, setPwd] = useState('');
  const [uemail, setEmail] = useState('');
  const [ucontact, setMobile] = useState('');
  const [unick, setNick] = useState('');


  //register
  const handleSubmit = () => {
    if (uname.length === 0) { alert("Name has left Blank!"); }
    else if (ucontact.length === 0) { alert("Mobile has left Blank!"); }
    else if (uemail.length === 0) { alert("Email has left Blank!"); }
    else {
      const url = 'http://localhost/Pizzo/enquiry.php';
      let fData = new FormData();
      fData.append('uname', uname);
      fData.append('ucontact', ucontact);
      fData.append('uemail', uemail);
      fData.append('upwd', upwd);
      fData.append('unick', unick);
      fData.append('udate', currentDate);
      axios.post(url, fData).then(response => alert(response.data)).catch(error => alert(error));

    }
  }

  //register


  //register


  //login
  const [lemail, setlemail] = useState('');
  const [lpwd, setlpwd] = useState('');

  const [aemail, setaemail] = useState('');
  const [apwd, setapwd] = useState('');


  //onchange option

  const [a1, seta1] = useState();
  const [a2, seta2] = useState();
  const [a3, seta3] = useState();
  const [a4, seta4] = useState();

  const [b1, setb1] = useState();
  const [b2, setb2] = useState();
  const [b3, setb3] = useState();
  const [b4, setb4] = useState();

  const [c1, setc1] = useState();
  const [c2, setc2] = useState();
  const [c3, setc3] = useState();
  const [c4, setc4] = useState();

  const [d1, setd1] = useState();
  const [d2, setd2] = useState();
  const [d3, setd3] = useState();
  const [d4, setd4] = useState();

  const [e1, sete1] = useState();
  const [e2, sete2] = useState();
  const [e3, sete3] = useState();
  const [e4, sete4] = useState();

  const [f1, setf1] = useState();
  const [f2, setf2] = useState();
  const [f3, setf3] = useState();
  const [f4, setf4] = useState();



  const handleChangea1 = (e) => { seta1(e.target.value); };
  const handleChangea2 = (e) => { seta2(e.target.value); };
  const handleChangea3 = (e) => { seta3(e.target.value); };
  const handleChangea4 = (e) => { seta4(e.target.value); };

  const handleChangeb1 = (e) => { setb1(e.target.value); };
  const handleChangeb2 = (e) => { setb2(e.target.value); };
  const handleChangeb3 = (e) => { setb3(e.target.value); };
  const handleChangeb4 = (e) => { setb4(e.target.value); };

  const handleChangec1 = (e) => { setc1(e.target.value); };
  const handleChangec2 = (e) => { setc2(e.target.value); };
  const handleChangec3 = (e) => { setc3(e.target.value); };
  const handleChangec4 = (e) => { setc4(e.target.value); };


  const handleChanged1 = (e) => { setd1(e.target.value); };
  const handleChanged2 = (e) => { setd2(e.target.value); };
  const handleChanged3 = (e) => { setd3(e.target.value); };
  const handleChanged4 = (e) => { setd4(e.target.value); };

  const handleChangee1 = (e) => { sete1(e.target.value); };
  const handleChangee2 = (e) => { sete2(e.target.value); };
  const handleChangee3 = (e) => { sete3(e.target.value); };
  const handleChangee4 = (e) => { sete4(e.target.value); };

  const handleChangef1 = (e) => { setf1(e.target.value); };
  const handleChangef2 = (e) => { setf2(e.target.value); };
  const handleChangef3 = (e) => { setf3(e.target.value); };
  const handleChangef4 = (e) => { setf4(e.target.value); };


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);



  const [show7, setShow7] = useState(true)
  const [show4, setShow4] = useState(false)

  const [forgot, setforgot] = useState(false)


  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  //total amount

  const [totalAmount, setTotalAmount] = useState(0);

  const handleButtonClick = (amount) => {
    setTotalAmount(totalAmount + amount);
  };
  //total amount


  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const formattedDate = getCurrentDate();
    setCurrentDate(formattedDate);
  }, []);

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };


  return (

    <html>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <link href='https://fonts.googleapis.com/css?family=Lobster' rel='stylesheet'></link>
        <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </head>
      <body>

        <div> <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="header">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a class="navbar-brand"><div class="d-flex"><img alt="alt" src="https://img.freepik.com/premium-photo/pizza-isolate-white-background-generative-ai_74760-2619.jpg?w=740" width="40px" /><h3 class="fw-bold"> &nbsp;&nbsp;&nbsp;PIZZO HOUSE</h3></div></a>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                {lemail}<i class="fas fa-user-alt text-white" style={{ border: '2px solid blue', padding: '8px', borderRadius: '20px' }}></i>
                <li class="nav-item text-white">   &nbsp;&nbsp;&nbsp;<button class="btn btn-primary" > <a href="#contact" style={{ textDecoration: 'none', color: 'white' }}>Contact Us</a></button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>



        {show7 ?
          <div class="row align-items-center">
            <div class="col-sm-6">
              <img alt="alt" class="img-fluid" src="https://pizzayum.in/wp-content/uploads/2022/02/13.jpg"></img>
            </div>
            <div class="col-sm-6">
              <div>
                <h1 class="text-white" style={{ fontFamily: 'Lobster', fontSize: '62px', marginLeft: '-10%', textShadow: '5px 6px black' }}>
                  Welcome to Our Pizzo House!!!</h1><br />
                <h3 align="center" class="text-white" style={{ textShadow: '2px 2px black', marginLeft: '-10%', }}>Free Pies Out, Open Mouth! Crust So Thin, Bring<br /> It In! Run For The Pizza Fun!</h3>
                <br></br>
                <p class="text-white" style={{ width:'80%', marginLeft: '4%', fontSize:'20px',textShadow: '2px 2px black'}}>
                A round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and others etc, baked at high temperature.
                </p>
                <span class="d-flex" style={{ marginLeft: '15%' }}>
                  <button class="btn text-white  fw-bold" style={{ backgroundColor: 'orange' }} onClick={handleShow}>REGISTER FOR<br /> NEW USER</button>
                  <div style={{ width: '3%' }} />

                  <button class="btn btn-success  fw-bold" onClick={handleShow2}>LOGIN FOR<br /> EXISITING USER</button><div style={{ width: '3%' }} />

                  <button class="btn btn-danger  fw-bold" onClick={handleShow3} style={{ marginRight: '50px' }}  >ADMIN LOGIN</button>
                </span>
                <br></br>

              </div>
            </div>
          </div>
          : null}
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <div class='container fw-bold'>
                <form>
                  <h2 align='center' style={{ fontFamily: 'arial', fontWeight: 'bold' }}>User Registration</h2>
                  <p align='center' style={{ color: 'red' }}>*All Fields are Mandatory</p>
                  <label class="form-label fw-bold"><span style={{ color: 'red' }}>*</span> NAME: </label> <input class='form-control' name='uname' value={uname} onChange={(e) => setName(e.target.value)} type='text' required placeholder="enter your name..."></input><br />
                  <label class="form-label fw-bold"><span style={{ color: 'red' }}>*</span> PASSWORD: </label> <input class='form-control' name='upwd' value={upwd} onChange={(e) => setPwd(e.target.value)} type='password' required placeholder="enter your password..."></input><br />
                  <label class="form-label fw-bold"><span style={{ color: 'red' }}>*</span> EMAIL ID: </label> <input class='form-control' name='uemail' type='email' value={uemail} onChange={(e) => setEmail(e.target.value)} required placeholder="enter your email..."></input><br />
                  <label class="form-label fw-bold"><span style={{ color: 'red' }}>*</span> CONTACT NO: </label> <input class='form-control' name='ucontact' type='number' value={ucontact} onChange={(e) => setMobile(e.target.value)} required placeholder="enter in digits only..."></input><br />
                  <label class="form-label fw-bold"><span style={{ color: 'red' }}>*</span> Enter nickname: </label> <input class='form-control' name='unick' type='text' value={unick} onChange={(e) => setNick(e.target.value)} required placeholder="for forgot nickname..."></input><br />
                  <label class="form-label fw-bold"><span style={{ color: 'red' }}>*</span> DATE : </label> <input class='form-control' name='udate' type='text' value={currentDate} readOnly></input><br />
                </form>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>           Close         </Button>&nbsp;&nbsp;&nbsp;
              <Button variant="primary" type="submit" onClick={() => {handleSubmit() ; handleClose()}}>   Submit  </Button>
            </Modal.Footer>
          </Modal>
        </>
        <>
          <Modal show={show3} onHide={handleClose3}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <div class='container fw-bold'>
                <form method="post" action="http://localhost/Pizzo/displayuser.php">
                  <h1 align='center' style={{ fontFamily: 'arial', fontWeight: 'bold' }}>Admin Login</h1>
                  <p align='center' style={{ color: 'red' }}>*All Fields are Mandatory</p>
                  <label class="form-label fw-bold"><span style={{ color: 'red' }}>*</span> Name: </label> <input class='form-control' type='text' name="n2" value={aemail} onChange={(e) => setaemail(e.target.value)} required placeholder="enter your name..."></input><br />
                  <label class="form-label fw-bold"><span style={{ color: 'red' }}>*</span> PASSWORD: </label> <input class='form-control' type='password' name="p2" value={apwd} onChange={(e) => setapwd(e.target.value)} required placeholder="enter your password..."></input><br />
                  <p align='center' onClick={() => setforgot(!forgot)} style={{ color: 'blue', cursor: 'pointer' }}><u>FORGOT PASSWORD</u> </p>

                  {forgot ? <div><label class="form-label fw-bold"><span style={{ color: 'red' }}>*</span> NICKNAME: </label> <input class='form-control' type='email' value={unick} onChange={(e) => setNick(e.target.value)} required placeholder="enter your nickname..."></input><br />
                  </div>
                    : null}
                  <Button variant="secondary" onClick={handleClose2}>           Close         </Button>&nbsp;&nbsp;&nbsp;
                  <input type="submit" class="btn btn-primary" name="save" variant="primary" value="Submit" />
                </form>
              </div>
            </Modal.Body>
          </Modal>
        </>
        <>
          <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <div class='container fw-bold'>
                <form>
                  <h1 align='center' style={{ fontFamily: 'arial', fontWeight: 'bold' }}>User Login</h1>
                  <p align='center' style={{ color: 'red' }}>*All Fields are Mandatory</p>
                  <label class="form-label fw-bold"><span style={{ color: 'red' }}>*</span> Name: </label> <input class='form-control' type='text' name="n" value={lemail} onChange={(e) => setlemail(e.target.value)} required placeholder="enter your name..."></input><br />
                  <label class="form-label fw-bold"><span style={{ color: 'red' }}>*</span> PASSWORD: </label> <input class='form-control' type='password' name="p" value={lpwd} onChange={(e) => setlpwd(e.target.value)} required placeholder="enter your password..."></input><br />
                  <p align='center' onClick={() => setforgot(!forgot)} style={{ color: 'blue', cursor: 'pointer' }}><u>FORGOT PASSWORD</u> </p>

                  {forgot ? <div><label class="form-label fw-bold"><span style={{ color: 'red' }}>*</span> NICKNAME: </label> <input class='form-control' type='email' value={unick} onChange={(e) => setNick(e.target.value)} required placeholder="enter your nickname..."></input><br />
                  </div>
                    : null}

                  <Button variant="secondary" onClick={handleClose2} style={{ marginBottom: '16px' }}>           Close         </Button>&nbsp;&nbsp;&nbsp;
                  <p onClick={() => { handleClose2(); alert('Login Successful!!!'); setShow4(!show4) }} class="btn btn-primary" name="save" variant="primary">Submit</p>

                </form>
              </div>
            </Modal.Body>
          </Modal>
        </>

        {show4 ?

          <div class="" id="pizza" style={{ backgroundColor: 'white', position: 'absolute', top: '8%' }}><br />
            <p class="btn btn-danger" style={{ color: 'white', fontWeight: 'bold', marginLeft: '20px' }}><a href="http://localhost:3000/" style={{ textDecoration: 'none', color: 'white' }}><i class="fas fa-power-off me-2"></i>Log Out</a></p>
            <p align="center" style={{ fontSize: '30px', fontWeight: 'bold', marginTop: '-52px' }}>Welcome {lemail}!</p>

            <div class="row align-items-start" style={{ padding: '20px' }}>
              <div class="col-sm-4">

                <div class="card"><br />
                  <img alt="alt" width="80%" style={{ marginLeft: '10%' }} class='img-fluid' src="https://media.istockphoto.com/id/1349560847/photo/sausage-and-vegetable-pizza-on-dark-background.jpg?b=1&s=170667a&w=0&k=20&c=3U-ZTi5CZPTu-CxDiWUlkkGxvK3L1dflPb4nyDVnkZM="></img>

                  <span class="form-control fw-bold" style={{ textDecoration: 'underline', fontSize: '20px', border: 'none', textAlign: 'center' }} >Vegetable Pizza With Sausages</span>
                  <button id="bu1" class='btn btn-warning fw-bold' style={{ width: '20%', marginLeft: '40%' }}>200/-</button><br />

                  <div class="d-flex"><b style={{ marginLeft: '20%' }}>Base</b> <b class="ms-auto" style={{ marginRight: '20%' }}>Sauce</b></div>
                  <div class="d-flex">
                    <select class="form-select" value={a1} onChange={handleChangea1}><option>Thin Crust</option><option>Thick Crust</option><option>Sicilian Crust</option><option>Pan Pizza Crust</option><option>Deep Dish Crust</option>
                    </select>
                    <select class="form-select" value={a2} onChange={handleChangea2}><option>Spicy Red Sauce</option><option>BBQ Sauce</option><option>Pesto Sauce</option><option>Alfredo Sauce</option><option>Marinara Sauce</option>
                    </select>
                  </div>
                  <div class="d-flex"><b style={{ marginLeft: '20%' }}>Cheese</b> <b class="ms-auto" style={{ marginRight: '20%' }}>Veggies</b></div>
                  <div class="d-flex">
                    <select class="form-select" value={a3} onChange={handleChangea3}><option>Mozzarella</option><option>Aged Havarti</option><option>Provolone</option><option>Cheddar</option><option>The ultimate cheese pizza</option>
                    </select>
                    <select class="form-select" value={a4} onChange={handleChangea4}><option>Yellow squash</option><option>Bell peppers</option><option>Broccoli</option><option>Corn</option><option>Eggplant</option>
                    </select>
                  </div>
                  <br /><button class="btn btn-primary" onClick={() => {
                    handleAddTask(< >
                      <div class='row align-items-start'>
                        <div class="col-sm-4"><br /><br /><img width='120px' height='80px' src="https://media.istockphoto.com/id/1349560847/photo/sausage-and-vegetable-pizza-on-dark-background.jpg?b=1&s=170667a&w=0&k=20&c=3U-ZTi5CZPTu-CxDiWUlkkGxvK3L1dflPb4nyDVnkZM=" /></div>
                        <div class="col-sm-6"><b>Vegetable Pizza With Sausages</b> <br /> Base : {`${a1}`} <br /> Sauce : {`${a2}`} <br /> Cheese : {`${a3}`}<br /> Veggies : {`${a4}`} <br /> Amount : 200 /-</div>
                      </div>
                    </>); handleButtonClick(200)
                  }}>Add to Cart</button>
                </div>
                <br />

                <div class="card"><br />
                  <img alt="alt" width="80%" style={{ marginLeft: '10%' }} class='img-fluid' src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000" />


                  <input type="text" value='Pepperoni Pizza With Mushroom' class="form-control fw-bold" style={{ textDecoration: 'underline', fontSize: '20px', border: 'none', textAlign: 'center' }} onClick={handleInputChange} />
                  <button class='btn btn-warning fw-bold' style={{ width: '20%', marginLeft: '40%' }}>250/-</button><br />
                  <div class="d-flex"><b style={{ marginLeft: '20%' }}>Base</b> <b class="ms-auto" style={{ marginRight: '20%' }}>Sauce</b></div>
                  <div class="d-flex">
                    <select class="form-select" value={b1} onChange={handleChangeb1}><option>Thin Crust</option><option>Thick Crust</option><option>Sicilian Crust</option><option>Pan Pizza Crust</option><option>Deep Dish Crust</option>
                    </select>
                    <select class="form-select" value={b2} onChange={handleChangeb2}><option>Spicy Red Sauce</option><option>BBQ Sauce</option><option>Pesto Sauce</option><option>Alfredo Sauce</option><option>Marinara Sauce</option>
                    </select>
                  </div>
                  <div class="d-flex"><b style={{ marginLeft: '20%' }}>Cheese</b> <b class="ms-auto" style={{ marginRight: '20%' }}>Veggies</b></div>
                  <div class="d-flex">
                    <select class="form-select" value={b3} onChange={handleChangeb3}><option>Mozzarella</option><option>Aged Havarti</option><option>Provolone</option><option>Cheddar</option><option>The ultimate cheese pizza</option>
                    </select>
                    <select class="form-select" value={b4} onChange={handleChangeb4}><option>Yellow squash</option><option>Bell peppers</option><option>Broccoli</option><option>Corn</option><option>Eggplant</option>
                    </select>
                  </div>
                  <br />
                  <button class="btn btn-primary" onClick={() => {
                    handleAddTask(< >
                      <div class='row align-items-start'>
                        <div class="col-sm-4"><br /><br /><img width='120px' height='80px' src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000" /></div>
                        <div class="col-sm-6"><p><b>Pepperoni Vegetable Pizza</b> <br /> Base : {`${b1}`} <br /> Sauce : {`${b2}`} <br /> Cheese : {`${b3}`}<br /> Veggies : {`${b4}`}  <br /> Amount : 250 /- </p></div>
                      </div>
                    </>); handleButtonClick(250)
                  }}>Add to Cart</button>
                </div>

                <br />

                <div class="card"><br />
                  <img alt="alt" width="80%" style={{ marginLeft: '10%' }} class='img-fluid' src="https://img.freepik.com/premium-photo/delicious-savory-pizza-with-pepperoni-pepper-black-board-dark-wooden-background_219193-29.jpg?size=626&ext=jpg&ga=GA1.1.1023083493.1682422864&semt=ais"></img>


                  <input type="text" value='Savory Pizza with Pepperoni' class="form-control fw-bold" style={{ textDecoration: 'underline', fontSize: '20px', border: 'none', textAlign: 'center' }} onClick={handleInputChange} />
                  <button class='btn btn-warning fw-bold' style={{ width: '20%', marginLeft: '40%' }}>320/-</button><br />

                  <div class="d-flex"><b style={{ marginLeft: '20%' }}>Base</b> <b class="ms-auto" style={{ marginRight: '20%' }}>Sauce</b></div>
                  <div class="d-flex">
                    <select class="form-select" value={c1} onChange={handleChangec1}><option>Thin Crust</option><option>Thick Crust</option><option>Sicilian Crust</option><option>Pan Pizza Crust</option><option>Deep Dish Crust</option>
                    </select>
                    <select class="form-select" value={c2} onChange={handleChangec2}><option>Spicy Red Sauce</option><option>BBQ Sauce</option><option>Pesto Sauce</option><option>Alfredo Sauce</option><option>Marinara Sauce</option>
                    </select>
                  </div>
                  <div class="d-flex"><b style={{ marginLeft: '20%' }}>Cheese</b> <b class="ms-auto" style={{ marginRight: '20%' }}>Veggies</b></div>
                  <div class="d-flex">
                    <select class="form-select" value={c3} onChange={handleChangec3}><option>Mozzarella</option><option>Aged Havarti</option><option>Provolone</option><option>Cheddar</option><option>The ultimate cheese pizza</option>
                    </select>
                    <select class="form-select" value={c4} onChange={handleChangec4}><option>Yellow squash</option><option>Bell peppers</option><option>Broccoli</option><option>Corn</option><option>Eggplant</option>
                    </select>
                  </div>
                  <br />

                  <button class="btn btn-primary" onClick={() => {
                    handleAddTask(<>
                      <div class='row align-items-start'>
                        <div class='col-sm-4'><br /><br /><img width='120px' height='80px' src="https://img.freepik.com/premium-photo/delicious-savory-pizza-with-pepperoni-pepper-black-board-dark-wooden-background_219193-29.jpg?size=626&ext=jpg&ga=GA1.1.1023083493.1682422864&semt=ais" /></div>
                        <div class='col-sm-6'><p><b>Savory Pizza with Pepperoni</b> <br /> Base : {`${c1}`} <br /> Sauce : {`${c2}`} <br /> Cheese : {`${c3}`}<br /> Veggies : {`${c4}`} <br /> Amount : 320 /-</p></div>
                      </div>
                    </>); handleButtonClick(320)
                  }}>Add to Cart</button>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="card"><br />
                  <img alt="alt" width="80%" style={{ marginLeft: '10%' }} class='img-fluid' src="https://images.creativemarket.com/0.1.0/ps/6877647/1820/1213/m1/fpnw/wm1/qflyey0kowazmc9h5ig8hsatsklo5funxedy9tajezkunnaojhsfruugzj5d4f8x-.jpg?1566766305&s=f1763395da7c824034d1067faf4970d5"></img>
                  <input type="text" value='Onion Toppings Pepperoni Pizza' class="form-control fw-bold" style={{ textDecoration: 'underline', fontSize: '20px', border: 'none', textAlign: 'center' }} onClick={handleInputChange} />
                  <button class='btn btn-warning fw-bold' style={{ width: '20%', marginLeft: '40%' }}>350/-</button><br />

                  <div class="d-flex"><b style={{ marginLeft: '20%' }}>Base</b> <b class="ms-auto" style={{ marginRight: '20%' }}>Sauce</b></div>
                  <div class="d-flex">
                    <select class="form-select" value={d1} onChange={handleChanged1}><option>Thin Crust</option><option>Thick Crust</option><option>Sicilian Crust</option><option>Pan Pizza Crust</option><option>Deep Dish Crust</option>
                    </select>
                    <select class="form-select" value={d2} onChange={handleChanged2}><option>Spicy Red Sauce</option><option>BBQ Sauce</option><option>Pesto Sauce</option><option>Alfredo Sauce</option><option>Marinara Sauce</option>
                    </select>
                  </div>
                  <div class="d-flex"><b style={{ marginLeft: '20%' }}>Cheese</b> <b class="ms-auto" style={{ marginRight: '20%' }}>Veggies</b></div>
                  <div class="d-flex">
                    <select class="form-select" value={d3} onChange={handleChanged3}><option>Mozzarella</option><option>Aged Havarti</option><option>Provolone</option><option>Cheddar</option><option>The ultimate cheese pizza</option>
                    </select>
                    <select class="form-select" value={d4} onChange={handleChanged4}><option>Yellow squash</option><option>Bell peppers</option><option>Broccoli</option><option>Corn</option><option>Eggplant</option>
                    </select>
                  </div>
                  <br />
                  <button class="btn btn-primary" onClick={() => {
                    handleAddTask(<>
                      <div class='row align-items-start'>
                        <div class='col-sm-4'><br /><br /><img width='120px' height='80px' src="https://images.creativemarket.com/0.1.0/ps/6877647/1820/1213/m1/fpnw/wm1/qflyey0kowazmc9h5ig8hsatsklo5funxedy9tajezkunnaojhsfruugzj5d4f8x-.jpg?1566766305&s=f1763395da7c824034d1067faf4970d5" /></div>
                        <div class='col-sm-6'><p><b>Onion Toppings Pepperoni Pizza</b> <br /> Base : {`${d1}`} <br /> Sauce : {`${d2}`} <br /> Cheese : {`${d3}`}<br /> Veggies : {`${d4}`}<br /> Amount : 350 /-</p></div>
                      </div>
                    </>); handleButtonClick(350)
                  }}>Add to Cart</button>
                </div>
                <br />

                <div class="card"><br />
                  <img alt="alt" width="80%" style={{ marginLeft: '10%' }} class='img-fluid' src="https://thumbs.dreamstime.com/b/overhead-shot-yummy-pizza-rustic-dark-table-overhead-shot-yummy-pizza-rustic-dark-table-cherry-tomatoes-chopped-142547129.jpg"></img>
                  <input type="text" value='Cheese Pizza with Sausages' class="form-control fw-bold" style={{ textDecoration: 'underline', fontSize: '20px', border: 'none', textAlign: 'center' }} onClick={handleInputChange} />
                  <button class='btn btn-warning fw-bold' style={{ width: '20%', marginLeft: '40%' }}>270/-</button><br />
                  <div class="d-flex"><b style={{ marginLeft: '20%' }}>Base</b> <b class="ms-auto" style={{ marginRight: '20%' }}>Sauce</b></div>
                  <div class="d-flex">
                    <select class="form-select" value={e1} onChange={handleChangee1}><option>Thin Crust</option><option>Thick Crust</option><option>Sicilian Crust</option><option>Pan Pizza Crust</option><option>Deep Dish Crust</option>
                    </select>
                    <select class="form-select" value={e2} onChange={handleChangee2}><option>Spicy Red Sauce</option><option>BBQ Sauce</option><option>Pesto Sauce</option><option>Alfredo Sauce</option><option>Marinara Sauce</option>
                    </select>
                  </div>
                  <div class="d-flex"><b style={{ marginLeft: '20%' }}>Cheese</b> <b class="ms-auto" style={{ marginRight: '20%' }}>Veggies</b></div>
                  <div class="d-flex">
                    <select class="form-select" value={e3} onChange={handleChangee3}><option>Mozzarella</option><option>Aged Havarti</option><option>Provolone</option><option>Cheddar</option><option>The ultimate cheese pizza</option>
                    </select>
                    <select class="form-select" value={e4} onChange={handleChangee4}><option>Yellow squash</option><option>Bell peppers</option><option>Broccoli</option><option>Corn</option><option>Eggplant</option>
                    </select>
                  </div>
                  <br />
                  <button class="btn btn-primary" onClick={() => {
                    handleAddTask(<>
                      <div class='row align-items-start'>
                        <div class='col-sm-4'><br /><br /><img width='120px' height='80px' src="https://thumbs.dreamstime.com/b/overhead-shot-yummy-pizza-rustic-dark-table-overhead-shot-yummy-pizza-rustic-dark-table-cherry-tomatoes-chopped-142547129.jpg" /></div>
                        <div class='col-sm-6'><p><b>Cheese Pizza with Sausages</b> <br /> Base : {`${e1}`} <br /> Sauce : {`${e2}`} <br /> Cheese : {`${e3}`}<br /> Veggies : {`${e4}`}<br /> Amount : 270 /-</p></div>
                      </div>
                    </>); handleButtonClick(270)
                  }}>Add to Cart</button>
                </div>
                <br />




                <div class="card"><br />
                  <img alt="alt" width="80%" style={{ marginLeft: '10%' }} class='img-fluid' src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"></img>
                  <input type="text" value='Pepperoni Vegetable Pizza' class="form-control fw-bold" style={{ textDecoration: 'underline', fontSize: '20px', border: 'none', textAlign: 'center' }} onClick={handleInputChange} />
                  <button class='btn btn-warning fw-bold' style={{ width: '20%', marginLeft: '40%' }}>310/-</button><br />
                  <div class="d-flex"><b style={{ marginLeft: '20%' }}>Base</b> <b class="ms-auto" style={{ marginRight: '20%' }}>Sauce</b></div>
                  <div class="d-flex">
                    <select class="form-select" value={f1} onChange={handleChangef1}><option>Thin Crust</option><option>Thick Crust</option><option>Sicilian Crust</option><option>Pan Pizza Crust</option><option>Deep Dish Crust</option>
                    </select>
                    <select class="form-select" value={f2} onChange={handleChangef2}><option>Spicy Red Sauce</option><option>BBQ Sauce</option><option>Pesto Sauce</option><option>Alfredo Sauce</option><option>Marinara Sauce</option>
                    </select>
                  </div>
                  <div class="d-flex"><b style={{ marginLeft: '20%' }}>Cheese</b> <b class="ms-auto" style={{ marginRight: '20%' }}>Veggies</b></div>
                  <div class="d-flex">
                    <select class="form-select" value={f3} onChange={handleChangef3}><option>Mozzarella</option><option>Aged Havarti</option><option>Provolone</option><option>Cheddar</option><option>The ultimate cheese pizza</option>
                    </select>
                    <select class="form-select" value={f4} onChange={handleChangef4}><option>Yellow squash</option><option>Bell peppers</option><option>Broccoli</option><option>Corn</option><option>Eggplant</option>
                    </select>
                  </div>
                  <br />
                  <button class="btn btn-primary" onClick={() => {
                    handleAddTask(<>
                      <div class='row align-items-start'>
                        <div class='col-sm-4'><br /><br /><img width='120px' height='80px' src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg" /></div>
                        <div class='col-sm-6'><p><b>Pepperoni Vegetable Pizza</b> <br /> Base : {`${f1}`} <br /> Sauce : {`${f2}`} <br /> Cheese : {`${f3}`}<br /> Veggies : {`${f4}`}<br /> Amount : 310 /-</p></div>
                      </div>
                    </>); handleButtonClick(310)
                  }}>Add to Cart</button>
                </div>
              </div>

              <div class="col-sm-4">
                <h1 align="center" class="btn-danger text-white">Add To Cart List</h1>
                

                <ul style={{ listStyleType: 'none' }}>
                  {taskList.map((task, index) => (
                    <li key={index} style={{ border: '1px solid #d4d5d6', paddingLeft: '3%', marginRight: '3%' }}>
                      {task}
                      <button class="btn btn-danger" style={{ position: 'absolute', right: '50px', marginTop: '-110px' }} onClick={() => handleDelete(index)}>X</button>

                    </li>
                  ))}
                </ul>

                <br />

                <div className="razorpaydiv">
                  <br />
                  <div class="d-flex" style={{border:'1px solid lightgrey', padding:'15px', borderRadius:'10px'}}>
                  <b>TOTAL AMOUNT :</b> <br />  <div style={{width:'5%'}} /><input type="text" id="idk" style={{width:'20%'}} class="form-control" placeholder='Enter Amount' value={totalAmount} onClick={(e) => setamount(e.target.value)} />
                      <div style={{width:'10%'}} />
                  <button onClick={handleSubmitraz} class="btn btn-success">Pay Amount</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          : null}

        <footer class="bg-dark text-center text-white" id="contact">
          <div class="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
            <div>
              Order a delicious pizza anywhere, anytime. Pizzo House is excited to help your order with Fast Home Delivery.<br />
              So Go Hurry Up!! Place Your Order Now!!!
            </div>
          </div>
          <div class="container p-4">
            <section class="">
              <div class="row align-items-start">
                <div class="col-md-4">
                  <h3 class="text-uppercase"><img alt="alt" src="https://img.freepik.com/premium-photo/pizza-isolate-white-background-generative-ai_74760-2619.jpg?w=740" width="40px" />PIZZO house</h3>
                  <ul class="list-unstyled mb-0">
                    <li>
                      <br /> <b> Email :</b> pizzohouse@gmail.com <br />  <b>Phone No. :</b>   1234567890
                    </li>
                  </ul>
                </div>

                <div class="col-md-6"><br />
                  <div class="d-flex"><b style={{ marginTop: '5px' }}>Send Your Email</b> &nbsp;&nbsp;<input type="email" placeholder='Enter Your Email...' class="form-control" style={{ width: '50%', height: '10%' }} />&nbsp;&nbsp;<button class='btn btn-primary'>Submit</button></div>
                </div>
                <div class="col-sm-2">
                  <h2 align="center"><a href="#header" style={{ textDecoration: 'none', color: 'white' }}><br /> TO TOP <i class="fa fa-chevron-up"></i></a></h2>
                </div>
              </div>
            </section>
          </div>
          <div class="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2023 Pizzo House. All rights reserved.
          </div>

        </footer>      
      </body>
    </html>
  );
}
export default App;