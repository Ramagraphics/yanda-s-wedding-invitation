document.addEventListener('DOMContentLoaded', () => {
    // --- TRANSLATION DATA ---
    const translations = {
        en: {
            wedding_of: "The Wedding of",
            couple_name: "Premakumar & Madhu",
            dear_guest: "Dear Guest,",
            open_invitation: "Open Invitation",
            together_with_families: "Yanda's Wedding Invitation",
            invite_you: "joyfully invite you to celebrate their wedding",
            wedding_date: "11 OCTOBER 2025",
            the_couple: "The Couple",
            groom_name: "Premakumar",
            son_of: "Son of",
            groom_parents: "Sri & Smt. Yanda Venkatarao & Krishnaveni",
            bride_name: "Madhu",
            daughter_of: "Daughter of",
            bride_parents: "Sri & Smt. Jayan Deepak & sushma",
            event_details: "Event Details",
            ceremony: "Wedding Ceremony",
            ceremony_date: "Saturday, 11th October 2025",
            ceremony_time: "Night 08-42 PM",
            reception: "Reception",
            reception_date: "Saturday, 11th October 2025",
            reception_time: "12:00 PM onwards",
            venue: "Krishnaveni kalyanamadapam, Hiramandalam",
            view_map: "View Map",
            thank_you: "Thank You",
            looking_forward: "We are excited to celebrate our special day with you!",
            hashtag: "#Prem❤️Madhu",
            hashtagg: "Designed By:Rama Graphics",
            cell: "Cell:9490446815",
            scrolling_invitation: "Yanda's Wedding Invitation From: Premakumar - Bride: Madhu joyfully invite you to celebrate their wedding..."
        },
        te: {
            wedding_of: "పెళ్లి వేడుక",
couple_name: "ప్రమకుమార్ & మధు",
dear_guest: "ఆదరణీయ అతిథి గారికి,",
open_invitation: "ఓపెన్ ఆహ్వానం",
together_with_families: "యండా కుటుంబం తరపున పెళ్లి ఆహ్వానం",
invite_you: "వారి వివాహ వేడుకను సంబరంగా జరుపుకోవడానికి మిమ్మల్ని ఆహ్వానిస్తున్నాము",
wedding_date: "11 అక్టోబర్ 2025",
the_couple: "వధూవరులు",
groom_name: "ప్రేమకుమార్",
son_of: "సంతానం",
groom_parents: "శ్రీ & శ్రీమతి యండా వెంకటరావు & కృష్ణవేణి",
bride_name: "మధు",
daughter_of: "కుమార్తె",
bride_parents: "శ్రీ & శ్రీమతి జయన్ దీపక్ & సుష్మా",
event_details: "వివరాలు",
ceremony: "వివాహ వేడుక",
ceremony_date: "శనివారం, 11 అక్టోబర్ 2025",
ceremony_time: "రాత్రి 08:42 గంటలకు",
reception: "సత్కారం",
reception_date: "శనివారం, 11 అక్టోబర్ 2025",
reception_time: "మధ్యాహ్నం 12:00 గంటల నుండి",
venue: "కృష్ణవేణి కళ్యాణమండపం, హిరమండలం",
view_map: "మాప్ చూడండి",
thank_you: "ధన్యవాదాలు",
looking_forward: "మా ప్రత్యేక రోజు మీతో కలిసి జరుపుకోవడం కోసం ఆసక్తిగా ఎదురు చూస్తున్నాం!",
hashtag: "#Prem❤️Madhu",
hashtagg: "Designed By:Rama Graphics",
cell: "Cell:9490446815",
scrolling_invitation: "యండా కుటుంబం తరపున పెళ్లి ఆహ్వానం: వరుడు: ప్రమకుమార్ - వధువు: మధు - వారి వివాహ వేడుకకు మిమ్మల్ని హృదయపూర్వకంగా ఆహ్వానిస్తున్నాం..."

        }
    };

    // --- DOM ELEMENTS ---
    const welcomeOverlay = document.getElementById('welcome-overlay');
    const openButton = document.getElementById('open-invitation');
    const mainContent = document.getElementById('main-content');
    const musicToggle = document.getElementById('music-toggle');
    const bgMusic = document.getElementById('bg-music');
    const langEn = document.getElementById('lang-en');
    const langTe = document.getElementById('lang-te');
    const flowerContainer = document.getElementById('flower-container');

    // --- FUNCTIONS ---
    const setLanguage = (lang) => {
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[lang][key]) {
                el.innerText = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
        langEn.classList.toggle('active', lang === 'en');
        langTe.classList.toggle('active', lang === 'te');
    };

    const openInvitation = () => {
        welcomeOverlay.style.opacity = '0';
        welcomeOverlay.style.visibility = 'hidden';
        mainContent.style.display = 'block';
        document.body.style.overflow = 'auto';
        bgMusic.play().catch(e => console.log("Autoplay blocked."));
        musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
    };

    const toggleMusic = () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            bgMusic.pause();
            musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    };
    
    const setupScrollAnimations = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    };

    const createFlowers = () => {
        const flowerCount = 30;
        for (let i = 0; i < flowerCount; i++) {
            let flower = document.createElement('div');
            flower.classList.add('flower');
            flower.innerHTML = '🌸';
            flower.style.left = Math.random() * 100 + 'vw';
            flower.style.animationDuration = Math.random() * 5 + 10 + 's'; // Between 10s and 15s
            flower.style.animationDelay = Math.random() * 5 + 's';
            flowerContainer.appendChild(flower);
        }
    };

    // --- EVENT LISTENERS ---
    openButton.addEventListener('click', openInvitation);
    musicToggle.addEventListener('click', toggleMusic);
    langEn.addEventListener('click', () => setLanguage('en'));
    langTe.addEventListener('click', () => setLanguage('te'));

    // --- INITIALIZATION ---
    setLanguage('en');
    setupScrollAnimations();
    createFlowers();
});