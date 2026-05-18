export default function Login() {
  return (
    <div className="registration_page_wrapper">
      <div className="glass-form animate-form">
        <img src="/img/logo.png" className="form-logo" alt="Alpha IT" />
        <h2 className="form-title">Login</h2>
        <form>
          <div className="input-group">
            <i className="ti-email" />
            <input type="email" placeholder="Email" className="input-field" />
          </div>
          <div className="input-group">
            <i className="ti-lock" />
            <input type="password" placeholder="Password" className="input-field" />
          </div>
          <button type="button" className="submit-btn">Login</button>
        </form>
      </div>
    </div>
  );
}
