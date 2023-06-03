import Navbar from "../components/Navbar";
import axios from "axios";
import {useForm} from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

const AddData = () => {
  
  const {register, handleSubmit, formState: {errors},} = useForm({
    defaultValues: {
        nama: "",
        kelas: "",
        prodi: "",
    },
    mode: "onBlur"});

    const navigate = useNavigate();

  const addSubmit = async (data) => {
    try {
        const response = await axios.post("http://localhost:9000/create", data, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: false,
        });
        console.log(response)
        navigate("/view")
    } catch (error) {
        console.error(error);
    }
  }
    return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit(addSubmit) } className="flex flex-col items-center justify-center w-[50vw] h-[80vh] text-lg shadow-md gap-4 ">
        <h1>Add Data</h1>
            {/* Nama */}
            <div className="flex flex-col gap-2">
                <label htmlFor="nama">Nama</label>
                <input type="text" id="nama" placeholder="masukan nama" 
                className="p-4 bg-slate-100 rounded-md w-[40vw]" 
                {...register("nama", {required: "nama harus diisi"})} />
                {errors.nama && (<span className="text-red-600 ">{errors.nama.message}</span>)}
            </div>

             {/* Kelas */}
             <div className="flex flex-col gap-2">
                <label htmlFor="kelas">Kelas</label>
                <input type="text" id="kelas" placeholder="masukan kelas" 
                className="p-4 bg-slate-100 rounded-md w-[40vw]" 
                {...register("kelas", {required: "Kelas harus diisi"})} />
                {errors.kelas && (<span className="text-red-600 ">{errors.kelas.message}</span>)}
            </div>

             {/* Prodi */}
             <div className="flex flex-col gap-2">
                <label htmlFor="prodi">Prodi</label>
                <input type="text" id="prodi" placeholder="masukan prodi" 
                className="p-4 bg-slate-100 rounded-md w-[40vw]" 
                {...register("prodi", {required: "prodi harus diisi"})} />
                {errors.prodi && (<span className="text-red-600 ">{errors.prodi.message}</span>)}
            </div>

            <button className="  w-[10vw] h-[5vh] mt-10 text-white bg-blue-500 font-semibold hover:bg-blue-400">Add</button>
        </form>
      </div>
    </>
  )
}

export default AddData