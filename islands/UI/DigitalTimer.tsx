import { useEffect, useState } from "preact/hooks";

const ONE_SECOND_IN_MS = 1000;
const ONE_MINUTE_IN_MS = ONE_SECOND_IN_MS * 60;

//? Define what this component can receive as props
interface DigitalTimerProperties {
  expiresAt: number;
  expiredText: string;
  preppendedText?: string;
  appendedText?: string;
  classes?: string;
  styles?: string;
}

//? Renders a timer that constantly ticks down
export default function DigitalTimer(
  {
    expiresAt,
    expiredText,
    preppendedText = "",
    appendedText = "",
    classes = "",
    styles = "",
  }: DigitalTimerProperties,
) {
  //? Track how much time left until the data gets deleted from the server
  const [time, setTime] = useState(expiresAt - Date.now());

  //? Create the timer responsible for ticking down the text exclusion
  useEffect(() => {
    //? Create a timer that will update our DigitalTimer at every second
    const interval = setInterval(
      () => {
        setTime(expiresAt - Date.now());
      },
      1000,
    );

    //? Destroy the timer if it expires
    setTimeout(() => {
      clearInterval(interval);
    }, expiresAt - Date.now());

    //? Destroy the timer if this component is unmounted
    return () => clearInterval(interval);
  }, []);

  //? Instantiate minutes and seconds until the text gets deleted
  const minutesUntilExpiration = Math.floor((time / ONE_MINUTE_IN_MS) % 60)
    .toLocaleString(undefined, {
      minimumIntegerDigits: 2,
    });
  const secondsUntilExpiration = Math.floor((time / ONE_SECOND_IN_MS) % 60)
    .toLocaleString(undefined, {
      minimumIntegerDigits: 2,
    });

  //? Instantiate what is the text that will be displayed on the timer
  const displayText = time < 0 ? expiredText : preppendedText +
    minutesUntilExpiration + ":" + secondsUntilExpiration +
    appendedText;

  return (
    <div
      role="timer"
      class={"digital-clock font-bold " + classes}
      style={styles}
    >
      {displayText}
    </div>
  );
}
