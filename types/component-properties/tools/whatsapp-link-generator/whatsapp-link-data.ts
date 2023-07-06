//? Define properties that every Whatsapp data to generate a link must have
export interface WhatsappLinkData {
  countryCode: string;
  areaCode: string;
  phoneNumber: string;
  messageText: string;
  messageVariables: string;
}
