import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "61288831-04b4-4c5f-b005-4e9ccb52a642");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send Us a Messege <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Ad consectetur debitis, voluptatem, et cumque in illum nemo 
           ipsa quisquam aspernatur sed numquam esse expedita dolore 
           laborum voluptates maiores sapiente distinctio.</p>
           <ul>
            <li> <img src={mail_icon} alt="" />abd@gmail.com</li>
            <li> <img src={phone_icon} alt="" />+1 3454 6545 6567</li>
            <li> <img src={location_icon} alt="" />77 Manhattan ,cambridge<br/>ABC street,USA </li>
           </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label> Your name</label>
          <input type="text" name="name" id="" placeholder='Enter your name'  required/>
          <label >Phone Number</label>
          <input type="tel" name="phone" id="" placeholder='Enter your mobile number'/>
          <label>Write your message here</label>
          <textarea name="message"  rows="6" placeholder="Enter your message"></textarea>
          <button type='submit' className='btn dark-btn'>Submit now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact