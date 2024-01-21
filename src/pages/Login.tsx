import { useForm, SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { decodeToken } from "../utils/decodeToken";

import { useNavigate } from "react-router-dom";

type Inputs = {
  id: string;
  password: string;
};
const Login = () => {
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    login(data);
    const res = await login(data).unwrap();
    const user = decodeToken(res.data.accessToken);

    // setting up user crediential here to redux store.
    dispatch(setUser({ user: user?.jwtPayload, token: res.data.accessToken }));

    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: "400px",
        height: "600px",
        backgroundColor: "gray",
        color: "white",
      }}
    >
      <input {...register("id")} />
      {errors.id && <span>This field is required</span>}
      <input {...register("password", { required: true })} />

      {errors.password && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default Login;
