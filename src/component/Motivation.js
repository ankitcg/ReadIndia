import habits from '../assets/habit.jpg';
import power from '../assets/power.jpg';
import art from '../assets/art.jpg';
import think from '../assets/think.jpg';
import alchemist from '../assets/alchemist.jpg';

const Books =[
    {
        id:1,
        name:"The 7 Habits of Highly Effective People",
        author:"Stephen Covey",
        price:350,
        img:`${habits}`,
    },
    {
        id:2,
        name:"Think and Grow Rich",
        author:"Napoleon Hill",
        price:334,
        img:`${think}`
    },
    {
        id:3,
        name:"The Power of Positive Thinking",
        author:"Norman Vincent Peale",
        price:185,
        img:`${power}`
    },
    {
        id:4,
        name:"The Subtle Art of Not Giving a F*ck",
        author:"Mark Manson",
        price:241,
        img:`${art}`
    },
    {
        id:5,
        name:"The Alchemist ",
        author:"Paulo Coelho",
        price:225,
        img:`${alchemist}`
    }
]

export default Books