import Head from "next/head"

export default function Title({title=""}: {title?: string}) {
    const titleText = title.length > 0 ? `${title} | Aayush Aayron Deo` : "Aayush Aayron Deo"
    return <Head>
        <title>
            {titleText}
        </title>
    </Head>
}