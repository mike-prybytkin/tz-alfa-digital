interface NavItemProps {
  link: string;
  id: number;
}

interface IFilterSystem {
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

export { NavItemProps, IFilterSystem };
