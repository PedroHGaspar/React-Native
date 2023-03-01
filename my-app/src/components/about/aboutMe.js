
export let colors = ["#8E0E00", "#1F1C18"];

export const info = {
    firstName: "Pedro",
    lastName: "Gaspar",
    initials: "PG", 
    position: "Junior Developer",
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'Cafézinho'
        },
        {
            emoji: '🌎',
            text: 'Made in Brasil!'
        },
        {
            emoji: "💼",
            text: "Junior Dev at AVANTI"
        },
        {
            emoji: "📧",
            text: "pedraoh498@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },


    ],
    bio: "Hello! I'm Pedro. I'm a Junior dev at AVANTI. I studied DataSci at SENAI. You should hire me!",
    skills:
    {
        proficientWith: ['Javascript', 'ReactJS', 'React Native', 'github', 'bootstrap', 'HTML5', 'CSS3', 'VTEX'],
        exposedTo: ['ReactJS', 'Python', 'Master Datas']
    }
    ,
    hobbies: [
        {
            label: 'Reading',
            emoji: '📖'
        },
        {
            label: 'Movies',
            emoji: '🎥'
        },
        {
            label: 'Cooking',
            emoji: '🌶'
        }

    ],
}