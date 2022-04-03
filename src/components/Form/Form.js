import Form from '../Form/Form.css'


const form = ( {} ) => {

  return (

    <div className="Form-ct">

      <div className="firstName">
        <label>Name*</label>
        <input type="text" name="name"></input><label>First Name</label>
      </div>

      <div className="lastName">
          <input type="text" name="name"></input><label>Last Name</label>
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

