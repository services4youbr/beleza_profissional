export interface Evento { 
    key?:string,
    title: string,
    startTime: string,
    endTime: string,
    allDay: boolean,
    endereco?: string
}