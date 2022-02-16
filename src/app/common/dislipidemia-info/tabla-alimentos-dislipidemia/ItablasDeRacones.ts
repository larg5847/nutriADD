interface Raciones{
    nombre: string;
    cantidad: string;
}

export interface Tabla {
    nombreTabla: string;
    raciones : Raciones[];
}