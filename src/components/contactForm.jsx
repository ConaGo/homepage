import { useForm } from "react-hook-form";
import * as React from "react";
import { useSpring, animated, config } from "@react-spring/web";
import styleConfig from "../config";
import { Button } from "theme-ui";
const ContactForm = ({ show }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;

    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Subject: ", subject);
    console.log("Message: ", message);
  };
  const style = useSpring({
    opacity: show ? 1 : 0,
    width: show ? "100%" : "0%",
    config: config.wobbly,
  });
  const styleContainer = {
    marginBottom: "20%",
    border: "4px inset " + styleConfig.primary,
    width: "56%",
    height: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: styleConfig.secondary,
    position: "relative",
    zIndex: "10",
    marginBottom: "30%",
  };
  const styleField = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "5px",
  };
  const errorStyle = { display: "block", color: "red" };
  return (
    <animated.div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        height: "100%",
        ...style,
      }}
      className="ContactForm"
    >
      <div style={styleContainer} className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="contactForm">
              <form
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* Row 1 of form */}
                <div className="row formRow">
                  <div className="col-6" style={styleField}>
                    <input
                      type="text"
                      name="name"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Please enter your name",
                        },
                        maxLength: {
                          value: 30,
                          message: "Please use 30 characters or less",
                        },
                      })}
                      className="form-control formInput"
                      placeholder="Name"
                    ></input>
                    {errors.name && (
                      <span style={errorStyle} className="errorMessage">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className="col-6" style={styleField}>
                    <input
                      type="email"
                      name="email"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      className="form-control formInput"
                      placeholder="Email address"
                    ></input>
                    {errors.email && (
                      <span style={errorStyle} className="errorMessage">
                        Please enter a valid email address
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className="row formRow">
                  <div className="col" style={styleField}>
                    <input
                      type="text"
                      name="subject"
                      {...register("subject", {
                        required: {
                          value: true,
                          message: "Please enter a subject",
                        },
                        maxLength: {
                          value: 75,
                          message: "Subject cannot exceed 75 characters",
                        },
                      })}
                      className="form-control formInput"
                      placeholder="Subject"
                    ></input>
                    {errors.subject && (
                      <span style={errorStyle} className="errorMessage">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className="row formRow">
                  <div className="col" style={styleField}>
                    <textarea
                      rows={3}
                      name="message"
                      {...register("message", {
                        required: true,
                      })}
                      className="form-control formInput"
                      placeholder="Message"
                    ></textarea>
                    {errors.message && (
                      <span style={errorStyle} className="errorMessage">
                        Please enter a message
                      </span>
                    )}
                  </div>
                </div>
                <div style={styleField}>
                  <Button className="submit-btn" type="submit">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default ContactForm;
