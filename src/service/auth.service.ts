import axios from "axios";
import { jwtDecode, type JwtPayload } from "jwt-decode";

export const authLoginService = async (body: { email: string; password: string; }): Promise<JwtPayload> => {
  try {
    const response = await axios.post<{ token: string }>(
      `${process.env.RS_AUTH_API_URL}`,
      body
    );

    if (![200, 201].includes(response.status)) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const tokenDecoded = jwtDecode(response.data.token);
    return tokenDecoded;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      if (error.response.status === 401) {
        throw new Error("Credenciales incorrectas.");
      } else {
        throw new Error(`Error ${error.response.status}: ${error.response.statusText}`);
      }
    }

    throw new Error("Error al realizar la autenticación.");
  }
};
