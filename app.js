Vue.component('nav-bar', {
    template: `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Food Blog</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Recipes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Lifestyles</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Videos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    `
});

Vue.component('blog-post', {
    props: ['author', 'date', 'content', 'bio', 'foodieLevel', 'imageSrc'],
    data() {
        return {
            showBox: false,
            position: { x: 0, y: 0 }
        };
    },
    template: `
        <div class="post">
            <img 
                :src="imageSrc" 
                alt="Profile Image" 
                class="profile-image" 
                @click="showFloatingBox"
            >
            <div>
                <span class="author">{{ author }}</span> — 
                <span class="date">{{ date }}</span>
                <span class="reply">REPLY</span>
                <p>{{ content }}</p>
            </div>
            <div 
                class="floating-box" 
                :class="{ show: showBox }"
                :style="{ top: position.y + 'px', left: position.x + 'px' }"
            >
                <h3>{{ author }}</h3>
                <p><strong>Foodie Level:</strong> {{ foodieLevel }}</p>
                <p><strong>Bio:</strong> {{ bio }}</p>
                <button class="close-button" @click="closeBox">Close</button>
            </div>
        </div>
    `,
    methods: {
        showFloatingBox(event) {
            this.position = {
                x: event.clientX + 10,
                y: event.clientY + 10
            };
            this.showBox = true;
        },
        closeBox() {
            this.showBox = false;
        }
    }
});

new Vue({
    el: '#app',
    data: {
        posts: [
            {
                id: 1,
                author: 'Brianna',
                date: 'February 18, 2021 @ 3:30 pm',
                content: 'Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!',
                foodieLevel: 'Novice',
                bio: 'Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!',
                imageSrc: 'profile.png'
            },
            {
                id: 2,
                author: 'LINH',
                date: 'February 15, 2021 @ 9:46 am',
                content: 'I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good. It’s a winner! I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him. Thank you Lisa!',
                foodieLevel: 'Newcomer',
                bio: 'Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.',
                imageSrc: 'profile.png'
            },
            {
                id: 3,
                author: 'CATHERINE LEONARDO',
                date: 'February 13, 2021 @ 12:58 pm',
                content: 'I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.',
                foodieLevel: 'Mentor',
                bio: 'I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!',
                imageSrc: 'profile.png'
            },
            {
                id: 4,
                author: 'KALI',
                date: 'February 13, 2021 @ 11:31 am',
                content: 'This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!',
                foodieLevel: 'Novice',
                bio: 'Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I\'m a food whore! Invite me over for dinner and I\'ll be there!',
                imageSrc: 'profile.png'
            }
        ]
    }
});
