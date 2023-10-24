export interface IAddition{
    name:string
}

interface TextInfo {
    title: string;
    description: string;
}

type Country = "en" | "uz" | "ru";

export const country: Record<Country, TextInfo> = {
    en: { title: "asd", description: "asdsa" },
    uz: { title: "asd", description: "asdsa" },
    ru: { title: "asd", description: "asdsa" },
};