import { BsPencilSquare, BsFillPersonXFill, BsFillPersonPlusFill } from "react-icons/bs";
import Client from "../../Assets/Client.png"
import AddClient from "./AddClient";
import { useState } from "react";


let data = [{
    avatar: Client, id: 1, fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Hoạt động"
},
{
    avatar: Client, id: 2, fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Hoạt động"
},
{
    avatar: Client, id: 3, fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Hoạt động"
},
{
    avatar: Client, id: 4, fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Cấm"
}
]


const User = () => {

    const Add = () => {
     setPlace(<AddClient status={true}/>)
}
    const [placeAdd, setPlace] = useState(null);

    return (
        <>
        {placeAdd}
            <div className='container-fluid p-3 '>
                <form className="d-flex justify-content-center mt-3">
                    <div className="mb-3" style={{ width: "30%" }}>
                        <input type="text" className=" form-control " placeholder="Tìm kiếm theo tên" name="search" />
                    </div>
                    <button type="submit" className=" btn btn-success h-25 ms-3">Tìm kiếm</button>
                </form>
                <div className="row">
                    <div className="mb-4 col-md-9">
                        <div className="row">
                            <p className="ms-2 col-1 mt-2">All({data.length})</p>
                            <div className="col-6">
                                <button className="btn btn-primary rounded-pill ms-3" onClick={Add}>Thêm  +</button>
                                <button className="btn btn-danger rounded-pill ms-4">Xóa  -</button>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 ">
                        <select class="form-select w-100">
                            <option selected disabled hidden >Sắp xếp theo</option>
                            <option value="name" >Tên</option>
                            <option value="id">Mã khách hàng</option>
                            <option value="grade" >Điểm tích lũy</option>
                        </select>

                    </div>
                </div>
                <div className='table-responsive-lg '>
                    <table className='table '>
                        <thead>
                            <tr>
                                <th><input type="checkbox"></input></th>
                                <th>Ảnh</th>
                                <th>Mã thành viên</th>
                                <th>Họ và Tên</th>
                                <th>Ngày sinh</th>
                                <th>Điện thoại</th>
                                <th>Email</th>
                                <th>Điểm tích lũy</th>
                                <th>Trạng thái</th>
                                <th>Tùy chọn</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item) => {
                                    return (
                                        <>
                                            <tr>
                                                <td className="pt-3"><input type="checkbox" value={item.id}></input></td>
                                                <td><div>
                                                    <img src={item.avatar} />
                                                </div></td>
                                                <td className="pt-3">{item.id}</td>
                                                <td className="pt-3">{item.fullname}</td>
                                                <td className="pt-3">{item.birth}</td>
                                                <td className="pt-3">{item.phone}</td>
                                                <td className="pt-3">{item.email}</td>
                                                <td className="pt-3">{item.grade}</td>
                                                <td className="pt-3">{item.status}</td>
                                                <td>
                                                    <div className="row pt-2">
                                                        <div className="col-4 text-primary" data-bs-toggle="tooltip" title="Chỉnh sửa" style={{ cursor: "pointer" }}>
                                                            <BsPencilSquare size={20} />
                                                        </div>
                                                        {item.status == "Hoạt động" ?
                                                            <div className="col-4 text-danger" data-bs-toggle="tooltip" title="Cấm" style={{ cursor: "pointer" }}>
                                                                <BsFillPersonXFill size={20} />
                                                            </div>
                                                            : <div className="col-4 text-success" data-bs-toggle="tooltip" title="Bỏ cấm" style={{ cursor: "pointer" }}>
                                                                <BsFillPersonPlusFill size={20} />
                                                            </div>
                                                        }
                                                    </div>
                                                </td>

                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
                            
        </>
    )
}

export default User;