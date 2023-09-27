type Company = {
  id: number;
  name: string;
  address: string;
};

type Agent = {
  id: number;
  province: string;
  company: Company[];
};

export const AGENTS_DATA: Agent[] = [
  {
    id: 1,
    province: "An Giang",
    company: [
      {
        id: 1,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 2,
        name: "Công ty Cổ phần Xuất Nhập Khẩu An Giang (Agrimex)",
        address:
          "Số nhà Số 01 - Đường Ngô Gia Tự - Khóm 1 - Mỹ Long - Long Xuyên - An Giang. ĐT: 0763941680",
      },
      {
        id: 3,
        name: "Công ty TNHH Công Nghệ Tiến Nam",
        address:
          "Đường Tổ 24 - ấp Bình Phú I - Bình Hòa - Châu Thành - An Giang. ĐT: 0939631907",
      },
      {
        id: 4,
        name: "Công ty TNHH Thương Mại - Dịch Vụ Ô Tô Minh Tuấn",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 5,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 6,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 7,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 8,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 9,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 10,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
    ],
  },
  {
    id: 2,
    province: "Bà Rịa Vũng Tàu",
    company: [
      {
        id: 1,
        name: "Cửa hàng xe gắn máy Tuấn",
        address:
          "Số nhà 325 - Đường Trương Công Định - Phường 3 - Vũng Tàu - Bà Rịa Vũng Tàu. ĐT: 0902766779",
      },
      {
        id: 2,
        name: "Công ty Hoàng Anh",
        address: "TT Phước Bửu - Xuyên Mộc - Bà Rịa Vũng Tàu. ĐT: 0?0643772002",
      },
      {
        id: 3,
        name: "Công ty TNHH Dịch vụ vận tải Thành Nhân",
        address:
          "Số nhà tổ 16 - Đường Trường Chinh - Vạn Hạnh - Phú Mỹ - Tân Thành - Bà Rịa Vũng Tàu. ĐT: 0919568265",
      },
      {
        id: 4,
        name: "Công ty TNHH Thương Mại - Dịch Vụ Ô Tô Minh Tuấn",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 5,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 6,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 7,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 8,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 9,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 10,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
    ],
  },
  {
    id: 3,
    province: "Bắc Ninh",
    company: [
      {
        id: 1,
        name: "Công ty Hùng Vương",
        address:
          "Số nhà 259 - Trần phú - Đông Ngàn - Từ Sơn - Bắc Ninh. ĐT: 02413743089",
      },
      {
        id: 2,
        name: "Công ty TNHH Thương Mại và Dịch Vụ Thiều Hòa",
        address:
          "Số 21 Phố Mới, TT Hồ, Huyện Thuận Thành, Tỉnh Bắc Ninh, Việt Nam. ĐT: 02413865996",
      },
      {
        id: 3,
        name: "Gara ô tô Vũ Hoàng Long",
        address:
          "Đường Lê Thái Tổ - Bồ Sơn - Võ Cường - Bắc Ninh - Bắc Ninh. ĐT: 0989656288",
      },
      {
        id: 4,
        name: "Xí nghiệp tập thể cổ phần Việt Long",
        address:
          "Số 15A Đường Nguyễn Văn Cừ, Phường Ninh Xá, Thành phố Bắc Ninh. ĐT: 0987686983",
      },
    ],
  },
  {
    id: 4,
    province: "Cao Bằng",
    company: [
      {
        id: 1,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 2,
        name: "Công ty Cổ phần Xuất Nhập Khẩu An Giang (Agrimex)",
        address:
          "Số nhà Số 01 - Đường Ngô Gia Tự - Khóm 1 - Mỹ Long - Long Xuyên - An Giang. ĐT: 0763941680",
      },
      {
        id: 3,
        name: "Công ty TNHH Công Nghệ Tiến Nam",
        address:
          "Đường Tổ 24 - ấp Bình Phú I - Bình Hòa - Châu Thành - An Giang. ĐT: 0939631907",
      },
      {
        id: 4,
        name: "Công ty TNHH Thương Mại - Dịch Vụ Ô Tô Minh Tuấn",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 5,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 6,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 7,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 8,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 9,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 10,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
    ],
  },
  {
    id: 5,
    province: "Điện Biên",
    company: [
      {
        id: 1,
        name: "Đại Lý Chí Quyên",
        address:
          "Khối Tân Tiến - Tuần Giáo - Tuần Giáo - Điện Biên. ĐT: 0989833905",
      },
      {
        id: 2,
        name: "Đại Lý Giám sát hành trình Xe máy Phan lợi",
        address:
          "Tổ Dân Phố 1 - Nam Thanh - Điện Biên Phủ - Điện Biên. ĐT: 0974861086",
      },
      {
        id: 3,
        name: "Ga ra Ô Tô Sơn Hoa",
        address:
          "Số nhà 42B - Tổ Dân Phố 8 - Him Lam - Điện Biên Phủ - Điện Biên. ĐT: 0903447389",
      },
    ],
  },
  {
    id: 6,
    province: "Gia Lai",
    company: [
      {
        id: 1,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 2,
        name: "Công ty Cổ phần Xuất Nhập Khẩu An Giang (Agrimex)",
        address:
          "Số nhà Số 01 - Đường Ngô Gia Tự - Khóm 1 - Mỹ Long - Long Xuyên - An Giang. ĐT: 0763941680",
      },
      {
        id: 3,
        name: "Công ty TNHH Công Nghệ Tiến Nam",
        address:
          "Đường Tổ 24 - ấp Bình Phú I - Bình Hòa - Châu Thành - An Giang. ĐT: 0939631907",
      },
      {
        id: 4,
        name: "Công ty TNHH Thương Mại - Dịch Vụ Ô Tô Minh Tuấn",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 5,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 6,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 7,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 8,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 9,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 10,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
    ],
  },
  {
    id: 7,
    province: "Hải Phòng",
    company: [
      {
        id: 1,
        name: "Công ty cổ phần công nghệ Nhật Thực KAN",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 2,
        name: "Công ty Cổ phần Khánh Phương",
        address:
          "Số nhà Số 01 - Đường Ngô Gia Tự - Khóm 1 - Mỹ Long - Long Xuyên - An Giang. ĐT: 0763941680",
      },
      {
        id: 3,
        name: "Công ty Cổ Phần thương mại đầu tư và phát triển Minh Ngọc",
        address:
          "Đường Tổ 24 - ấp Bình Phú I - Bình Hòa - Châu Thành - An Giang. ĐT: 0939631907",
      },
      {
        id: 4,
        name: "Công ty TNHH Thương Mại - Dịch Vụ Ô Tô Minh Tuấn",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 5,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 6,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 7,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 8,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 9,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 10,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
    ],
  },
  {
    id: 8,
    province: "Hải Dương",
    company: [
      {
        id: 1,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 2,
        name: "Công ty Cổ phần Xuất Nhập Khẩu An Giang (Agrimex)",
        address:
          "Số nhà Số 01 - Đường Ngô Gia Tự - Khóm 1 - Mỹ Long - Long Xuyên - An Giang. ĐT: 0763941680",
      },
      {
        id: 3,
        name: "Công ty TNHH Công Nghệ Tiến Nam",
        address:
          "Đường Tổ 24 - ấp Bình Phú I - Bình Hòa - Châu Thành - An Giang. ĐT: 0939631907",
      },
      {
        id: 4,
        name: "Công ty TNHH Thương Mại - Dịch Vụ Ô Tô Minh Tuấn",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 5,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 6,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 7,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 8,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 9,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
      {
        id: 10,
        name: "CHI NHÁNH CÔNG TY TNHH MẠT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ QUỐC THÁI 2",
        address:
          "Đường Khu Nhà 03 Căn - Khóm Thới Hòa - Nhà Bàn - Tịnh Biên - An Giang. ĐT: 0939631907",
      },
    ],
  },
];
