import ACStatus from "./ACStatus";

export default interface AC {
    id: string;
    name: string;
    location?: string;
    status: ACStatus;
}