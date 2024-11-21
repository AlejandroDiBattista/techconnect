import DataService from "../datos/datos";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card, Text, TextField, Flex } from "@radix-ui/themes";
import { Accion } from "../components/Accion";

const nombre = (texto) =>
	texto.replace(/([A-Z])/g, ' $1').replace(/[_-]/g, ' ').replace(/\s+/g, ' ').trim().replace(/\b\w/g, (c) => c.toUpperCase());

export function Cliente() {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		domicilio: "", localidad: "", codigoPostal: "",
		email: "", telefono: "", tarjeta: ""
	});
	const [formErrors, setFormErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name == 'domicilio' && value === "*") {
			setFormData({
				domicilio: "Av Jujuy 337", localidad: "San Miguel de Tucuman", codigoPostal: "4000",
				email: "example@gmail.com", telefono: "(381) 555-1234", tarjeta: "4567 1234 5678 9012",
			});
			return;
		}

		setFormData({ ...formData, [name]: value });
		// Limpiar error cuando el usuario empiece a escribir
		if (formErrors[name]) setFormErrors({ ...formErrors, [name]: "" });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let errors = {};
		let hasErrors = false;

		// Validar cada campo
		Object.keys(formData).forEach(field => {
			if (!formData[field].trim()) {
				errors[field] = "Este campo es obligatorio";
				hasErrors = true;
			}
		});

		if (hasErrors) {
			setFormErrors(errors);
			return;
		}

		try {
			const { compraId } = await DataService.traerCompraActiva();
			if (!compraId) throw new Error("No hay compra activa");

			await DataService.actualizarCliente(compraId, formData);
			await DataService.confirmarCompra(compraId);
			navigate('/');
		} catch (error) {
			console.error("Error al guardar los datos del cliente:", error);
			setFormErrors({ submit: "Error al enviar los datos. Por favor, intente nuevamente." });
		}
	};

	console.log(formData)
	return (
		<Card>
			<Text size="4" as="p" weight="bold">Ingrese sus datos</Text>
			<p></p>
			<form onSubmit={handleSubmit}>
				<Flex direction="column" gap="4" >
					{/* <div></div> */}
					{Object.keys(formData).map(field => (
						<Flex direction="column" gap="1" >
							<Text size="3" as="label" htmlFor={field}>{nombre(field)}</Text>
							<TextField.Root
								key={field} name={field}
								variant="outlined"
								type={field === "email" ? "email" : (field === "telefono" ? "tel" : "text")}
								value={formData[field]}
								onChange={handleChange}
								/>
						</Flex>
					))}
					{/* <div></div> */}
				</Flex>
				<p></p>
				<Accion texto="Confirmar Compra" onClick={handleSubmit} />
			</form>
		</Card>
	);
};

export default Cliente;