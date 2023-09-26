type FeatureTab = {
  id: number;
  activeTabImgUrl: string;
  tabImgUrl: string;
  title: string;
  contents: string[];
  contentImgUrl: string;
};

export const FEATURES_TAB_DATA: FeatureTab[] = [
  {
    id: 1,
    activeTabImgUrl: "/assets/imgs/features/feature_tab1-color.png",
    tabImgUrl: "/assets/imgs/features/feature_tab1.png",
    title: "Giám sát vị trí",
    contents: [
      "Vị trí hiện thời trên bản đồ số và trạng thái hoạt động tạm thời",
      "Vận tốc, số km đi được, trạng thái đóng mở cửa, tắt mở máy, trạng thái điều hòa, thông tin đặt xe, ...",
      "Hiển thị các cảnh cáo nóng như SOS, quá tốc độ, vi phạm thời gian lái xe liên tục, vi phạm thời gian lái xe trong ngày",
      "Hình ảnh theo một khoảng thời gian",
    ],
    contentImgUrl: "/assets/imgs/features/feature_banner-left.png",
  },
  {
    id: 2,
    activeTabImgUrl: "/assets/imgs/features/feature_tab2-color.png",
    tabImgUrl: "/assets/imgs/features/feature_tab2.png",
    title: "Giám sát hình ảnh & video",
    contents: [
      "Xem trực tuyến video chất lượng cao không giới hạn dung lượng và thời gian",
      "Có thể xem cùng lúc nhiều camera của 1 xe trên màn hình",
      "Giám sát và download hình ảnh theo một khoảng thời gian",
      "Tần suất gửi ảnh 3 phút một lần",
    ],
    contentImgUrl: "/assets/imgs/features/feature_banner-left2.png",
  },
  {
    id: 3,
    activeTabImgUrl: "/assets/imgs/features/feature_tab3-color.png",
    tabImgUrl: "/assets/imgs/features/feature_tab3.png",
    title: "Xem lại hành trình",
    contents: [
      "Xem lại video và ảnh với độ nét cao được lưu trên thiết bị hoặc lưu tại cloud",
      "Xem lại hành trình của xe trong khoảng thời gian nhất định (thời điểm, trạng thái, vị trí)",
      "Vẽ lại hành trình trực quan trên bản đồ và xem với tốc độ xem đa dạng",
      "Tính tổng quảng đường, tổng số lần dừng, thời gian dừng",
    ],
    contentImgUrl: "/assets/imgs/features/feature_banner-left3.png",
  },
  {
    id: 4,
    activeTabImgUrl: "/assets/imgs/features/feature_tab4-color.png",
    tabImgUrl: "/assets/imgs/features/feature_tab4.png",
    title: "Cảnh cáo tức thời",
    contents: [
      "Có thể cảnh báo các trường hợp như SOS, quá tốc độ, vi phạm thời gian lái xe liên tục, vi phạm thời gian làm việc…",
      "Có thể cấu hình các ngưỡng cảnh báo cho chủ phương tiện qua SMS, Email",
    ],
    contentImgUrl: "/assets/imgs/features/feature_banner-left4.png",
  },
  {
    id: 5,
    activeTabImgUrl: "/assets/imgs/features/feature_tab5-color.png",
    tabImgUrl: "/assets/imgs/features/feature_tab5.png",
    title: "Báo cáo đa dạng",
    contents: [
      "Đầy đủ báo cáo theo quy định mẫu của Bộ GTVT",
      "Các báo cáo đa dạng khác theo nghiệp vụ của từng doanh nghiệp, tổ chức: đếm hành trình di chuyển, báo cáo qua vùng, qua trạm thu phí,…",
      "Đa dạng báo cáo với các loại thiết bị cảm biến như cảm biến nhiên liệu, cảm biến nhiệt độ,…",
    ],
    contentImgUrl: "/assets/imgs/features/feature_banner-left5.png",
  },
];
