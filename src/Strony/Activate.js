import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Activate() {
    const { token } = useParams();

    useEffect(() => {
        // Wywołaj API do aktywacji konta
        fetch(`http://localhost:8000/activate/${token}`)
            .then(response => {
                if (response.ok) {
                    console.log('Konto zostało aktywowane');
                } else {
                    console.error('Błąd aktywacji konta');
                }
            });
    }, [token]);

    return (
        <div>
            <h1>Aktywacja Konta</h1>
            {/* Wiadomości o statusie aktywacji */}
        </div>
    );
}

export default Activate;
