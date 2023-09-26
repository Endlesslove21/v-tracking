type TargetUser = {
  id: number;
  title: string;
  imgIconUrl: string;
  contents: string[];
};

export const TARGET_USERS_DATA: TargetUser[] = [
  {
    id: 1,
    title:
      "Các đối tượng áp dụng theo Nghị định 86/2014/NĐ-CP, Nghị định 10/2020/NĐ-CP",
    contents: [
      "Xe ô tô kinh doanh vận tải hành khách theo tuyến cố định, xe buýt, xe tải,...",
      "Xe container, xe đầu kéo, xe vận tải hành khách từ 9 chỗ trở lên",
    ],
    imgIconUrl: "/assets/imgs/targetUsers/targetUser_logo1.png",
  },
  {
    id: 2,
    title:
      "Doanh nghiệp cần quản lý hành trình, giám sát nhiên liệu phương tiện",
    contents: [
      "Các doanh nghiệp lớn, tập đoàn, tổng công ty, ngân hàng, công ty Logistic, bưu chính...",
    ],
    imgIconUrl: "/assets/imgs/targetUsers/targetUser_logo2.png",
  },
  {
    id: 3,
    title:
      "Các hợp tác xã, doanh nghiệp vừa và nhỏ có nhu cầu giám sát phương tiện vận tải",
    contents: [
      "Các hợp tác xã, doanh nghiệp vừa và nhỏ có nhu cầu giám sát phương tiện vận tải",
    ],
    imgIconUrl: "/assets/imgs/targetUsers/targetUser_logo3.png",
  },
  {
    id: 4,
    title: "Cá nhân muốn giám sát hành trình xe của mình",
    contents: ["Xe cá nhân, xe cho thuê tự lái, ..."],
    imgIconUrl: "/assets/imgs/targetUsers/targetUser_logo4.png",
  },
];
