import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [desc, setdesc] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(phone, email, name, desc)
    const data = { phone, email, name, desc };
    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then(data => {
        console.log('Success:', data);
        alert("Thanks for contacting Us");
        setphone('')
        setdesc('')
        setname('')
        setemail('')
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  const handleChange = (e) => {
    if (e.target.name == 'phone') {
      setphone(e.target.value)
    }
    else if (e.target.name == 'email') {
      setemail(e.target.value)
    }
    else if (e.target.name == 'name') {
      setname(e.target.value)
    }
    else if (e.target.name == 'desc') {
      setdesc(e.target.value)
    }

  }
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlable} onChange={handleChange}>Enter your name</label>
          <input className={styles.input} type="text" value={name} onChange={handleChange}  id="name" name='name' aria-describedby="emailHelp" />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlable}>Email address</label>
          <input className={styles.input} type="email" value={email} onChange={handleChange}  id="email" name='email' aria-describedby="emailHelp" />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlable}>Phone No</label>
          <input className={styles.input} type="phone" value={phone} onChange={handleChange} name='phone'  id="phone" />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="desc">Elaborate your concern</label>

          <textarea className={styles.formcontrol} value={desc} name='desc' onChange={handleChange} placeholder="Write your concern here" id="desc" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>

  )
}

export default Contact