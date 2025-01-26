fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const reviewsData = data.reviews;

        function displayReviews(category) {
            const reviewsContainer = document.getElementById('reviews-container');
            reviewsContainer.innerHTML = ''; // Clear previous reviews

            const categoryReviews = reviewsData.find(review => review.category === category);

            if (categoryReviews) {
                categoryReviews.reviews.forEach(review => {
                    const reviewElement = document.createElement('div');
                    reviewElement.classList.add('review');

                    const profileImg = document.createElement('img');
                    profileImg.src = 'imgs/profile.png'; 
                    profileImg.alt = 'Profile';
                    profileImg.classList.add('profile-icon'); 

                    const reviewContent = document.createElement('div');
                    reviewContent.classList.add('review-content');

                    const usernameElement = document.createElement('p');
                    usernameElement.classList.add('username');
                    usernameElement.textContent = review.username;

                    const starsElement = document.createElement('div');
                    starsElement.classList.add('review-stars');
                    starsElement.innerHTML = '★'.repeat(review.rating); 

                    const commentElement = document.createElement('p');
                    commentElement.classList.add('comment');
                    commentElement.textContent = review.comment;

                    reviewContent.appendChild(profileImg);
                    reviewContent.appendChild(usernameElement);
                    reviewContent.appendChild(starsElement);

                    reviewElement.appendChild(reviewContent);
                    reviewElement.appendChild(commentElement);

                    reviewsContainer.appendChild(reviewElement);
                });
            }
        }

        document.querySelectorAll('#nav-reviews li a').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); 
                const category = link.textContent.trim(); 
                displayReviews(category); 
            });

            document.querySelectorAll('#nav-reviews li a').forEach(link => {
                link.addEventListener('click', (event) => {
                    event.preventDefault(); 
                    const category = link.textContent.trim(); 
            
                    // Remove 'active' class from all links
                    document.querySelectorAll('#nav-reviews li').forEach(li => {
                        li.classList.remove('active');
                    });
            
                    // Add 'active' class to the clicked link's parent li
                    link.parentElement.classList.add('active');
            
                    displayReviews(category); 
                });
            });
            
        });

        // By default, show the reviews for "Breakfast"
        displayReviews("Breakfast");
    })
    .catch(error => console.error('Error loading reviews:', error));

// Get elements
const addRdiv = document.getElementById('addr');
const addBtn = document.getElementById('add-btn'); // Add Review button
const form = document.querySelector('#add-review form'); // The form element
const span = document.querySelector('#add-review form span'); // The span element
const publishBtn = form.querySelector('button[type="submit"]'); // Publish button

// Show the form when the Add Review button is clicked
addBtn.addEventListener('click', () => {
    form.classList.remove('hidden'); // Show the form
    addRdiv.classList.add('hidden'); // Hide the Add Review button
});

// Show the span when the Publish button is clicked
publishBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission (remove this if form submission is needed)
    span.classList.remove('hidden'); // Show the span
    publishBtn.classList.add('hidden');
});
