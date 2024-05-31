export interface Event { 
    title: string;
    date: string;
    description: Array<string>;
}

export const events: Event[] = [
    { 
        title: 'Lead Developer',
        date: 'Noviembre 2019 - Actualmente',  
        description: [
            'Encargado del diseño, desarrollo y back-end de aplicaciones web y soluciones tecnológicas tanto internas como externas.',  
            'Encargado de administrar de servidores y su mantenimiento'
        ]
    },
    { 
        title: 'Diseñador Web',
        date: 'Mayo 2017 - Noviembre 2019',
        description: ['Encargado del desarrollo de sitios web y su mantenimiento']
    },
    { 
        title: 'Programador Freelancer',
        date: 'marzo 2016 - Actualmente',
        description: [
            "Desarrollo de aplicaciones web, PWA y móviles (Android e IOS), desde del front-end hasta el back-end.",
            "Encargado de administrar de servidores y su mantenimiento.",
            "Gestión de servicios VOIP, WEB y CRON",
        ]
    }
];