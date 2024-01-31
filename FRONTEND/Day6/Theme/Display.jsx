// Home.jsx
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Theme.css";

function Home() {
    const [id, setID] = useState("");
    const [themeName, setThemeName] = useState("");
    const [themePrice, setThemePrice] = useState("");
    const [image, setImage] = useState("");
    const [themeDetails, setThemeDetails] = useState("");

    let navigate = useNavigate();

    function setItemDetails(id, themeName, themePrice, image, themeDetails) {
        localStorage.setItem("id", id);
        localStorage.setItem("Theme Name", themeName);
        localStorage.setItem("Theme Price", themePrice);
        localStorage.setItem("Theme Details", themeDetails);

        setID(id);
        setThemeName(themeName);
        setThemePrice(themePrice);
        setThemeDetails(themeDetails);

        if (image !== "") {
            setImage(image);
        }
    }

    function deleted(id) {
        let index = array.findIndex((item) => item.id === id);
        array.splice(index, 1);
        navigate("/theme");
    }

    return (
        <div className="updated-classname">
            <br/><br/>
            <div className="updated-grid-container">
                <div className="updated-grid-item">Image</div>
                <div className="updated-grid-item">Theme Name</div>
                <div className="updated-grid-item">Theme Details</div>
                <div className="updated-grid-item">Theme Price</div>
                <div className="updated-grid-item">Actions</div>
                {array.map((item) => (
                    <React.Fragment key={item.id}>
                        <div className="updated-grid-item">
                            <img
                                src={item.Image}
                                alt={`Image for ${item["Theme Name"]}`}
                                className="updated-dis"
                            />
                        </div>
                        <div className="updated-grid-item">{item["Theme Name"]}</div>
                        <div className="updated-grid-item">{item["Theme Details"]}</div>
                        <div className="updated-grid-item">{item["Theme Price"]}</div>
                        <div className="updated-grid-item">
                            <Link to="/edittheme" className="updated-edit-link">
                                <Button
                                    className="updated-edit-button"
                                    onClick={(e) =>
                                        setItemDetails(
                                            item.id,
                                            item["Theme Name"],
                                            item["Theme Price"],
                                            item.Image,
                                            item["Theme Details"]
                                        )
                                    }
                                    variant="info"
                                >
                                    Edit
                                </Button>
                            </Link>
                            <Button
                                className="updated-delete-button"
                                onClick={(e) => deleted(item.id)}
                                variant="danger"
                            >
                                Delete
                            </Button>
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <Link to="/createtheme">
                <Button className="updated-create-button" variant="warning" size="lg">
                    Create
                </Button>
            </Link>
        </div>
    );
}

export default Home;
