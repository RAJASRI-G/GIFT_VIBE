import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Create() {
    const [image, setImage] = useState("");
    const [giftName, setGiftName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    let history = useNavigate();
    const handleImageChange = (e) => {
        const file = e.target.files[0]; // Get the first file from the input
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); // Set the image state with the base64 data URL
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const id = uuid();
        array.push({ id, Image: image, "Gift Name": giftName, Price: price, Quantity: quantity });

        history("/display");
    };

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
            <Form.Group className="mb-3">
            <Form.Control onChange={(e) => handleImageChange(e)} type="file" placeholder="Image" />
        </Form.Group>
        
                <Form.Group className="mb-3">
                    <Form.Control onChange={(e) => setGiftName(e.target.value)} type="text" placeholder="Gift Name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Price" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control onChange={(e) => setQuantity(e.target.value)} type="number" placeholder="Quantity" required />
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} variant="primary" type="submit">
                    Submit
                </Button>
                <Link className="d-grid gap-2" to="/display">
                    <Button variant="info" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
}

export default Create;








// import React, { useState } from "react";
// import { Button, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import array from "./array";
// import { v4 as uuid } from "uuid";
// import { Link, useNavigate } from "react-router-dom";
 
// function Create() {
//     // Making usestate for setting and
//     // fetching a value in jsx
//     const [name, setname] = useState("");
//     const [age, setage] = useState("");
 
//     // Using useNavigation for redirecting to pages
//     let history = useNavigate();
 
//     // Function for creating a post/entry
//     const handelSubmit = (e) => {
//         e.preventDefault(); // Prevent reload
 
//         const ids = uuid(); // Creating unique id
//         let uni = ids.slice(0, 8); // Slicing unique id
 
//         // Fetching a value from usestate and
//         // pushing to javascript object
//         let a = name,
//             b = age;
//         if (name == "" || age == "") {
//             alert("invalid input");
//             return;
//         }
//         array.push({ id: uni, Name: a, Age: b });
 
//         // Redirecting to home page after creation done
//         history("/display");
//     };
 
//     return (
//         <div>
//             <Form
//                 className="d-grid gap-2"
//                 style={{ margin: "5rem" }}
//             >
//                 {/* Fetching a value from input textfirld 
//                     in a setname using usestate*/}
//                 <Form.Group
//                     className="mb-3"
//                     controlId="formBasicName"
//                 >
//                     <Form.Control
//                         onChange={(e) =>
//                             setname(e.target.value)
//                         }
//                         type="text"
//                         placeholder="Enter Name"
//                         required
//                     />
//                 </Form.Group>
 
//                 {/* Fetching a value from input textfirld in
//                     a setage using usestate*/}
//                 <Form.Group
//                     className="mb-3"
//                     controlId="formBasicAge"
//                 >
//                     <Form.Control
//                         onChange={(e) =>
//                             setage(e.target.value)
//                         }
//                         type="number"
//                         placeholder="Age"
//                         required
//                     />
//                 </Form.Group>
 
//                 {/* handing a onclick event in button for
//                     firing a function */}
//                 <Button
//                     onClick={(e) => handelSubmit(e)}
//                     variant="primary"
//                     type="submit"
//                 >
//                     Submit
//                 </Button>
//                  <br/>
//                 {/* Redirecting back to home page */}
//                 <Link className="d-grid gap-2" to="/display">
//                     <Button variant="info" size="lg">
//                         Home
//                     </Button>
//                 </Link>
//             </Form>
//         </div>
//     );
// }
 
// export default Create;