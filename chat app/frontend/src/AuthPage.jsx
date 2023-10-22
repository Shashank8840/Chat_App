import axios from 'axios'

const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post(
        'http://localhost:3001/authenticate',
        {username: value},
        {password: value}
      )
      .then(r => props.onAuth({ ...r.data, secret: value}))
      .catch(e => console.log('error',e))
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Welcome 👋</div>
  
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
          </div>
          <div className="auth">
            <div className="auth-label">Password</div>
            <input className="auth-input" name="password" />
            <button className="auth-button" type="submit">
              Get In
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;