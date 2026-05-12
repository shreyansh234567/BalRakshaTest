import { MessageCircle, HelpCircle } from 'lucide-react';

export default function FloatingButtonsPreview() {
    return (
        <>
            {/* Feedback Button */}
            <button
                aria-label="Feedback"
                className="fixed right-0 top-1/2 z-50 flex -translate-y-1/2 items-center justify-center rounded-l-xl bg-[#7d7d7d] px-4 py-6 text-white shadow-lg transition-colors hover:bg-[#666]"
            >
                <span
                    className="text-sm font-bold tracking-wide"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                    Feedback
                </span>
            </button>

            {/* Bottom Right Buttons */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
                <button
                    aria-label="WhatsApp"
                    className="flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110"
                >
                    <MessageCircle className="h-6 w-6" />
                </button>

                <button
                    aria-label="Help"
                    className="flex items-center gap-3 rounded-full bg-[#e1251b] px-7 py-4 text-sm font-bold text-white shadow-xl transition-colors hover:bg-[#c91d14]"
                >
                    <HelpCircle className="h-5 w-5" />
                    <span>Help</span>
                </button>
            </div>
        </>
    );
}