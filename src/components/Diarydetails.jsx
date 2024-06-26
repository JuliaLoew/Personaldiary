
import React, { useState, useEffect } from "react";

const Diarydetails = () => {
    const initialDiaryContent = {
        title: "Erster Tag in Paris",
        date: "25.06.2024",
        content:
            "Heute war mein erster Tag in Paris und es war einfach unglaublich. Wir haben den Eiffelturm besucht und sind durch die malerischen Straßen von Montmartre geschlendert. Die Architektur hier ist atemberaubend, und das Essen ist einfach fantastisch. Ich kann es kaum erwarten, mehr von dieser wunderschönen Stadt zu entdecken!"
    };

    const [isEditing, setIsEditing] = useState(false);
    const [diaryContent, setDiaryContent] = useState(() => {
        
        // Abruf Daten local Storage 
        const storedDiaryContent = localStorage.getItem("diaryContent");
        return storedDiaryContent ? JSON.parse(storedDiaryContent) : initialDiaryContent;
    });

    useEffect(() => {
        // Speichern Änderung im Local Storage
        localStorage.setItem("diaryContent", JSON.stringify(diaryContent));
    }, [diaryContent]);

    const handleSave = () => {
        
        console.log("Änderungen gespeichert:", diaryContent);
        setIsEditing(false); 
    };
        // Wechselt in den Bearbeitungsmodus
    const handleEdit = () => {
        setIsEditing(true); 
    };

    const handleChange = (e) => {
        // Aktualisiert den Inhalt des Tagebucheintrags
        setDiaryContent({ ...diaryContent, [e.target.name]: e.target.value });
    };

    return (
        <div className="max-w-xl mx-auto border border-gray-300 rounded-lg shadow-lg p-4 bg-white">
            <div className="flex justify-center items-center mb-4">
                <img
                    className="mr-4"
                    width="500"
                    height="500"
                    src="https://media.istockphoto.com/id/806402562/de/foto/eiffelturm-antike-paris-fotografieren-1893.jpg?s=1024x1024&w=is&k=20&c=ttumGNBUhQZVpYL4LHMMX3qta_8QFVQBo_eKci8BHiE="
                    alt="Bild"
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            </div>
            {isEditing ? (
                <input
                    type="text"
                    name="title"
                    value={diaryContent.title}
                    onChange={handleChange}
                    className="text-blue-900 font-bold text-xl flex justify-center items-center p-4"
                />
            ) : (
                <h1 className="text-blue-900 font-bold text-xl flex justify-center items-center p-4">
                    {diaryContent.title}
                </h1>
            )}
            <div className="font-bold text-sm mb-2">{diaryContent.date}</div>
            {isEditing ? (
                <textarea
                    name="content"
                    value={diaryContent.content}
                    onChange={handleChange}
                    className="text-sm leading-relaxed w-full h-40 border border-gray-300 rounded-lg p-2"
                />
            ) : (
                <div className="text-sm leading-relaxed">
                    {diaryContent.content}
                </div>
            )}
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={isEditing ? handleSave : handleEdit}
            >
                {isEditing ? "Save" : "Edit"}
            </button>
        </div>
    );
};

export default Diarydetails;
