//? This component is used to convert timestamps to local time on the client side.
//? It is used in the blog layout to convert every blog post timestamp programatically.
export default function ConvertTimestampsToLocalTime() {
    // deno-lint-ignore react-no-danger
    return <script dangerouslySetInnerHTML={{
        __html:
            `
        const timestamps = document.getElementsByClassName("date-timestamp");
        for (let htmlNode = 0; htmlNode < timestamps.length; htmlNode++) {
            const parsedTimestamp = new Date(parseInt(timestamps[htmlNode].getHTML()));
            timestamps[htmlNode].innerHTML = \`Published \${
                parsedTimestamp.toLocaleDateString()
            } - \${
             parsedTimestamp.toLocaleTimeString()
            }\`;
        }
        `}}>
    </script >
}