//? Types for typecasting
import { WhatsappLinkData } from "../../types/whatsapp-link-generator/whatsapp-link-data.ts";
//? Create gradient links to all numbers provided
import { GradientLink } from "../UI/GradientLink.tsx";

//? Dynamically display a list of links to messaging one or more numbers on Whatsapp
export function WhatsappLinksList(
  { whatsappDataList }: { whatsappDataList: WhatsappLinkData[] },
) {
  return (
    //? Ordered list using greek alphabet characters for counting
    <ol
      start={1}
      class="self-start list-[lower-greek]"
    >
      {/* Display a gradient link for every string received */}
      {whatsappDataList.map((
        { areaCode, countryCode, messageText, phoneNumber },
      ) => (
        <li class="ml-10 lg:ml-0 transition-[margin-left] ease-in-out duration-500">
          <GradientLink
            newTab={true}
            content={`+${countryCode} (${areaCode}) ${phoneNumber}`}
            link={`https://wa.me/${countryCode}${areaCode}${phoneNumber}${
              messageText !== ""
                ? `?text=${encodeURIComponent(messageText)}`
                : ""
            }`}
            customRel="nofollow noreferrer"
          />
        </li>
      ))}
    </ol>
  );
}
