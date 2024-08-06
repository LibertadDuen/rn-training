interface shipment {
  creatorId: string;
  dateSent: Date;
  timeSent: string;
  dateDelivery: Date;
  timeDelivery: string;
  status: string;
  clientEmails: string[];
  updateRequested: boolean;
  shippingSite: {
    contactName: string;
    companyName: string;
    siteName: string;
    address: string;
    postalCode: number;
    city: string;
    state: string;
  };
  client: {
    name: string;
    companyName: string;
    address: string;
    postalCode: number;
    city: string;
    state: string;
    email: string;
    phone: number;
  };
  bulk: [
    {
      quantity: number;
      unitWeight: number;
      length: number;
      width: number;
      height: number;
      description: string;
    }
  ];
  product: [
    {
      quantity: number;
      name: string;
      description?: string;
      unit: string;
      vendor?: string;
      idProduct?: string;
      sku?: string;
    }
  ];
  tripFinalized: boolean;
  evidences: string[];
}

const initialState: shipment = {
  creatorId: "",
  dateSent: new Date(),
  timeSent: "",
  dateDelivery: new Date(),
  timeDelivery: "",
  status: "",
  clientEmails: [],
  updateRequested: false,
  shippingSite: {
    contactName: "",
    companyName: "",
    siteName: "",
    address: "",
    postalCode: 0,
    city: "",
    state: "",
  },
  client: {
    name: "",
    companyName: "",
    address: "",
    postalCode: 0,
    city: "",
    state: "",
    email: "",
    phone: 0,
  },
  bulk: [
    {
      quantity: 0,
      unitWeight: 0,
      length: 0,
      width: 0,
      height: 0,
      description: "",
    },
  ],
  product: [
    {
      quantity: 0,
      name: "",
      unit: "",
    },
  ],
  tripFinalized: false,
  evidences: [],
};
