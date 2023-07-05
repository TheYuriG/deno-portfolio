//? Types for typecasting
import type { WhatsappLinkData } from "../../types/component-properties/tools/whatsapp-link-generator/whatsapp-link-data.ts";
//? Create gradient links to all numbers provided
import { GradientLink } from "../UI/GradientLink.tsx";
//? Create a greek list of contents
import { GreekList } from "../UI/GreekList.tsx";

//? Dynamically display a list of links to messaging one or more numbers on Whatsapp
export function WhatsappLinksList(
  { whatsappDataList }: { whatsappDataList: WhatsappLinkData[] },
) {
  //? Instantiate all links
  const gradientWhatsappLinks = whatsappDataList.map((
    { areaCode, countryCode, messageText, phoneNumber },
  ) => (
    <GradientLink
      newTab={true}
      content={`+${countryCode} (${areaCode}) ${phoneNumber}`}
      link={`https://wa.me/${countryCode}${areaCode}${phoneNumber}${
        messageText !== "" ? `?text=${encodeURIComponent(messageText)}` : ""
      }`}
      customRel="nofollow noreferrer"
    />
  ));

  //? Render all links
  return <GreekList items={gradientWhatsappLinks} />;
}
