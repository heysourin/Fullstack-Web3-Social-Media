// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
// import { useState, useEffect } from "react";
// const inter = Inter({ subsets: ["latin"] });
// async function fetchPost() {
//   //fetch from my database the post
//   return {
//     title: "My post",
//     content: "My post content",
//     authorId: 1,
//   };
// }

// async function fetchAuthor(id) {
//   //fetch from my database the author
//   //use the id that we passes in from the previous query
//   return {
//     name: "John Doe",
//   };
// }

// export default function Home() {
//   const [post, setPost] = useState(null);
//   const [author, setAuthor] = useState(null);

//   useEffect(() => {
//     (async () => {
//       const post = await fetchPost();
//       setPost(post);
//     })();
//   }, []);

//   useEffect(() => {
//     async () => {
//       if (!post) return;

//       const author = await fetchAuthor(post.authorId);
//       setAuthor(author);
//     };
//   }, [post]);
//   return (
//     <>
//       <h1>Hey there</h1>
//     </>
//   );
// }

import styles from "@/styles/Home.module.css";
import {
  PublicationMainFocus,
  PublicationSortCriteria,
  useExplorePublicationsQuery,
} from "@/graphql/generated";

export default function Home() {
  const { isLoading, error, data } = useExplorePublicationsQuery(
    {
      request: {
        sortCriteria: PublicationSortCriteria.Latest,
      },
    },
    {
      // Don't refetch the user comes back
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  console.log(data);

  if (error) {
    return <div className={styles.container}>Error...</div>;
  }

  if (isLoading) {
    return <div className={styles.container}>Loading...</div>;
  }

  data?.explorePublications.items[0].metadata;
}
