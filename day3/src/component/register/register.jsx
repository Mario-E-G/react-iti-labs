import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
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
                  pattern: /[A-Z]{1}[a-z]{1}[A-Za-z0-9!@#$%^&*()?/\\.]+$/i,
                  minLength: 8,
                })}
              />
              {errors?.password?.type === "required" && (
                <p className="text-danger">This field is required*</p>
              )}
              {errors?.password?.type === "pattern" && (
                <p className="text-danger">
                  Must be at least one lowercase & uppercase & number*
                </p>
              )}
              {errors?.password?.type === "minLength" && (
                <p className="text-danger">At least 8 characters*</p>
              )}
            </Form.Group>

            <Form.Group className="mb-2  w-75" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                {...register("confirm_password", {
                  required: true,
                  validate: (confirm_passwordValue) => {
                    if (confirm_passwordValue !== watch("password"))
                      return "password doesn't match*";
                  },
                })}
              />
              {errors?.confirm_password?.type === "required" && (
                <p className="text-danger">This field is required*</p>
              )}
              {errors?.confirm_password?.type === "validate" && (
                <p className="text-danger">
                  {errors?.confirm_password?.message}
                </p>
              )}
            </Form.Group>

            <Form.Group className="mb-2  w-75">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                {...register("gender")}
                aria-label="Default select example"
              >
                <option selected disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                {errors?.gender?.type === "required" && (
                  <p className="text-danger">This field is required*</p>
                )}
              </Form.Select>
              {/* {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-2">
                  <Form.Check
                    inline
                    label="Male"
                    name="gender"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Female"
                    name="gender"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))} */}
            </Form.Group>

            <Form.Group className="mb-2  w-75" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Check me out"
                {...register("checked", { required: true })}
              />
              <Form.Text className="text-muted">terms and condititon</Form.Text>
              {errors?.checked?.type === "required" && (
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

export default Register;
