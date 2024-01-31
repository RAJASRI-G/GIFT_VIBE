import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Display.css";

function Home() {
    const [id, setID] = useState("");
    const [giftName, setGiftName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [quantity, setQuantity] = useState("");

    let navigate = useNavigate();

    function setItemDetails(id, giftName, price, image, quantity) {
        localStorage.setItem("id", id);
        localStorage.setItem("Name", giftName);
        localStorage.setItem("Price", price);
        localStorage.setItem("Quantity", quantity);

        // Update state variables
        setID(id);
        setGiftName(giftName);
        setPrice(price);
        setQuantity(quantity);

        // Update image only if it's not empty
        if (image !== "") {
            setImage(image);
        }
    }

    function deleted(id) {
        let index = array.findIndex((item) => item.id === id);
        array.splice(index, 1);
        navigate("/display");
    }

    return (
        <div className="adgif">
        <br></br><br></br>
            <div className="grid-container">
                {array.map((item) => (
                    <div key={item.id} className="grid-item">
                        <img
                            src={item.Image}
                            alt={`Image for ${item["Gift Name"]}`}
                            className="dis"
                        />
                        <div><i className="fa fa-gift"></i>{item["Gift Name"]}</div>
                        <div><i className="fa fa-inr"></i>{item.Price}</div>
                        <div><i className="fas fa-sort-amount-up"></i> {item.Quantity}</div><br></br>
                        <div>
                            <Link to="/edit" className="ed">
                                <Button className="ed1"
                                    onClick={(e) =>
                                        setItemDetails(
                                            item.id,
                                            item["Gift Name"],
                                            item.Price,
                                            item.Image,
                                            item.Quantity
                                        )
                                    }
                                    variant="info"
                                >
                                    Edit
                                </Button>
                            </Link>
                            <Button className="ed2"
                                onClick={(e) => deleted(item.id)}
                                variant="danger"
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <Link  to="/create">
                <Button className="crt" variant="warning" size="lg">
                    Create
                </Button>
            </Link>
        </div>
    );
}

export default Home;





// import React, { useState } from "react";
// import { Button, Table } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import array from "./array";
// import { Link, useNavigate } from "react-router-dom";
// import "../assets/css/Display.css"
// function Home() {
//     const [id, setID] = useState("");
//     const [giftName, setGiftName] = useState("");
//     const [price, setPrice] = useState("");
//     const [image, setImage] = useState("");
//     const [quantity, setQuantity] = useState("");
    
//     let navigate = useNavigate();

//     function setItemDetails(id, giftName, price, image, quantity) {
//         localStorage.setItem("id", id);
//         localStorage.setItem("Name", giftName);
//         localStorage.setItem("Price", price);
//         localStorage.setItem("Quantity", quantity);
    
//         // Update state variables
//         setID(id);
//         setGiftName(giftName);
//         setPrice(price);
//         setQuantity(quantity);
    
//         // Update image only if it's not empty
//         if (image !== "") {
//             setImage(image);
//         }
//     }    

//     function deleted(id) {
//         let index = array.findIndex(item => item.id === id);
//         array.splice(index, 1);
//         navigate("/display");
//     }

//     return (
//         <div style={{ margin: "5rem" }}>
//             <Table striped bordered hover size="sm">
//                 <thead >
//                     <tr className="tab1">
//                     <th>Image</th>
//                     <th>Gift Name</th>
//                     <th>Price</th>
//                     <th>Quantity</th>
//                     <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {array.map((item) => (
//                         <tr key={item.id} className="trow">
//                             <td><img src={item.Image} alt={`Image for ${item["Gift Name"]}` } className="dis" /></td>
//                             <td>{item["Gift Name"]}</td>
//                             <td>{item.Price}</td>
//                             <td>{item.Quantity}</td>
//                             <td>
//                                 <Link to="/edit">
//                                     <Button
//                                         onClick={(e) =>
//                                             setItemDetails(item.id, item["Gift Name"], item.Price, item.Image, item.Quantity)
//                                         }
//                                         variant="info"
//                                     >
//                                         Edit
//                                     </Button>
//                                 </Link>
//                                 <Button
//                                     onClick={(e) => deleted(item.id)}
//                                     variant="danger"
//                                 >
//                                     Delete
//                                 </Button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>
//             <Link className="d-grid gap-2" to="/create">
//                 <Button variant="warning" size="lg">
//                     Create
//                 </Button>
//             </Link>
//         </div>
//     );
// }

// export default Home;




