import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValidatePass = (data) => {
    if (data.password === data.confirm_password) {
      return true;
    } else {
      return false;
    }
  };
  console.log(errors);

  const onSubmit = (data) => {
    onValidatePass(data);
    console.log(data);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <Form
            className="w-100 d-flex flex-column align-items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Form.Group className="mb-2 w-75" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                {...register("username", { required: true })}
              />
              {errors?.username?.type === "required" && (
                <p className="text-danger">This field is required*</p>
              )}
            </Form.Group>

            <Form.Group className="mb-2  w-75" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                })}
              />
              {errors?.password?.type === "required" && (
                <p className="text-danger">This field is required*</p>
              )}
            </Form.Group>
            <Button variant="primary" className=" w-25" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
