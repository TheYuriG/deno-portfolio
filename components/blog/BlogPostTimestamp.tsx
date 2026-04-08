//? Creates a default timestamp paragraph that later gets converted to the user's local time
//? by the injected i18n script in the blog layout
export function BlogPostTimestamp({ date }: { date: number }) {
    return <p class="text-sm mb-2 text-center date-timestamp">
        {new Date(date).valueOf()}
    </p>
}