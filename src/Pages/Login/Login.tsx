import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'primereact/button'; 
import { Card } from "primereact/card";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { authLoginService } from '../../service/auth.service'
import { Toast } from "primereact/toast";
const FormularioLogin = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState<{ email: string, password: string }>({ email: "", password: "" });
  const [loading, setLoading] = useState<boolean>(false)
  const toast = useRef<Toast>(null)
  const onSubmitForm = async (event: any) => {
    event.preventDefault();
    setLoading(true)
    if (credentials.email && credentials.password) {
      try {
        const token = await authLoginService(credentials);
        toast.current?.show({ severity: "success", summary: "Login exitoso", detail: "Bienvenido" });
        if (token) {
          setLoading(false)
          navigate('home')
        }
      } catch (error: any) {
        toast.current?.show({ severity: "error", summary: "Error", detail: error.message });
        setLoading(false)
      }
    }
  }


  const footerActions = () => {
    return (
      <footer className="flex">
        <Button
          label="Submit"
          className="w-full"
          onClick={(e) => onSubmitForm(e)}
          loading={loading}
        />
      </footer>
    );
  }
  return (
    <>
      <Toast ref={toast} position="top-center" />
      <div className="h-screen flex align-items-center justify-content-center">
        <div className="card flex justify-content-center">
          <Card title='Superhero App' className="md:w-25rem text-center" footer={footerActions}>
            <div>
              <FloatLabel>
                <InputText
                  id="email"
                  value={credentials.email}
                  className="w-full"
                  onChange={(e) =>
                    setCredentials({ ...credentials, email: e.target.value })
                  }
                />
                <label htmlFor="email">Email</label>
              </FloatLabel>
            </div>
            <div className="mt-5">
              <FloatLabel>
                <Password
                  inputId="password"
                  className="w-full"
                  inputClassName="w-full"
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                  toggleMask
                  pt={{ iconField: { root: { className: 'w-full' } } }}
                />
                <label htmlFor="password">Password</label>
              </FloatLabel>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default FormularioLogin;
