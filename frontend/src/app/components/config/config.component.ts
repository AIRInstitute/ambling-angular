import { Component } from '@angular/core';

interface Users {
  id: string;
  name: string;
  color: string;
  email: string;
  role: string;
  status: string;
}

interface Contract {
  id: string;
  name: string;
  color: string;
  dni: string;
  serial: string;
  status: string;
}

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})

export class ConfigComponent {
  listAllUsers: Users[] = [
    {
      id: '0',
      name: 'Sergio',
      color: 'white',
      email: 'Sergio@ambling.es',
      role: 'Full Control',
      status: 'Active'
    },
    {
      id: '1',
      name: 'Hubert',
      color: 'green',
      email: 'Mhomaei@ambling.es',
      role: 'Admin',
      status: 'Active'
    },
    {
      id: '2',
      name: 'Fran',
      color: 'green',
      email: 'Francisco@ambling.es',
      role: 'Admin',
      status: 'Active'
    },
    {
      id: '3',
      name: 'Pilar',
      color: 'green',
      email: 'pilar@ambling.es',
      role: 'Admin',
      status: 'Active'
    },
    {
      id: '4',
      name: 'Javier',
      color: 'green',
      email: 'Raul@Air-company.es',
      role: 'Staff',
      status: 'Active'
    },
    {
      id: '5',
      name: 'Marcos',
      color: 'black',
      email: 'Oscar@example.es',
      role: 'Staff',
      status: 'Deactive'
    }
  ];

  listAllContractNo: Contract[] = [
    {
      id: '0',
      name: 'Users',
      color: 'grey',
      dni: 'Y92929292',
      serial: '6200411',
      status: 'Active'
    }
  ];

  listRolesPrivilages: String[] = [
    'Full Control',
    'Admin',
    'Staff',
    'User'
  ];

  listStatus: String[] = [
    'Active',
    'Deactive',
    'Unknown'
  ];

  listStatusContract: String[] = [
    'Active',
    'Deactive',
    'Unknown'
  ];

}
