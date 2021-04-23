import React, { useState } from "react";
import Homepagestyles from "./Homepagestyle";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import * as yup from "yup";
import axios from "axios";

const FormStyle = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 10%;
	color: black;
	background: red;
  .errorName {
    color: darkred;
  }
  `;

const schema = yup.object().shape({
	name: yup
		.string()
		.required("Name is a required field")
		.min(2, "Name field length must be atleast 2 characters"),
	size: yup.boolean().oneOf([true], "You must select a pizza size"),
	Pepperoni: yup.boolean(),
	Ham: yup.boolean(),
	Bacon: yup.boolean(),
	Peppers: yup.boolean(),
	Sausage: yup.boolean(),

	siInput: yup.string(),
});

function FormPage() {
	const [form, setForm] = useState({
		name: "",
		size: "0",
		Pepperoni: false,
		Ham: false,
		Bacon: false,
		Peppers: false,
		Sausage: false,

		siInput: "",
	});

	const [errors, setErrors] = useState({
		name: "",
		size: "",
		Pepperoni: "",
		Ham: "",
		Pineapple: "",
		Bacon: "",
		Peppers: "",
		Sausage: "",

		siInput: "",
	});

	const [user, setUser] = useState({
		setForm,
	});

	const submit = (event) => {
		event.preventDefault();
		const newUser = {
			name: form.name,
			size: form.size,
			Pepperoni: form.Pepperoni,
			Ham: form.Ham,
			Bacon: form.Bacon,
			Peppers: form.Peppers,
			Sausage: form.Sausage,

			siInput: form.siInput,
		};

		axios
			.post("https://reqres.in/api/users", newUser)
			.then((res) => {
				setForm({
					name: "",
					size: "0",
					Pepperoni: false,
					Ham: false,
					Bacon: false,
					Peppers: false,
					Sausage: false,
					siInput: "",
				});
				setUser({
					name: form.name,
					size: form.size,
					Pepperoni: form.Pepperoni,
					Ham: form.Ham,
					Bacon: form.Bacon,
					Peppers: form.Peppers,
					Sausage: form.Sausage,
					siInput: form.siInput,
				});
			})
			.catch((err) => {});
	};

	const setFormErrors = (name, value) => {
		yup
			.reach(schema, name)
			.validate(value)
			.then(() => setErrors({ ...errors, [name]: "" }))
			.catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
	};

	const change = (event) => {
		const { checked, value, name, type } = event.target;
		const valueToUse = type === "checkbox" ? checked : value;
		setFormErrors(name, valueToUse);
		setForm({ ...form, [name]: valueToUse });
	};

	return (
		<>
			<Homepagestyles>
				<div className="HeaderContainer">
					<div className="Logo">
						<h1>Lambda Eats</h1>
					</div>
					<div className="Navigation">
						<Link to="/">Home</Link>
						<Link to="/Pizza">Form</Link>
					</div>
				</div>
			</Homepagestyles>

			<FormStyle>
				<div className="errorName">
					{errors.name}
					<br />
				</div>
				<form onSubmit={submit} autoComplete="off">
					<div>
						<label>
							Name:
							<input
								onChange={change}
								value={form.name}
								type="text"
								name="name"
							/>
						</label>
					</div>

					<div>
						<label>
							Size Selection
							<select onChange={change} value={form.size} name="size">
								<option value="">-Select-</option>
								<option value="1">Personal Pan</option>
								<option value="2">Small</option>
								<option value="3">Medium</option>
								<option value="4">Large</option>
								<option value="5">Extra-Large</option>
							</select>
						</label>
					</div>

					<div>
						<label>
							Pepperoni:
							<input
								onChange={change}
								checked={form.Pepperoni}
								name="Pepperoni"
								type="checkbox"
							/>
						</label>
						<label>
							Ham:
							<input
								onChange={change}
								checked={form.Ham}
								name="Ham"
								type="checkbox"
							/>
						</label>
						<label>
							Bacon:
							<input
								onChange={change}
								checked={form.Bacon}
								name="Bacon"
								type="checkbox"
							/>
						</label>
						<label>
							Peppers:
							<input
								onChange={change}
								checked={form.Peppers}
								name="Peppers"
								type="checkbox"
							/>
						</label>
						<label>
							Sausage:
							<input
								onChange={change}
								checked={form.Sausage}
								name="Sausage"
								type="checkbox"
							/>
						</label>
					</div>

					<div>
						<label>
							Special Instructions:
							<input
								onChange={change}
								value={form.siInput}
								name="siInput"
								type="text"
							/>
						</label>
					</div>

					<button name="button">Add to order</button>
				</form>
			</FormStyle>
		</>
	);
}
export default FormPage;
