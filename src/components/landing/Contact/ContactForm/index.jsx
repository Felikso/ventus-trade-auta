import React from "react";
import emailjs from 'emailjs-com';
import axios from "axios";
import { Formik, Form, FastField, ErrorMessage } from "formik";
import Recaptcha from "react-google-recaptcha";
import * as Yup from "yup";
import { url } from "data/config";
import { Button, Input } from "components/common";
import { Error, Center, InputField } from "./styles";

const ContactForm = () => {
	function sendEmail(e) {
		/* 		e.preventDefault(); */

		emailjs.send('aleksandra-developer', 'ventus-trade-car', e.target, 'user_Lt2NvJYOJSnZZFDhes0qS')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
	}
	return (
		<Formik
			initialValues={{
				name: "",
				email: "",
				message: "",
				recaptcha: "",
				success: false,
			}}
			validationSchema={Yup.object().shape({
				name: Yup.string().required("Full name field is required"),
				email: Yup.string()
					.email("Invalid email")
					.required("Email field is required"),
				message: Yup.string().required("Message field is required"),
				recaptcha:
					process.env.NODE_ENV !== "development"
						? Yup.string().required("Robots are not welcome yet!")
						: Yup.string(),
			})}
			/* 		onSubmit={async (
						{ name, email, message },
						{ setSubmitting, resetForm, setFieldValue }
					) => {
						try {
							await axios({
								method: "POST",
								url:
									process.env.NODE_ENV !== "development"
										? `${url}/api/contact`
										: "http://localhost:8000/api/contact",
								headers: {
									"Content-Type": "application/json",
								},
								data: JSON.stringify({
									name,
									email,
									message,
								}),
							});
							setSubmitting(false);
							setFieldValue("success", true);
							setTimeout(() => resetForm(), 6000);
						} catch (err) {
							setSubmitting(false);
							setFieldValue("success", false);
							alert("Something went wrong, please try again!");
						}
					}} */
			/* 			onSubmit={sendEmail} */
			onSubmit={(name, email, message, actions) => {
				setTimeout(() => {
					sendEmail(name, email, message)
					actions.setSubmitting(false)
				}, 1000)
			}}
		/* 			onSubmit={async (
						{ name, email, message },
						{ setSubmitting, resetForm, setFieldValue }
					) => {
						try {
							sendEmail(name, email, message);
							console.log("hehe");
		
						}
						catch (err) {
							setSubmitting(false);
							setFieldValue("success", false);
							alert("Something went wrong, please try again!");
						}
					}} */
		/* 							await axios({
										method: "POST",
										url:
											process.env.NODE_ENV !== "development"
												? `${url}/api/contact`
												: "http://localhost:8000/api/contact",
										headers: {
											"Content-Type": "application/json",
										},
										data: JSON.stringify({
											name,
											email,
											message,
										}),
									}); */
		/* 					await sendEmail();
							setSubmitting(false);
							setFieldValue("success", true);
							setTimeout(() => resetForm(), 6000);
						} catch (err) {
							setSubmitting(false);
							setFieldValue("success", false);
							alert("Something went wrong, please try again!");
						} */
		/* 			onSubmit={sendEmail} */
		>
			{({ values, touched, errors, setFieldValue, isSubmitting }) => (
				<Form>
					<InputField>
						<Input
							as={FastField}
							type="text"
							name="name"
							component="input"
							aria-label="name"
							placeholder="Full name*"
							error={touched.name && errors.name}
						/>
						<ErrorMessage component={Error} name="name" />
					</InputField>
					<InputField>
						<Input
							id="email"
							aria-label="email"
							component="input"
							as={FastField}
							type="email"
							name="email"
							placeholder="Email*"
							error={touched.email && errors.email}
						/>
						<ErrorMessage component={Error} name="email" />
					</InputField>
					<InputField>
						<Input
							as={FastField}
							component="textarea"
							aria-label="message"
							id="message"
							rows="8"
							type="text"
							name="message"
							placeholder="Message*"
							error={touched.message && errors.message}
						/>
						<ErrorMessage component={Error} name="message" />
					</InputField>
					{values.name &&
						values.email &&
						values.message &&
						process.env.NODE_ENV !== "development" && (
							<InputField>
								<FastField
									component={Recaptcha}
									sitekey={process.env.GATSBY_PORTFOLIO_RECAPTCHA_KEY}
									name="recaptcha"
									onChange={(value) => setFieldValue("recaptcha", value)}
								/>
								<ErrorMessage component={Error} name="recaptcha" />
							</InputField>
						)}
					{values.success && (
						<InputField>
							<Center>
								<h4>
									Your message has been successfully sent, I will get back to you
									ASAP!
								</h4>
							</Center>
						</InputField>
					)}
					<Center>
						<Button type="submit" disabled={isSubmitting}>
							Wyślij
						</Button>
					</Center>
				</Form>
			)}
		</Formik>
	)
};

export default ContactForm;
