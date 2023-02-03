interface NavItemProps {
  link: string;
  id: number;
}

interface IFilterSystem {
  id: string;
  name: string;
  prise: string;
  oldPrise: string;
  numberOfUsers: string;
  efficiency: string;
  pipeDepth: string;
  consumedElectricity: string;
  salvoDischarge: string;
  images: string[];
  description: string;
}

interface IUserContactsForm {
  name: string;
  phone: string;
  question?: string;
}

type InputFieldName = keyof IUserContactsForm;

export { NavItemProps, IFilterSystem, IUserContactsForm, InputFieldName };
