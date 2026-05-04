import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, loginDemo, register, resetLocalDemoData } from '../utils/auth.js';

const initialFields = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function getPasswordChecks(password) {
  return [
    { label: 'At least 8 characters', valid: password.length >= 8 },
    { label: 'One uppercase letter', valid: /[A-Z]/.test(password) },
    { label: 'One number', valid: /\d/.test(password) },
  ];
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function LoginPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState('login');
  const [fields, setFields] = useState(initialFields);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordChecks = useMemo(() => getPasswordChecks(fields.password), [fields.password]);

  const updateField = (field, value) => {
    setFields((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '', form: '' }));
    setStatus('');
  };

  const switchMode = (nextMode) => {
    setMode(nextMode);
    setErrors({});
    setStatus('');
  };

  const validate = () => {
    const nextErrors = {};
    const email = fields.email.trim();
    const password = fields.password;

    if (!email) {
      nextErrors.email = 'Email is required.';
    } else if (!isValidEmail(email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!password) {
      nextErrors.password = 'Password is required.';
    }

    if (mode === 'register') {
      if (!fields.username.trim()) {
        nextErrors.username = 'Name is required.';
      } else if (fields.username.trim().length < 2) {
        nextErrors.username = 'Name must be at least 2 characters.';
      }

      const failedPasswordRule = passwordChecks.find((check) => !check.valid);
      if (!nextErrors.password && failedPasswordRule) {
        nextErrors.password = 'Password does not meet the requirements.';
      }

      if (!fields.confirmPassword) {
        nextErrors.confirmPassword = 'Please confirm your password.';
      } else if (fields.confirmPassword !== password) {
        nextErrors.confirmPassword = 'Passwords do not match.';
      }
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.values(validationErrors).some(Boolean)) {
      setErrors(validationErrors);
      return;
    }

    try {
      if (mode === 'register') {
        register({
          username: fields.username,
          email: fields.email,
          password: fields.password,
        });
      } else {
        login({ email: fields.email, password: fields.password });
      }

      navigate('/', { replace: true });
    } catch (caughtError) {
      setErrors({ [caughtError.field || 'form']: caughtError.message });
    }
  };

  const handleDemoLogin = () => {
    loginDemo();
    navigate('/', { replace: true });
  };

  const handleResetLocalData = () => {
    const confirmed = window.confirm('Reset local accounts, demo progress, and saved lesson progress in this browser?');
    if (!confirmed) return;

    resetLocalDemoData();
    setFields(initialFields);
    setErrors({});
    setStatus('Local demo data has been reset.');
  };

  return (
    <section className="login-page">
      <div className="split-shell login-split">
        <aside className="split-hero">
          <p className="eyebrow">Crescendo Elite</p>
          <h1>Private conservatory training, tuned for the modern musician.</h1>
          <p>
            Create your student account, continue your curriculum, pass examinations,
            and unlock the next level of technical mastery.
          </p>
          <div className="hero-stat-grid">
            <div>
              <strong>54</strong>
              <span>Lessons</span>
            </div>
            <div>
              <strong>6</strong>
              <span>Instruments</span>
            </div>
            <div>
              <strong>70%</strong>
              <span>Passing Score</span>
            </div>
          </div>
        </aside>

        <form className="split-panel login-panel" onSubmit={handleSubmit} noValidate>
          <div>
            <p className="eyebrow">Student Portal</p>
            <h2>{mode === 'register' ? 'Create Account' : 'Welcome Back'}</h2>
            <p className="muted">
              {mode === 'register'
                ? 'Register once and your student progress will be saved in this browser.'
                : 'Sign in with your student account to continue.'}
            </p>
          </div>

          <div className="segmented-control" aria-label="Authentication mode">
            <button type="button" className={mode === 'login' ? 'active' : ''} onClick={() => switchMode('login')}>
              Sign In
            </button>
            <button type="button" className={mode === 'register' ? 'active' : ''} onClick={() => switchMode('register')}>
              Register
            </button>
          </div>

          {mode === 'register' && (
            <label className="field-group">
              <span>Name</span>
              <input
                type="text"
                value={fields.username}
                onChange={(event) => updateField('username', event.target.value)}
                placeholder="Clara Schumann"
                aria-invalid={Boolean(errors.username)}
              />
              {errors.username && <small className="field-error">{errors.username}</small>}
            </label>
          )}

          <label className="field-group">
            <span>Email</span>
            <input
              type="email"
              value={fields.email}
              onChange={(event) => updateField('email', event.target.value)}
              placeholder="student@crescendo.test"
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && <small className="field-error">{errors.email}</small>}
          </label>

          <label className="field-group">
            <span>Password</span>
            <div className="password-field">
              <input
                type={showPassword ? 'text' : 'password'}
                value={fields.password}
                onChange={(event) => updateField('password', event.target.value)}
                placeholder={mode === 'register' ? '8+ chars, uppercase, number' : 'Your password'}
                aria-invalid={Boolean(errors.password)}
              />
              <button type="button" onClick={() => setShowPassword((value) => !value)}>
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && <small className="field-error">{errors.password}</small>}
          </label>

          {mode === 'register' && (
            <>
              <div className="password-rules" aria-label="Password requirements">
                {passwordChecks.map((check) => (
                  <span key={check.label} className={check.valid ? 'valid' : ''}>
                    {check.label}
                  </span>
                ))}
              </div>

              <label className="field-group">
                <span>Confirm Password</span>
                <div className="password-field">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={fields.confirmPassword}
                    onChange={(event) => updateField('confirmPassword', event.target.value)}
                    placeholder="Repeat your password"
                    aria-invalid={Boolean(errors.confirmPassword)}
                  />
                  <button type="button" onClick={() => setShowConfirmPassword((value) => !value)}>
                    {showConfirmPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                {errors.confirmPassword && <small className="field-error">{errors.confirmPassword}</small>}
              </label>
            </>
          )}

          {errors.form && <p className="form-error">{errors.form}</p>}
          {status && <p className="form-success">{status}</p>}

          <button className="btn btn-primary" type="submit">
            {mode === 'register' ? 'Create Student Account' : 'Sign In'}
          </button>

          {mode === 'login' && (
            <button className="btn btn-ghost demo-login-button" type="button" onClick={handleDemoLogin}>
              Continue with Demo Account
            </button>
          )}

          <button className="reset-data-button" type="button" onClick={handleResetLocalData}>
            Reset local demo data
          </button>
        </form>
      </div>
    </section>
  );
}
