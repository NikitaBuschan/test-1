import React, { useEffect } from "react";
import Footer from "../../../../components/Footer/Footer";
import back from "./../../../../assets/images/Grants/back.png";
import arrow from "./../../../../assets/images/Grants/Icon.png";
import Header from "../../../../components/Header/Header";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";

import { useState } from "react";
import { SGrantProgram } from "../Style/styles";

export default function CommunityProgram() {
  const [isSubmitted, setSubmitted] = useState(false);
  const [form1val, setform1val] = useState("");
  const [form2val, setform2val] = useState("");
  const [form3val, setform3val] = useState("");
  const [form4val, setform4val] = useState("");
  const [form1simbols, setform1simbols] = useState(0);
  const [form2simbols, setform2simbols] = useState(0);
  const [form3simbols, setform3simbols] = useState(0);
  const [form4simbols, setform4simbols] = useState(0);

  // emailjs.init("K3f3TYoiRPS2K5iBz");

  // const sendEmail = (templateParams) =>
  //   emailjs.send("service_zzgwce5", "template_15djijo", templateParams).then(
  //     function (response) {
  //       setSubmitted(true);
  //       console.log("SUCCESS!", response.status, response.text);
  //     },
  //     function (error) {
  //       console.log("FAILED...", error);
  //     }
  //   );

  useEffect(() => {
    setform1simbols(form1val.length);
  }, [form1val]);
  useEffect(() => {
    setform2simbols(form2val.length);
  }, [form2val]);
  useEffect(() => {
    setform3simbols(form3val.length);
  }, [form3val]);
  useEffect(() => {
    setform4simbols(form4val.length);
  }, [form4val]);

  let TypeColor = (val) => {
    if (val === 0) return "textarea";
    else if (val > 250) return "texterror";
    else if (val <= 250) return "texttrue";
  };
  return (
    <SGrantProgram>
      <Header />

      <main className="wrap">
        <div className="background">
          <img src={back} alt="" />
        </div>
        <div className="formBlock">
          <h1 className="title"> Community Program</h1>
          <h2>Welcome to InteractWith Community Program!</h2>
          <Formik
            initialValues={{
              message1: "",
              message2: "",
              message3: "",
              message4: "",
            }}
            validate={() => {
              const error = {};

              if (form1val.length > 250) {
                error.message1 = "Error message goes here";
              }
              if (form2val.length > 250) {
                error.message2 = "Error message goes here";
              }
              if (form3val.length > 250) {
                error.message3 = "Error message goes here";
              }
              if (form4val.length > 250) {
                error.message4 = "Error message goes here";
              }
              return error;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                var templateParams = {
                  message1: form1val,
                  message2: form2val,
                  message3: form3val,
                  message4: form4val,
                };
                // sendEmail(templateParams);
                // alert(JSON.stringify(values, null, 2));
                console.log(templateParams);
                setSubmitting(false);
              }, 400);
              resetForm();
            }}
          >
            {({ isSubmitting, errors }) => (
              <Form className="form">
                <div className="block">
                  <p>
                    Please provide background information about your experience
                    with building, supporting and engaging with community,
                    social networks (Twitter, Telegram, Discord etc), in which
                    countries you are experienced and other relevant
                    information:
                  </p>
                  <Field
                    className={`${TypeColor(form1simbols)}`}
                    name="message1"
                    placeholder="Type your text here..."
                    component="textarea"
                    value={form1val}
                    onChange={(e) => setform1val(e.target.value)}
                  />
                  <p className={form1simbols <= 250 ? "counter" : "counterror"}>
                    {form1simbols}/250
                  </p>
                  <div
                    className={
                      !errors.message1 && form1simbols > 0 ? "success" : "empt"
                    }
                  >
                    "Success message goes here"
                  </div>
                  <ErrorMessage
                    className="error"
                    name="message1"
                    component="div"
                  />
                </div>

                <div className="block">
                  <p>
                    Please name projects you assisted with their community or
                    socials:
                  </p>
                  <Field
                    className={`${TypeColor(form2simbols)}`}
                    name="message2"
                    placeholder="Type your text here..."
                    component="textarea"
                    value={form2val}
                    onChange={(e) => setform2val(e.target.value)}
                  />
                  <p className={form2simbols <= 250 ? "counter" : "counterror"}>
                    {form2simbols}/250
                  </p>
                  <div
                    className={
                      !errors.message2 && form2simbols > 0 ? "success" : "empt"
                    }
                  >
                    "Success message goes here"
                  </div>
                  <ErrorMessage
                    className="error"
                    name="message2"
                    component="div"
                  />
                </div>
                <div className="block">
                  <p>
                    How do you intend to use your skills to assist InteractWith,
                    in which points do you think we can do better and how are
                    you going to execute it?
                  </p>
                  <Field
                    className={`${TypeColor(form3simbols)}`}
                    name="message3"
                    placeholder="Type your text here..."
                    component="textarea"
                    value={form3val}
                    onChange={(e) => setform3val(e.target.value)}
                  />
                  <p className={form3simbols <= 250 ? "counter" : "counterror"}>
                    {form3simbols}/250
                  </p>
                  <div
                    className={
                      !errors.message3 && form3simbols > 0 ? "success" : "empt"
                    }
                  >
                    "Success message goes here"
                  </div>
                  <ErrorMessage
                    className="error"
                    name="message3"
                    component="div"
                  />
                </div>
                <div className="block">
                  <p>Please provide a contact name and Email\Telegram:</p>
                  <Field
                    className={`${TypeColor(form4simbols)}`}
                    name="message4"
                    placeholder="Type your text here..."
                    component="textarea"
                    value={form4val}
                    onChange={(e) => setform4val(e.target.value)}
                  />
                  <p className={form4simbols <= 250 ? "counter" : "counterror"}>
                    {form4simbols}/250
                  </p>
                  <div
                    className={
                      !errors.message4 && form4simbols > 0 ? "success" : "empt"
                    }
                  >
                    "Success message goes here"
                  </div>
                  <ErrorMessage
                    className="error"
                    name="message4"
                    component="div"
                  />
                </div>

                <button
                  className={isSubmitting || isSubmitted ? "disabled" : ""}
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting
                    ? "Sending"
                    : isSubmitted
                    ? "Thanks for your feedback"
                    : "Submit"}
                  <img src={arrow} alt="" />
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </main>
      <Footer />
    </SGrantProgram>
  );
}
