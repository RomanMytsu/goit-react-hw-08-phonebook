import { useId, useState } from 'react';
import { StyledBtn, StyledForm, StyledInput, Wrap } from './registerform.styled';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === 'checkbox' ? checked : value;
    setState({
      ...state,
      [name]: newValue,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const reset = () => {
    setState({ ...INITIAL_STATE });
  };
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const { name, email, password } = state;

  return (
    <Wrap>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <label htmlFor={nameId}>Name</label>
          <StyledInput
            value={name}
            onChange={handleChange}
            name="name"
            id={nameId}
            required
          />
        </div>

        <div>
          <label htmlFor={emailId}>Email</label>
          <StyledInput
            value={email}
            onChange={handleChange}
            type="email"
            name="email"
            id={emailId}
            required
          />
        </div>

        <div>
          <label htmlFor={passwordId}>Password</label>
          <StyledInput
            value={password}
            onChange={handleChange}
            type="password"
            name="password"
            id={passwordId}
            required
          />
        </div>
        <StyledBtn type="submit">Sign Up</StyledBtn>
      </StyledForm>
    </Wrap>
  );
};

export default RegisterForm;
