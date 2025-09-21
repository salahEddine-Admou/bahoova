import React from "react";
import { MessageCircle } from "lucide-react";
import { mockData } from "../mock";

const WhatsAppFloat = () => {
  return (
    <a
      href={mockData.company.contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      title="Contactez-nous sur WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppFloat;