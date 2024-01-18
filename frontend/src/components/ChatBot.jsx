import { useState, useEffect, useRef } from "react";
const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const chatRef = useRef(null);

  useEffect(() => {
    // Message d'accueil lorsque le composant est monté
    if (isOpen && messages.length === 0) {
      const welcomeMessage = "Bonjour! Comment puis-je vous aider aujourd'hui?";
      setMessages([{ text: welcomeMessage, sender: "chat" }]);
    }

    // Faire défiler la boîte de discussion vers le bas à chaque mise à jour de messages
    if (chatRef?.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isOpen]);



  const handleSend = () => {

    // const response = [ "D'accord, je vous envoie un lien vers un produit exelent pour votre demande.", "Voici les liens des 3 shampooings les mieux notés par nos clients.", "Très bien, voici les produits qui ne contiennent pas de phenoxyethanol.", "Bien sûr, voici nos colorations cuivre"];
    const keywords = ["masque", "shampooing", "allergique", "coloration", "merci"];
    const userMessage = input.toLowerCase();

    // Logique pour déterminer la réponse appropriée en fonction des mots-clés
    let chatResponse = "Je suis en cours d'apprentissage, veuillez reformuler votre demande.";

    if (keywords.some((keyword) => userMessage.includes(keyword))) {
      // Utilisateur a mentionné un mot-clé spécifique
      if (userMessage.includes("masque")) {
        chatResponse =
          "D'accord, je vous envoie un lien vers un produit excellent pour votre demande.";
      } else if (userMessage.includes("shampooing")) {
        chatResponse =
          "Voici les liens des 3 shampooings les mieux notés par nos clients.";
      } else if (userMessage.includes("allergique")) {
        chatResponse =
          "Très bien, voici les produits qui ne contiennent pas de phenoxyethanol.";
      } else if (userMessage.includes("coloration")) {
        chatResponse = "Bien sûr, voici nos colorations cuivre.";
      }else if (userMessage.includes("merci")) {
        chatResponse = "De rien.";
      }
    }
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, sender: "user" },
    ]);
    setInput("");

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: chatResponse, sender: "chat" },
      ]);
    }, 1000);
  };

  return (
    <>
      <div className="containerChatBot" onClick={() => setIsOpen(!isOpen)}>
        <img src="/images/robot.png" alt="" className="robot" />
        {isOpen && (
          <div className="bulle">
            <p>Hello!</p>
          </div>
        )}
      </div>
      {isOpen && (
        <div className="chatBot-component">
          <div style={{ flexGrow: 1 }}></div>
          <div className="chat" ref={chatRef}>
            {messages.map((message, index) => (
              <p
                className={
                  message.sender === "user" ? "user-message" : "ai-message"
                }
                key={index}
              >
                {message.text}
              </p>
            ))}
          </div>

          <div className="input-container">
            <input
              type="text"
              className="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="button" className="send" onClick={handleSend}>
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
