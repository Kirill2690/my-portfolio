import counter from '../../images/counter.png';
import social_network from '../../images/social-network.webp';
import storybook_image from '../../images/storybook_image.jpg'
import pizza from '../../images/pizza_logo.png'
import todolist from '../../images/todolist.jpeg'
import cards from '../../images/learn.jpg'


export const projectsData = [
    {
        id: '1',
        title: 'Todo List',
        description: 'Technology stack: ReactJS, TypeScript, RestAPI, Axios, Redux-Thunk, Material UI, Unit testing',
        backgroundImage: `url(${todolist})`,
        repoLink: 'https://github.com/Kirill2690/Todolist-app',
        demoLink: 'https://kirill2690.github.io/Todolist-app/'
    },

    {
        id: '2',
        title: 'Project Cards',
        description: 'Technology stack: ReactJS, TypeScript, RestAPI, Axios, Redux-Thunk, Material UI, Formik',
        backgroundImage: `url(${cards})`,
        repoLink: 'https://github.com/Kirill2690/cards-front',
        demoLink: 'https://Kirill2690.github.io/cards-front'

    },

    {
        id: '3',
        title: 'Social Network',
        description: 'Technology stack: ReactJS, TypeScript, Redux, RestAPI, Axios, Redux-Thunk, React-Router-Dom, Redux-Form, Formik, Ant Design',
        backgroundImage: `url(${social_network})`,
        repoLink: 'https://github.com/Kirill2690/social_network',
        demoLink: 'https://Kirill2690.github.io/social_network'
    },
    {
        id: '4',
        title: 'Counter with settings block',
        description: 'Technology stack: ReactJS, TypeScript, Redux, Unit testing, CSS',
        backgroundImage: `url(${counter})`,
        repoLink: 'https://github.com/Kirill2690/counter_and_redux',
        demoLink: 'https://kirill2690.github.io/counter_and_redux/'
    },
    {
        id: '5',
        title: 'My storybook components',
        description: 'Technology stack: ReactJS, TypeScript, Storybook, CSS',
        backgroundImage: `url(${storybook_image})`,
        repoLink: 'https://github.com/Kirill2690/my-storybook.git',
        demoLink: 'https://my-storybook-ojwtd3bud-kirill2690.vercel.app/'
    },
    {
        id: '6',
        title: 'Solo Pizza is an application for delivering delicious pizza in your city.',
        description: 'Technology stack: ReactJS, TypeScript, SCSS',
        backgroundImage: `url(${pizza})`,
        repoLink: 'https://github.com/Kirill2690/pizza-app.git',
        demoLink: 'https://Kirill2690.github.io/pizza-app'
    },








]