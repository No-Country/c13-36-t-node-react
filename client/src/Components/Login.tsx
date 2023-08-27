interface LoginProps {
  setUsuario: (usuario: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setUsuario }) => {
  const handleClick = () => {
    setUsuario(true);
  };
  return (
    <form className="flex flex-col items-center gap-3">
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button
        onClick={handleClick}
        value="Login"
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
