'use client';
import { useEffect, useState } from 'react';
import styles from './CookieBanner.module.scss'

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const cookieConsent = localStorage.getItem('cookieConsent')
        if (!cookieConsent) {
            setIsVisible(true);
        }
    } ,[]);

    const handleDismiss = () => {
        localStorage.setItem("cookieConsent", "dismissed");
        setIsVisible(false);
    }

    if (!isVisible) {
        return null;
    }

    return(
        <div className={styles.cookieBanner}>
            <div className={styles.textContainer}>
                <p className={styles.title}> Welcome to X.com</p>
                <p>
                    We are letting you know that we are changing our URL, but your privacy and data protection settings remain the same. For more details, see our Privacy Policy:{" "}
                    <a href="https://x.com/en/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        https://x.com/en/privacy
                    </a>
                </p>
            </div>
            <div className={styles.actions}>
                <button onClick={handleDismiss} className={styles.closeButton}>
                    <span>&times;</span>
                    </button>
            </div>
        </div>
    )
}

export default CookieBanner;