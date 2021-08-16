import httpClient from "../httpClient";
import { User } from "../../domain/entities/auth/User";
import { AxiosResponse } from "axios";

type LoginPayload = {
  cpf: string;
  senha: string;
};

type Response = AxiosResponse<{
  Nome: string;
  Apelido: string;
  idUsuario: number;
  Token: string;
}>;

async function login(cpf: string, password: string): Promise<User | null> {
  try {
    const response = await httpClient.post<LoginPayload, Response>("/Login", {
      cpf,
      senha: password,
    });

    return {
      id: response.data.idUsuario,
      name: response.data.Nome,
      nickname: response.data.Apelido,
      token: response.data.Token,
    };
  } catch (exception) {
    console.log(exception.response.data.Erro);
    return null;
  }
}

export default login;
