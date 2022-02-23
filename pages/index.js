import Head from "next/head";
import { useState } from "react";
import { HashLoader } from "react-spinners";
import useSWR from "swr";
import Comment from "../src/components/Comment/Comment";
import AddComment from "../src/components/AddComment/AddComment";
import Modal from "../src/components/Modal/Modal";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const [show, setShow] = useState(false);
  const { data, error } = useSWR("/api/comments", fetcher);
  if (error) return <div>failed to load</div>;

  const handleDelete = () => {
    setShow(!show);
  };

  return (
    <div>
      {!data ? (
        <div className="mt-5 flex min-h-screen flex-col items-center justify-center bg-Very-light-gray py-2">
          <HashLoader color="EB472" />
        </div>
      ) : (
        <div className=" flex min-h-screen flex-col items-center justify-center bg-Very-light-gray">
          <Head>
            <title>Comment Section</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="flex w-full flex-1 flex-col items-center justify-center text-center md:w-[40%]">
            <Modal show={show} setShow={setShow} key="modal" />
            <div className="mt-5 px-10">
              {data.comments.map((comment) => (
                <Comment
                  key={comment.id}
                  comment={comment}
                  currentUser={data.currentUser}
                  handleDelete={handleDelete}
                />
              ))}
              <AddComment isVisible="true" user={data.currentUser} />
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
