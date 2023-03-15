const { createApp } = Vue;

createApp ({
    data () {
        return {
            activeImg: 0,
            hovering: false, // hover property
            slides: [
                    {
                        image: 'img/01.webp',
                        title: 'Marvels Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    }, {
                        image: 'img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    }, {
                        image: 'img/03.webp',
                        title: 'Fortnite',
                        text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
                    }, {
                        image: 'img/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    }, {
                        image: 'img/05.webp',
                        title: 'Marvels Avengers',
                        text: 'Marvels Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    }
            ]
        }
    },
    methods: {
        gotoPrev() {
            this.activeImg--;  // decrease activeImg -1
            if (this.activeImg < 0) {  // if activeImg becomes less than 0
                this.activeImg = this.slides.length - 1;  // set activeImg to the last index of the slides array
            }
        },
        gotoNext () {
            this.activeImg++;  // increase activeImg +1
            if (this.activeImg == this.slides.length) {  // if activeImg reaches the end of the slides array
                this.activeImg = 0;  // set activeImg to the first index of the slides array
            }
        },
        autoPlay() {
            if (!this.hovering) {  // check if not hovering over the slider
                this.gotoNext();  // call gotoNext method to move to the next slide
            }
        },
        mouseEnter() {  // method to handle mouseenter event
            this.hovering = true;  // set hovering variable to true
        },
        mouseLeave() {  // method to handle mouseleave event
            this.hovering = false;  // set hovering variable to false
        }
    },
    mounted() {
        setInterval(this.autoPlay, 2500)  // call autoPlay method every 2.5 seconds
    }     
}).mount('#app')

