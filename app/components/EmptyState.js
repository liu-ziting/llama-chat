export default function EmptyState({ setOpen, setPrompt }) {
    return (
        <div className="flex gap-x-4 rounded-md bg-gray-50 py-5 px-5 mb-12">
            <span className="text-xl sm:text-2xl" title="AI">
                🦙
            </span>
            <div className="flex flex-col text-sm sm:text-base flex-1 gap-y-4 mt-1">
                <p>I&apos;m Meta llama.</p>
                <p>What do you want to chat about?</p>
            </div>
        </div>
    )
}
