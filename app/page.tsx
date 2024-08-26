import PatientForm from "@/components/forms/PatientForm";
// import PasskeyModal from "@/components/PasskeyModal";
import Image from "next/image";
import Link from "next/link";
import { PasskeyModal } from "@/components/PasskeyModal";

export default function Home({ searchParams }: SearchParamProps) {

  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}
      {/* TODO: OTP Verification | PasskeyModal */}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="patient"
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit"
          />
          </Link>
          <PatientForm/>

          <div className="text-14-regular m-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 MedSyncro
            </p>
            <Link href="/?admin=true" className="text-blue-400">
              Admin
            </Link>
          </div>
            <p className="-mt-14 text-xs font-light flex justify-center items-center text-dark-600 xl:text-left">
              Powered by Blectrix
            </p>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding.jpg"
        height={1000}
        width={1000}
        alt="Onboarding Image"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
