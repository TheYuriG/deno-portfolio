//? Create the table name
import { StyledSubHeader } from "../UI/StyledSubHeader.tsx";
//? Add a tooltip whenever a note is provided to a 'difference' object
import { Tooltip } from "../UI/Tooltip.tsx";

//? Individual difference between two things
interface difference {
  label: string;
  itemOne: string;
  itemTwo: string;
  note?: string;
}

//? All properties required for this component to build a diff table
interface ComparisonTableProperties {
  tableName: string;
  tableId?: string;
  languageOneName: string;
  languageTwoName: string;
  differenceList: difference[];
}

//? Creates the table with the difference between two things
export function ComparisonTable(
  {
    tableName,
    tableId,
    differenceList,
    languageOneName,
    languageTwoName,
  }: ComparisonTableProperties,
) {
  return (
    <>
      {/* Table name */}
      <StyledSubHeader title={tableName} id={tableId} />
      <table class="text-center custom-bo-ac custom-tr-bo border-collapse mb-4 text-xs sm:text-sm md:text-base">
        {/* Table head: lang1, lang2, notes */}
        <tr>
          <th scope="col" class="custom-bo-ac hidden md:table-cell"></th>
          {/* First language */}
          <th scope="col" class="custom-bo-ac py-2 px-4">{languageOneName}</th>
          {/* Second language */}
          <th scope="col" class="custom-bo-ac py-2 px-4">
            {languageTwoName}
          </th>
          {/* Notes */}
          <th scope="col" class="custom-bo-ac hidden sm:table-cell py-2 px-2">
            Notes
          </th>
        </tr>
        {differenceList.map(({ label, itemOne, itemTwo, note }) => (
          <tr class="h-8">
            {/* Label */}
            <td class="custom-bo-ac hidden md:table-cell py-1 px-2">{label}</td>
            {/* Item 1 */}
            <td class="custom-bo-ac py-1 px-2 whitespace-pre-wrap">
              {itemOne}
            </td>
            {/* Item 2 */}
            <td class="custom-bo-ac py-1 px-2 whitespace-pre-wrap">
              {itemTwo}
            </td>
            {/* Note about the difference, if provided */}
            <td class="custom-bo-ac hidden sm:table-cell pr-2 pt-2">
              {note !== undefined && (
                <Tooltip
                  iconSize="1.5em"
                  tooltipText={note}
                />
              )}
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}
