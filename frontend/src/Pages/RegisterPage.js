import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { register } from "../actions/userActions";
export default function RegisterPage(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userregister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userregister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("s senhas nao coencidem");
    }
    dispatch(register(name, email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Login</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="name"
            id="name"
            placeholder="Digite seu nome"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Endereço de Email</label>
          <input
            type="email"
            id=" email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Prencha a senha"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Senha</label>
          <input
            type="confirmPassword"
            id="confirmPassword"
            placeholder="Confirme a senha"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <label>
            <button className="primary" type="submit">
              Registrar
            </button>
          </label>
        </div>
        <div>
          <label>
            <div>
              Já possui uma conta? {""}
              <Link to={`/signin?redirect=${redirect}`}>Fazer login</Link>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
}
