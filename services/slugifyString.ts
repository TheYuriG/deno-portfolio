//? This version includes an accents removal function for all the UNICODE spectrum.
//? The normalize function (standard in JS) separates accented letters from their accents. the replace step replaces al the accents by nothing, thus leaving the base letters alone.

export function slugify(text: string) {
  return text
    .toString() //? Cast to string (optional)
    .normalize("NFKD") //? The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .replace(/[\u0300-\u036f]/g, "") //? deletes all the accents
    .toLowerCase() //? Convert the string to lowercase letters
    .trim() //? Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, "-") //? Replace spaces with -
    .replace(/[^\w\-]+/g, "") //? Remove all non-word chars
    .replace(/\_/g, "-") //? Replace _ with -
    .replace(/\-\-+/g, "-") //? Replace multiple - with single -
    .replace(/^\-/g, "") //? Remove leading -
    .replace(/\-$/g, ""); //? Remove trailing -
}
