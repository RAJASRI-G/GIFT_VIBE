// Create.jsx
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Create() {
    const [image, setImage] = useState("");
    const [themeName, setThemeName] = useState("");
    const [themePrice, setThemePrice] = useState("");
    const [themeDetails, setThemeDetails] = useState("");

    let history = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const id = uuid();
        array.push({ id, Image: image, "Theme Name": themeName, "Theme Price": themePrice, "Theme Details": themeDetails });

        history("/theme");
    };

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
                <Form.Group className="mb-3">
                    <Form.Control onChange={(e) => handleImageChange(e)} type="file" placeholder="Image" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control onChange={(e) => setThemeName(e.target.value)} type="text" placeholder="Theme Name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control onChange={(e) => setThemePrice(e.target.value)} type="number" placeholder="Theme Price" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control onChange={(e) => setThemeDetails(e.target.value)} type="text" placeholder="Theme Details" required />
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} variant="primary" type="submit">
                    Submit
                </Button>
                <Link className="d-grid gap-2" to="/theme">
                    <Button variant="info" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
}

export default Create;
