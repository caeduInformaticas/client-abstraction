import { AClientRegisterComponent } from "../a-client/register/register.component";
import { BClientRegisterComponent } from "../b-client/register/register.component";
import { Clients } from "../base/enum/client.enum";
import { ClientProvider } from "../base/interface/register.interface";

export class MainProviderFactory {
  private strategies!: Map<Clients, ClientProvider>;
  constructor() {
      this.setProviders();
  }

  private setProviders() {
    this.strategies = new Map([
      [Clients.A_CLIENT, { component: AClientRegisterComponent, colors: {primary: '#d64ca4', secondary:'#d1d86e'} }],
      [Clients.B_CLIENT, { component: BClientRegisterComponent, colors: {primary: '#109207', secondary: '#ad9001',} }],
    ]);
  }

  public getClientA() {
    return this.strategies.get(Clients.A_CLIENT);
  }

  public getClientB() {
    return this.strategies.get(Clients.B_CLIENT);
  }
}