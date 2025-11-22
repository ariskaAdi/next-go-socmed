import dynamic from "next/dynamic";

const RegisterPage = dynamic(() => import("@/features/auth/register"), {
  ssr: true,
});

const ServerRegisterPage = async () => {
  return <RegisterPage />;
};

export default ServerRegisterPage;
