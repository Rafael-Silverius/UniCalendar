import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useState } from "react";
import styled from "styled-components";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

const StyledLoginForm = styled.div`
  padding: 2rem 0 6rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export default function LoginForm() {
  const [email, setEmail] = useState("rafael@example.com");
  const [password, setPassword] = useState("qwerty");

  const { login, isPending } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail(""), setPassword("");
        },
      }
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <StyledLoginForm>
        <FormRow>
          <h2>Email Address</h2>
          <Input
            type="email"
            id="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isPending}
          ></Input>
        </FormRow>
        <FormRow>
          <h2>Password</h2>
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isPending}
          ></Input>
        </FormRow>
      </StyledLoginForm>
      <Button disabled={isPending}>
        {!isPending ? "Login" : <SpinnerMini />}
      </Button>
    </form>
  );
}
