const timestamps = document.getElementsByClassName("date-timestamp");
for (let htmlNode = 0; htmlNode < timestamps.length; htmlNode++) {
  const parsedTimestamp = new Date(parseInt(timestamps[htmlNode].getHTML()));
  timestamps[htmlNode].innerHTML =
    `Published ${parsedTimestamp.toLocaleDateString()} - ${parsedTimestamp.toLocaleTimeString()}`;
}
