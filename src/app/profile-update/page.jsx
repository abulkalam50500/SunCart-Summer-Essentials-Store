"use client"
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import { Bounce, toast } from "react-toastify";

const ProfileUpdate = () => {

    const router = useRouter();

    const { data: session,isPending } = authClient.useSession();
    const user = session?.user;


    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    values:{
        name: user?.name || "",
      photo_url: user?.image || "",
    }
  })

  const onSubmit =async (data) => {

     const {photo_url,name} = data;

      const {data:res,error} = await authClient.updateUser({
    image: photo_url,
    name: name,
    callbackURL: "/",
});

 if(error){
    
    toast.success(`❌ ${error.message}`, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
  
 }
  
   if(res){
    toast.success(`🦄 Successfully Update`, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});

  router.push("/")

   }  
    
  }


  return (
    <div className="container mx-auto mt-7 flex justify-center">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[300px] md:w-[400px] border p-4">
          <legend className="fieldset-legend text-[20px]">Profile Update</legend>

          <label className="label">Photo Url</label>
          <input type="text"  name="photo_url" {...register("photo_url", { required: true })} className="input w-full" placeholder="photo url" />
          {errors.photo_url && <span className="text-red">This field is required</span>}
          <label className="label">Name</label>
          <input type="text"  name="name" className="input w-full" {...register("name", { required: true })} placeholder="name" />
          {errors.name && <span className="text-red">This field is required</span>}
          <button className="btn btn-neutral mt-4">Update</button>
        </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;
