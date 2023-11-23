import { useContext, useRef, useState } from "react";
import { AuthContext } from "../contexts/userContext.tsx";
import Layout from "../layout/index.tsx";

function Dashboard() {
  const { auth } = useContext(AuthContext);
  const ref = useRef<HTMLDialogElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    if (ref.current) {
      ref.current.showModal();
    }
    setIsModalOpen(true);
  };
  const closeModal = () => {
    if (ref.current) {
      ref.current.close();
    }
    setIsModalOpen(false);
  };
  return (
    <Layout title={`Dashboard - ${auth?.user?.name}`}>
      {JSON.stringify(auth)}
      <button onClick={openModal}>Open Modal</button>
      <dialog ref={ref}>
        <button onClick={closeModal}>close</button>
      </dialog>
    </Layout>
  );
}

export default Dashboard;
