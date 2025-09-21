
    // Fixed Theme Toggle Functionality
    document.addEventListener('DOMContentLoaded', function() {
        const toggle = document.getElementById('dark-mode-toggle');
        const currentTheme = localStorage.getItem('theme');

        // Set initial theme
        if (currentTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            toggle.checked = true;
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
        }

        // Toggle theme when switch is clicked
        toggle.addEventListener('change', function() {
            if (this.checked) {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
            }
        });

        // Improved Mobile Menu Functionality
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

        function toggleMenu() {
            const isOpen = mobileMenu.classList.contains('active');
            mobileMenu.classList.toggle('active', !isOpen);
            mobileMenuOverlay.classList.toggle('active', !isOpen);
            document.body.style.overflow = isOpen ? '' : 'hidden';
            mobileMenuBtn.innerHTML = isOpen ? '<i class="fas fa-bars"></i>' : '<i class="fas fa-times"></i>';
        }

        mobileMenuBtn.addEventListener('click', toggleMenu);
        mobileMenuOverlay.addEventListener('click', toggleMenu);

        // Close menu when clicking links
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // Typewriter Effect
        const text = "Hi, I am Subeen Bohara.";
        const target = document.querySelector("#animated-text");
        let index = 0;

        function typeWriter() {
            if (index < text.length) {
                target.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100); // speed in ms
            }
        }

        typeWriter();

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Intersection Observer for animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, {threshold: 0.1});

        // Observe elements with animations
        document.querySelectorAll('.project-card, .blog-item, .experience-item, .education-item, .travelogue-card, .recommendation-card').forEach(el => {
            observer.observe(el);
        });

        // INSTANT LOADING for Travelogue Cards
        const travelogueContainer = document.getElementById('traveloguesContainer');
        const loadingSpinner = document.getElementById('loadingSpinner');
        
        // Sample travelogue data
        const travelogueData = [
            {
                date: 'August 2025',
                location: 'Gorkha, Nepal',
                title: 'Gorkha Diaries',
                description: '"And as the sun set behind the hills of my forefathers, I closed my own chapter in the great Gorkha diaries, forever proud of the blood that runs in my veins."',
                pdf: 'Gorkha 2025.pdf'
            },
            {
                date: 'December 2024',
                location: 'Bara, Nepal',
                title: 'Bara Diaries',
                description: '"And as the dust of the mela settled on our Scorpio, we carried back not just memories, but a raw, unforgettable story for our Bara diaries—a tale of faith, frenzy, and the enduring pulse of the land."',
                pdf: 'Bara24.pdf'
            },
            {
                date: 'October 2024',
                location: 'Kathmandu, Nepal',
                title: 'Dashain Diaries',
                description: '"Dashain vibes are all about family gatherings, blessings, delicious feasts, and the joyful spirit of togetherness."',
                pdf: 'Dashain(2024).pdf'
            },
            {
                date: 'October 2022',
                location: 'Mustang, Nepal',
                title: 'Mustang Diaries',
                description: '"Visiting Muktinath was a soul-soothing journey filled with sacred serenity, breathtaking Himalayan views, and a deep sense of spiritual peace.”',
                pdf: 'muktinath.pdf'
            },
            {
                date: 'August 2021',
                location: 'Pokhara, Nepal',
                title: 'Pokhara Diaries',
                description: '"A serene city of lakes, where the Himalayas dip their feet in crystal waters and adventure whispers on the mountain air."',
                pdf: 'pokhara.pdf'
            },
            {
                date: 'August 2020',
                location: 'Sindupalchowk, Nepal',
                title: 'Hardcore Treeking',
                description: '"A hidden alpine jewel where sacred skies meet pristine waters in tranquil isolation."',
                pdf: 'pachpokhari.pdf'
            },
            {
                date: 'March 2020',
                location: 'Dolakha, Nepal',
                title: 'Snowfall In Nepal',
                description: '"Where faith climbs a sacred ridge to meet endless skies and breathtaking Himalayan vistas."',
                pdf: 'kalinchowk.pdf'
            },
             {
                date: 'September 2014',
                location: 'Chitwan, Nepal',
                title: 'First Time Outside The Valley',
                description: '"Where the wild heart of Nepal beats, amidst ancient jungles, roaming rhinos, and the whisper of tall grasses."',
                pdf: 'chitwan2014.pdf'
            },
            {
                date: 'October 2013',
                location: 'Kathmandu, Nepal',
                title: 'Before the existence.',
                description: '"A sacred hilltop escape, where pilgrims climbed through whispering pines to ancient temples and a breathtaking, earned vista of the Himalayas."',
                pdf: 'Chandagiri 2013.pdf'
            }
        ];

        // Function to create a travelogue card (without image)
        function createTravelogueCard(data) {
            const card = document.createElement('div');
            card.className = 'travelogue-card';
            card.innerHTML = `
                <div class="travelogue-meta">
                    <span><i class="far fa-calendar-alt"></i> ${data.date}</span>
                    <span><i class="fas fa-map-marker-alt"></i> ${data.location}</span>
                </div>
                <div class="travelogue-content">
                    <h3>${data.title}</h3>
                    <p>${data.description}</p>
                    <a href="${data.pdf}" class="read-more" target="_blank">Read more <i class="fas fa-external-link-alt"></i></a>
                </div>
            `;
            return card;
        }

        // Function to load ALL travelogues instantly
        function loadAllTraveloguesInstantly() {
            // Hide loading spinner since we're loading everything at once
            if (loadingSpinner) {
                loadingSpinner.style.display = 'none';
            }
            
            // Create and append all cards immediately
            travelogueData.forEach(item => {
                const card = createTravelogueCard(item);
                if (travelogueContainer) {
                    travelogueContainer.appendChild(card);
                    
                    // Observe the new card for animations
                    observer.observe(card);
                }
            });
        }

        // Load all cards instantly on page load
        loadAllTraveloguesInstantly();

        // Add click event to "Read more" links to track outbound clicks
        document.addEventListener('click', function(e) {
            if (e.target.matches('.read-more, .read-more *')) {
                const link = e.target.closest('.read-more');
                // You can add analytics tracking here
                console.log('Travelogue opened:', link.href);
            }
        });
    });
