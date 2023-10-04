type Variants = {
  headingTitle?: string;
  price?: number;
  priceNote?: string;
  imgUrl?: string;
  packages?: {
    packageID: number;
    name: string;
    price: number;
    priceNote: string;
    limit: string;
  }[];
  packageEquiments?: string[];
  targetUsers?: string[];
};

export type ServiceCharge = {
  id: number;
  title: string;
  variants: Variants;
};

export const SERVICE_CHARGES_DATA: ServiceCharge[] = [
  {
    id: 1,
    title: "Thiết bị đọc RFID",
    variants: {
      headingTitle: "Giá bán lẻ",
      price: 495000,
      priceNote: "Đã bao gồm thuế VAT",
      imgUrl: "/assets/imgs/equiments/rfid_equiment.png",
    },
  },
  {
    id: 2,
    title: "Gói cước kèm thiết bị vTracking 4G",
    variants: {
      packages: [
        {
          packageID: 1,
          name: "Gói VTR15T",
          price: 1463000,
          priceNote: "Đã bao gồm thuế VAT",
          limit: "15 tháng",
        },
        {
          packageID: 2,
          name: "Gói VTR30T",
          price: 2228000,
          priceNote: "Đã bao gồm thuế VAT",
          limit: "30 tháng",
        },
        {
          packageID: 3,
          name: "Gói VTR48T",
          price: 2882000,
          priceNote: "Đã bao gồm thuế VAT",
          limit: "48 tháng",
        },
      ],
      packageEquiments: ["01 bộ thiết bị định vị 4G", "01 thẻ sim 4G"],
      targetUsers: ["Khách hàng đăng ký mới"],
    },
  },
  {
    id: 3,
    title: "Gói cước gia hạn dịch vụ vTracking 4G",
    variants: {
      packages: [
        {
          packageID: 1,
          name: "Gói VTR_GH",
          price: 960000,
          priceNote: "Đã bao gồm thuế VAT",
          limit: "12 tháng",
        },
        {
          packageID: 2,
          name: "Gói VTR24GH",
          price: 1650000,
          priceNote: "Đã bao gồm thuế VAT",
          limit: "24 tháng",
        },
      ],
      targetUsers: ["Khách hàng đã sử dụng dịch vụ và cần gia hạn"],
    },
  },
];
