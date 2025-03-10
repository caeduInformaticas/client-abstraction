import { AClientRegisterComponent } from "src/app/a-client/register/register.component";
import { BClientRegisterComponent } from "src/app/b-client/register/register.component";

export interface BaseRegisterForm {
  email: string;
  name: string;
  password: string;
}

export interface AClientRegisterForm extends BaseRegisterForm {}

export interface BClientRegisterForm extends BaseRegisterForm {
  documentId: string;
  secretQuestion: string;
}

export interface InputFormControl {
  key: keyof AClientRegisterForm | keyof BClientRegisterForm;
  value: any;
  validators: any[];
  type: 'number' | 'email' | 'text' | 'password';
}

export interface ColorsProvider {
  primary: string;
  secondary: string;
}


export type RegisterComponentType = typeof AClientRegisterComponent | typeof BClientRegisterComponent;
export interface ClientProvider {
  component: RegisterComponentType,
  colors: ColorsProvider
}