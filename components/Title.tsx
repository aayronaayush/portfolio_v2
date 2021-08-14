import Head from "next/head";

export default function Title({ title = "" }: { title?: string }) {
  const titleText =
    title.length > 0 ? `${title} | Aayush Aayron Deo` : "Aayush Aayron Deo";
  return (
    <Head>
      <title>{titleText}</title>
      <meta name="description" content="Aayush Aayron Deo is a full stack web and mobile application developer. Currently Aayush is a senior at NYU Abu Dhabi. Aayush’s development stack includes, ReactJS, NextJS, MongoDB, Firebase, Google Cloud, React Native and ExpressJS among others" />
      <meta name="keywords" content="web developer, aayush aayron deo, reactjs, react native, expressjs, freelance web developer, mongodb, firebase, google cloud, aws, nextjs, MERN stack, mobile app developer, devops, youtube tutorials" />
      <meta property="og:image" content="https://codingthesmartway.com/wp-content/uploads/2019/01/mern_logo.png" />
    </Head>
  );
}
