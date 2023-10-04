type Model = {
  id: number;
  title: string;
  imgUrl: string;
  content: string;
};

export const MODELS_DATA: Model[] = [
  {
    id: 1,
    title: "Hệ thống máy chủ dữ liệu",
    imgUrl: "/assets/imgs/model/modal_1.png",
    content:
      "Lưu trữ cơ sở dữ liệu của hệ thống. Các dữ liệu hành trình, hình ảnh, video của phương tiện được lưu trữ và xử lý tại đây",
  },
  {
    id: 2,
    title: "Hệ thống máy chủ ứng dụng",
    imgUrl: "/assets/imgs/model/modal_2.png",
    content:
      "Tiếp nhận và xử lý các yêu cầu từ người dùng, phân tích, xử lý nghiệp vụ và trả kết quả cho người dùng",
  },
  {
    id: 3,
    title: "Thuê bao giám sát hành trình",
    imgUrl: "/assets/imgs/model/modal_3.png",
    content:
      "Là các thiết bị giám sát hành trình, camera hành trình được gắn lên phương tiện của người dùng",
  },
];
