export interface Event { 
    title: string;
    date: string;
    description: Array<string>;
    places: Array<string>;
}

export interface Project {
    title: string;
    img: string;
    description: Array<string>;
    technologies: Array<string>;
    type:number;
    url?:string;
}

export const events: Event[] = [
    { 
        title: 'Lead Developer',
        date: 'Noviembre 2019 - Actualmente',  
        description: [
            'Encargado del diseño, desarrollo y back-end de aplicaciones web y soluciones tecnológicas tanto internas como externas.',  
            'Encargado de administrar de servidores y su mantenimiento'],
        places:[
            'Green Shield Technology'
        ]
 
    },
    { 
        title: 'Diseñador Web',
        date: 'Mayo 2017 - Noviembre 2019',
        description: ['Encargado del desarrollo de sitios web y su mantenimiento'],
        places:[
            'Green Shield Technology'
        ]
    },
    { 
        title: 'Programador Freelancer',
        date: 'marzo 2016 - Actualmente',
        description: [
            "Desarrollo de aplicaciones web, PWA y móviles (Android e IOS), desde del front-end hasta el back-end.",
            "Encargado de administrar de servidores y su mantenimiento.",
            "Gestión de servicios VOIP, WEB y CRON",
        ],
        places:[
            'Contralinea',
            'MobileSail',
            'NoticiasAl',
            'Encanta Musica'
        ]
    }
];

export const projects: Project[] = [
    {
        title: 'Admin Dashboard', 
        img: "admindashboard.png",
        description: [
            "AdminDashboard es un panel de administración adaptable a cualquier dispositivo, utilizado para el registro de citas, venta de servicios y productos, junto con su registro de ventas y generación de recibos en PDF.",
            "Gestión de roles y privilegios dentro de las funciones del sistema.", 
        ],
        technologies: [
            "Laravel",
            "TailwindCSS", 
        ],
        type: 0
    },
    {
        title: 'Automatización de tareas con puppeteer', 
        img: "puppeteer.png",
        description: [
            "App para prueba de automatización par agragar tareas de trello a todoist.", 
        ],
        technologies: [
            "NodeJS", 
        ],
        type:1,
        url: "https://github.com/eduardoNBD/puppeteerTodoist"
    },
    {
        title: 'Mita Eats Cliente y Repartidor', 
        img: "mitaeats.png",
        description: [
            "App desarrollada para IOS y Android empleada para venta y repartición de comida y productos varios.",
            "Permite a usuarios solicitar productos dentro del area de Punta de mita.", 
        ],
        technologies: [
            "React Native", 
        ],
        type:0
    },
]