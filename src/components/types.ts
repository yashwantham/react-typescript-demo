export type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: false;
};


type Name = {
    first: string, last: string
}

export type personProps = {
    name: Name
}

export type PersonListProps = {
    names: Name[];
};