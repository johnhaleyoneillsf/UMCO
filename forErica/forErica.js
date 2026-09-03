

const aboutBtn = document.querySelector('.aboutBtn');
const aboutToggle = document.getElementById('aboutToggle');
const header = document.querySelector("header");
const yearElement = document.getElementById('yearChanger');

if (yearElement) {
  yearElement.textContent = `January - March ${new Date().getFullYear() + 1}`;
}

window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    // Check if the vertical scroll position is greater than a small threshold (e.g., 10px)
    if (window.scrollY > 1) {
        header.classList.add('scrolled');
        header.classList.add('headerScrolled');
    }else {
        header.classList.remove('scrolled');
        header.classList.remove('headerScrolled');
    }
    if (aboutToggle) {
        if (window.scrollY > 400){
            aboutToggle.checked = true;
        }else {
            aboutToggle.checked = false;
        }
    }


});




const triggers = document.querySelectorAll(".comp");

triggers.forEach(trigger => {
  trigger.addEventListener("mouseenter", () => {
    header.classList.add("nav-open");
  });
});

header.addEventListener("mouseleave", () => {
  header.classList.remove("nav-open");
});

if (aboutBtn && aboutToggle) {
    const updateAboutLink = () => {
        aboutBtn.setAttribute('href', aboutToggle.checked ? '#' : '#about');
    };

    updateAboutLink();

    aboutBtn.addEventListener('click', function(event) {
        event.preventDefault();
        aboutToggle.checked = !aboutToggle.checked;
        updateAboutLink();

        if (aboutToggle.checked) {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                const offset = 85;
                const topPosition = aboutSection.offsetTop - offset;

                window.scrollTo({
                    top: topPosition,
                    behavior: 'smooth'
                });
            }
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
}

let profileSwitchTimer;

function showPerson(personId) {
    const selectedProfile = document.getElementById(personId);
    const profiles = document.querySelectorAll('.person-profile');
    const speakerCards = document.querySelectorAll('[data-person]');
    const activeProfile = document.querySelector('.person-profile:not(.hidden)');

    if (!selectedProfile || selectedProfile === activeProfile) {
        return;
    }

    clearTimeout(profileSwitchTimer);
    speakerCards.forEach(card => {
        const isActiveSpeaker = card.dataset.person === personId;
        card.classList.toggle('active-speaker', isActiveSpeaker);
        card.classList.toggle('inactive-speaker', !isActiveSpeaker);
    });
    profiles.forEach(profile => profile.classList.add('hidden'));

    profileSwitchTimer = setTimeout(() => {
        selectedProfile.classList.remove('hidden');
    }, 200);
}

// function copyText() {
//   const inputElement = document.getElementById("textToCopy");
//   const popup = document.getElementById("popup");

//   try {
//     // Copy text to clipboard
//     await navigator.clipboard.writeText(inputElement.value);

//     // Show the popup
//     popup.classList.add("show");

//     // Hide the popup after 1.5 seconds (1500 milliseconds)
//     setTimeout(() => {
//       popup.classList.remove("show");
//     }, 1500);
    
//   } catch (err) {
//     return;
//   }
// }
