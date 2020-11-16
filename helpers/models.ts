export const baseUrl = () => "http://localhost/api";

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export interface IEmployee {
    id: string;
    name: string;
    surname: string;
    dateOfBirth: string;
    position: string;
    phoneNumber: string;
}
