import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';

const COLORS = Array(15)
    .fill("")
    .map(() => `#${Math.floor(Math.random() * 16777215).toString(16)}`);

const App = () => {
    const [pickedColor, setPickedColor] = useState("");
    const [showColors, setShowColors] = useState(false);

    const handleColorClick = (color) => {
        setPickedColor(color);
        setShowColors(false);
    };

    const pageStyle = {
        backgroundColor: pickedColor || "white",
        transition: "background-color 0.3s",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    return (
        <div style={pageStyle}>
            <main className="text-center space-y-8 pb-40">
                <h1 className="text-3xl font-bold sm:text-4xl">Color Picker</h1>
                <section className="shadow-lg h-100 flex flex-col gap-4 justify-center items-center bg-pink-300 rounded-md p-4">
                    {showColors ? (
                        <div className="d-flex flex-wrap gap-2 justify-content-center">
                            {COLORS.map((color) => (
                                <button
                                    key={uuid()}
                                    className="btn btn-lg"
                                    onClick={() => handleColorClick(color)}
                                    style={{ backgroundColor: color }}
                                ></button>
                            ))}
                        </div>
                    ) : null}
                    <button
                        className="btn btn-success btn-lg"
                        onClick={() => setShowColors((prev) => !prev)}
                        style={{ backgroundColor: pickedColor }}
                    >
                        Pick a Color
                    </button>
                </section>
            </main>
        </div>
    );
};

export default App;
