import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Edit() {
    const [image, setImage] = useState("");
    const [giftName, setGiftName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [id, setID] = useState("");

    let history = useNavigate();

    useEffect(() => {
        const storedID = localStorage.getItem("id");
        const storedGiftName = localStorage.getItem("Name");
        const storedPrice = localStorage.getItem("Price");
        const storedQuantity = localStorage.getItem("Quantity");
        const storedImage = localStorage.getItem("Image");
    
        setID(storedID || "");
        setGiftName(storedGiftName || "");
        setPrice(storedPrice || "");
        setQuantity(storedQuantity || "");
        setImage(storedImage||"");
    
    }, []);
    

    const handleImageChange = (e) => {
        const file = e.target.files[0]; // Get the first file from the input
        if (file) {
            setImage(URL.createObjectURL(file)); // Set the image state with the temporary URL of the selected file
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        let index = array.findIndex(item => item.id === id);
        let item = array[index];
    
        item["Gift Name"] = giftName;
        item.Price = price;
        item.Quantity = quantity;
    
        // Only update the image if it's not empty
        if (image !== "") {
            item.Image = image;
        }
    
        history("/display");
    };
    

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
                <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" onChange={handleImageChange} />
                </Form.Group>

                <Form.Label>Gift</Form.Label>
                <Form.Group className="mb-3">
                    <Form.Control value={giftName} onChange={(e) => setGiftName(e.target.value)} type="text" placeholder="Gift Name" required />
                </Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Group className="mb-3">
                    <Form.Control value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Price" required />
                </Form.Group>
                <Form.Label>Quantity</Form.Label>
                <Form.Group className="mb-3">
                    <Form.Control value={quantity} onChange={(e) => setQuantity(e.target.value)} type="number" placeholder="Quantity" required />
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} variant="primary" type="submit" size="lg">
                    Update
                </Button>
                <Link className="d-grid gap-2" to="/display">
                    <Button variant="warning" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
}

export default Edit;
