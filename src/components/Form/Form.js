import Form from '../Form/Form.css'


const form = ( {} ) => {

  return (

    <div className="Form-ct">

      <div className="form-name">
        <label>Name*</label>
        <input className="firstName" type="text" name="name"></input><label>First Name</label> <span><input className="lastName" type="text" name="name"></input><label>Last Name</label></span>
      </div>

      <div className="form">
        <label>Email Address*</label>
        <input type="text" name="email"></input>
      </div>

      <div className="form">
        <label>Subject*</label>
        <input type="text" name="subject"></input>
      </div>

      <div className="form">
        <label>Message*</label>
        <textarea name="messaage"></textarea>
      </div>

    </div>
  );
}

export default form;

