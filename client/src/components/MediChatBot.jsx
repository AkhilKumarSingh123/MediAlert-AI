import { useState } from "react";

const MediChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = input;
    setMessages((prev) => [...prev, { text: userMessage, sender: "user" }]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:3030/api/v1/chatbot/book-appointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userMessage }),
        }
      );

      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { text: data.aiResponse, sender: "ai" },
        ...(data.alertLevel === "high"
          ? [
              { text: "⚠️ " + data.alert, sender: "alert" },
              {
                text: `👉 Please visit: ${data.redirect}`,
                sender: "redirect",
              },
            ]
          : []),
      ]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [
        ...prev,
        { text: "⚠️ Something went wrong. Please try again.", sender: "error" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div
        className="text-3xl cursor-pointer bg-blue-600 text-white p-3 rounded-full shadow-lg"
        onClick={toggleChat}
      >
        💬
      </div>

      {isOpen && (
        <div className="w-80 bg-white shadow-lg rounded-lg mt-2">
          <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-2 rounded-t-lg">
            <h4 className="font-semibold text-sm">
              Medi - Your Health Assistant
            </h4>
            <button onClick={toggleChat} className="text-xl">
              ❌
            </button>
          </div>

          <div className="h-60 overflow-y-auto p-3 text-sm" id="medi-messages">
            {messages.map((msg, idx) => {
              const baseClass = "mb-2 p-2 rounded";
              let className = baseClass;

              if (msg.sender === "user") className += " bg-blue-100 text-right";
              else if (msg.sender === "ai")
                className += " bg-green-100 text-left";
              else if (msg.sender === "alert")
                className += " bg-red-100 font-bold text-left";
              else if (msg.sender === "redirect")
                className += " bg-yellow-100 italic text-left";
              else className += " bg-gray-100 text-left";

              return (
                <div key={idx} className={className}>
                  {msg.sender === "redirect" ? (
                    // <span dangerouslySetInnerHTML={{ __html: msg.text }} />
                    <a
                      href="http://localhost:5174/login"
                      target="_blank"
                      className="text-blue-500 underline"
                    >
                      {msg.text}
                    </a>
                  ) : (
                    msg.text
                  )}
                </div>
              );
            })}

            {loading && (
              <div className="text-sm text-gray-500 italic">Typing...</div>
            )}
          </div>

          <div className="flex border-t p-2 gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Describe your symptoms..."
              className="flex-1 border rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediChatbot;
