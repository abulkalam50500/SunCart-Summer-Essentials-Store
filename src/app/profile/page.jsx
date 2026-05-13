"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;



  return (
    <div className="container mx-auto flex justify-center">
      <div className="">
        <div className="card card-side bg-base-100 shadow-sm">
          <figure>
           {
            user?.image ?<> <Image src={user?.image} width={100} height={100} alt="avatar" priority /></>:<></>
           }
          </figure>
          <div className="card-body">
            <h2 className="card-title">{user?.name}</h2>
            <p>{user?.email}</p>
            <div className="card-actions justify-end">
              <Link href={'/profile-update'} className="btn btn-primary">Edit</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
