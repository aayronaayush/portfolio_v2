export interface Experience {
    institution: string;
    link: string;
    duration: string;
    title: string;
    responsibilities: Array<string>
}

export interface Project {
    title: string;
    link: string;
    description: Array<string>;
}

export interface Testimony {
    name: string;
    position: string;
    statement: string;
}