// components/CalendlyPopup.js
import { useState, useEffect } from 'react';
import { PopupModal } from 'react-calendly';
import '../../../assets/calendlypopup.css';

const CalendlyPopup = () => {
    const [open, setOpen] = useState(false);

    // Handle Calendly close via postMessage
    useEffect(() => {
        const handleCalendlyClose = (event) => {
            if (event.data?.event === 'calendly.event_scheduling_popup_closed') {
                setOpen(false);
            }
        };

        window.addEventListener('message', handleCalendlyClose);
        return () => window.removeEventListener('message', handleCalendlyClose);
    }, []);

    return (
        <>
            <button
                className="hero-theme-btn-second"
                style={{ minWidth: '209px' }}
                onClick={() => setOpen(true)}
            >
                Let&#39;s Collaborate
            </button>

            {open && (
                <PopupModal
                    url="https://calendly.com/codersh-web-services/15min"
                    open={open}
                    rootElement={document.getElementById('root')}
                    onModalClose={() => setOpen(false)}
                />
            )}
        </>
    );
};

export default CalendlyPopup;
