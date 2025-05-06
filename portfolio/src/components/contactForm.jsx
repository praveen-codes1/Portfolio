import React, {useState} from 'react';

function ContactForm() {
    const [formData, setFormData] = useState(
        {
            name: '',
            email: '',
            message: ''
        }
    );
    function handleChange(event){
        const {name, value}=event.target;
        setFormData(prevData => (
            {
                ...prevData,
                [name]: value
            }
        ));
        console.log('Form Data: ',formData);
    }
    function handleSubmit(event){
        event.preventDefault();
        alert(`Thank you, ${formData.name}! Your message has been sent.`);
        //if.this (Data to server)
        setFormData({ name: '', email: '',message: ''});
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
            </label>
            <label>
                E-mail: <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
            </label>
            <label>
                Message: <input name="message" value={formData.message} onChange={handleChange} required/>
            </label>
            <button type="submit">Send</button>
        </form>
    );
}
export default ContactForm;