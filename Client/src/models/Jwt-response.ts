export interface JwtResponseI {
  dataUser: {
    id: number;
    Nombre: string;
    Usuario: string;
    Email: string;
    Tipo: string;
  };
  accessToken: string; 
  expiresIn: string;
}