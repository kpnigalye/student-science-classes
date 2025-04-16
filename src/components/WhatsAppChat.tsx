
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export const WhatsAppChat = () => {
  const openWhatsApp = () => {
    const phoneNumber = '918097740318'; // Adding 91 for India's country code
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={openWhatsApp}
      className="fixed bottom-4 right-4 z-50 gap-2 shadow-lg"
      variant="default"
    >
      <MessageCircle className="h-5 w-5" />
      Chat with Us
    </Button>
  );
};
