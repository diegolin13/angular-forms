export interface ReactiveResponse {
    nombre:      string;
    apellidos:   string;
    correo:      string;
    pass1:       string;
    pass2:       string;
    direccion:   Direccion;
    pasatiempos: string[];
}

export interface Direccion {
    calle:  string;
    ciudad: string;
}
