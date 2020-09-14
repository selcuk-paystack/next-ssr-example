export interface IProduct extends IBaseEntity, IModifier {
  active: boolean;
  collectPhone: boolean;
  currency: string;
  dateAvailable?: string;
  description: string;
  domain: string;
  files?: IProductFile[];
  inStock: boolean;
  isShippable: boolean;
  lowStockAlert?: boolean;
  minimumOrderable?: number;
  name: string;
  regularPrice: number;
  discountPrice: number;
  quantity: number;
  quantitySold: number;
  redirectUrl: string;
  isUnlimited: false;
}

interface IProductFile extends IBaseEntity, IModifier {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  related: string;
}

interface IUser extends IBaseEntity {
  firstname?: string;
  lastname?: string;
  username?: string;
  email: string;
  resetPasswordToken?: string;
  registrationToken?: string;
  isActive: true;
  roles: string[];
  blocked: boolean;
}

interface IModifier {
  created_by: IUser;
  updated_by: IUser;
}

export interface IBaseEntity {
  id: string;
  _id: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
}
