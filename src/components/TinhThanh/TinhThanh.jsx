import style from './TinhThanh.module.scss'

let dsTinh = [
    {
        name: "Tất cả",
        value: ""
    },
    {
      name: "An Giang",
      value: "An Giang"
    },
    {
      name: "Bà Rịa - Vũng Tàu",
      value: "Bà Rịa - Vũng Tàu"
    },
    {
      name: "Bạc Liêu",
      value: "Bạc Liêu"
    },
    {
      name: "Bắc Giang",
      value: "Bắc Giang"
    },
    {
      name: "Bắc Kạn",
      value: "Bắc Kạn"
    },
    {
      name: "Bắc Ninh",
      value: "Bắc Ninh"
    },
    {
      name: "Bến Tre",
      value: "Bến Tre"
    },
    {
      name: "Bình Định",
      value: "Bình Định"
    },
    {
      name: "Bình Dương",
      value: "Bình Dương"
    },
    {
      name: "Bình Phước",
      value: "Bình Phước"
    },
    {
      name: "Bình Thuận",
      value: "Bình Thuận"
    },
    {
      name: "Cà Mau",
      value: "Cà Mau"
    },
    {
      name: "Cao Bằng",
      value: "Cao Bằng"
    },
    {
      name: "Đắk Lắk",
      value: "Đắk Lắk"
    },
    {
      name: "Đắk Nông",
      value: "Đắk Nông"
    },
    {
      name: "Điện Biên",
      value: "Điện Biên"
    },
    {
      name: "Đồng Nai",
      value: "Đồng Nai"
    },
    {
      name: "Đồng Tháp",
      value: "Đồng Tháp"
    },
    {
      name: "Gia Lai",
      value: "Gia Lai"
    },
    {
      name: "Hà Giang",
      value: "Hà Giang"
    },
    {
      name: "Hà Nam",
      value: "Hà Nam"
    },
    {
      name: "Hà Tĩnh",
      value: "Hà Tĩnh"
    },
    {
      name: "Hải Dương",
      value: "Hải Dương"
    },
    {
      name: "Hải Phòng",
      value: "Hải Phòng"
    },
    {
      name: "Hậu Giang",
      value: "Hậu Giang"
    },
    {
      name: "Hòa Bình",
      value: "Hòa Bình"
    },
    {
      name: "Hưng Yên",
      value: "Hưng Yên"
    },
    {
      name: "Khánh Hòa",
      value: "Khánh Hòa"
    },
    {
      name: "Kiên Giang",
      value: "Kiên Giang"
    },
    {
      name: "Kon Tum",
      value:"Kon Tum",
    },
    {
      name: "Lai Châu",
      value: "Lai Châu"
    },
    {
      name: "Lâm Đồng",
      value: "Lâm Đồng"
    },
    {
      name: "Lạng Sơn",
      value: "Lạng Sơn"
    },
    {
      name: "Lào Cai",
      value: "Lào Cai"
    },
    {
      name: "Long An",
      value: "Long An"
    },
    {
      name: "Nam Định",
      value: "Nam Định"
    },
    {
      name: "Nghệ An",
      value: "Nghệ An"
    },
    {
      name: "Ninh Bình",
      value: "Ninh Bình"
    },
    {
      name: "Ninh Thuận",
      value: "Ninh Thuận"
    },
    {
      name: "Phú Thọ",
      value: "Phú Thọ"
    },
    {
      name: "Quảng Bình",
      value: "Quảng Bình"
    },
    {
      name: "Quảng Nam",
      value: "Quảng Nam"
    },
    {
      name: "Quảng Ngãi",
      value: "Quảng Ngãi"
    },
    {
      name: "Quảng Ninh",
      value: "Quảng Ninh"
    },
    {
      name: "Quảng Trị",
      value: "Quảng Trị"
    },
    {
      name: "Sóc Trăng",
      value: "Sóc Trăng"
    },
    {
      name: "Sơn La",
      value: "Sơn La"
    },
    {
      name: "Tây Ninh",
      value: "Tây Ninh"
    },
    {
      name: "Thái Bình",
      value: "Thái Bình"
    },
    {
      name: "Thái Nguyên",
      value: "Thái Nguyên"
    },
    {
      name: "Thanh Hóa",
      value: "Thanh Hóa"
    },
    {
      name: "Thừa Thiên Huế",
      value: "Thừa Thiên Huế"
    },
    {
      name: "Tiền Giang",
      value: "Tiền Giang"
    },
    {
      name: "Trà Vinh",
      value: "Trà Vinh"
    },
    {
      name: "Tuyên Quang",
      value: "Tuyên Quang"
    },
    {
      name: "Vĩnh Long",
      value: "Vĩnh Long"
    },
    {
      name: "Vĩnh Phúc",
      value: "Vĩnh Phúc"
    },
    {
      name: "Yên Bái",
      value: "Yên Bái"
    },
    {
      name: "Phú Yên",
      value: "Phú Yên"
    },
    {
      name: "Cần Thơ",
      value: "Cần Thơ"
    },
    {
      name: "Đà Nẵng",
      value: "Đà Nẵng"
    },
    {
      name: "Hải Phòng",
      value: "Hải Phòng"
    },
    {
     name: "Hà Nội",
      value: "Hà Nội"
    },
    {
      name: "Hồ Chí Minh",
      value: "Hồ Chí Minh"
    }
  ];
  

console.log(dsTinh.length);


const TinhThanh = ({setVitri}) => {
  return (
    <>
        {/* <ul className={style["list-tinhthanh"]}>
            {dsTinh.map(x => (
                <li key={x.name} onClick={(e) => setVitri(e.target.innerText)}>{x.name}</li>
            ))}
        </ul> */}
        <select name="" id="" className={style["option-tinhthanh"]} onChange={(e) => setVitri(e.target.value)}>
            {
                dsTinh.map((x, index) => (
                    <option key={index} value={x.value}>{x.name}</option>
                ))
            }
        </select>
    </>
  )
}

export default TinhThanh
